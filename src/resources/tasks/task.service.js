const tasksRepo = require('./task.memory.repository');
/**
 * call the function getAll() from task.memory.repository.js
 * @returns {fuction} return call of function getAll() 
 */
const getAll = () => tasksRepo.getAll();
/**
 * call the function get(id) from task.memory.repository.js
 * @param {String} id task id
 * @returns {fuction} return call of function get(id) from task.memory.repository.js
 */
const get = (id) => tasksRepo.get(id);
/**
 * call the function remove(task) from task.memory.repository.js
 * @param {String} id task id
 * @returns {fuction} return call of function remove(task) from task.memory.repository.js 
 */
const remove = (task) => tasksRepo.remove(task);
/**
 * call the function save(task) from task.memory.repository.js
 * @returns {fuction} return call of function save(task,boardId) from task.memory.repository.js 
 */
const save = (task) => tasksRepo.save(task);
/**
 * call the function update(id,task) from task.memory.repository.js
 * @param {String} id id of task
 * @param {Object} task object of task with updated data
 * @returns return call of function update(id,task) from task.memory.repository.js
 */
const update = (id, task) => tasksRepo.update(id, task);

module.exports = { getAll, get, remove, save, update };
