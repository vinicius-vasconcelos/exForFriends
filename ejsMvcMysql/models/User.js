const connection = require('../database/connection');

const getAll = async () => {
  try {
    const result = await connection.execute('SELECT * from TesteDB.users');  
    return result[0];
  } catch (error) {
    return null;
  }
};

const getByEmail = async (email) => {
  try {
    const result = await connection.execute(
      'SELECT * from TesteDB.users WHERE email = ? ',
      [email]
    );  

    return result[0];
  } catch (error) {
    return null;
  }
};

const create = async ({ name, email }) => {
  try {
    const result = await connection.execute(
      'INSERT INTO users (name, email) VALUES (?, ?)',
      [name, email]
    );  
    
    return result[0];
  } catch (error) {
    return null;
  }
};

module.exports = {
  getAll,
  getByEmail,
  create
};
