// const uuid = require('uuid');
import { v4 as uuidv4 } from 'uuid';
interface IColumn {
  id: string,
  title: string,
  order: number
}
interface IBoard {
  id: string,
  title: string,
  columns: Array<IColumn>
}

class Board implements IBoard{
  id: string;
  title: string;
  columns: Array<IColumn>;
  constructor({
    id = uuidv4(),
    title = 'string',
    columns= {
      id: 'string',
      title: 'string',
      order: 0,
    },
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns
  }
}

module.exports = Board;
