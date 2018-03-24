exports.seed = function(knex, Promise) {
  return knex('components').del()
    .then(function () {
      return knex('components').insert([
        {
          id: 1,
          name: 'School Name',
          order: 0,
          fixed: false,
          users_id: 1,
        },
        {
          id: 2,
          name: 'District Name',
          order: 0,
          fixed: false,
          users_id: 1,
        },
        {
          id: 3,
          name: 'Subject',
          order: 0,
          fixed: false,
          users_id: 1,
        },
        {
          id: 4,
          name: 'Teacher Name',
          order: 0,
          fixed: false,
          users_id: 1,
        },
        {
          id: 5,
          name: 'Class Period',
          order: 0,
          fixed: false,
          users_id: 1,
        },
        {
          id: 6,
          name: 'Objective',
          order: 0,
          fixed: false,
          users_id: 1,
        },
        {
          id: 7,
          name: 'Essential Question',
          order: 0,
          fixed: false,
          users_id: 1,
        },
        {
          id: 8,
          name: 'Hook',
          order: 0,
          fixed: false,
          users_id: 1,
        },
        {
          id: 9,
          name: 'Do Now',
          order: 0,
          fixed: false,
          users_id: 1,
        },
        {
          id: 10,
          name: 'I Do (Introduction)',
          order: 0,
          fixed: false,
          users_id: 1,
        },
        {
          id: 11,
          name: 'We Do (Guided)',
          order: 0,
          fixed: false,
          users_id: 1,
        },
        {
          id: 12,
          name: 'You Do (Independent)',
          order: 0,
          fixed: false,
          users_id: 1,
        },
        {
          id: 13,
          name: 'Agenda',
          order: 0,
          fixed: false,
          users_id: 1,
        },
        {
          id: 14,
          name: 'Assessment',
          order: 0,
          fixed: false,
          users_id: 1,
        },
        {
          id: 15,
          name: 'Exit Ticket',
          order: 0,
          fixed: false,
          users_id: 1,
        },
        {
          id: 16,
          name: 'Accommodations',
          order: 0,
          fixed: false,
          users_id: 1,
        },
        {
          id: 17,
          name: 'Gifted/Talented',
          order: 0,
          fixed: false,
          users_id: 1,
        },
        {
          id: 18,
          name: 'Early Finishers',
          order: 0,
          fixed: false,
          users_id: 1,
        },
        {
          id: 19,
          name: 'HOT Questions',
          order: 0,
          fixed: false,
          users_id: 1,
        },
        {
          id: 20,
          name: 'Homework',
          order: 0,
          fixed: false,
          users_id: 1,
        },
        {
          id: 21,
          name: 'Vocabulary',
          order: 0,
          fixed: false,
          users_id: 1,
        }
      ]);
    }).then(() => {
      return knex.raw("ALTER SEQUENCE components_id_seq RESTART WITH 21;")
    });
};
