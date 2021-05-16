// const uuid = require('uuid');
const { v4: uuidv4 } = require('uuid');

class Task {
  constructor({ id = uuidv4(), name = 'TASK', boardId="Board"} = {}) {
    this.id = id;
    this.name = name;
    this.boardId = boardId;
  }

  static toResponse(task) {
    const { id, name, boardId } = task;
    return { id, name, boardId };
  }
}

module.exports = Task;
