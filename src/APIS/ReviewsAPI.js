import apiClient from "./axiosConfig";
import { encryptData, decryptData } from "../utils/CryptoUtils"; // Utility for encryption and decryption

export const fetchAllReviews = async () => {
  try {
    const response = await apiClient.get("/reviews");
    // Decrypt the response data before returning
    return decryptData(response.data);
  } catch (error) {
    console.error("Error fetching reviews:", error);
    throw error;
  }
};

export const addReview = async (reviewData) => {
  try {
    // Encrypt the review data before sending
    const encryptedData = encryptData(reviewData);
    const response = await apiClient.post("/reviews", encryptedData);
    // Decrypt the response data before returning
    return decryptData(response.data);
  } catch (error) {
    console.error("Error adding review:", error);
    throw error;
  }
};
