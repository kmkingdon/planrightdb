exports.up = function(knex, Promise) {
  return knex.schema.createTable("components", table => {
    table.increments('id').primary();
    table.text('name');
    table.integer('order');
    table.boolean('fixed');
    table.text('customization');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('components');
};
