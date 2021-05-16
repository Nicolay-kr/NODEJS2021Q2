// const uuid = require('uuid');
const { v4: uuidv4 } = require('uuid');

class Board {
  constructor({
    id = uuidv4(),
    name = 'Board',
  } = {}) {
    this.id = id;
    this.name = name;
  }

  static toResponse(board) {
    const { id, name} = board;
    return { id, name};
  }
}

module.exports = Board;
