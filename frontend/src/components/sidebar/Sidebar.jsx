import { useState, useEffect } from "react";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";
import MessageSidebar from "../messages/MessageSidebar";
import useConversation from "../../zustand/useConversation";

const Sidebar = ({ isOpen }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
  const [isMessageSidebarOpen, setIsMessageSidebarOpen] = useState(false);
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const openMessageSidebar = (conversation) => {
    setSelectedConversation(conversation);
    setIsMessageSidebarOpen(true);
  };

  const closeMessageSidebar = () => {
    setIsMessageSidebarOpen(false);
    setSelectedConversation(null); // Reset the selected conversation when closing the sidebar
  };

  // Function to toggle back to the users list view
  const goBackToUserList = () => {
    setSelectedConversation(null); // Clear selected conversation
    setIsMessageSidebarOpen(false); // Close the message sidebar
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md p-6 flex flex-col h-screen transition-transform duration-300 w-full md:w-[300px] ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0`}
    >
      <SearchInput />
      <div className="divider px-3"></div>

      {/* Conversations List */}
      <div className="flex-1 overflow-auto">
        <Conversations openMessageSidebar={openMessageSidebar} />
      </div>

      <LogoutButton />

      {/* Render MessageSidebar only on small screens when it's open */}
      {isSmallScreen && isMessageSidebarOpen && (
        <MessageSidebar
          closeMessageSidebar={closeMessageSidebar}
          selectedConversation={selectedConversation}
          setSelectedConversation={setSelectedConversation}
          goBackToUserList={goBackToUserList} // Pass the function to handle going back to the user list
        />
      )}
    </div>
  );
};

export default Sidebar;
