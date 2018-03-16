exports.seed = function(knex, Promise) {
  return knex('goals').del()
    .then(function () {
      return knex('goals').insert([
        { id: 1,
          componentId: 2,
          name: "Sample Goal 1",
          goalDataString: 'Sample Lesson String',
          goalReflectionString: '',
          coachCommentString: '',
          users_id: 1
        }
      ]);
    }).then(() => {
      return knex.raw("ALTER SEQUENCE goals_id_seq RESTART WITH 2;")
    });
};
