import apiClient from "./axiosConfig"; // Existing Axios configuration
import { encryptData, decryptData } from "./utils/CryptoUtils"; // Encryption utility

/**
 * Send login request to the backend.
 * @param {Object} loginData - The login request data.
 * @returns {Promise<Object>} - Decrypted response from the backend.
 */
export const sendLoginRequest = async (loginData) => {
  try {
    // Encrypt the data
    const encryptedData = encryptData(loginData);

    // Log the encrypted data (for debugging in development only)
    console.log("Encrypted Data Sent to Backend:", encryptedData);

    // Send the encrypted data to the backend
    const response = await apiClient.post("/login", encryptedData);

    // Decrypt the backend response
    const decryptedResponse = decryptData(response.data);

    // Log the decrypted response (for debugging in development only)
    console.log("Decrypted Response from Backend:", decryptedResponse);

    return decryptedResponse; // Return the decrypted response to the caller
  } catch (error) {
    console.error("Error during login request:", error);
    throw error; // Propagate the error for the caller to handle
  }
};
