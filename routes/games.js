const express = require("express");
const router = express.Router();

const gamesCtrl = require("../controllers/games");
const ensureLoggedIn = require("../config/ensureLoggedIn");

router.get("/", gamesCtrl.index);
router.get("/new", ensureLoggedIn, gamesCtrl.new);
router.get("/:id", gamesCtrl.show);
router.get("/:id/edit", ensureLoggedIn, gamesCtrl.edit);
router.post("/", ensureLoggedIn, gamesCtrl.create);
router.post("/:id/update", ensureLoggedIn, gamesCtrl.update);
router.delete("/:id", ensureLoggedIn, gamesCtrl.delete);

module.exports = router;
