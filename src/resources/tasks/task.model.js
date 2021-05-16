// const uuid = require('uuid');
const { v4: uuidv4 } = require('uuid');

class Task {
  constructor({
    id = 'string',
    title = 'string',
    order = 0,
    description = 'string',
    userId = 'string',
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
  }

  static toResponse(task) {
    const { id, title, order, description, userId } = task;
    return { id, title, order, description, userId };
  }
}

module.exports = Task;
