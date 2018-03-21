exports.seed = function(knex, Promise) {
  return knex('lesson_templates').del()
    .then(function () {
      return knex('lesson_templates').insert([
        { id: 1,
          name: "Sample",
          standards: "Common Core",
          lessonTemplateString: "<form><label>Date</label><textarea></textarea><label>Subject</label><textarea></textarea><label>Teacher</label><textarea></textarea><label>Class Period</label><textarea></textarea><label>Standards</label><textarea></textarea><label>Objective</label><textarea></textarea><label>Essential Question</label><textarea></textarea><label>Hook</label><textarea></textarea><label>Do Now</label><textarea></textarea><label>I Do(Introduction)</label><textarea></textarea><label>We Do (Guided Practice)</label><textarea></textarea><label>You Do (Independent Practice)</label><textarea></textarea><label>Assessment</label><textarea></textarea><label>Accommodations</label><textarea></textarea><label>Gifted/Talented</label><textarea></textarea><label>Early Finishers</label><textarea></textarea><label>Homework</label><textarea></textarea></form>",
          users_id: 1
        }
      ]);
    }).then(() => {
      return knex.raw("ALTER SEQUENCE lesson_templates_id_seq RESTART WITH 2;")
    });
};
