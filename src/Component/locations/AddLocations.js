import React, { useState } from 'react';
import { addLocation } from '../../api/LocationAPI';

const AddLocation = () => {
  const [location, setLocation] = useState({ name: '', address: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    addLocation(location)
      .then(() => alert('Location added!'))
      .catch((error) => console.error('Error adding location:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={location.name}
        onChange={(e) => setLocation({ ...location, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Address"
        value={location.address}
        onChange={(e) => setLocation({ ...location, address: e.target.value })}
      />
      <button type="submit">Add Location</button>
    </form>
  );
};

export default AddLocation;
