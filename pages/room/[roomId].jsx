import React from "react";
import RoomHeader from "../../components/RoomHeader";
import useWebSocket, { ReadyState } from "react-use-websocket";
import ChatBubble from "../../components/Chat/ChatBubble";
import { useEffect } from "react";

function ChatRoom({ roomData }) {
  const { sendMessage, lastMessage, readyState } = useWebSocket(
    `wss://moxie.up.railway.app/chats/${roomData.id}/ws`,
    { shouldReconnect: (closeEvent) => true }
  );

  useEffect(() => {
    // Get username from localStorage
    let username = localStorage.getItem("username");
    if (!username || username === "Anonymous") {
      let username = prompt("Please enter your username");
      localStorage.setItem("username", username);
    }
  }, []);

  let sendMsg = (message) => {
    // Implement this after backend is done

    sendMessage(
      JSON.stringify({
        event_type: "send",
        name: localStorage.getItem("username"),
        color: "Red",
        msg: message,
      })
    );
  };

  useEffect(() => {
    if (readyState === ReadyState.OPEN) {
      sendMsg(lastMessage);
    }
  }, [readyState]);

  const [messages, setMessages] = React.useState([]);

  // Use effect to keep track of last message
  useEffect(() => {
    if (lastMessage) {
      let lastMessaged = JSON.parse(lastMessage.data);
      setMessages([...messages, lastMessaged]);
    }
  }, [lastMessage]);

  return (
    <div className="bg-[#131517] min-h-screen relative flex flex-col">
      <RoomHeader roomName={roomData.title} />

      {/* Message list */}
      <div className="m-5">
        <ul className="space-y-2 overflow-auto h-screen">
          {messages.map((message) => (
            <ChatBubble text={message.msg} user={message.name} />
          ))}
        </ul>
      </div>

      {/* Message Input */}
      <div className="bottom-0 sticky bg-[#282932] text-slate-200 flex justify-center items-center h-20">
        <input
          className="bg-[#1e1f25] p-5 rounded-full w-full  h-12 mx-6"
          type="text"
          placeholder="Send a message..."
          onKeyPress={(ev) => {
            if (ev.key === "Enter") {
              sendMsg(ev.target.value);
              ev.target.value = "";
            }
          }}
          required
        />
        {/* Buttons after input */}
        <button
          onClick={(ev) => {
            sendMsg(ev.target.value);
            ev.target.value = "";
          }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const id = context.params.roomId; // Get ID from slug `/book/1`

  if (`${id}` === null || `${id}` === undefined) {
    return { notFound: true };
  }

  const data = await fetch(`https://moxie.up.railway.app/chats/${id}`);

  const roomData = await data.json();

  return { props: { roomData } };
}

export default ChatRoom;
