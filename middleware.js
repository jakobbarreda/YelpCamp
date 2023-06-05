import { campgroundSchema, reviewSchema } from "./schemas.js";
import ExpressError from "./utils/ExpressError";
import { findById } from "./models/campground";
import { findById as _findById } from "./models/review";

export function isLoggedIn(req, res, next) {
  if (!req.isAuthenticated()) {
    req.session.returnTo = req.originalUrl;
    req.flash("error", "Must be signed in");
    return res.redirect("/login");
  }
  next();
}

export function validateCampground(req, res, next) {
  const { error } = campgroundSchema.validate(req.body);
  if (error) {
    const msg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(msg, 400);
  } else {
    next();
  }
}

export async function isAuthor(req, res, next) {
  const { id } = req.params;
  const campground = await findById(id);
  if (!campground.author.equals(req.user._id)) {
    req.flash("error", "Permission Denied");
    return res.redirect(`/campgrounds/${id}`);
  }
  next();
}

export async function isReviewAuthor(req, res, next) {
  const { id, reviewId } = req.params;
  const review = await _findById(reviewId);
  if (!review.author.equals(req.user._id)) {
    req.flash("error", "Permission Denied");
    return res.redirect(`/campgrounds/${id}`);
  }
  next();
}

export function validateReview(req, res, next) {
  const { error } = reviewSchema.validate(req.body);
  if (error) {
    const msg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(msg, 400);
  } else {
    next();
  }
}
