import React, { useState, useEffect } from 'react';
import { getLocationById, updateLocation } from '../../api/LocationAPI';

const UpdateLocations = ({ id }) => {
  const [location, setLocation] = useState({ name: '', address: '' });

  useEffect(() => {
    getLocationById(id)
      .then((response) => setLocation(response.data))
      .catch((error) => console.error('Error fetching location:', error));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateLocation(id, location)
      .then(() => alert('Location updated!'))
      .catch((error) => console.error('Error updating location:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={location.name}
        onChange={(e) => setLocation({ ...location, name: e.target.value })}
      />
      <input
        type="text"
        value={location.address}
        onChange={(e) => setLocation({ ...location, address: e.target.value })}
      />
      <button type="submit">Update Location</button>
    </form>
  );
};

export default UpdateLocations;
