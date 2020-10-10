const db = require("../models");

module.exports = (app) => {
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({}).then(data => {
            const dbData = data;
            res.json(dbData);
        });
    });

    app.post("/api/workouts", ({ body },res) => {
        console.log("this is consol log of body " + body);
        db.Workout.create(body).then(data => {
            console.log(data);
            res.json(data);
        });
    });

    app.put("/api/workouts/:id", (req, res) => {
        db.Workout.findByIdAndUpdate({ _id: req.params.id }, { $push: { exercises: req.body } }, { new: true}).then(function (dbWorkouts) {
            res.json(dbWorkouts);
        });
    });

    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({}).then(data => {
            const dbData = data;
            res.json(dbData);
        });
    });
};
