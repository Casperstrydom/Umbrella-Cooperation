import { useState } from "react";
import { MessageContainer } from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMessageOpen, setIsMessageOpen] = useState(false);

  const openMessage = () => {
    setIsSidebarOpen(false);
    setIsMessageOpen(true);
  };

  return (
  <div className="relative h-screen w-full overflow-hidden flex">
    {/* Sidebar (Hidden on Small Screens, Visible on Large Screens) */}
    <div
      className={`fixed inset-0 bg-black/50 backdrop-blur-md transition-transform duration-500
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
        md:relative md:translate-x-0 md:w-1/3 lg:w-1/4`}
    >
      <Sidebar isOpen={isSidebarOpen} openMessage={openMessage} />
    </div>

    {/* Message Container (Full Screen on Small Screens, Adjusts on Larger Screens) */}
    <div
      className={`flex-1 transition-transform duration-500
        ${isMessageOpen ? "translate-x-0" : "translate-x-full"} 
        md:translate-x-0 md:flex-1 backdrop-blur-md bg-black/30`}
    >
      <MessageContainer />
    </div>
  </div>
);

};

export default Home;
