const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Name is Required"
  },
  type: {
    type: String,
    enum: {
      values: ['cardio','resistance']
    }
  },
  distance: {
    type: Number
  },
  duration: {
    type: Number
  },
  weight: {
    type: Number
  },
  sets: {
    type: Number
  },
  reps: {
    type: Number
  },
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;