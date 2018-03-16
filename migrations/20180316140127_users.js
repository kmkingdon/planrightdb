exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", table => {
    table.increments('id').primary();
    table.text('email');
    table.text('userName');
    table.text('password');
    table.boolean('teacherAccount');
    table.boolean('coachAccount');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
