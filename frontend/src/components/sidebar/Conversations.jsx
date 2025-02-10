import { useState, useEffect } from "react";
import useGetConversations from "../../../hooks/useGetConversations";
import Conversation from "./Conversation";
import useConversation from "../../zustand/useConversation";
import MessageSidebar from "../messages/MessageSidebar";

const Conversations = ({ openMessageSidebar }) => {
  const { loading, conversations } = useGetConversations();
  const { setSelectedConversation } = useConversation();
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768); // Track screen size
  const [selectedConversation, setSelectedConvo] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleConversationClick = (conversation) => {
    setSelectedConversation(conversation);
    setSelectedConvo(conversation); // Set the selected conversation state
    if (isSmallScreen) {
      openMessageSidebar(conversation); // Open MessageSidebar on small screens
    } else {
      // Logic to handle larger screens can be added here
    }
  };

  return (
    <div className="flex flex-col space-y-2">
      {loading ? (
        <span className="loading loading-spinner"></span>
      ) : (
        conversations.map((conversation, idx) => (
          <Conversation
            key={conversation._id}
            conversation={conversation}
            lastIdx={idx === conversations.length - 1}
            isSender={conversation.isSender}
            onClick={() => handleConversationClick(conversation)} // Handle click
          />
        ))
      )}

      {/* Conditionally render MessageSidebar when small screen and a conversation is selected */}
      {isSmallScreen && selectedConversation && (
        <MessageSidebar conversation={selectedConversation} />
      )}
    </div>
  );
};

export default Conversations;
