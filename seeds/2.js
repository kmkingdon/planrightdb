exports.seed = function(knex, Promise) {
  return knex('lesson_templates').del()
    .then(function () {
      return knex('lesson_templates').insert([
        { id: 1,
          name: "Sample",
          standards: {standardsSet:"CommonCoreMath", gradeLevel:"2"},
          lessonTemplateString: "<form><label>Standards</label><input type='text' id='Standards'/><label>Date</label><input type='text' id='Date'/><label>Subject</label><input type='text' id='Subject'/><label>Teacher</label><input type='text' id='Teacher'/><label>Class Period</label><input type='text' id='Class Period'/><label>Objective</label><input type='text' id='Objective'/><label>Essential Question</label><input type='text' id='Essential Question'/><label>Hook</label><input type='text' id='Hook'/><label>Do Now</label><input type='text' id='Do Now'/><label>I Do (Introduction)</label><input type='text' id='I Do (Introduction)'/><label>We Do (Guided Practice)</label><input type='text' id='We Do (Guided Practice)'/><label>You Do (Independent Practice)</label><input type='text' id='You Do (Independent Practice)'/><label>Agenda</label><input type='text' id='Agenda'/><label>Assessment</label><input type='text' id='Assessment'/></form>",
          users_id: 1
        }
      ]);
    }).then(() => {
      return knex.raw("ALTER SEQUENCE lesson_templates_id_seq RESTART WITH 2;")
    });
};
