const express = require('express');
const { getAllTasks, getTask, createTask, updateTask, deleteTask, validateTask, getTasksByPriority } = require('../controllers/task-manager');

const router = express.Router();

router.get('/', getAllTasks);
router.get('/:id', getTask);
router.get('/priority/:level', getTasksByPriority);
router.post('/', validateTask,createTask);
router.put('/:id', validateTask,updateTask);
router.delete('/:id', deleteTask);

module.exports = router;