import { getAvatar } from "../../utils/getAvatar"; // Import the getAvatar function
import useConversation from '../../zustand/useConversation';

const Conversation = ({ conversation, lastIdx, isSender, onClick }) => {  
  const { selectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === conversation._id;
  const avatar = conversation ? getAvatar(conversation) : "";  // Call getAvatar function

  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-gray-800 rounded p-2 py-1 cursor-pointer
          ${isSelected ? 'bg-red-700' : ''} 
          ${isSender ? 'justify-end text-red-600' : 'justify-start text-gray-400'}`}
        onClick={onClick} 
      >
        {/* Only show the avatar if it's defined */}
        {avatar && (
          <div 
            className="w-12 h-12 rounded-full bg-cover bg-center"
            style={{ backgroundImage: `url(${avatar})` }} 
          />
        )}

        {/* User Info */}
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">{conversation.fullName}</p>
            <span className="text-xl"></span>
          </div>
        </div>
      </div>

      {/* Divider */}
      {!lastIdx && <div className="divider my-0 py-0 h-2" />}
    </>
  );
};

export default Conversation;
