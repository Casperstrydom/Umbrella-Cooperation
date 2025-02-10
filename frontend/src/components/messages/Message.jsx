import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";
import extractTime from "../../utils/extractTime.js";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();

  const fromMe = message.senderId === authUser._id;
  const formattedTime = extractTime(message.createdAt);
  const chatClassName = fromMe ? "chat-end" : "chat-start";

  // Directly use RoboHash for avatars based on the message sender ID or conversation ID
  const avatarSrc = selectedConversation
    ? `https://robohash.org/${fromMe ? authUser._id : message.senderId}?set=set3&bgset=bg1`
    : ""; // Empty string if no selectedConversation

  const bubbleBgColor = fromMe ? "bg-red-700" : "bg-gray-700";

  return (
    <div className={`chat ${chatClassName} flex ${fromMe ? "justify-end" : "justify-start"}`}>
      <div className="flex flex-col items-center mb-2">
        <span className="text-xs text-gray-400 mb-1">
          {fromMe ? authUser.username : selectedConversation?.username || "Unknown"}
        </span>
        <div className="chat-image avatar">
          {avatarSrc && ( // Only show the avatar if it's defined
            <div className="w-10 rounded-full">
              <img src={avatarSrc} alt="User Avatar" className="rounded-full" />
            </div>
          )}
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleBgColor} pb-2`}>
        {message.message}
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">{formattedTime}</div>
    </div>
  );
};

export default Message;
