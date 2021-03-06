const db = require('../db');


exports.getUsers = async (req, res) => {
  try {
    const users = await db.select().from('users');
    res.json(users);
  } catch (err) {
    res.sendStatus(500);
  }
};

exports.getUsersById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await db.select('name', 'email').from('users').where({ id });
    if(user.length <= 0) {
      res.sendStatus(404);
    } else {
      res.send(user);
    }
  } catch (err) {
    res.sendStatus(500);
  }
};

exports.addUsers = async (req, res) => {
  try {
    await db('users').insert({ 
      name: req.body.name, 
      email: req.body.email 
    });
    res.sendStatus(201);
  } catch (err) {
    res.sendStatus(500);
  }
  
};
