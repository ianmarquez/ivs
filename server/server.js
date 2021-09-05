const express = require('express');
const morgan = require('morgan');
const cors = require("cors");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', require('./routes/users'));

app.listen(PORT, () => console.log(`Server up at http://localhost:${PORT}`));
