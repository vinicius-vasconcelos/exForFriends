const User = require('../models/User');

const add = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const result = await User.add(name, email, password);

    res.status(201).json(result);
    
  } catch (error) {
    res.status(500).json({ error: 'Houve um problema !' })
  }
};

const getAll = async (req, res) => {
  try {
    const result = await User.getAll();

    res.status(200).json(result);
    
  } catch (error) {
    res.status(500).json({ error: 'Houve um problema ao listar todos !' })
  }
};

const getById = async (req, res) => {
  try {
    const result = await User.getById(req.params.id);

    res.status(200).json(result);
    
  } catch (error) {
    res.status(500).json({ error: 'Houve um problema ao listar todos !' })
  }
};


// const update;

// const drop;

module.exports = {
  add,
  getAll,
  getById,
};
