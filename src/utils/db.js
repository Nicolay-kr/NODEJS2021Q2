const User = require('../resources/users/user.model');
const Board = require('../resources/boards/board.model');
const Task = require('../resources/tasks/task.model');

const db = {
  Users: [],
  Boards: [],
  Tasks: [],
};

// init DB

(() => {
  for (let i = 0; i < 3; i += 1) {
    db.Users.push(new User());
  }
  db.Boards.push(new Board());
  db.Tasks.push(new Task());
})();

// all

/**
 * Returns array  of all elements one DB field
 * @param {String} tableName  name of DB field
 * @returns {Array} array of elements the define DB field
 */
const getAllEntities = (tableName) => db[tableName];

// Users
/**
 * return object of user with define id
 * @param {String} id string id of user
 * @returns {Object} object of user with define id
 */
const getUserById = (id) => db.Users.filter((user) => user.id === id)[0];

/**
 * create new user and save him to DB
 * @param {Object} user object of new user 
 * @returns {Object} return object of new user
 */
const saveUser = (user) => {
  console.log(typeof user)
  const newUser = new User(user);
  db.Users.push(newUser);
  return newUser;
};
/**
 * update object of existed user and return object of user with update data
 * @param {String} id user id
 * @param {*} userData  object of user with new parametrs
 * @returns {Object} return object of user with update data
 */
const updateUser = (id, userData) => {
  if (!db.Users.some((user) => user.id === id)) {
    return undefined;
  }
  db.Users = db.Users.filter((user) => user.id !== id);
  db.Users.push({ id, ...userData });
  return { id, ...userData };
};
/**
 * delete the defined user from DB and change the user.id field of elements of field Task of DB
 * @param {String} id user id
 * @returns {Boolen} returns true if user is in DB and false if it isn't
 */
const removeUser = (id) => {
  if (!db.Users.some((user) => user.id === id)) {
    return false;
  }
  db.Users = db.Users.filter((user) => user.id !== id);

  db.Tasks.forEach((task) => {
    const currentTask = task;
    if (currentTask.userId === id) {
      currentTask.userId = null;
    }
  });
  return true;
};

// Boards

const getBoardById = (id) => db.Boards.filter((board) => board.id === id)[0];

const saveBoard = (board) => {
  const newBoard = new Board(board);
  db.Boards.push(newBoard);
  return newBoard;
};

const updateBoard = (id, boardData) => {
  if (!db.Boards.some((board) => board.id === id)) {
    return undefined;
  }
  db.Boards = db.Boards.filter((board) => board.id !== id);
  db.Boards.push({ id, ...boardData });
  return { id, ...boardData };
};

const removeBoard = (id) => {
  if (!db.Boards.some((board) => board.id === id)) {
    return false;
  }
  db.Boards = db.Boards.filter((board) => board.id !== id);
  db.Tasks = db.Tasks.filter((task) => task.boardId !== id);
  return true;
};

// Tasks

const getTaskById = (id) => db.Tasks.filter((task) => task.id === id)[0];

const saveTask = (task) => {
  // console.log("task--->"+task);
  const newTask = new Task(task);
  db.Tasks.push(newTask);
  return newTask;
};

const updateTask = (id, taskData) => {
  if (!db.Tasks.some((task) => task.id === id)) {
    return undefined;
  }
  db.Tasks = db.Tasks.filter((task) => task.id !== id);
  db.Tasks.push({ id, ...taskData });
  return { id, ...taskData };
};

const removeTask = (id) => {
  if (!db.Tasks.some((task) => task.id === id)) {
    return false;
  }
  db.Tasks = db.Tasks.filter((task) => task.id !== id);
  return true;
};


module.exports = {
  getAllEntities,

  getUserById,
  saveUser,
  updateUser,
  removeUser,

  getBoardById,
  saveBoard,
  updateBoard,
  removeBoard,

  getTaskById,
  saveTask,
  updateTask,
  removeTask,

};
