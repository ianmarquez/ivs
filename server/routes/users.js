const express = require('express');
const router = express.Router();
const users = require('../controllers/users');
const authenticate = require('../middlewares/authenticate');

router.get('/', authenticate, users.getUsers);
router.get('/:id', authenticate, users.getUsersById);
router.post('/', users.addUsers);

module.exports = router;