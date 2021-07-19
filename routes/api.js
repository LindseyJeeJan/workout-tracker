const router = require("express").Router();

const db = require("../models/workout");

// retrieve all workouts
router.get("/api/workouts", (req, res) => {
  db.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
});

// get a range of workouts
router.get("/api/workouts/range", (req, res) => {
    db.find({})
    .then(dbWorkout => {
          res.json(dbWorkout);
      })
  .catch(err => {
          res.json(err);
     });
});

// update a workout
router.put("/api/workouts/:id", (req, res) => {
    db.findOneAndUpdate(
        { _id: req.params.id }, 
        {exercises: req.body }
    )
    .then((dbWorkout) => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

// create a new workout
router.post("/api/workouts/", ({ body }, res) => {
    db.create(body)
      .then(dbWorkout => {
          res.json(dbWorkout);
      })
      .catch(err => {
          res.json(err);
      });
});

module.exports = router;













