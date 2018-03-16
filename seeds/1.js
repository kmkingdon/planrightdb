exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        { id: 1,
          email: 'teacher1@email.com',
          userName: 'teacher1',
          password: '1234',
          teacherAccount: true,
          coachAccount: false
        },
        { id: 2,
          email: 'teacher2@email.com',
          userName: 'teacher2',
          password: '1234',
          teacherAccount: true,
          coachAccount: false
        },
        { id: 3,
          email: 'teacher3@email.com',
          userName: 'teacher3',
          password: '1234',
          teacherAccount: true,
          coachAccount: true
        },
        { id: 4,
          email: 'coach1@email.com',
          userName: 'coach1',
          password: '1234',
          teacherAccount: false,
          coachAccount: true
        }
      ]);
    }).then(() => {
      return knex.raw("ALTER SEQUENCE users_id_seq RESTART WITH 5;")
    });
};
