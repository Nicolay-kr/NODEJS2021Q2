const DB = require('../../utils/db');

const TABLE_NAME = 'Tasks';
/**
 * call the function getAllEntities(TABLE_NAME) from db.js which return object with all tasks
 * @returns {fuction} return call of function DB.getAllEntities(TABLE_NAME) which return object with all tasks
 */
const getAll = async () => DB.getAllEntities(TABLE_NAME);
/**
 * call the function getTaskById(id) from db.js which return object of define task
 * @param {String} id task id
 * @returns {fuction} return call of function DB.gettaskById(id) which return object of the define task
 */
const get = async (id) => DB.getTaskById(id);
/**
 * call the function removeTask(id) from db.js which delete define task and his tasks from DB if he is in DB
 * @param {String} id task id
 * @returns {fuction} return call of function DB.removetask(id) which delete define task 
 */
const remove = async (id) => DB.removeTask(id);
/**
 * call the function savetask(task) from db.js which save object of new task to DB
 * @param {Object} task object new task
 * @returns {fuction} return call of function DB.savetask(task) which save new task 
 */
const save = async (task) => DB.saveTask(task);
/**
 * call the function updatetask(id, task) from db.js which update object of one define task in DB
 * @param {String} id id of task
 * @param {Object} task object of task with updated data
 * @returns return call of function DB.updatetask(id, task) which update define task 
 */
const update = async (id, task) => DB.updateTask(id, task);

module.exports = { getAll, get, remove, save, update };

