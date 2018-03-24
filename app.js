const express = require("express");
const app = express();
const queries = require("./queries");
const bodyParser = require("body-parser");
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

app.get("/users", (request, response) => {
    queries.list('users').then(users => {
        response.json({users});
    }).catch(console.error);
});

app.get("/components", (request, response) => {
    queries.list('components').then(components => {
        response.json({components});
    }).catch(console.error);
});

app.get("/lessontemplates", (request, response) => {
    queries.list('lesson_templates').then(templates => {
        response.json({templates});
    }).catch(console.error);
});

app.get("/lessonplans", (request, response) => {
    queries.list('lesson_plans').then(plans => {
        response.json({plans});
    }).catch(console.error);
});

app.get("/goals", (request, response) => {
    queries.list('goals').then(goals => {
        response.json({goals});
    }).catch(console.error);
});

app.get("/coach", (request, response) => {
    queries.list('coach').then(coach => {
        response.json({coach});
    }).catch(console.error);
});

app.get("/coachtemplates", (request, response) => {
    queries.list('coach_templates').then(coachTemplates => {
        response.json({coachTemplates});
    }).catch(console.error);
});

app.get("/reflections", (request, response) => {
    queries.list('reflections').then(reflections => {
        response.json({reflections});
    }).catch(console.error);
});

app.get("/lessonplans", (request, response) => {
    queries.read('lessonplans', request.params.id).then(plans => {
        plans
            ? response.json({plans})
            : response.sendStatus(404)
    }).catch(console.error);
});

app.post("/users", (request, response) => {
    queries.create('users', request.body).then(users => {
        response.json({users});
    }).catch(console.error);
});

app.post("/lessontemplates", (request, response) => {
    queries.create('lesson_templates', request.body).then(templates => {
        response.json({templates});
    }).catch(console.error);
});

app.post("/lessonplans", (request, response) => {
    queries.create('lesson_plans', request.body).then(plans => {
        response.json({plans});
    }).catch(console.error);
});

app.post("/goals", (request, response) => {
    queries.create('goals', request.body).then(goals => {
        response.json({goals});
    }).catch(console.error);
});

app.post("/coach", (request, response) => {
    queries.create('coach', request.body).then(coach => {
        response.json({coach});
    }).catch(console.error);
});

app.post("/coachtemplates", (request, response) => {
    queries.create('coach_templates', request.body).then(coachTemplates => {
        response.json({coachTemplates});
    }).catch(console.error);
});

app.post("/reflections", (request, response) => {
    queries.create('reflections', request.body).then(reflections => {
        response.json({reflections});
    }).catch(console.error);
});

app.post("/components", (request, response) => {
    queries.create('components', request.body).then(components => {
        response.json({components});
    }).catch(console.error);
});

app.put("/users/:id", (request, response) => {
    queries.update('users', request.params.id, request.body).then(users => {
        response.json({users});
    }).catch(console.error);
});

app.put("/lessontemplates/:id", (request, response) => {
    queries.update('lesson_templates', request.params.id, request.body).then(templates => {
        response.json({templates});
    }).catch(console.error);
});

app.put("/lessonplans/:id", (request, response) => {
    queries.update('lesson_plans', request.params.id, request.body).then(plans => {
        response.json({plans});
    }).catch(console.error);
});

app.put("/goals/:id", (request, response) => {
    queries.update('goals', request.params.id, request.body).then(goals => {
        response.json({goals});
    }).catch(console.error);
});

app.put("/coach/:id", (request, response) => {
    queries.update('coach', request.params.id, request.body).then(coach => {
        response.json({coach});
    }).catch(console.error);
});

app.put("/coachtemplates/:id", (request, response) => {
    queries.update('coach_templates', request.params.id, request.body).then(coachTemplates => {
        response.json({coachTemplates});
    }).catch(console.error);
});

app.put("/reflections/:id", (request, response) => {
    queries.update('reflections', request.params.id, request.body).then(reflections => {
        response.json({reflections});
    }).catch(console.error);
});

app.delete("/users/:id", (request, response) => {
    queries.delete('users', request.params.id).then(() => {
        response.sendStatus(204);
    }).catch(console.error);
});

app.delete("/lessontemplates/:id", (request, response) => {
    queries.delete('lesson_templates', request.params.id).then(() => {
        response.sendStatus(204);
    }).catch(console.error);
});

app.delete("/lessonplans/:id", (request, response) => {
    queries.delete('lesson_plans', request.params.id).then(() => {
        response.sendStatus(204);
    }).catch(console.error);
});

app.delete("/goals/:id", (request, response) => {
    queries.delete('goals', request.params.id).then(() => {
        response.sendStatus(204);
    }).catch(console.error);
});

app.delete("/coach/:id", (request, response) => {
    queries.delete('coach', request.params.id).then(() => {
        response.sendStatus(204);
    }).catch(console.error);
});

app.delete("/coachtemplates/:id", (request, response) => {
    queries.delete('coach_templates', request.params.id).then(() => {
        response.sendStatus(204);
    }).catch(console.error);
});

app.delete("/reflections/:id", (request, response) => {
    queries.delete('reflections', request.params.id).then(() => {
        response.sendStatus(204);
    }).catch(console.error);
});


app.use((request, response) => {
    response.send(404);
});

module.exports = app;
