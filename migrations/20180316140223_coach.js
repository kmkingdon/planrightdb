exports.up = function(knex, Promise) {
  return knex.schema.createTable("coach", table => {
    table.increments('id').primary();
    table.text('code');
    table.text('teacherIdsString');
    table.integer('users_id').references('users.id').onDelete("CASCADE")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('coach');
};
