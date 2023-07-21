const Game = require("../models/game");
const Review = require("../models/review");

module.exports = {
  index,
  show,
  new: newGame,
  create,
  delete: deleteGame,
  edit,
  update,
};

async function index(req, res) {
  const games = await Game.find({});
  res.render("games/index", { title: "All Games", games });
}

async function show(req, res) {
  const game = await Game.findById(req.params.id).populate("reviews");
  const reviews = await Review.find({});
  res.render("games/show", { title: game.title, game, reviews });
}

async function newGame(req, res) {
  res.render("games/new", { title: "New Game Form", errormsg: "" });
}

async function create(req, res) {
  req.body.releaseDate += "T00:00";
  try {
    const game = await Game.create(req.body);
    res.redirect(`/games/${game._id}`);
  } catch (err) {
    console.log(err);
    res.render("games/new", { errorMsg: err.message });
  }
}

async function deleteGame(req, res) {
  const game = await Game.findById(req.params.id);
  if (!game) return res.redirect("/games");
  try {
    await game.deleteOne();
    res.redirect("/games");
  } catch (err) {
    console.log(err);
    res.redirect(`/games/${game._id}`);
  }
}

async function edit(req, res) {
  const game = await Game.findById(req.params.id);
  if (!game) return res.redirect("/games");
  res.render("games/update", { title: "Edit " + game.title, game });
}

async function update(req, res) {
  const game = await Game.findById(req.params.id);
  const update = req.body;
  const updatedGame = await Game.findByIdAndUpdate(game, update, {
    new: true,
    runValidators: true,
  });
  try {
    res.redirect(`/games/${game._id}`);
  } catch (err) {
    console.log(err);
  }
}
