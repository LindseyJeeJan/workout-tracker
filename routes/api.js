const router = require("express").Router();
const Workout = require("../models/workout.js");

// retrieve all workouts
router.get("/api/workouts", (req, res) => {

});

// get a range of workouts
router.get("/api/workouts/range", (req, res) => {

});

// update a workout
router.put("/api/workouts/:id", (req, res) => {

});

// create a new workout
router.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err);
        });
});

module.exports = router;













