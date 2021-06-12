import {Router,Request, Response} from 'express';
import * as tasksService from './task.service';

const router = Router();


router.route('/').get(async (req:Request, res:Response) => {
  console.log(req);
  const tasks = await tasksService.getAll();
  res.json(tasks);
});

router.route('/:id').get(async (req:Request, res:Response) => {
  const {id} = req.params;
  const task = await tasksService.get(String(id));
  if (task) {
    res.status(200).json(task);
  } else {
    res.status(404).send('Task not found');
  }
});

router.route('/:id').delete(async (req:Request, res:Response) => {
  const {id} = req.params;
  const task = await tasksService.remove(String(id));
  if (task) {
    res.status(204).send('The task has been deleted');
  } else {
    res.status(201).send('Bad request');
  }
});

router.route('/').post(async (req:Request, res:Response) => {
  // const {boardId} = req.params;
  const reqBoardId = req.params['boardId'] as string|null;
  const task = await tasksService.save({
    ...req.body,
    boardId: reqBoardId,
  });
  res.status(201).json(task);
});

router.route('/:id').put(async (req:Request, res:Response) => {
  const {id} = req.params;
  const task = await tasksService.update(String(id), req.body);
  if (task) {
    res.status(200).json(task);
  } else {
    res.status(400).send('Bad request');
  }
});

export {router};
