exports.up = function(knex, Promise) {
  return knex.schema.createTable("components", table => {
    table.increments('id').primary();
    table.text('name');
    table.integer('order');
    table.boolean('fixed');
    table.integer('users_id').references('users.id').onDelete("CASCADE")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('components');
};
