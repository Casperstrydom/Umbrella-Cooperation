import { Messages } from "./Messages";
import { MessageInput } from "./MessageInput";
import { TiMessages } from "react-icons/ti";

export const MessageContainer = () => {
  const noChatSelected = true;
  return (
    <div className="md:min-w-[450px] flex flex-col h-[800px] relative">
      {" "}
      {/* Increased height */}
      {noChatSelected ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Header */}
          <div className="bg-slate-900 px-8 py-2 mb-2">
            <span className="label-text">To</span>
            <span className="text-white font-bold">Ben</span>
          </div>

          {/* Message List with a Scrollable Area */}
          <div className="flex-1 overflow-auto mb-16">
            {" "}
            {/* Added margin-bottom to avoid overlap with input */}
            <Messages />
          </div>

          {/* Message Input */}
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;

export const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div
        className="px-4 text-center sm:text-lg md:text-xl text-red-700 font-semibold flex flex-col
          items-center gap-2"
      >
        <p>Welcome Ben To Umbrella Cooperation Chatting Web</p>
        <p>Select A Chat To Start Messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>{" "}
    </div>
  );
};
