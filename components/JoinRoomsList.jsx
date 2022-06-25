import React from "react";
import { useEffect } from "react";

function JoinRoomsList() {
    const [rooms, setRooms] = React.useState([]);
//   useEffect(() => {
//     let r = "https://moxie.up.railway.app/chats";
//     fetch(r)
//         .then((response) => response.json())
//         .then((data) => {
//             setRooms(data);
//         }
//         );
//     }, []);

useEffect(() => {
        setRooms(
        [
            {
                'title': "Public Chat",
                'description': "This is the default chat, available to everyone!",
                'visibility': "public",
                'createdAt': "2022-06-25T19:22:37.472212865Z",
                'updatedAt': "2022-06-25T19:22:37.472213113Z",
                'id': 1
            }
            ]
        );
    }, []);

    return (
        <div className="bg-[#131517] min-h-screen flex flex-col fixed w-full">
            <div className="m-5">
                <ul className="space-y-2 overflow-auto h-screen">
                    {rooms.map((room) => (
                        <li className="flex flex-col justify-start text-white">
                            <div className="relative max-w-xl px-4 py-2 rounded-lg shadow bg-slate-700 w-fit">
                                <span className="block">{room.title}</span>
                            </div>
                            <div className="text-sm text-gray-600">{room.id}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );

}


export default JoinRoomsList;
