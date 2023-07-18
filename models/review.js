const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  rating: {
    type: Number,
    min: 1,
    max: 100,
  },
  summary: {
    type: String,
    required: true,
  },
  essay: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  userName: String,
  UserAvatar: String,
});

module.exports = mongoose.model("Review", reviewSchema);
