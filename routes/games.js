const express = require("express");
const router = express.Router();

const gamesCtrl = require("../controllers/games");
const ensureLoggedIn = require("../config/ensureLoggedIn");

router.get("/", gamesCtrl.index);
router.get("/new", gamesCtrl.new);
router.get("/:id", gamesCtrl.show);
router.post("/", gamesCtrl.create);

module.exports = router;
