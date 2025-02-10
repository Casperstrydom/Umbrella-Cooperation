import { BsSend } from "react-icons/bs";
import { useState } from "react";
import useSendMessage from "../../../hooks/useSendMessage";

export const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };

  return (
    <form
      className="px-4 my-3 fixed bottom-0 left-0 w-full bg-black p-3"
      onSubmit={handleSubmit}
    >
      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm rounded-lgb block w-full p-2 bg-gray-700 border-gray-600 text-white"
          placeholder="Send a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="absolute inset-y-0 right-0 flex items-center pr-3"
        >
          {loading ? (
            <div className="loading loading-spinner"></div>
          ) : (
            <BsSend />
          )}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
