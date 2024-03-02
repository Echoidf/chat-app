import React from "react";

const Conversation = () => {
  return (
    <>
      <div className="flex gap-2 items-center hover:bg-sky-500 rounded px-2 py-1 cursor-pointer">
        <div class="avatar online">
          <div class="w-12 rounded-full">
            <img
              alt="user avatar"
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-semibold text-gray-200">John Doe</p>
            <span className="text-xl">🎃</span>
          </div>
        </div>
      </div>

      <div className="divider my-0 py-0 h-1"></div>
    </>
  );
};

export default Conversation;
