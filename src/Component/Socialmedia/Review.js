import React, { useState, useEffect } from "react";
import { CustomerReviews } from "./CustomerReviews";
import "./Review.css";

function Reviews() {
  const [reviews, setReviews] = useState(CustomerReviews);
  const [reviewIndex, setReviewIndex] = useState(0);
  const [newReview, setNewReview] = useState({ name: "", location: "", message: "" });

  const backBtnClick = () => {
    const newReviewIndex = reviewIndex <= 0 ? reviews.length - 1 : reviewIndex - 1;
    setReviewIndex(newReviewIndex);
  };

  const frontBtnClick = () => {
    const newReviewIndex = reviewIndex >= reviews.length - 1 ? 0 : reviewIndex + 1;
    setReviewIndex(newReviewIndex);
  };

  useEffect(() => {
    if (reviews.length > 0) {
      setReviewIndex((prevIndex) => (prevIndex >= reviews.length ? 0 : prevIndex));
    }

    const interval = setInterval(() => {
      setReviewIndex((prevIndex) => (prevIndex >= reviews.length - 1 ? 0 : prevIndex + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [reviews.length]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview.name && newReview.location && newReview.message) {
      setReviews([...reviews, newReview]);
      setNewReview({ name: "", location: "", message: "" });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  return (
    <div className="review-wrapper">
      <div className="review-section" id="reviews">
        {/* Heading for Website Reviews */}
        <h2 className="review-heading">Website Reviews</h2>

        <div className="rw-text-content">
          <p className="rw-text-title">
            More than <span className="rw-text-num">{reviews.length}+ Customers reviews</span>
          </p>

          <p className="rw-text-desc">Don't believe us? Check clients' words</p>

          <p className="rw-text-format">
            <span className="rw-text-quote1">''</span>
            <span className="rw-review">{reviews[reviewIndex]?.message}</span>
            <span className="rw-text-quote2">''</span>
          </p>

          <div className="rw-authors">
            <div className="rw-names">
              <p className="rw-reviewer-name">{reviews[reviewIndex]?.name}</p>
              <p className="rw-reviewer-place">{reviews[reviewIndex]?.location}</p>
            </div>

            <div className="rw-btns">
              <button className="rw-next-btn" type="button" onClick={backBtnClick}>
                ←
              </button>
              <button className="rw-next-btn" type="button" onClick={frontBtnClick}>
                →
              </button>
            </div>
          </div>
        </div>

        {/* Review Submission Form */}
        <form onSubmit={handleSubmit} className="review-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={newReview.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="location"
            placeholder="Your Location"
            value={newReview.location}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Review"
            value={newReview.message}
            onChange={handleChange}
            required
          />
          <button type="submit" className="submit-btn">
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
}

export default Reviews;
