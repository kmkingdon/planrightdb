const express = require("express");
const app = express();
const queries = require("./queries");
const bodyParser = require("body-parser");
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

app.get("/teachers", (request, response) => {
    queries.list1().then(teachers => {
        response.json({teachers});
    }).catch(console.error);
});

app.get("/students", (request, response) => {
    queries.list2().then(students => {
        response.json({students});
    }).catch(console.error);
});

app.get("/goals", (request, response) => {
    queries.list3().then(goals => {
        response.json({goals});
    }).catch(console.error);
});

app.get("/assignments", (request, response) => {
    queries.list4().then(assignments => {
        response.json({assignments});
    }).catch(console.error);
});

app.get("/assignments/:id", (request, response) => {
    queries.read(request.params.id).then(student => {
        student
            ? response.json({student})
            : response.sendStatus(404)
    }).catch(console.error);
});

app.post("/goals", (request, response) => {
    queries.create1(request.body).then(goals => {
        response.status(201).json({goals});
    }).catch(console.error);
});

app.post("/assignments", (request, response) => {
    queries.create2(request.body).then(assignments => {
        response.status(201).json({assignments});
    }).catch(console.error);
});

app.put("/goals/:id", (request, response) => {
    queries.update1(request.params.id, request.body).then(goals => {
        response.json({goals});
    }).catch(console.error);
});

app.put("/assignments/:id", (request, response) => {
    queries.update2(request.params.id, request.body).then(assignments => {
        response.json({assignments});
    }).catch(console.error);
});

app.delete("/goals/:id", (request, response) => {
    queries.delete1(request.params.id).then(() => {
        response.sendStatus(204);
    }).catch(console.error);
});

app.delete("/assignments/:id", (request, response) => {
    queries.delete2(request.params.id).then(() => {
        response.sendStatus(204);
    }).catch(console.error);
});


app.use((request, response) => {
    response.send(404);
});

module.exports = app;
