import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getLocationById, deleteLocation } from '../../api/LocationAPI'; // Ensure path matches your directory structure
import OSMapComponent from '../Contactus/OSMapComponent'; // Update the path to point to OSMapComponent

const LocationDetails = () => {
  const { id } = useParams(); // Get location ID from route parameters
  const navigate = useNavigate(); // For navigation
  const [location, setLocation] = useState(null); // Location data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch location details on mount
  useEffect(() => {
    getLocationById(id)
      .then((response) => {
        setLocation(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching location details:', error);
        setError('Failed to load location details.');
        setLoading(false);
      });
  }, [id]);

  // Delete location handler
  const handleDelete = () => {
    deleteLocation(id)
      .then(() => {
        alert('Location deleted successfully!');
        navigate('/locations'); // Navigate back to location list
      })
      .catch((error) => {
        console.error('Error deleting location:', error);
        alert('Failed to delete location.');
      });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Location Details</h1>
      {location && (
        <div>
          <h2>{location.name}</h2>
          <p><strong>Address:</strong> {location.address}</p>
          <p><strong>Description:</strong> {location.description}</p>
          <p><strong>Coordinates:</strong> {location.latitude}, {location.longitude}</p>

          {/* Show the location on a map */}
          <OSMapComponent locations={[location]} />

          {/* Edit and Delete buttons */}
          <button onClick={() => navigate(`/locations/${id}/edit`)}>Edit</button>
          <button onClick={handleDelete} style={{ marginLeft: '10px', color: 'red' }}>Delete</button>

          {/* Back to list */}
          <button onClick={() => navigate('/locations')} style={{ marginLeft: '10px' }}>
            Back to List
          </button>
        </div>
      )}
    </div>
  );
};

export default LocationDetails;
