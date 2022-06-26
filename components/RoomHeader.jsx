import React from "react";

function RoomHeader({ roomName }) {
  return (
    <div className="bg-[#00acc9] z-10 sticky top-0 w-full h-16 flex items-center border border-x-black border-y-0 text-white font-martel">
      <h4 className="mx-10 font-bold text-lg">{roomName}</h4>
    </div>
  );
}

// 167d7e

export default RoomHeader;
