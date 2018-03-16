exports.seed = function(knex, Promise) {
  return knex('reflections').del()
    .then(function () {
      return knex('reflections').insert([
        { id: 1,
          date: "2018, 03, 10",
          reflectionDataString: 'Sample Reflection String',
          coachCommentString: '',
          users_id: 1
        }
      ]);
    }).then(() => {
      return knex.raw("ALTER SEQUENCE reflections_id_seq RESTART WITH 2;")
    });
};
