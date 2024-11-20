import axios from "axios";

// Create an Axios instance with default configurations
const apiClient = axios.create({
  baseURL: "http://localhost:8087/api", // Replace with your backend API base URL
  timeout: 5000, // Request timeout (optional)
  headers: {
    "Content-Type": "application/json", // Default header for JSON APIs
  },
});

// Request interceptor (optional, for logging or attaching tokens)
apiClient.interceptors.request.use(
  (config) => {
    console.log(`Sending request to ${config.url}`);
    return config;
  },
  (error) => {
    console.error("Error in request:", error);
    return Promise.reject(error);
  }
);

// Response interceptor (optional, for logging or error processing)
apiClient.interceptors.response.use(
  (response) => {
    return response; // Return the response if no error
  },
  (error) => {
    console.error("API call error:", error.response || error.message);
    return Promise.reject(error.response || error.message);
  }
);

export default apiClient;
