const router = require("express").Router();
const db = require("../models");

// retrieve all workouts
router.get("/api/workouts", (req, res) => {
    db.Workout.aggregate([
        {
        $addFields: {
            "totalDuration": 
                {
                    $sum: "$exercises.duration"
                },
            },
        },
    ])
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
});

// get a range of workouts
router.get("/api/workouts/range", (req, res) => {
    db.Workout.aggregate([
            {
            $addFields: {
                "totalDuration": 
                    {
                        $sum: "$exercises.duration"
                    },
                },
            },
        ])
        .limit(7)
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.json(err);
        });
});

// update a workout
router.put("/api/workouts/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(
        { _id: req.params.id }, 
        { $push: { exercise: req.body } },
        {new: true}
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
    db.Workout.create(body)
      .then(dbWorkout => {
          res.json(dbWorkout);
      })
      .catch(err => {
          res.json(err);
      });
});

module.exports = router;













