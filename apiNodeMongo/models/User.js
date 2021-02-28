const conn = require('./Connection');
const { ObjectId } = require('mongodb')

const add = async (name, email, password) => {
  try {
    const db = await conn();
    const result = await db.collection('users').insertOne({ name, email, password });

    return result.ops[0];

  } catch (error) {
    return null;
  }
};

const getAll = async () => {
  try {
    const db = await conn();
    const result = await db.collection('users').find().toArray();

    return result;

  } catch (error) {
    return null;
  }
};

const getById = async (id) => {
  try {
    const db = await conn();
    const result = await db.collection('users').findOne(ObjectId(id));

    return result;

  } catch (error) {
    return null;
  }
};

module.exports = {
  add,
  getAll,
  getById
};