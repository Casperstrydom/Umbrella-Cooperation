import { useState, useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import Messages from "./Messages";
import { MessageInput } from "./MessageInput";
import YourProfile from "./YourProfile";

export const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const [isProfileVisible, setIsProfileVisible] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      setSelectedConversation(null);
    };
  }, [setSelectedConversation]);

  const toggleProfile = (value) => {
    setIsProfileVisible(value);
  };

  if (isSmallScreen) return null; // Hide MessageContainer on small screens

  return (
    <div className="flex flex-col h-full w-full md:min-w-[450px] relative transition-transform duration-300">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <div className="flex flex-col h-full w-full">
          {/* Header Section */}
          <div
            className={`flex justify-between items-center bg-black px-6 py-3 ${
              isProfileVisible ? "backdrop-blur-lg bg-black/30" : ""
            }`}
          >
            <div className="flex flex-col">
              <span className="label-text text-white">To</span>
              <span
                className="text-white font-bold cursor-pointer"
                onClick={() => toggleProfile(true)}
              >
                {selectedConversation?.fullName || "Unknown"}
              </span>
            </div>
          </div>

          {/* Profile Section for smaller screens */}
          {isProfileVisible && (
            <YourProfile userDetails={selectedConversation} toggleProfile={toggleProfile} />
          )}

          {/* Message Section */}
          <div className="flex-1 overflow-auto mb-16 px-4">
            <Messages />
          </div>

          {/* Message Input Section */}
          <div className="w-full absolute bottom-0 left-0">
            <MessageInput className="w-full bg-black p-3" />
          </div>
        </div>
      )}
    </div>
  );
};

export default MessageContainer;

export const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full bg-black text-white">
      <div className="px-4 text-center sm:text-lg md:text-xl text-red-700 font-semibold flex flex-col items-center gap-2">
        <p>Welcome Ben To Umbrella Corporation Chatting Web</p>
        <p>Select A Chat To Start Messaging</p>
      </div>
    </div>
  );
};
