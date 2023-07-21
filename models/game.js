const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    releaseDate: {
      type: Date,
      required: true,
    },
    genre: {
      type: String,
      enum: [
        "Action",
        "Adventure",
        "RPG",
        "Shooter",
        "Horror",
        "Sports",
        "Fighting",
        "Racing",
        "Simulation",
        "Puzzle",
      ],
      required: true,
    },
    reviews: [
      {
        type: Schema.Types.ObjectId,
        ref: "Review",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Game", gameSchema);
