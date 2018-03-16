exports.seed = function(knex, Promise) {
  return knex('lesson_plans').del()
    .then(function () {
      return knex('lesson_plans').insert([
        { id: 1,
          name: "Sample Lesson 1",
          dateTaught: "2018-03-10",
          lessonDataString: 'Sample Lesson String',
          fileName: '',
          teacherReflectionString: '',
          coachCommentString: '',
          users_id: 1
        }
      ]);
    }).then(() => {
      return knex.raw("ALTER SEQUENCE lesson_plans_id_seq RESTART WITH 2;")
    });
};
