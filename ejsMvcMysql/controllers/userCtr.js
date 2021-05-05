const User = require('../models/User');

const getAll = async(req, res) => {
  try {
    const users  = await User.getAll();

    return res.status(200).render('users/index', { users });
  } catch (error) {
    return res.status(500).render('errors/error', { error: 'FATAL ERROR 500' });
  }
};

const getByEmail = async(req, res) => {
  try {
    const user  = await User.getByEmail();

    return res.status(200).render('users/index', { user });
  } catch (error) {
    return res.status(500).render('errors/error', { error: 'FATAL ERROR 500' });
  }
};

const create = async(req, res) => {
  try {
    await User.create(req.body);

    return res.status(200).render('users/userRegister', { message: 'user created successfully' });
  } catch (error) {
    return res.status(500).render('errors/error', { error: 'FATAL ERROR 500' });
  }
};

const showViewRegister = (req, res) => res.status(200).render('users/registerUser')


module.exports = {
  getAll,
  getByEmail,
  create,
  showViewRegister
};