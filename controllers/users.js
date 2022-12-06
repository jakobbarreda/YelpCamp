const User = require("../models/user");

// render the register form
module.exports.renderRegister = (req, res) => {
  res.render("users/register");
};

// register a user
module.exports.register = async (req, res, next) => {
  try {
    const { email, username, password } = req.body;
    const user = new User({ email, username });
    const registeredUser = await User.register(user, password);
    req.login(registeredUser, (err) => {
      if (err) return next(err);
      req.flash("success", "Welcome to Yelp Camp");
      res.redirect("/campgrounds");
    });
  } catch (e) {
    req.flash("error", e.message);
    res.redirect("register");
  }
};

// render the login page
module.exports.renderLogin = (req, res) => {
  res.render("users/login");
};

// logging in the user
module.exports.login = (req, res) => {
  req.flash("success", "welcome back");
  const redirectUrl = req.session.returnTo || "/campgrounds";
  delete req.session.returnTo;
  res.redirect(redirectUrl);
};

// logging out the user
module.exports.logout = (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    req.flash("success", "Logged Out");
    res.redirect("/campgrounds");
  });
};
