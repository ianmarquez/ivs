const express = require('express');
const morgan = require('morgan');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('Hello World!'));

app.use('/users', require('./routes/users'));

app.listen(PORT, () => console.log(`Server up at http://localhost:${PORT}`));
