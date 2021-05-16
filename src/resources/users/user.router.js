const router = require('express').Router();
const User = require('./user.model');
const userService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await userService.getAll();
  // map user fields to exclude secret fields like "password"
  res.json(users.map(User.toResponse));
});

router.route('/:id').get(async (req, res) => {
  const user = await userService.get(req.params.id);
  res.status(200).send(User.toResponse(user));
});

router.route('/:id').delete(async (req, res) => {
  const user = await userService.remove(req.params.id);
  res.sendStatus(200);
});

router.route('/').post(async (req, res) => {
  const user = await userService.save(User.fromRequest(req.body));
  res.status(200).send(User.toResponse(user));
});

router.route('/:id').put(async (req, res) => {
  const user = await userService.update(req.params.id, req.body);
  res.status(200).send(User.toResponse(user));
});

module.exports = router;
