import { ChangeDetectionStrategy, Component, computed, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User, UserService } from '../user.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-delete-user',
  imports: [CommonModule],
  templateUrl: './delete-user.html',
  styleUrl: './delete-user.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeleteUser implements OnInit {
  private userService = inject(UserService);

  users = signal<User[]>([]);
  selectedIds = signal<Set<number>>(new Set());
  isDeleting = signal(false);

  hasSelection = computed(() => this.selectedIds().size > 0);
  allSelected = computed(
    () => this.users().length > 0 && this.selectedIds().size === this.users().length
  );

  ngOnInit(): void {
    this.loadUsers();
  }

  isSelected(id: number): boolean {
    return this.selectedIds().has(id);
  }

  toggleUser(id: number): void {
    this.selectedIds.update(set => {
      const next = new Set(set);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  toggleAll(): void {
    if (this.allSelected()) {
      this.selectedIds.set(new Set());
    } else {
      this.selectedIds.set(new Set(this.users().map(u => u.id)));
    }
  }

  deleteSelected(): void {
    const ids = [...this.selectedIds()];
    this.isDeleting.set(true);
    forkJoin(ids.map(id => this.userService.deleteUser(id))).subscribe({
      next: () => {
        this.selectedIds.set(new Set());
        this.loadUsers();
        this.isDeleting.set(false);
      },
      error: (err) => {
        console.error('Error deleting users:', err);
        this.isDeleting.set(false);
      }
    });
  }

  private loadUsers(): void {
    this.userService.getUsers().subscribe(users => this.users.set(users));
  }
}
