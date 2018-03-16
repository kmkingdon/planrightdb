exports.up = function(knex, Promise) {
  return knex.schema.createTable("reflections", table => {
    table.increments('id').primary();
    table.date('date');
    table.text('reflectionDataString');
    table.text('coachCommentString');
    table.integer('users_id').references('users.id').onDelete("CASCADE")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('reflections');
};
