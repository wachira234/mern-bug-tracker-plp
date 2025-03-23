import React from 'react';
import axios from 'axios';

const BugItem = ({ bug }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`/bugs/${bug._id}`);
      window.location.reload(); // Reload the page to refresh the bug list
    } catch (error) {
      console.error('Error deleting bug:', error);
    }
  };

  return (
    <li>
      <h3>{bug.title}</h3>
      <p>{bug.description}</p>
      <p>Status: {bug.status}</p>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default BugItem;
