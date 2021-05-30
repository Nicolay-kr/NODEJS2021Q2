const DB = require('../../utils/db');
// const NOT_FOUND_ERROR = require("")
const TABLE_NAME = 'Users';

/**
 * call the function getAllEntities(TABLE_NAME) from db.js which return object with all users
 * @returns {fuction} return call of function DB.getAllEntities(TABLE_NAME) which return object with all users
 */
const getAll = async () => 
  // console.log(typeof DB.getAllEntities(TABLE_NAME));
   DB.getAllEntities(TABLE_NAME)
;
/**
 * call the function getUserById(id) from db.js which return object of define user
 * @param {String} id user id
 * @returns {fuction} return call of function DB.getUserById(id) which return object of the define user
 */
const get = async (id) => {
  const user = await DB.getUserById(id);
  return user;
};
/**
 * call the function removeUser(id) from db.js which delete define user and his tasks from DB if he is in DB
 * @param {String} id user id
 * @returns {fuction} return call of function DB.removeUser(id) which delete define user 
 * and his task from DB if he is there, which return true if user is in DB and false if he isn't. 
 */
const remove = async (id) => DB.removeUser(id);

/**
 * call the function saveUser(user) from db.js which save object of new user to DB
 * @param {Object} user object new user
 * @returns {fuction} return call of function DB.saveUser(user) which save new user 
 */
const save = async (user) => DB.saveUser(user);
/**
 * call the function updateUser(id, user) from db.js which update object of one define user in DB
 * @param {String} id id of user
 * @param {Object} user object of user with updated data
 * @returns return call of function DB.updateUser(id, user) which update define user 
 */
const update = async (id, user) => DB.updateUser(id, user);

module.exports = { getAll, get, remove, save, update };
