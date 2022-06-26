import React from "react";
import { useEffect } from "react";

function JoinRoomsList() {
  const [rooms, setRooms] = React.useState([]);

  useEffect(() => {
    fetch("https://moxie.up.railway.app/chats")
      .then((res) => res.json())
      .then((data) => setRooms(data))
      .catch((err) => console.log(err));
  }, []);

  let addRoomToLocalStorage = (room) => {
    let rooms = localStorage.getItem("rooms");
    if (!rooms) {
      localStorage.setItem("rooms", JSON.stringify([room]));
    } else {
      let rooms = JSON.parse(localStorage.getItem("rooms"));
      // Check if room already exists
      if (rooms.find((r) => r.id === room.id)) {
        return;
      }
      rooms.push(room);
      localStorage.setItem("rooms", JSON.stringify(rooms));
    }
  };

  return (
    <div className="bg-[#00acc9] min-h-screen flex flex-col fixed w-34">
      <div className="overflow-y-scroll h-screen scrollbar-hide">
        {rooms.map((room) => (
          <div
            onClick={(e) => {
              window.location.href = `/room/${room.id}`;
              addRoomToLocalStorage(room);
            }}
            key={room.id}
            className="m-5 mr-10 cursor-pointer border-4  hover:bg-cyan-700 bg-pink-500 rounded-xl shadow-md hover:shadow-lg"
          >
            <div className="flex flex-col justify-between items-center p-4">
              <img
                width={100}
                src={`https://avatars.dicebear.com/api/adventurer/${room.id}.svg`}
                alt=""
              />
              <h4 className="text-xl text-yellow-100">{room.title}</h4>
              <div className="flex items-center mt-2 text-gray-400">
                <p className="text-slate-300">{room.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JoinRoomsList;
