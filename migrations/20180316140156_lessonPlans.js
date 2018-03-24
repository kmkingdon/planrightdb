exports.up = function(knex, Promise) {
  return knex.schema.createTable("lesson_plans", table => {
    table.increments('id').primary();
    table.text('name');
    table.date('dateTaught');
    table.string('lessonTemplateString', 2000);
    table.json('lessonPlanData');
    table.text('fileName');
    table.json('teacherReflection');
    table.text('coachCommentString');
    table.integer('users_id').references('users.id').onDelete("CASCADE")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('lesson_plans');
};
