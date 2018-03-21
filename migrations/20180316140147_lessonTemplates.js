exports.up = function(knex, Promise) {
  return knex.schema.createTable("lesson_templates", table => {
    table.increments('id').primary();
    table.text('name');
    table.text('standards');
    table.text('lessonTemplateString');
    table.integer('users_id').references('users.id').onDelete("CASCADE")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('lesson_templates');
};
