exports.up = function(knex, Promise) {
  return knex.schema.createTable("goals", table => {
    table.increments('id').primary();
    table.integer('componentId');
    table.text('name');
    table.text('goalDataString');
    table.text('goalReflectionString');
    table.text('coachCommentString');
    table.integer('users_id').references('users.id').onDelete("CASCADE")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('goals');
};
