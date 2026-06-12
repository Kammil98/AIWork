---
name: run-demo-app
description: Start and manage the AI Work Demo application, including the Spring Boot backend and Angular frontend. Use when the user wants to run, test, or troubleshoot the application's execution.
---

# Run Demo App

This skill provides instructions and workflows for starting and managing the AI Work Demo application.

## Quick Start

To start both the backend and frontend simultaneously, use the following sequence:

1. **Backend**: `cd demo && ./mvnw spring-boot:run`
2. **Frontend**: `cd ai-demo-frontend && npm start`

## Backend Management

The backend is a Spring Boot application running on Java 21.

- **Start command**: `./mvnw spring-boot:run`
- **Default Port**: 8080
- **Database**: H2 (in-memory)
- **H2 Console**: `http://localhost:8080/h2-console`
  - **JDBC URL**: `jdbc:h2:mem:agentdb`
  - **User**: `sa`
  - **Password**: (empty)

## Frontend Management

The frontend is an Angular 21 application.

- **Start command**: `npm start`
- **Default Port**: 4200
- **Main URL**: `http://localhost:4200`

## Troubleshooting

### CORS Errors
If you see CORS errors in the browser console:
- Ensure `WebConfig.java` in the backend is correctly configured to allow `http://localhost:4200`.
- Verify the backend has been restarted after any configuration changes.

### Port Conflicts
If a port is already in use:
- Check for running processes on 8080 (backend) or 4200 (frontend).
- Kill the process: `lsof -i :<port>` then `kill -9 <PID>`.

### Data Not Appearing
- Ensure the backend is running and the `/api/users` endpoint returns data.
- Check the browser's Network tab for failed requests.
