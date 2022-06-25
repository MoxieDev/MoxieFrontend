import React from "react";
import { useRouter } from "next/router";
import RoomHeader from "../../components/RoomHeader";

function ChatRoom({roomData}) {
  const router = useRouter();
  const { roomId } = router.query;

  console.log(roomData)

  let sendMessage = (message) => {
    // Implement this after backend is done
    console.log(message)
  }

  return (
    <div className="bg-[#131517] min-h-screen flex flex-col">
      <RoomHeader roomName={roomData.title} />

      {/* Message list */}
      <div className="chat-div">
        {/* <ul className="chat-history">                 
            {this.props.messages.map(message => {
              return (
               <li key={message.id}>
                 <div>
                   {message.senderId}
                 </div>
                 <div>
                   {message.text}
                 </div>
               </li>
             )
           })}
         </ul> */}
      </div>

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
        <button onClick={ (ev) => {
                            sendMessage(ev.target.value); 
                            ev.target.value=""}} 
                 class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Send
        </button>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const id = context.params.roomId // Get ID from slug `/book/1`
  
  if (`${id}` === null || `${id}` === undefined){
    return { notFound: true };
  }
  
  const data = await fetch(`https://moxie.up.railway.app/chats/${id}`)

  const roomData = await data.json()

  return {props: { roomData } }
}

export default ChatRoom;
