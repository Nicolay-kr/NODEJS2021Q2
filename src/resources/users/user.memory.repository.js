const DB = require("../../utils/db")
// const NOT_FOUND_ERROR = require("")
const TABLE_NAME = "Users"

const getAll = async () => DB.getAllEntities(TABLE_NAME);
// const get = async id => {
//   const user = await DB.getEntity(TABLE_NAME,id);
//   if(!user){
//     // throw new NOT_FOUND_ERROR = (`Couldn't find a user with id: ${id}`)
//   }
//   return user
// };

module.exports = { getAll };
