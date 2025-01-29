import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth.routes.js';
import messagesRoutes from './routes/message.routes.js'; 
import userRoutes from './routes/user.routes.js'; 


import mongoose from 'mongoose';

const app = express();

dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI; // Ensure your .env file has this variable set

// Function to connect to MongoDB
const connectToMongoDB = async () => {
    try {
        await mongoose.connect(MONGO_URI); // No options required
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1); // Exit process with failure
    }
};

// Middleware to parse incoming JSON requests
app.use(express.json()); // Ensure this is before your routes
app.use(cookieParser()); // Ensure this is before your routes
// Routes
app.use('/api/auth', authRoutes);
app.use('/api/messages', messagesRoutes);
app.use('/api/users', userRoutes);

// Start the server
app.listen(PORT, async () => {
    await connectToMongoDB();
    console.log(`Server running on port ${PORT}`);
});
