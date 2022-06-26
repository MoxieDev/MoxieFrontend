import "../styles/globals.css";
import RoomsBar from "../components/RoomsBar";
import JoinRoomsList from "../components/JoinRoomsList";

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
      <div className="col-span-1 bg-[#00acc9]">
        <JoinRoomsList />
      </div>
    </div>
  );
}

export default MyApp;
