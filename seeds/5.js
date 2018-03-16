exports.seed = function(knex, Promise) {
  return knex('coach').del()
    .then(function () {
      return knex('coach').insert([
        { id: 1,
          code: 'abcd',
          teacherIdsString: "1,2,3",
          users_id: 4
        }
      ]);
    }).then(() => {
      return knex.raw("ALTER SEQUENCE coach_id_seq RESTART WITH 2;")
    });
};
