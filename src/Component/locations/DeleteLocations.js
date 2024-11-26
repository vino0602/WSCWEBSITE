import React from 'react';
import { deleteLocation } from '../../api/LocationAPI';

const DeleteLocation = ({ id, onDelete }) => {
  const handleDelete = () => {
    deleteLocation(id)
      .then(() => {
        alert('Location deleted!');
        onDelete();
      })
      .catch((error) => console.error('Error deleting location:', error));
  };

  return <button onClick={handleDelete}>Delete</button>;
};

export default DeleteLocation;
