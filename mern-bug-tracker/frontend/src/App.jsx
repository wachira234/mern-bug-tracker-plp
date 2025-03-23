import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BugForm from './BugForm';

const App = () => {
  const [bugs, setBugs] = useState([]);

  useEffect(() => {
    axios.get('/bugs').then((res) => setBugs(res.data));
  }, []);

  const handleSubmit = (bug) => {
    axios.post('/bugs', bug).then((res) => setBugs([...bugs, res.data]));
  };

  return (
    <div>
      <h1>Bug Tracker</h1>
      <BugForm onSubmit={handleSubmit} />
      <ul>
        {bugs.map((bug) => (
          <li key={bug.id}>{bug.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
