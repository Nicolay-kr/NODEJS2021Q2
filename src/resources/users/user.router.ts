
import {User} from './user.model';
import {Router,Request, Response} from 'express';
import * as userService from './user.service';

const router = Router();


router.route('/').get(async (req: Request, res: Response) => {
  console.log(req);
  const users = await userService.getAll();
  // map user fields to exclude secret fields like "password"
  res.json(users.map(User.toResponse));
});

router.route('/:id').get(async (req: Request, res: Response) => {
  const {id} = req.params;
  const user = await userService.get(id);
  if (user) {
    res.status(200).json(User.toResponse(user));
  } else {
    res.status(404).send('User not found');
  }
});

router.route('/:id').delete(async (req: Request, res: Response) => {
  const {id} = req.params;
  const user = await userService.remove(id);
  if (user) {
    res.status(204).send('The user has been deleted');
  } else {
    res.status(200).send('Bad request');
  }
});

router.route('/').post(async (req: Request, res: Response) => {
  const user = await userService.save(req.body);
  res.status(201).json(User.toResponse(user));
});

router.route('/:id').put(async (req: Request, res: Response) => {
  const {id} = req.params;
  const user = await userService.update(id, req.body);
  if (user) {
    res.status(200).json(User.toResponse(user));
  } else {
    res.status(400).send('Bad request');
  }
});

export {router};
