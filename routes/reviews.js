const express = require("express");
const router = express.Router();

const reviewCtrl = require("../controllers/reviews");
const ensureLoggedIn = require("../config/ensureLoggedIn");

router.get("/games/:id/reviews/new", ensureLoggedIn, reviewCtrl.new);
router.get("/reviews/:id", reviewCtrl.show);
router.post("/games/:id/reviews", ensureLoggedIn, reviewCtrl.create);
router.delete("/reviews/:id", ensureLoggedIn, reviewCtrl.delete);

module.exports = router;
