const DB = require("../../utils/db")
// const NOT_FOUND_ERROR = require("")
const TABLE_NAME = "Boards"

const getAll = async () => DB.getAllEntities(TABLE_NAME);
// const get = async id => {
//   const board = await DB.getEntity(TABLE_NAME,id);
//   if(!board){
//     // throw new NOT_FOUND_ERROR = (`Couldn't find a user with id: ${id}`)
//   }
//   return board
// };

module.exports = { getAll };