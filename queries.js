const database = require("./database-connection");

module.exports = {
    list1(){
      return database("teachers").select();
    },
    list2(){
      return database("students").select();
    },
    list3(){
      return database("goals").select();
    },
    list4(){
      return database("assignments").select();
    },
    read(id){
      return database("assignments").select().where("id", id).first();
    },
    create1(goal){
      return database("goals")
            .insert(goal)
            .returning("*")
            .then(record => record[0]);
    },
    create2(assignment){
      return database("assignments")
            .insert(assignment)
            .returning("*")
            .then(record => record[0]);
    },
    update1(id, goal){
      return database("goals")
            .update(goal)
            .where("id", id)
            .returning("*")
            .then(record => record[0]);
    },
    update2(id, assignment){
      return database("assignments")
            .update(assignment)
            .where("id", id)
            .returning("*")
            .then(record => record[0]);
    },
    delete1(id){
      return database("goals").delete().where("id", id);
    },
    delete2(id){
      return database("assignments").delete().where("id", id);
    }
};
