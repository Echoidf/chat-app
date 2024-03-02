import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/messages/MessageContainer.jsx";

const Home = () => {
  return (
    <div
      className="flex sm:h-[450px] md:h-[550px] rounded-md overflow-hidden bg-gray-400
    bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border rbg-gray-400"
    >
      <Sidebar />
      <MessageContainer/>
    </div>
  );
};

export default Home;
