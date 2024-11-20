import React, { useState, useEffect } from "react";
import { fetchAllReviews, addReview } from "../services/ReviewsAPI"; // Adjust relative path

const ReviewsManager = () => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({
    name: "",
    email: "",
    location: "",
    reviews: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    fetchAllReviews()
      .then((data) => setReviews(data))
      .catch(() => setError("Failed to fetch reviews"));
  }, []);

  const handleAddReview = (e) => {
    e.preventDefault();
    addReview(newReview)
      .then((review) => {
        setReviews([...reviews, review]);
        setNewReview({ name: "", email: "", location: "", reviews: "" });
        setError("");
      })
      .catch(() => setError("Failed to add review"));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  return (
    <div>
      <h1>Reviews Manager</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>
            <strong>{review.name}</strong> ({review.email}, {review.location}):{" "}
            {review.reviews}
          </li>
        ))}
      </ul>
      <h2>Add a New Review</h2>
      <form onSubmit={handleAddReview}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={newReview.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={newReview.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Your Location"
          value={newReview.location}
          onChange={handleInputChange}
        />
        <textarea
          name="reviews"
          placeholder="Your Review"
          value={newReview.reviews}
          onChange={handleInputChange}
          required
        ></textarea>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default ReviewsManager;
