import React from "react";
import { useRouter } from "next/router";
import RoomHeader from "../../components/RoomHeader";

function ChatRoom() {
  const router = useRouter();
  const { roomId } = router.query;

  // roomInfo = getRoom() // Implement this after backend is done

  let sendMessage = (message) => {
    // Implement this after backend is done
    console.log(message)
  }

  return (
    <div className="bg-[#131517] min-h-screen flex flex-col">
      <RoomHeader roomName={roomId} />

      {/* Message list */}
      <div className="">whateber</div>

      {/* Message Input */}
      <div className="mt-auto bg-[#282932] text-slate-200 flex justify-center items-center h-20 relative">
        <input
          className="bg-[#1e1f25] p-5 rounded-full w-full h-12 mx-6"
          type="text"
          placeholder="Send a message..."
          onKeyPress={(ev) => {
            if (ev.key === "Enter") {
              sendMessage(ev.target.value);
              ev.target.value = "";
            }
          }}
        />
        {/* Buttons after input */}
        
      </div>
    </div>
  );
}

export default ChatRoom;
