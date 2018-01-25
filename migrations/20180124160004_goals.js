exports.up = function(knex, Promise) {
  return knex.schema.createTable('goals', table => {
    table.increments('id').primary();
    table.text('type');
    table.text('specific');
    table.text('measurable');
    table.text('achievable');
    table.boolean('relevant');
    table.text('time');
    table.text('teacherReview');
    table.text('studentReflection');
    table.integer('students_id').references('students.id').onDelete("CASCADE")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('goals');
};
