import apiClient from "./axiosConfig"; // Import the Axios configuration

/**
 * Fetch all reviews from the backend.
 * @returns {Promise<Array>} A promise that resolves to an array of reviews.
 */
export const fetchAllReviews = async () => {
  try {
    const response = await apiClient.get("/reviews");
    return response.data; // Return the list of reviews
  } catch (error) {
    console.error("Error fetching reviews:", error);
    throw error; // Propagate the error to the caller
  }
};

/**
 * Add a new review to the backend.
 * @param {Object} reviewData - The review data to add.
 * @returns {Promise<Object>} A promise that resolves to the added review.
 */
export const addReview = async (reviewData) => {
  try {
    const response = await apiClient.post("/reviews", reviewData);
    return response.data; // Return the added review
  } catch (error) {
    console.error("Error adding review:", error);
    throw error; // Propagate the error to the caller
  }
};
