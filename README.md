# AI Work Demo Project

This project consists of a Spring Boot backend and an Angular 21 frontend. It allows you to view a list of users from an H2 database and add new users via a form.

## Prerequisites

*   **Java 21** (Required for the backend)
*   **Node.js 20+** (Required for the frontend)
*   **Maven** (Optional, using `./mvnw` wrapper)

---

## Getting Started

### 1. Start the Backend (Spring Boot)

Open a terminal in the `demo` directory:

```bash
cd demo
./mvnw spring-boot:run
```

*   **URL:** `http://localhost:8080`
*   **API Endpoints:** `http://localhost:8080/api/users`
*   **H2 Console:** `http://localhost:8080/h2-console`
    *   **JDBC URL:** `jdbc:h2:mem:agentdb`
    *   **Username:** `sa`
    *   **Password:** (leave blank)

### 2. Start the Frontend (Angular)

Open a new terminal in the `ai-demo-frontend` directory:

```bash
cd ai-demo-frontend
npm install
npm start
```

*   **URL:** `http://localhost:4200`

---

## Application Features

### User List
Accessible at `http://localhost:4200/users`. Displays all users currently stored in the H2 database. On startup, the database is seeded with three initial users (Alice, Bob, Charlie).

### Add User
Accessible at `http://localhost:4200/add-user`. Contains a reactive form to create new users:
*   **Username:** Mandatory field.
*   **Email:** Optional field. Must follow a valid email format.

On successful submission, the application redirects you to the User List page to see the updated data.

### Remove Users
Accessible at `http://localhost:4200/delete-user`. Displays all users with a checkbox next to each row. Select one or more users and click **Delete selected** to permanently remove them from the database. A **Select all** checkbox in the header selects or deselects all rows at once.

---

## Technical Details

*   **Backend:** Java 21, Spring Boot 4.0.6, Spring Data JPA, H2 Database.
*   **Frontend:** Angular 21.2.0, TypeScript, RxJS, Reactive Forms.
*   **Communication:** REST API with CORS configured to allow requests from `http://localhost:4200`.
*   **Reactive Flow:** The frontend uses Observables and the modern Angular `@if`/`@for` control flow syntax.

---

## AI Agent Integration

This project includes a specialized AI Skill to help future agents manage the application.

### Using Skills

Skills are located in `.github/skills/`. Each skill is a directory containing a `SKILL.md` file with domain-specific instructions for AI agents.

Currently available skills:
- `run-demo-app` — instructions for starting, managing, and troubleshooting this application

### Adding a New Skill

1. Create a new directory under `.github/skills/` named after your skill:
    ```bash
    mkdir -p .github/skills/your-skill-name
    ```
2. Inside it, create the following structure:
    ```
    .github/skills/your-skill-name/
    ├── SKILL.md          # Required — main entry point with instructions for the agent
    ├── steps/            # Optional — sub-step files for multi-step skills (sub files like SKILL.md)
    ├── assets/           # Optional — images, diagrams, or other static resources
    ├── references/       # Optional — documentation, API specs, guidelines
    └── scripts/          # Optional — helper scripts the agent can reference or execute
    ```
3. `SKILL.md` must start with a YAML frontmatter block followed by the skill content:
    ```markdown
    ---
    name: your-skill-name
    description: Brief description of what this skill does and when to use it.
    ---

    # Your Skill Name

    Instructions and context for the agent...
    ```

The agent will automatically discover and use skills placed in this directory.
