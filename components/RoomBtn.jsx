import Link from "next/link";
import React from "react";

function RoomBtn({ roomIcon, roomName, roomId }) {
  return (
    <a href={`/room/${roomId}`}>
      <div className="h-16 border cursor-pointer hover:shadow-2xl hover:bg-[#ffdb6d]">
        <div className="flex items-center h-full">
          <img
            className="ml-2 rounded-full h-10"
            src={`https://avatars.dicebear.com/api/adventurer/${roomId}.svg`}
            alt=""
          />
          {/* Room Name */}
          <div className="ml-2">
            <p className="text-sm font-martel text-white">{roomName}</p>
          </div>
        </div>
      </div>
    </a>
  );
}

export default RoomBtn;
