exports.up = function(knex, Promise) {
  return knex.schema.createTable('assignments', table => {
    table.increments('id').primary();
    table.text('name');
    table.text('type');
    table.date('dueDate');
    table.integer('pointsPossible');
    table.integer('pointsEarned');
    table.integer('students_id').references('students.id').onDelete("CASCADE")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('assignments');
};
