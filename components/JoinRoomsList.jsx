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
      <div className="bg-[#212329] min-h-screen flex flex-col fixed w-full">
        
      </div>
    );

}


export default JoinRoomsList;
