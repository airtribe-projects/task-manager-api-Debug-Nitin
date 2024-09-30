// Mock data for tasks
let tasks = [
    {
        "id": 1,
        "title": "Set up environment",
        "description": "Install Node.js, npm, and git",
        "completed": true
    }
// {
//     id: 1,
//     title: 'Learn Ruby',
//     description: 'Learn Ruby by building a simple web application',
//     priority: 'High',
//     completed: true
// },{
//     id: 3,
//     title: 'Learn Node.js',
//     description: 'Learn Node.js by building a simple REST API',
//     priority: 'low',
//     completed: true
// }, {
//     id: 2,
//     title: 'Learn React',
//     description: 'Learn React by building a simple CRUD application',
//     priority: 'medium',
//     completed: false
// }
];

let deletedIds = [];

//middleware to check input is valid for creating and updating tasks
const validateTask = (req, res, next) => {
    const taskDetails = req.body;
    if (!taskDetails.title || !taskDetails.description || typeof taskDetails.completed !== 'boolean') {
        return res.status(400).json({ error: 'Invalid task details' });
    }
    next();
}

// Get all tasks
const getAllTasks = (req, res) => {
    const status = req.query.completed;
    if (status !== undefined) {
        const tasksByStatus = tasks.filter(task => task.completed === JSON.parse(status));
        return res.status(200).json(tasksByStatus);
    }
    const sortedTasks = tasks.sort((a, b) => a.id - b.id);
    res.status(200).json(sortedTasks);   
};

// Get all tasks by priority
const getTasksByPriority = (req, res) => {
    const  level  = req.params.level;
    const tasksByPriority = tasks.filter(task => task.priority.toLowerCase() === level.toLowerCase());
    if (tasksByPriority.length === 0) {
        return res.status(404).json({ error: 'Tasks not found' });
    }
    res.status(200).json(tasksByPriority);
};

// Get a single task by ID
const getTask = (req, res) => {
    const  id  = parseInt(req.params.id);
    const task = tasks.find(task => task.id === parseInt(id));
    if (!task) {
        return res.status(404).json({ error: 'Task not found' });
    }
    res.status(200).json(task);
};

// Create a new task
const createTask = (req, res) => {
    const task = req.body;
    if(deletedIds.length > 0){
        task.id = deletedIds[0];
        deletedIds.shift();
    }
    else{
        task.id = tasks.length + 1;
    }
    tasks.push(task);
    res.status(201).json({ message: 'Task created' });
};

// Update an existing task by ID
const updateTask = (req, res) => {
    const id = parseInt(req.params.id);
    let taskIndex = tasks.findIndex(task => task.id === id);
    if (taskIndex === -1) {
        return res.status(404).json({ error: 'Task not found' });
    }else{
        const updatedTask = req.body;
        Object.assign(tasks[taskIndex], updatedTask);
        res.status(200).json({message: 'Task updated'});
    }
};

// Delete a task by ID
const deleteTask = (req, res) => {
    const id = parseInt(req.params.id);
    const task = tasks.find(task => task.id === id);
    if (!task) {
        return res.status(404).json({ error: 'Task not found' });
    }
    tasks = tasks.filter(task => task.id !== id);
    deletedIds.push(id);
    res.status(200).json({message: 'Task deleted'});    
};

module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask,
    validateTask,
    getTasksByPriority
};