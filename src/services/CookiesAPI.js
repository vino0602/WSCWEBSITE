import apiClient from "./axiosConfig"; // Import the configured Axios instance

/**
 * Fetch all cookies from the backend.
 * @returns {Promise<Array>} A promise that resolves to an array of cookies.
 */
export const fetchCookies = async () => {
  try {
    const response = await apiClient.get("/cookies");
    return response.data; // Return the cookies data
  } catch (error) {
    console.error("Error fetching cookies:", error);
    throw error; // Rethrow the error to be handled by the caller
  }
};

/**
 * Add a new cookie to the backend.
 * @param {Object} cookieData - The cookie data to add.
 * @returns {Promise<Object>} A promise that resolves to the added cookie.
 */
export const addCookie = async (cookieData) => {
  try {
    const response = await apiClient.post("/cookies", cookieData);
    return response.data; // Return the added cookie
  } catch (error) {
    console.error("Error adding cookie:", error);
    throw error; // Rethrow the error to be handled by the caller
  }
};

/**
 * Fetch a specific cookie by its name.
 * @param {string} cookieName - The name of the cookie to fetch.
 * @returns {Promise<Object>} A promise that resolves to the cookie data.
 */
export const fetchCookieByName = async (cookieName) => {
  try {
    const response = await apiClient.get(`/cookies/${cookieName}`);
    return response.data; // Return the cookie data
  } catch (error) {
    console.error(`Error fetching cookie '${cookieName}':`, error);
    throw error; // Rethrow the error to be handled by the caller
  }
};

/**
 * Delete a cookie by its name.
 * @param {string} cookieName - The name of the cookie to delete.
 * @returns {Promise<string>} A promise that resolves to the success message.
 */
export const deleteCookie = async (cookieName) => {
  try {
    const response = await apiClient.delete(`/cookies/${cookieName}`);
    return response.data; // Return the success message
  } catch (error) {
    console.error(`Error deleting cookie '${cookieName}':`, error);
    throw error; // Rethrow the error to be handled by the caller
  }
};
