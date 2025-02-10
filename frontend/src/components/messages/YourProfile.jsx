const YourProfile = ({ userDetails, toggleProfile }) => {
    return (
      <div className="bg-slate-900 p-6 rounded-lg">
        <h2 className="text-white text-xl font-semibold mb-4">User Profile</h2>
  
        {/* Profile Image */}
        {userDetails.profileImage && (
          <div className="mb-4">
            <img
              src={userDetails.profileImage} // Profile image URL
              alt="Profile"
              className="w-24 h-24 rounded-full border-2 border-white"
            />
          </div>
        )}
  
        {/* User Details */}
        <div className="text-white mb-2">
          <strong>Full Name:</strong> {userDetails.fullName || "Unknown"}
        </div>
        <div className="text-white mb-2">
          <strong>Username:</strong> {userDetails.username || "Unknown"}
        </div>
        <div className="text-white mb-2">
          <strong>Gender:</strong> {userDetails.gender || "Not specified"}
        </div>
  
        {/* Add any other user details here */}
        <div className="text-white mb-2">
          <strong>Email:</strong> {userDetails.email || "Not provided"}
        </div>
  
        <button
          onClick={() => toggleProfile(false)} // Close profile when toggling
          className="text-white mt-4"
        >
          🔓 Close Profile
        </button>
      </div>
    );
  };
  
  export default YourProfile;
  