const db = require("../models");

module.exports = (app) => {
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({}).then(data => {
            const dbData = data;
            res.json(dbData);
        });
    });

    app.put("/api/workouts/:id", (req, res) => {
        db.Workout.updateOne({ _id: req.params.id }, { exercises: req.body }).then(function (dbWorkouts) {
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
