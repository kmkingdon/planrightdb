exports.up = function(knex, Promise) {
  return knex.schema.createTable("user_preferences", table => {
    table.increments('id').primary();
    table.text('avatar');
    table.integer('users_id').references('users.id').onDelete("CASCADE")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('user_preferences');
};
