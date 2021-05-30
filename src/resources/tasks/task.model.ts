import { v4 as uuidv4 } from 'uuid';

interface ITask {
  id?: string,
  title: string,
  order: number,
  description: string,
  boardId: string,
  columnId: string,
  userId: string|null,
}

class Task implements ITask {
  id: string;
  title: string;
  order: number;
  description: string;
  userId: string|null;
  boardId: string;
  columnId: string;
  constructor({
    id = uuidv4(),
    title = 'New task',
    order = 0,
    description = 'No description',
    userId = null,
    boardId = '',
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

module.exports = Task;
