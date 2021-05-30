const usersRepo = require('./user.memory.repository');

/**
 * call the function getAll() from user.memory.repository.js
 * @returns {fuction} return call of function getAll() 
 */
const getAll = () => usersRepo.getAll();
/**
 * call the function get(id) from user.memory.repository.js
 * @param {String} id user id
 * @returns {fuction} return call of function get(id) from user.memory.repository.js
 */
const get = (id) => usersRepo.get(id);
/**
 * call the function remove(user) from user.memory.repository.js
 * @param {String} id user id
 * @returns {fuction} return call of function remove(user) from user.memory.repository.js 
 */
const remove = (user) => usersRepo.remove(user);
/**
 * call the function save(user) from user.memory.repository.js
 * @param {String} id user id
 * @returns {fuction} return call of function save(user) from user.memory.repository.js 
 */
const save = (user) => usersRepo.save(user);
/**
 * call the function update(id,user) from user.memory.repository.js
 * @param {String} id id of user
 * @param {Object} user object of user with updated data
 * @returns return call of function update(id,user) from user.memory.repository.js
 */
const update = (id, user) => usersRepo.update(id, user);

module.exports = { getAll, get, remove, save, update };
