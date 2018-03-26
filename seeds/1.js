const bcrypt = require('bcrypt');

exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        { id: 1,
          email: 'teacher1@email.com',
          userName: 'Teacher 1',
          password: bcrypt.hashSync('1234', 10),
          teacherAccount: true,
          coachAccount: false
        },
        { id: 2,
          email: 'teacher2@email.com',
          userName: 'Teacher 2',
          password: bcrypt.hashSync('1234', 10),
          teacherAccount: true,
          coachAccount: false
        },
        { id: 3,
          email: 'teacher3@email.com',
          userName: 'Teacher 3',
          password: bcrypt.hashSync('1234', 10),
          teacherAccount: true,
          coachAccount: true
        },
        { id: 4,
          email: 'coach1@email.com',
          userName: 'Coach 1',
          password: bcrypt.hashSync('1234', 10),
          teacherAccount: false,
          coachAccount: true
        }
      ]);
    }).then(() => {
      return knex.raw("ALTER SEQUENCE users_id_seq RESTART WITH 5;")
    });
};
