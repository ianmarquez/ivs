const db = require('../db');

const authenticate = async (req, res, next) => {
  const { headers: { 'client-id': client_id } } = req;
  const id = client_id && await db.select('client_id').from('clients').where({ client_id });
  if (id && id.length > 0) {
    next();
  } else {
    res.sendStatus(403)
  }
}

module.exports = authenticate;