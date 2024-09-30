Overview:
# Task Manager API
A backend application that utilizes in-memory storage to manage daily tasks. Features include sorting, priority-based filtering, and input validation to ensure data integrity.

## Setup Instructions
1. **Clone the project locally:**
    git clone <repository-url>
2. **Install the node dependencies:**
    npm install
3. **Fix vulnerabilities:**
    npm audit fix
4. **Start the server:**
    node app.js
## Features
- **Sorting:** Organize tasks based on different criteria.
- **Priority-based Filtering:** Filter tasks by their priority levels.
- **Input Validation:** Ensure data integrity with robust validation mechanisms.
## Usage
After starting the server, you can interact with the API using tools like Postman or cURL to manage your tasks.


You can also use the Postman collection file named `Task Manager App.postman_collection.json` for easier API testing and interaction.
# API Documentation

## Endpoints
### 1. `GET /tasks`
Fetches a list of all tasks.
**Response:**
- `200 OK`: Returns an array of tasks objects.

**Testing:**
- Use a tool like Postman or curl to send a GET request to `/tasks`.
- Example: `curl -X GET http://localhost:3000/tasks`

### 2. `GET /tasks/:id`
Fetches a single task by ID.
**Parameters:**
- `id` (string): The ID of the task to fetch.
**Response:**
- `200 OK`: Returns the task object.
- `404 Not Found`: If the task with the specified ID does not exist.
**Testing:**
- Use a tool like Postman or curl to send a GET request to `/tasks/:id`.
- Example: `curl -X GET http://localhost:3000/api/tasks/1`

### 3. `POST /tasks`
Creates a new task.
**Request Body:**
- `Title` (string): The name of the task.
- `Description` (string): The description of the task.
- `Completed` (Boolean): The status of task.
**Response:**
- `201 Created`: Returns the created task object.
- `400 Bad Request`: If the request body is invalid.
**Testing:**
- Use a tool like Postman or curl to send a POST request to `/tasks` with a JSON body.
- Example: 
    ```sh
    curl -X POST http://localhost:3000/tasks \
    -H "Content-Type: application/json" \
    -d '{"title": "Set up environment",
        "description": "Install Node.js, npm, and git",
        "completed": true }'
    ```

### 4. `PUT /tasks/:id`
Updates an existing task by ID.
**Parameters:**
- `id` (string): The ID of the task to update.
**Request Body:**
- `Title` (string): The new name of the task.
- `Description` (string): The new email of the task.
- `Completed` (Boolean): The new status of task.
**Response:**
- `200 OK`: Returns the updated task object.
- `400 Bad Request`: If the request body is invalid.
- `404 Not Found`: If the task with the specified ID does not exist.
**Testing:**
- Use a tool like Postman or curl to send a PUT request to `/tasks/:id` with a JSON body.
- Example: 
    ```sh
    curl -X PUT http://localhost:3000/api/tasks/1 \
    -H "Content-Type: application/json" \
    -d '{"title": "Set up environment",
        "description": "Install Node.js, npm, and git",
        "completed": true }'
    ```

### 5. `DELETE /tasks/:id`
Deletes a task by ID.
**Parameters:**
- `id` (string): The ID of the task to delete.
**Response:**
- `204 No Content`: If the task was successfully deleted.
- `404 Not Found`: If the task with the specified ID does not exist.
**Testing:**
- Use a tool like Postman or curl to send a DELETE request to `/tasks/:id`.
- Example: `curl -X DELETE http://localhost:3000/tasks/1`