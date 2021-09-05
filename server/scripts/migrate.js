const db = require('../db');

;(async () => {
  try {
    await db.schema.dropTableIfExists('users');
    await db.schema.withSchema('public').createTable('users', (table) => {
      table.increments();
      table.string('name');
      table.string('email');
    });
    console.log('Created users table!');

    await db.schema.dropTableIfExists('clients');
    await db.schema.withSchema('public').createTable('clients', (tbl) => {
      tbl.string('client_id');
      tbl.primary('client_id');
    });

    console.log('Created clients table!');
    await db('clients').insert({client_id: 'dummy_id'});

    process.exit(0);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
})();
