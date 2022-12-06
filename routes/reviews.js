const express = require("express");
const router = express.Router({ mergeParams: true });
const Campground = require("../models/campground");
const Review = require("../models/review");
const { validateReview, isLoggedIn, isReviewAuthor } = require("../middleware");

const { reviewSchema } = require("../schemas.js");
const ExpressError = require("../utils/ExpressError");
const catchAsync = require("../utils/catchAsync");
const campground = require("../models/campground");
const reviews = require("../controllers/reviews");

// createing a review
router.post("/", isLoggedIn, validateReview, catchAsync(reviews.createReview));

// deleteing a review
router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  catchAsync(reviews.deleteReview)
);

module.exports = router;
