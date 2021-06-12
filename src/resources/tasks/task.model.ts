import { v4 as uuidv4 } from 'uuid';

interface ITask {
  id?: string;
  title: string;
  order: number;
  description: string;
  boardId: string | null;
  columnId: string | null;
  userId: string | null;
}

export default class Task{
  id: string;
  title: string;
  order: number;
  description: string;
  boardId: string | null;
  columnId: string | null;
  userId: string | null;

  
  constructor({
    id = uuidv4(),
    title = 'New task',
    order = 0,
    description = 'No description',
    boardId = null,
    userId = null,
    columnId = null,
  } = {} as ITask) {
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
