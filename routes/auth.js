const express = require("express");
const { 
    getAllUsersController, 
    registerUser, 
    authToken,
    loginUser,
    logOutUser
} = require("../controllers/authController");
const { verifyToken } = require("../midlewares/jwt");

const router = express.Router();

router.get("/", verifyToken, authToken);
router.get("/users", getAllUsersController);
router.post("/login", loginUser);
router.post("/register", registerUser);
router.post("/signout", logOutUser);

module.exports = router;
