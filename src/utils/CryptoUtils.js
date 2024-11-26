import CryptoJS from "crypto-js";

// Use an environment variable or a secure source for the secret key
const SECRET_KEY = process.env.REACT_APP_SECRET_KEY || "your-secret-key";

/**
 * Encrypts the given data using AES encryption.
 *
 * @param {Object} data - The data to encrypt.
 * @returns {string} - The encrypted data as a Base64 string.
 */
export const encryptData = (data) => {
  try {
    const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();

    // Log the encrypted data for debugging (disable in production)
    console.log("Encrypted Data Sent to Backend:", encryptedData);

    return encryptedData;
  } catch (error) {
    console.error("Error encrypting data:", error);
    throw error;
  }
};

/**
 * Decrypts the given Base64-encoded encrypted data using AES decryption.
 *
 * @param {string} encryptedData - The encrypted data to decrypt.
 * @returns {Object|null} - The decrypted data as an object, or null if decryption fails.
 */
export const decryptData = (encryptedData) => {
  try {
    const bytes = CryptoJS.AES.decrypt(encryptedData, SECRET_KEY);
    const decryptedString = bytes.toString(CryptoJS.enc.Utf8);

    if (!decryptedString) {
      throw new Error("Decryption produced an empty string");
    }

    return JSON.parse(decryptedString);
  } catch (error) {
    console.error("Decryption failed:", error);
    return null; // Return null for graceful error handling
  }
};
