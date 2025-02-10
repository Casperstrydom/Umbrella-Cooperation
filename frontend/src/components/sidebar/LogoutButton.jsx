import { BiLogOutCircle } from "react-icons/bi";
import useLogout from "../../../hooks/useLogout";
const LogoutButton = () => {
  const { loading, logout } = useLogout();
  return (
    <div className="mt-auto">
      {!loading ? (
        <BiLogOutCircle
          className="w-6 h-6 text-red-800 cursor-pointer"
          title="Logout" // Adds a tooltip on hover
          onClick={logout}
        />
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
};

export default LogoutButton;
