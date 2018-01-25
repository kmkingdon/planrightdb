exports.seed = function(knex, Promise) {
  return knex('teachers').del()
    .then(function () {
      return knex('teachers').insert([
        {id: 1,
          name: "Demo Teacher",
          username: "Demoteacher",
          password: "1234"
          }
      ]).then(() => {
        return knex.raw("ALTER SEQUENCE teachers_id_seq RESTART WITH 3;");
      });
    });
};
