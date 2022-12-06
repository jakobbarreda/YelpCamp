const { render } = require("ejs");
const { application } = require("express");
const express = require("express");
const router = express.Router();
const User = require("../models/user");
const catchAsync = require("../utils/catchAsync");
const passport = require("passport");
const users = require("../controllers/users");

// render/create a new registered user
router
  .route("/register")
  .get(users.renderRegister)
  .post(catchAsync(users.register));

// render/login the user
router
  .route("/login")
  .get(users.renderLogin)
  .post(
    passport.authenticate("local", {
      failureFlash: true,
      failureRedirect: "/login",
      keepSessionInfo: true,
    }),
    users.login
  );

// logging out the user
router.get("/logout", users.logout);

module.exports = router;
