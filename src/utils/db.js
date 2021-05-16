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
  const board = new Board();
  db.Boards.push(board);
  db.Tasks.push(
    new Task({ boardId: board.id }),
    new Task({ boardId: board.id })
  );
})();
const getAllEntities = (tableName) => db[tableName].filter((entity) => entity);
module.exports = { getAllEntities };
