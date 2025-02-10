import { useState } from "react";
import Messages from "./Messages";
import { MessageInput } from "./MessageInput";
import YourProfile from "./YourProfile";

const MessageSidebar = ({
  selectedConversation,
  setSelectedConversation,
  goBackToUserList, // Function to return to the user list
}) => {
  const [isProfileVisible, setIsProfileVisible] = useState(false);

  const toggleProfile = (value) => {
    setIsProfileVisible(value);
  };

  const handleGoBack = () => {
    if (typeof setSelectedConversation === "function") {
      setSelectedConversation(null); // Clear the selected conversation
    }
    if (typeof goBackToUserList === "function") {
      goBackToUserList(); // This will close the MessageSidebar and return to the conversations list
    }
  };

  return (
    <div
      className={`fixed inset-0 flex flex-col h-screen w-full md:w-[450px] transition-transform duration-300 ${
        selectedConversation ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Header Section */}
      <div className="flex justify-between items-center bg-gray-900 px-6 py-3 text-white">
        <div className="flex flex-col">
          <span className="label-text text-white">To</span>
          <span
            className="font-bold cursor-pointer"
            onClick={() => toggleProfile(true)}
          >
            {selectedConversation?.fullName || "Unknown"}
          </span>
        </div>

        {/* Back button */}
        <button onClick={handleGoBack} className="text-white text-2xl">
          ←
        </button>
      </div>

      {/* Profile Section */}
      {isProfileVisible && (
        <YourProfile
          userDetails={selectedConversation}
          toggleProfile={toggleProfile}
        />
      )}

      {/* Messages Section */}
      <div className="flex-1 overflow-auto px-4">
        {selectedConversation ? (
          <Messages />
        ) : (
          <div className="text-white">No conversation selected</div>
        )}
      </div>

      {/* Message Input Section */}
      <div className="w-full absolute bottom-0 bg-gray-900 p-3">
        <MessageInput className="w-full" />
      </div>
    </div>
  );
};

export default MessageSidebar;
