import { BiLogOut } from "react-icons/bi";

const LogoutButton = () => {
  return (
    <div className="mt-auto">
      <BiLogOut className="w-6 h-6 text-white outline-none hover:text-red-400 cursor-pointer"/>
    </div>
  );
};

export default LogoutButton;
