import express from "express";
import isAuth from "../middlewares/isAuth.js";
import {
  addReview,
  getItemReviews,
  canUserReview,
  updateReview,
  deleteReview,
} from "../controllers/review.controllers.js";

const reviewRouter = express.Router();

// Get reviews for an item (public)
reviewRouter.get("/item/:itemId", isAuth, getItemReviews);

// Check if user can review an item
reviewRouter.get("/can-review/:itemId", isAuth, canUserReview);

// Add a review
reviewRouter.post("/add/:itemId", isAuth, addReview);

// Update a review
reviewRouter.put("/update/:reviewId", isAuth, updateReview);

// Delete a review
reviewRouter.delete("/delete/:reviewId", isAuth, deleteReview);

export default reviewRouter;
