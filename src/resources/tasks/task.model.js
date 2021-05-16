// const uuid = require('uuid');
const { v4: uuidv4 } = require('uuid');

class Task {
  constructor({
    id = uuidv4(),
    name = 'TASK',
    
  } = {}) {
    this.id = id;
    this.name = name;
  }

  static toResponse(task) {
    const { id, name} = task;
    return { id, name};
  }
}

module.exports = Task;
