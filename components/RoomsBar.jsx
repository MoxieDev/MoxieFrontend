import React from "react";
import RoomBtn from "./RoomBtn";

function RoomsBar() {
  return (
    <div className="h-screen sticky top-0 col-span-1 bg-[#212329]">
      {/* Left bar- 1/4th of grid*/}
      <h2 className="font-martel text-white font-bold mt-6 ml-6 text-xl">
        Moxie Chat
      </h2>

      {/* Over here, there will be a list of rooms joined by the person with a hyperlink to it */}
      <div>
        <div className="font-martel flex text-gray-400 text-sm ml-5 mt-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mx-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
            <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
          </svg>
          Rooms
        </div>
      </div>

        <RoomBtn
          roomIcon="https://millenia.tech/logo.png"
          roomName="Best Devs"
        />
        <RoomBtn
          roomIcon="https://millenia.tech/logo.png"
          roomName="Best Devs"
        />
        <RoomBtn
          roomIcon="https://avatars.githubusercontent.com/u/107420213?s=200&v=4"
          roomName="Cakes"
        />

    </div>
  );
}

export default RoomsBar;
