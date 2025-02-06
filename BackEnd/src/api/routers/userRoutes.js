const express = require("express");
const { updateFavoriteGenres } = require("../controllers/userController");
const { getUserById } = require("../controllers/userController");
const router = express.Router();

router.put("/:userId/favorite", updateFavoriteGenres);
router.get("/:userId", getUserById);

module.exports = router;
