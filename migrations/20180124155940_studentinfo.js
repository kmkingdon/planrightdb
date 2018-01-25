exports.up = function(knex, Promise) {
  return knex.schema.createTable('students', table => {
    table.increments('id').primary();
    table.text('name');
    table.text('username');
    table.text('password');
    table.integer('teachers_id').references('teachers.id').onDelete("CASCADE")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('students');
};
