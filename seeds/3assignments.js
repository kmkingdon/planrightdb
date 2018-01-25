exports.seed = function(knex, Promise) {
  return knex('assignments').del()
    .then(function () {
      return knex('assignments').insert([
        {id: 1,
          name: 'Scientific Method',
          type: 'Classwork',
          dueDate: '2018-01-25',
          pointsPossible: 20,
          pointsEarned: 18,
          students_id: 1
        },
        {id: 2,
          name: 'Scientific Method HW',
          type: 'Homework',
          dueDate: '2018-01-26',
          pointsPossible: 10,
          pointsEarned: 5,
          students_id: 1
        },
        {id: 3,
          name: 'Scientific Method Project',
          type: 'Projects',
          dueDate: '2018-01-27',
          pointsPossible: 50,
          pointsEarned: 40,
          students_id: 1
        },
        {id: 4,
          name: 'Tools of Scientist',
          type: 'Classwork',
          dueDate: '2018-01-28',
          pointsPossible: 20,
          pointsEarned: 16,
          students_id: 1
        },
        {id: 5,
          name: 'Tools of Scientist HW',
          type: 'Homework',
          dueDate: '2018-01-29',
          pointsPossible: 10,
          pointsEarned: 10,
          students_id: 1
        },
        {id: 6,
          name: 'Scientific Method Quiz 1',
          type: 'Assessments',
          dueDate: '2018-01-30',
          pointsPossible: 10,
          pointsEarned: 6,
          students_id: 1
        },
        {id: 7,
          name: 'Scientific Method Quiz 2',
          type: 'Assessments',
          dueDate: '2018-02-01',
          pointsPossible: 10,
          pointsEarned: 10,
          students_id: 1
        }
      ]).then(() => {
        return knex.raw("ALTER SEQUENCE assignments_id_seq RESTART WITH 8;");
      });
    });
};
