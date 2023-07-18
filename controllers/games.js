const Game = require("../models/game");
const Review = require("../models/review");

module.exports = {
  index,
  new: newGame,
};

async function index(req, res) {
  const games = await Game.find({});
  res.render("games/index", { title: "All Games", games });
}

async function newGame(req, res) {
  res.render("games/new", { title: "Add Game", errormsg: "" });
}
