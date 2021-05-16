// const uuid = require('uuid');
const { v4: uuidv4 } = require('uuid');

class Board {
  constructor({
    id = uuidv4(),
    title = 'string',
    columns = {
      id: 'string',
      title: 'string',
      order: 0,
    },
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns
  }

  static toResponse(board) {
    const { id, title, columns } = board;
    return { id, title, columns};
  }

  static fromRequest(body) {
    return new Board(body);
  }
}

module.exports = Board;
