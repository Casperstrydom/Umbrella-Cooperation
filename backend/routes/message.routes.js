import express from 'express';
import { sendMessage, getMessages } from '../controllers/message.controller.js';  // Import getMessages here
import protectRoute from '../middleware/protectRoute.js';

const router = express.Router();

// Use the getMessages controller in the route
router.get('/:id', protectRoute, getMessages);  // Change the route to '/conversation/:id'

// POST request for sending a message
router.post('/sent/:id', protectRoute, sendMessage);

export default router;
