import { BsSend } from "react-icons/bs";

export const MessageInput = () => {
  return (
    <form className="px-4 my-3 absolute bottom-0 left-0 w-full"> {/* Positioned at the bottom */}
      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm rounded-lgb block w-full p-2 bg-gray-700 border-gray-600 text-white"
          placeholder="Send a message"
        />
        <button
          type="submit"
          className="absolute inset-y-0 right-0 flex items-center pr-3"
        >
          <BsSend />
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
