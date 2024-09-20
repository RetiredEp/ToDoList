

```markdown
# To-Do List Application

A simple to-do list application built with **Node.js**, **Express.js**, and **PostgreSQL**. This app allows users to add, view, and delete tasks, all while persisting the data in a PostgreSQL database.

## Features
- Add new tasks
- View all tasks
- Delete tasks

## Technologies Used
- **Node.js**
- **Express.js** for server-side routing
- **PostgreSQL** for database management
- **EJS** as the templating engine
- **Body-parser** for parsing request bodies

## Getting Started

### Prerequisites
Make sure you have the following installed:
- **Node.js**
- **PostgreSQL**

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/todo_list.git
   ```
2. Navigate to the project directory:
   ```bash
   cd todo_list
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Database Setup
1. Create a PostgreSQL database:
   ```bash
   psql -U postgres
   CREATE DATABASE your_database_name;
   \c your_database_name
   ```
2. Create a table for tasks:
   ```sql
   CREATE TABLE tasks (
       id SERIAL PRIMARY KEY,
       task VARCHAR(255) NOT NULL
   );
   ```

3. Update the database credentials in `index.js`:
   ```js
   const db = new pg.Client({
       user: "your_username",
       password: "your_password",
       host: "localhost",
       database: "your_database_name",
       port: 5432
   });
   ```

### Running the Application
1. Start the server:
   ```bash
   npm start
   ```
2. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

### Routes

- `GET /`  
  Displays all tasks from the database.

- `POST /add`  
  Adds a new task to the to-do list.

- `POST /delete`  
  Deletes a task from the to-do list by its ID.

## Project Structure
```
.
├── public              # Static files (CSS, images, etc.)
├── views
│   └── index.ejs       # Main view file
├── index.js            # Main server file
├── package.json        # Project metadata and dependencies
└── README.md           # Project documentation
```

## License
This project is licensed under the ISC License.
```
