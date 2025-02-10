import { useEffect, useState } from "react";
import useConversation from "../src/zustand/useConversation"; // Adjust path accordingly
import toast from "react-hot-toast";

const useGetConversations = () => {
	const [loading, setLoading] = useState(false);
	const [conversations, setConversations] = useState([]);
	const { conversationData, setConversation } = useConversation(); // Using useConversation

	useEffect(() => {
		const getConversations = async () => {
			setLoading(true);
			try {
				const res = await fetch("/api/users");
				const data = await res.json();
				if (data.error) {
					throw new Error(data.error);
				}
				setConversations(data);
				setConversation(data); // Storing conversations using useConversation hook (assuming it has setConversation function)
			} catch (error) {
				toast.error(error.message);
			} finally {
				setLoading(false);
			}
		};

		getConversations();
	}, [setConversation]);

	// You can use both `conversations` and `conversationData` here
	// For example, if you want to return them both:
	return { loading, conversations, conversationData };
};

export default useGetConversations;
