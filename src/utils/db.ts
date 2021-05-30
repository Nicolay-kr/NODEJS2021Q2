export{}
const User = require('../resources/users/user.model');
const Board = require('../resources/boards/board.model');
const Task = require('../resources/tasks/task.model');


interface IUser {
  id: string,
  name: string,
  login: string,
  password: string
}
interface IBoard {
  id: string,
  name: string,
  login: string,
  password: string
}
interface ITask {
  id: string,
  name: string,
  boardId: string,
  userId: string
}

interface IDb {
  Users: IUser[],
  Boards: IBoard[],
  Tasks: ITask[],
}

const db:IDb = {
  Users: [],
  Boards: [],
  Tasks: [],
};

// init DB
/**
 * create DB
 */
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
 * @returns {Object} object of elements the define DB field
 */
const getAllEntities = (tableName) => {
  console.log(typeof db[tableName])
  return db[tableName];

}

// Users
/**
 * return object of user with define id
 * @param {String} id string id of user
 * @returns {Object} object of user with define id
 */
const getUserById = (id:string) => db.Users.filter((user) => user.id === id)[0];

/**
 * create new user and save him to DB
 * @param {Object} user object of new user 
 * @returns {Object} return object of new user
 */
const saveUser = (user:IUser) => {
  console.log(typeof user)
  const newUser = new User(user);
  db.Users.push(newUser);
  return newUser;
};
/**
 * update object of existed user and return object of user with update data
 * @param {String} id user id
 * @param {Object} userData  object of user with new parametrs
 * @returns {Object} return object of user with update data
 */
const updateUser = (id:string, userData:IUser) => {
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
const removeUser = (id:string) => {
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
/**
 * return object of board with define id
 * @param {String} id string id of board
 * @returns {Object} object of board with define id
 */
const getBoardById = (id) => db.Boards.filter((board) => board.id === id)[0];

/**
 * create new board and save him to DB
 * @param {Object} board object of new board 
 * @returns {Object} return object of new board
 */

const saveBoard = (board) => {
  const newBoard = new Board(board);
  db.Boards.push(newBoard);
  return newBoard;
};

/**
 * update object of existed board and return object of board with update data
 * @param {String} id board id
 * @param {Object} boardData  object of board with new parametrs
 * @returns {Object} return object of board with update data
 */

const updateBoard = (id, boardData) => {
  if (!db.Boards.some((board) => board.id === id)) {
    return undefined;
  }
  db.Boards = db.Boards.filter((board) => board.id !== id);
  db.Boards.push({ id, ...boardData });
  return { id, ...boardData };
};

/**
 * delete the defined board and  all tasks of current board from DB 
 * @param {String} id board id
 * @returns {Boolen} returns true if board is in DB and false if it isn't
 */

const removeBoard = (id) => {
  if (!db.Boards.some((board) => board.id === id)) {
    return false;
  }
  db.Boards = db.Boards.filter((board) => board.id !== id);
  db.Tasks = db.Tasks.filter((task) => task.boardId !== id);
  return true;
};

// Tasks
/**
 * return object of task with define id
 * @param {String} id string id of task
 * @returns {Object} object of task with define id
 */
const getTaskById = (id) => db.Tasks.filter((task) => task.id === id)[0];

/**
 * create new task and save him to DB
 * @param {Object} task object of new task 
 * @returns {Object} return object of new task
 */

const saveTask = (task) => {
  // console.log("task--->"+task);
  const newTask = new Task(task);
  db.Tasks.push(newTask);
  return newTask;
};

/**
 * update object of existed task and return object of task with update data
 * @param {String} id tasks id
 * @param {Object} taskData  object of task with new parametrs
 * @returns {Object} return object of task with update data
 */

const updateTask = (id, taskData) => {
  if (!db.Tasks.some((task) => task.id === id)) {
    return undefined;
  }
  db.Tasks = db.Tasks.filter((task) => task.id !== id);
  db.Tasks.push({ id, ...taskData });
  return { id, ...taskData };
};

/**
 * delete the defined task from DB
 * @param {String} id task id
 * @returns {Boolen} returns true if task is in DB and false if it isn't
 */

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
