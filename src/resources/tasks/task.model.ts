import { v4 as uuidv4 } from 'uuid';

interface ITask {
  id?: string,
  title: string,
  order: number,
  description: string,
  boardId: string|undefined,
  columnId: string|undefined,
  userId: string|undefined,
}

export default class Task implements ITask {
  id: string;

  title: string;

  order: number;

  description: string;

  userId: string;

  boardId: string;

  columnId: string;

  
  constructor({
    boardId = null||'',
    id = uuidv4(),
    title = 'New task',
    order = 0,
    description = 'No description',
    userId = '',
    columnId = '',
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

export {Task,ITask};
