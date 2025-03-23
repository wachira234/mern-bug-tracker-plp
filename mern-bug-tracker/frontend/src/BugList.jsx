import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BugItem from './BugItem';

const BugList = () => {
  const [bugs, setBugs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBugs = async () => {
      try {
        const response = await axios.get('/bugs');
        setBugs(response.data);
      } catch (err) {
        setError('Error fetching bugs');
      } finally {
        setLoading(false);
      }
    };

    fetchBugs();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Bug List</h2>
      <ul>
        {bugs.map((bug) => (
          <BugItem key={bug._id} bug={bug} />
        ))}
      </ul>
    </div>
  );
};

export default BugList;
