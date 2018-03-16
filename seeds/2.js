exports.seed = function(knex, Promise) {
  return knex('lesson_templates').del()
    .then(function () {
      return knex('lesson_templates').insert([
        { id: 1,
          lessonTemplateString: 'sample string',
          users_id: 1
        }
      ]);
    }).then(() => {
      return knex.raw("ALTER SEQUENCE lesson_templates_id_seq RESTART WITH 2;")
    });
};
