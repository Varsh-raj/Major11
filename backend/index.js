// const express = require('express');
// const dotenv = require('dotenv');
// const connectDB = require('./Config/db');
// const path = require('path');
// const cors = require('cors');
 
// // Load environment variables
// dotenv.config();
 

// // Middleware to parse incoming URL-encoded requests (form data)
// // Connect to the database
// connectDB();

// // Initialize Express app
// const app = express();

// // Middleware to parse JSON
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Farmer Routes
//  const userRoutes = require('./Routers/User');
//  app.use('/user', userRoutes);

// // Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./Config/db');
const path = require('path');
const cors = require('cors');
const multer = require('./Middleware/Upload');  // Assuming your multer config is here

// Load environment variables
dotenv.config();

// Connect to the database
connectDB();

// Initialize Express app
const app = express();
app.use(cors({ origin: 'http://localhost:3001' })); 
// Middleware to serve static files for uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

 

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Farmer Routes
const userRoutes = require('./Routers/User');
app.use('/user', userRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
