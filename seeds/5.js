exports.seed = function(knex, Promise) {
  return knex('user_preferences').del()
    .then(function () {
      return knex('user_preferences').insert([
        { id: 1,
          avatar: 'avatar1.png',
          users_id: 1
        }
      ]);
    }).then(() => {
      return knex.raw("ALTER SEQUENCE user_preferences_id_seq RESTART WITH 2;")
    });
};
