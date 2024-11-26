import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'; // Add Routes and Route for navigation

import AddLocations from '../Component/locations/AddLocations';
import DeleteLocations from '../Component/locations/DeleteLocations';
import UpdateLocations from '../Component/locations/UpdateLocations';
import LocationDetails from '../Component/locations/LocationDetails';
import LocationList from '../Component/locations/LocationList';
import { getAllLocations } from '../api/LocationAPI'; // Corrected path to API file

const LocationsPage = () => {
  const [locations, setLocations] = useState([]);
  const navigate = useNavigate();

  // Fetch location data on mount
  useEffect(() => {
    getAllLocations()
      .then((response) => setLocations(response.data))
      .catch((error) => console.error('Error fetching locations:', error));
  }, []);

  // Navigate to location details
  const handleViewDetails = (id) => {
    navigate(`/locations/${id}`); // Navigate to the location details route
  };

  return (
    <div>
      <h1>Locations Management</h1>

      <Routes>
        {/* Default route: Map, Location List, and Add Location */}
        <Route
          path="/"
          element={
            <div>
              <LocationList locations={locations} onViewDetails={handleViewDetails} />
              <AddLocations />
              <DeleteLocations />
              <UpdateLocations />
            </div>
          }
        />

        {/* Route for Location Details */}
        <Route path=":id" element={<LocationDetails />} />
      </Routes>
    </div>
  );
};

export default LocationsPage;
