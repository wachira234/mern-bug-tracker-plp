const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bugRoutes = require('./routes/bugs');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use('/bugs', bugRoutes);

// MongoDB Atlas Connection
const mongoURI = 'mongodb+srv://washira:washira@mernstackweek6.hda04.mongodb.net/bug-tracker?retryWrites=true&w=majority';

// Export app without starting the server
module.exports = app;

// Only run server if executed directly (not imported)
if (require.main === module) {
  mongoose.connect(mongoURI)
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch((err) => console.error('MongoDB connection error:', err));

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}
