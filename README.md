# Project: Task Manager (CRUD Application)

## ✅ Requirements

### 📦 Backend (ASP.NET Core API):
- Create a .NET Core WebAPI project
- Build CRUD operations for "Task" entity:
  - ID
  - Title
  - Description
  - Completed (boolean)
- Use Entity Framework with PostgreSQL || MySQL || MSSQL || SQLite
- Enable CORS
- Push code to a public GitHub repository

### 🌐 Frontend App:
Use a frontend framework based on the last digit of the student ID:

| Last Digit | Framework |
|------------|-----------|
| 0, 2, 4    | Angular   |
| 1, 3, 5    | React     |
| 6, 9       | VueJS     |
| 7, 8       | Svelte    |

Must implement:
- Fetching tasks from the API
- Listing, creating, updating, deleting tasks
- Simple UI (Bootstrap, Tailwind or Material allowed)

### 🐳 Docker Setup:
- Create Dockerfile for backend and frontend
- Create docker-compose.yml to simulate production
- Must run using docker-compose up

### 📁 Expected GitHub Repo Structure
Github repository name: tt4-final-exam-simulation
```
/
├── backend/
│   ├── Dockerfile
│   └── ...
├── frontend/
│   └── ...
├── default.conf
├── Dockerfile
├── docker-compose.yml
├── README.md
```

### 📄 Extra Requirement – Project README
The README.md file in the GitHub repository must contain this final exam (both parts I and II).

Students must highlight their selected answers in the multiple-choice questions by surrounding the chosen option with ** (markdown bold).

Example:
1. What is Docker?  
   - A) A relational database  
   - **B) A container platform for creating and managing environments**  
   - C) A web server  
   - D) A frontend framework  

scroll up, click in the button Raw, ctrl + A, ctrl + C (copy the content) and PASTE in your README.md file