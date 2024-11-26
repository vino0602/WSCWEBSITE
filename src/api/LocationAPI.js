import axios from 'axios';

// Base URL for the API
const API_BASE_URL = 'https://your-backend-api.com/api'; // Replace with your actual backend URL

// Function to get all locations
export const getAllLocations = () => {
  return axios.get(`${API_BASE_URL}/locations`);
};

// Function to get a location by ID
export const getLocationById = (id) => {
  return axios.get(`${API_BASE_URL}/locations/${id}`);
};

// Function to add a new location
export const addLocation = (locationData) => {
  return axios.post(`${API_BASE_URL}/locations`, locationData);
};

// Function to update a location by ID
export const updateLocation = (id, updatedLocationData) => {
  return axios.put(`${API_BASE_URL}/locations/${id}`, updatedLocationData);
};

// Function to delete a location by ID
export const deleteLocation = (id) => {
  return axios.delete(`${API_BASE_URL}/locations/${id}`);
};
