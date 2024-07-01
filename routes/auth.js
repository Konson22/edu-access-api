const express = require("express");

const { verifyToken } = require("../midlewares/jwt");
const { getUserCredientials, registerUser, getAllUsersController, loginUser } = require("../controllers/authController");

const router = express.Router();

router.get("/", getUserCredientials);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/students", getAllUsersController);

module.exports = router;
