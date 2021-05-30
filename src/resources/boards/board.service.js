const boardRepo = require('./board.memory.repository');

/**
 * call the function getAll() from board.memory.repository.js
 * @returns {fuction} return call of function getAll() 
 */
const getAll = () => boardRepo.getAll();
/**
 * call the function get(id) from board.memory.repository.js
 * @param {String} id board id
 * @returns {fuction} return call of function get(id) from board.memory.repository.js
 */
const get = (id) => boardRepo.get(id);
/**
 * call the function remove(board) from board.memory.repository.js
 * @param {String} id board id
 * @returns {fuction} return call of function remove(board) from board.memory.repository.js 
 */
const remove = (board) => boardRepo.remove(board);
/**
 * call the function save(board) from board.memory.repository.js
 * @param {String} id board id
 * @returns {fuction} return call of function save(board) from board.memory.repository.js 
 */
const save = (board) => boardRepo.save(board);
/**
 * call the function update(id,board) from board.memory.repository.js
 * @param {String} id id of board
 * @param {Object} board object of board with updated data
 * @returns return call of function update(id,board) from board.memory.repository.js
 */
const update = (id, board) => boardRepo.update(id, board);

module.exports = { getAll, get, remove, save, update };
