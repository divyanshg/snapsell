const { Router } = require("express");

const login = require("../../controllers/Auth/login");
const register = require("../../controllers/Auth/register");

const isAuthenticated = require("../../middlewares/isAuthenticated");

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.get("/user/current", isAuthenticated, (req, res) => {
  res.send(req.auth);
});

module.exports = router;
