const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  releaseYear: {
    type: Date,
    required: true,
  },
  genre: {
    type: String,
    enmu: 
  },
}, {
    timestamps: true
});
