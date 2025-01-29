import User from "../models/user.model.js";

export const getUsersFromSidebar = async (req, res) => {
    try {
        // Get logged-in user ID from the request object
        const loggedInUserId = req.user_id;

        // Find users other than the logged-in user
        const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select('-password');
        
        // Send the filtered users as the response
        res.status(200).json(filteredUsers);
    } catch (error) {
        // Log and send error response if there's an issue
        console.error('Error in getUsersFromSidebar:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
