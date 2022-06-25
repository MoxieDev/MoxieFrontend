import "../styles/globals.css";
import RoomsBar from "../components/RoomsBar";


function MyApp({ Component, pageProps }) {
  return (
    <div className="grid grid-cols-4 ">
      {/* Since we are going to have the same frontend for every chat room, I create a custom 
      _app.js */}
      
      <RoomsBar />

      {/* ChatRoom - /pages/room/roomID */}
      <div className="col-span-2 min-h-full">
        <Component {...pageProps} />
      </div>

      {/* Right bar */}
      <div className="col-span-1 bg-red-500"></div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const id = context.params.roomid // Get ID from slug `/book/1`
  
  if (${id} === null){

  }
  const data = await fetch('/chats/${id}')

  const roomId = await data.json()

  return {props: { roomId } }
}
export default MyApp;
