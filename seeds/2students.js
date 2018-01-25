exports.seed = function(knex, Promise) {
  return knex('students').del()
    .then(function () {
      return knex('students').insert([
        {id: 1,
          name: "Demo Student 1",
          username:"Demostudent",
          password:"1234",
          teachers_id: 1
        }
      ]).then(() => {
        return knex.raw("ALTER SEQUENCE students_id_seq RESTART WITH 5;");
      });
    });
};
