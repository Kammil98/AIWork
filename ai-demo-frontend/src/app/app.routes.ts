import { Routes } from '@angular/router';
import { UserList } from './user-list/user-list';
import { AddUser } from './add-user/add-user';
import { DeleteUser } from './delete-user/delete-user';

export const routes: Routes = [
  { path: 'users', component: UserList },
  { path: 'add-user', component: AddUser },
  { path: 'delete-user', component: DeleteUser },
  { path: '', redirectTo: '/users', pathMatch: 'full' }
];
