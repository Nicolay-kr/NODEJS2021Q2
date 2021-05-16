const DB = require('../../utils/db');
// const NOT_FOUND_ERROR = require("")
const TABLE_NAME = 'Users';

const getAll = async () => DB.getAllEntities(TABLE_NAME);

const get = async (id) => {
  const user = await DB.getEntity(TABLE_NAME, id);
  console.log(user);
  if (!user) {
    // throw new NOT_FOUND_ERROR = (`Couldn't find a user with id: ${id}`)
  }
  return user;
};

const remove = async (id) => {
  if (!(await DB.removeEntity(TABLE_NAME, id))) {
    // throw new NOT_FOUND_ERROR = (`Couldn't find a user with id: ${id}`)
  }
};

const save = async (user) => DB.saveEntity(TABLE_NAME, user);

const update = async (id, user) => {
  const entity = DB.updateEntity(TABLE_NAME, id, user);

  if (!entity) {
    // throw new NOT_FOUND_ERROR = (`Couldn't find a user with id: ${id}`)
  }
  return entity;
};

module.exports = { getAll, get, remove, save, update };
