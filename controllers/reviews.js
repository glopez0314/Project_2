const Game = require("../models/game");
const Review = require("../models/review");

module.exports = {
  show,
  new: newReview,
  create,
  delete: deleteReview,
};

async function show(req, res) {
  const review = await Review.findById(req.params.id);
  res.render("games/reviews/show", {
    title: review.userName + "'s Review",
    review,
  });
}

async function newReview(req, res) {
  const game = await Game.findById(req.params.id);
  try {
    res.render("games/reviews/new", { title: "Add Review", game });
  } catch (err) {
    console.log(err);
    res.render("games/show", { errorMsg: err.message });
  }
}

async function create(req, res) {
  const game = await Game.findById(req.params.id);
  console.log(req.user);
  req.body.user = req.user._id;
  req.body.userName = req.user.name;
  req.body.userAvatar = req.user.avatar;
  const review = await Review.create(req.body);
  game.reviews.push(review);
  try {
    await game.save();
    res.redirect(`/games/${game._id}`);
  } catch (err) {
    console.log(err);
  }
}

async function deleteReview(req, res) {
  const review = await Review.findById(req.params.id);
  try {
    await review.deleteOne();
    res.redirect("/games");
  } catch (err) {
    console.log(err);
    res.redirect(`/reviews/${review._id}`);
  }
}
