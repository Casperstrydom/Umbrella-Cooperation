import { useState } from "react";
import { toast } from "react-hot-toast";
import { useAuthContext } from "../src/context/AuthContext"; // Make sure this import path is correct

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext(); // Destructure setAuthUser from useAuthContext

  const login = async (username, password) => {

    const success = handleInputErrors(username, password);
    if (!success) return;
    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { login, loading }; // Return the login function and loading state
};

export default useLogin;

function handleInputErrors(username, password)
 {
  if ( !username || !password ) {
    toast.error("All fields are required");
    return false;
  }

  return true;
}

