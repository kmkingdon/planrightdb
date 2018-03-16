exports.seed = function(knex, Promise) {
  return knex('coach_template').del()
    .then(function () {
      return knex('coach_template').insert([
        { id: 1,
          name: "Sample Reflection 1",
          reflectionDataString: 'Sample Reflection String',
          users_id: 4
        }
      ]);
    }).then(() => {
      return knex.raw("ALTER SEQUENCE coach_template_id_seq RESTART WITH 2;")
    });
};
