import axios from 'axios';

// Create an Axios instance with default configurations
const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080/api', // Replace with your backend API base URL
    timeout: 5000, // Optional timeout
    withCredentials: true, // Include cookies for cross-origin requests if needed
    headers: {
        'Content-Type': 'application/json', // Default header for JSON APIs
    },
});

// Request Interceptor
axiosInstance.interceptors.request.use(
    (config) => {
        // Retrieve token from localStorage or any secure storage
        const token = localStorage.getItem('authToken');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`; // Attach the token to headers
        }
        console.log(`Sending request to ${config.url}`);
        return config;
    },
    (error) => {
        console.error('Error in request:', error);
        return Promise.reject(error);
    }
);

// Response Interceptor
axiosInstance.interceptors.response.use(
    (response) => {
        // Directly return the response if successful
        return response;
    },
    (error) => {
        // Handle errors and standardize them for debugging
        const standardizedError = {
            message: error.response?.data?.message || error.message,
            status: error.response?.status || 500,
            data: error.response?.data || null,
        };
        console.error('API call error:', standardizedError);
        return Promise.reject(standardizedError); // Reject with standardized error
    }
);

export default axiosInstance;
