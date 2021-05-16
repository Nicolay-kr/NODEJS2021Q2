// const uuid = require('uuid');
const { v4: uuidv4 } = require('uuid');

class Board {
  constructor({ id = uuidv4(), name = 'Board', userId } = {}) {
    this.id = id;
    this.name = name;
    this.userId = userId;
  }

  static toResponse(board) {
    const { id, name, userId } = board;
    return { id, name, userId };
  }
}

module.exports = Board;
