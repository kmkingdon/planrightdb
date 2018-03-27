exports.seed = function(knex, Promise) {
  return knex('user_preferences').del()
    .then(function () {
      return knex('user_preferences').insert([
        { id: 1,
          avatar: '../../static/0.png',
          users_id: 1
        },
        { id: 2,
          avatar: '../../static/0.png',
          users_id: 2
        },
        { id: 3,
          avatar: '../../static/0.png',
          users_id: 3
        },
        { id: 4,
          avatar: '../../static/0.png',
          users_id: 4
        },
      ]);
    }).then(() => {
      return knex.raw("ALTER SEQUENCE user_preferences_id_seq RESTART WITH 5;")
    });
};
