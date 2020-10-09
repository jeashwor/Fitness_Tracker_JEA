const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            name: {
                type: String,
                trim: true,
                required: "Must enter an exercise Name!"
            },
            type: {
                type: String,
                trim: true,
                required: "Must enter an exercise Type!"
            },
            weight: {
                type: Number,
                trim: true
            },
            sets: {
                type: Number,
                trim: true
            },
            reps: {
                type: Number,
                trim: true
            },
            duration: {
                type: Number,
                trim: true,
                required: "Must enter an exercise Duration!"
            },
            distance: {
                type: Number,
                trim: true
            }
        }
    ]
},
    {
        toJSON: {
            // include virtual properties when data is requested
            virtuals: true
        }
    }
);

// Add dynamically created property to schema
WorkoutSchema.virtual("totalDuration").get(function() {
    // "reduce" array of exercises down to just the sum of their durations
    return this.exercises.reduce((total, exercise) => {
      return total + exercise.duration;
    }, 0);
  });

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;