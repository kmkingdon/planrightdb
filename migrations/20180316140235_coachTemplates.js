exports.up = function(knex, Promise) {
  return knex.schema.createTable("coach_template", table => {
    table.increments('id').primary();
    table.text('name');
    table.text('reflectionDataString');
    table.integer('users_id').references('users.id').onDelete("CASCADE")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('coach_template');
};
