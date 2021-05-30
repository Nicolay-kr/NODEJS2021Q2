import { v4 as uuidv4 } from 'uuid';

class Task {
  constructor({
    boardId = null,
    id = uuidv4(),
    title = 'New task',
    order = 0,
    description = 'No description',
    userId = null,
    columnId = null,
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }
}

module.exports = Task;
