const express = require('express');
const morgan = require('morgan');

const db = require('./db');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/users', async (req, res) => {
  const users = await db.select().from('users');
  res.json(users);
});

app.get('/users/:id', async(req, res) => {
    const { id } = req.params;
    const user = await db.select('name', 'email').from('users').where({ id })
    console.log(user);
    res.send(user);
});

app.post('/users', async (req, res) => {
  const user = await db('users').insert({ name: req.body.name, email: req.body.email }).returning('*');
  res.json(user);
});

app.listen(PORT, () => console.log(`Server up at http://localhost:${PORT}`));
