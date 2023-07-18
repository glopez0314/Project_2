const Game = require("../models/game");
const Review = require("../models/review");
const moment = require("moment");

module.exports = {
  index,
  show,
  new: newGame,
  create,
};

async function index(req, res) {
  const games = await Game.find({});
  res.render("games/index", { title: "All Games", games });
}

async function show(req, res) {
  const game = await Game.findById(req.params.id);
  res.render("games/show", { title: game.title, game });
}

async function newGame(req, res) {
  res.render("games/new", { title: "New Game Form", errormsg: "" });
}

async function create(req, res) {
  try {
    const game = await Game.create(req.body);
    res.redirect("/games");
  } catch (err) {
    console.log(err);
    res.render("games/new", { errorMsg: err.message });
  }
}
