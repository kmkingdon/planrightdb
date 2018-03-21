exports.seed = function(knex, Promise) {
  return knex('components').del()
    .then(function () {
      return knex('components').insert([
        {
          id: 1,
          name: 'Standards',
          order: 0,
          fixed: false,
          customization: "",

        },
        {
          id: 2,
          name: 'Date',
          order: 0,
          fixed: false,
          customization: "",

        },
        {
          id: 3,
          name: 'Subject',
          order: 0,
          fixed: false,
          customization: "",

        },
        {
          id: 4,
          name: 'Teacher',
          order: 0,
          fixed: false,
          customization: "",

        },
        {
          id: 5,
          name: 'Class Period',
          order: 0,
          fixed: false,
          customization: "",

        },
        {
          id: 6,
          name: 'Objective',
          order: 0,
          fixed: false,
          customization: "",

        },
        {
          id: 7,
          name: 'Essential Question',
          order: 0,
          fixed: false,
          customization: "",

        },
        {
          id: 8,
          name: 'Hook',
          order: 0,
          fixed: false,
          customization: "",

        },
        {
          id: 9,
          name: 'Do Now',
          order: 0,
          fixed: false,
          customization: "",

        },
        {
          id: 10,
          name: 'I Do (Introduction)',
          order: 0,
          fixed: false,
          customization: "",

        },
        {
          id: 11,
          name: 'We Do (Guided Practice)',
          order: 0,
          fixed: false,
          customization: "",

        },
        {
          id: 12,
          name: 'You Do (Independent Practice)',
          order: 0,
          fixed: false,
          customization: "",

        },
        {
          id: 13,
          name: 'Agenda',
          order: 0,
          fixed: false,
          customization: "",

        },
        {
          id: 14,
          name: 'Assessment',
          order: 0,
          fixed: false,
          customization: "",

        },
        {
          id: 15,
          name: 'Accommodations',
          order: 0,
          fixed: false,
          customization: "",

        },
        {
          id: 16,
          name: 'Gifted/Talented',
          order: 0,
          fixed: false,
          customization: "",

        },
        {
          id: 17,
          name: 'Early Finishers',
          order: 0,
          fixed: false,
          customization: "",

        },
        {
          id: 18,
          name: 'HOT Questions',
          order: 0,
          fixed: false,
          customization: "",

        },
        {
          id: 19,
          name: 'Homework',
          order: 0,
          fixed: false,
          customization: "",

        },
        {
          id: 20,
          name: 'Vocabulary',
          order: 0,
          fixed: false,
          customization: "",

        }
      ]);
    }).then(() => {
      return knex.raw("ALTER SEQUENCE components_id_seq RESTART WITH 21;")
    });
};
