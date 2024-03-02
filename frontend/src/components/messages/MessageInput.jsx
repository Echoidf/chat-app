import { BsSend } from "react-icons/bs";

const MessageInput = () => {

  return (
    <form className="px-4 my-3 flex">
      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm rounded-lg p-2.5 bg-gray-700 text-white font-serif w-full"
          placeholder="Type your message..."
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3"
        >
          <BsSend className="text-white w-5 h-5 outline-none hover:text-blue-500"/>
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
