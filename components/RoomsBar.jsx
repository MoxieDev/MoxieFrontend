import React, { useEffect } from "react";
import RoomBtn from "./RoomBtn";

function RoomsBar() {
  const getRoomsFromLocalStorage = () => {
    if (typeof window !== "undefined") {
      let rooms = localStorage.getItem("rooms");

      if (!rooms) {
        return [];
      } else {
        return JSON.parse(rooms);
      }
    } else {
      return [];
    }
  };

  const [rooms, setRooms] = React.useState(getRoomsFromLocalStorage());
  const [username, setUsername] = React.useState("");
  useEffect(() => {
    if (typeof window !== "undefined") {
      setUsername(localStorage.getItem("username"));
    }
  }, []);

  const [modalShow, setModalShow] = React.useState(false);

  const [newRoomName, setNewRoomName] = React.useState("");
  const [newRoomDescription, setNewRoomDescription] = React.useState("");

  const handleCreateRoom = () => {
    if (newRoomName.length > 0) {
      let newRoom = {
        title: newRoomName,
        description: newRoomDescription,
        visibility: "public",
      };

      // Send a POST request to the server

      fetch("https://moxie.up.railway.app/chats", {
        method: "POST",
        body: JSON.stringify(newRoom),
      })
        .then((res) => res.json())
        .then((data) => {
          // Add the new room to localStorage
          let rooms = getRoomsFromLocalStorage();
          rooms.push(data);
          localStorage.setItem("rooms", JSON.stringify(rooms));

          // Update the state
          setRooms(rooms);

          // Close the modal
          setModalShow(false);
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("username", username);
    }
  }
  , [username]);

  const checkIfRoomExists = async (roomId) => {
    let data = await fetch(`https://moxie.up.railway.app/chats/${roomId}`).then(
      (res) => res.json()
    );
    if (data.success == "true") {
      return true;
    }
  };

  return (
    <>
      <div
        tabIndex={-1}
        aria-hidden="true"
        className={` overflow-y-auto ${
          modalShow ? "block" : "hidden"
        } overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full"`}
      >
        <div className="relative p-4 w-full max-w-md h-full md:h-auto">
          {/* Modal content */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              onClick={() => setModalShow(false)}
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div className="py-6 px-6 lg:px-8 space-y-6">
              <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                Create a new room
              </h3>

              <div>
                <label
                  htmlFor="roomname"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Room Name
                </label>
                <input
                  type="text"
                  name="roomname"
                  id="roomname"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="The coding horizon"
                  value={newRoomName}
                  onChange={(e) => setNewRoomName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="roomdescription"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Room description
                </label>
                <input
                  name="roomdescription"
                  id="roomdescription"
                  placeholder="The best room for anime"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  value={newRoomDescription}
                  onChange={(e) => setNewRoomDescription(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={handleCreateRoom}
              >
                Create room
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="h-screen sticky top-0 p-5 col-span-1 bg-[#04C1E1]">
        {/* Left bar- 1/4th of grid*/}
        <a href="/">
          <h2 className="font-martel text-white font-bold mt-6 ml-6 text-xl">
            Moxie Chat
          </h2>
        </a>

        {/* Over here, there will be a list of rooms joined by the person with a hyperlink to it */}
        <div className="my-4">
          <div className="font-martel flex text-black text-sm ml-5 mt-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mx-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
              <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
            </svg>
            Rooms you have joined
          </div>
        </div>

        <div className="overflow-auto h-80">
          {rooms.map((room) => (
            <RoomBtn key={room.id} roomName={room.title} roomId={room.id} />
          ))}
        </div>

        {/* Input to change username */}
        <div className="mt-10">
          <div className="flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mx-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 112 0 1 1 0 01-2 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="text"
              name="username"
              id="username"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Change username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="mt-auto">
          {/* Create room button */}
          <div className="flex justify-center items-center mt-10">
            <button
              className="bg-transparent hover:bg-gray-700 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-700 hover:border-transparent rounded-full"
              onClick={() => {
                setModalShow(!modalShow);
              }}
            >
              Create Room
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default RoomsBar;
