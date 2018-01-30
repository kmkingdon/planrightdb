exports.seed = function(knex, Promise) {
  return knex('goals').del()
    .then(function () {
      return knex('goals').insert([
        {id: 1,
          type: 'Assessments',
          specific: 'I want to improve my assessment scores in Science',
          measurable: 'I will get more than 70% on all my scores',
          achievable: 'I can achieve this by creating note cards for my vocab',
          relevant: true,
          time: 'By end of the quarter',
          teacherReview: '',
          studentReflection: '',
          students_id: 1
        },
        {id: 2,
          type: 'Classwork',
          specific: 'I want to improve my assessment scores in Science',
          measurable: 'I will get more than 70% on all my scores',
          achievable: 'I can achieve this by creating note cards for my vocab',
          relevant: true,
          time: 'By end of the quarter',
          teacherReview: '',
          studentReflection: '',
          students_id: 1
        }
      ]).then(() => {
        return knex.raw("ALTER SEQUENCE goals_id_seq RESTART WITH 3;");
      });
    });
};
