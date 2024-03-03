import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import useConversation  from "../../store/useConversation";
import useGetConversation  from "../../hooks/useGetConversation";
import toast from "react-hot-toast";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!search) return;
    if(search.length < 3) {
      return toast.error("Please enter at least 3 characters")
    }

    const conversation = conversations.find((c) => c.username.toLowerCase().includes(search.toLowerCase()))
    if(conversation) {
      setSelectedConversation(conversation);
    }else{
      toast.error("No such user found!")
    }
  };

  return (
    <form className="flex items-center gap-2" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered rounded-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" className="btn btn-circle bg-sky-500 text-white">
        <FaSearch className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
};

export default SearchInput;
