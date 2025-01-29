import Conversation from '../models/conversation.model.js';
import Message from '../models/message.model.js';

export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user_id;

        if (!receiverId || !message) {
            return res.status(400).json({ error: 'Missing receiverId or message content' });
        }

        // Find an existing conversation between sender and receiver
        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] },
        });

        // If no conversation exists, create a new one
        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            });
        }

        // Create a new message
        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        });

        // Save the new message first
        await newMessage.save();

        // Add the new message to the conversation's messages array
        conversation.messages.push(newMessage._id);

        // Save the updated conversation with the new message ID
        await conversation.save();

        res.status(201).json({ message: 'Message sent successfully', data: newMessage });
    } catch (error) {
        console.log('Error in sendMessage controller:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


export const getMessages = async (req, res) => {
    try {
        const { id: userToChatId } = req.params; // Extract receiver ID from route params
        const userId = req.user_id;  // Use user ID from the middleware

        // Find the conversation between the sender and the receiver
        const conversation = await Conversation.findOne({
            participants: { $all: [userId, userToChatId] },  // Use userId and receiver's ID to find the conversation
        }).populate('messages');  // NOT REFERENCE BUT ACTUAL MESSAGES

        if (!conversation) return response.status(200).json([]);  // Return an empty array if no conversation exists

        const messages = conversation.messages;  // Extract messages from the conversation

        res.status(200).json(messages);  // Return the messages
    } catch (error) {
        console.log('Error in getMessage controller:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
