import { create } from "zustand";

// zustand/useConversation.js

const useConversation = create((set) => ({
  conversationData: [],
  messages: [],
  selectedConversation: {},
  setConversation: (data) => set({ conversationData: data }),
  setMessages: (data) => set({ messages: data }),
  setSelectedConversation: (data) => set({ selectedConversation: data }),
}));


export default useConversation;