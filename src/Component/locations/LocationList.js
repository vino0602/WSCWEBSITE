import React, { useEffect, useState } from 'react';
import { getAllLocations } from '../../api/LocationAPI';

const LocationList = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    getAllLocations()
      .then((response) => setLocations(response.data))
      .catch((error) => console.error('Error fetching locations:', error));
  }, []);

  return (
    <div>
      <h2>Locations</h2>
      <ul>
        {locations.map((location) => (
          <li key={location.id}>{location.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default LocationList;
