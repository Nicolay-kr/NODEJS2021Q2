const DB = require('../../utils/db');
const Task = require('./task.model');
// const NOT_FOUND_ERROR = require("")
const TABLE_NAME = 'Tasks';

const getAll = async () => (boardId) =>{
    console.log(DB[TABLE_NAME ].filter((element) => element.boardId === boardId))
    return DB[TABLE_NAME ].filter((element) => element.boardId === boardId);

};
// const get = async id => {
//   const task = await DB.getEntity(TABLE_NAME,id);
//   if(!task){
//     // throw new NOT_FOUND_ERROR = (`Couldn't find a user with id: ${id}`)
//   }
//   return task
// };

module.exports = { getAll };
