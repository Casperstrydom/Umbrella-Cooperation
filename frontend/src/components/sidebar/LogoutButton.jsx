import { BiLogOutCircle } from "react-icons/bi";

const LogoutButton = () => {
  return (
    <div className="mt-auto">
      <BiLogOutCircle 
        className='w-6 h-6 text-red-800 cursor-pointer'
        title="Logout" // Adds a tooltip on hover
      />
    </div>
  );
};

export default LogoutButton;
