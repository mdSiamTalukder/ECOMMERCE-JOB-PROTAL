const express = require("express");

const adminMiddleware = require("../middleware/adminMiddleware");
const { getUsers } = require("../controllers/adminController");

const router = express.Router();

router.get("/dashboard", adminMiddleware, (req, res) => {
  res.json({
    success: true,
    message: "Welcome to Admin Dashboard",
    admin: req.user,
  });
});

router.get("/users", adminMiddleware, getUsers);

module.exports = router;
