import apiClient from "./axiosConfig";
import { encryptData, decryptData } from "../utils/CryptoUtils"; 

export const fetchCookies = async () => {
  try {
    const response = await apiClient.get("/cookies");
    // Decrypt the response data before returning
    return decryptData(response.data);
  } catch (error) {
    console.error("Error fetching cookies:", error);
    throw error;
  }
};

export const addCookie = async (cookieData) => {
  try {
    // Encrypt the data before sending
    const encryptedData = encryptData(cookieData);
    const response = await apiClient.post("/cookies", encryptedData);
    return decryptData(response.data); // Decrypt the response data
  } catch (error) {
    console.error("Error adding cookie:", error);
    throw error;
  }
};

export const fetchCookieByName = async (cookieName) => {
  try {
    const response = await apiClient.get(`/cookies/${cookieName}`);
    return decryptData(response.data); // Decrypt the response data
  } catch (error) {
    console.error(`Error fetching cookie '${cookieName}':`, error);
    throw error;
  }
};

export const deleteCookie = async (cookieName) => {
  try {
    const response = await apiClient.delete(`/cookies/${cookieName}`);
    return decryptData(response.data); // Decrypt the success message
  } catch (error) {
    console.error(`Error deleting cookie '${cookieName}':`, error);
    throw error;
  }
};
