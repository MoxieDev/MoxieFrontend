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
      <div className="">
        <ul className="chat-history">                 
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
         </ul>
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
        <button onClick={sendMessage(ev.target.value)} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Send
        </button>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const id = context.params.roomid // Get ID from slug `/book/1`
  
  if ('${id}' === null){
    return { notFound: true };
  }
  
  const data = await fetch('/chats/${id}')

  const roomId = await data.json()

  return {props: { roomId } }
}

export default ChatRoom;
