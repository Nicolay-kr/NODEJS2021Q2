const User = require('../resources/users/user.model');
const Board = require('../resources/boards/board.model');
const Task = require('../resources/tasks/task.model');

const db = {
  Users: [],
  Boards: [],
  Tasks: [],
  fixUsersStructure: (user) => {
    if (user) {
      db.Tasks.filter((task) => task).forEach((task) => {
        task.userId = task.userId === user.id ? null : task.userId;
      });
    }
  },
  fixBoardsStructure: (board) => {
    if (board) {
      db.Tasks.filter((task) => task && task.board.id).forEach(
        (task) => (db.Tasks[db.Tasks.indexOf(task)] = undefined)
      );
    }
  },
  fixTasksStructure: () => {},
};

// init DB

(() => {
  for (let i = 0; i < 3; i += 1) {
    db.Users.push(new User());
  }
  const board = new Board({ userId: db.Users[0].id });
  db.Boards.push(board);
  db.Tasks.push(
    new Task({ boardId: board.id }),
    new Task({ boardId: board.id })
  );
})();
const getAllEntities = (tableName) => db[tableName].filter((entity) => entity);

// const getEntity = (tableName, id) =>
//   db[tableName].filter((entity) => {
//     // console.log(entity.id)
//     if (entity.id === id) {
//       // console.log(entity)
//       return entity;
//     }
//   });

const getEntity = (tableName, id) => {
  const entities = db[tableName]
    .filter((entity) => entity)
    .filter((entity) => entity.id === id);
  return entities[0];
};

const removeEntity = (tableName, id) => {
  const entity = getEntity(tableName, id);
  if (entity) {
    db[`fix${tableName}Structure`](entity);
    const index = db[tableName].indexOf(entity);
    db[tableName] = [
      ...db[tableName].slice(0, index),
      ...(db[tableName].length > index + 1
        ? db[tableName].slice(index + 1)
        : []),
    ];
  }
  return entity
};

const saveEntity = (tableName, entity) => {
  db[tableName].push(entity);
  return getEntity(tableName, entity.id);
};
const updateEntity = (tableName, id, entity) => {
  const oldEntity = getEntity(tableName, id);
  console.log("id",id)
  console.log("new",entity)
  console.log("old",oldEntity)
  if (oldEntity) {
    db[tableName][db[tableName].indexOf(oldEntity)] = { id,...entity };
    // console.log(entity)
  }
  return getEntity(tableName, id);
};

module.exports = { getAllEntities, getEntity, saveEntity, updateEntity,removeEntity };
