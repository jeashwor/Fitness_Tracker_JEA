const db = require("../models");

module.exports = function(app) {
  app.get("/api/workouts", function(req, res) {
      console.log(db.Workout);
    db.Workout.find({}).then(data => {
        dbData = data;
        console.log("This is the DB response " + dbData);
      res.json(dbData);
    });
  });

//   app.put("/api/workouts/:id", function(req, res) {
//     db.Image.updateOne({ _id: req.params.id }, { rating: req.body.rating }).then(function(dbImage) {
//       res.json(dbImage);
//     });
//   });
};
