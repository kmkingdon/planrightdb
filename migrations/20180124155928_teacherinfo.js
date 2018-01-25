exports.up = function(knex, Promise) {
  return knex.schema.createTable('teachers', table => {
    table.increments('id').primary();
    table.text('name');
    table.text('username');
    table.text('password');
  })
};


exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('teachers');
};
