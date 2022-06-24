import Link from 'next/link'
import React from 'react'

function RoomBtn({ roomIcon, roomName, roomId }) {
  return (
    <Link href={`/room/${roomId}`}>
      <div className="h-16 rounded-md cursor-pointer hover:shadow-2xl hover:bg-slate-800">
        <div className="flex items-center h-full">
          <img className="ml-2 rounded-full h-10" src={roomIcon} alt="" />
          {/* Room Name */}
          <div className="ml-2">
            <p className="text-sm font-martel text-slate-300">{roomName}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default RoomBtn