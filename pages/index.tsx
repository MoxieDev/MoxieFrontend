import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import RoomHeader from "../components/RoomHeader";

const Home: NextPage = () => {
  return (
    <div className="items-center justify-center ">
      <Head>
        <title>Moxie Chat</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <RoomHeader roomName="Welcome!" />
      <main className="flex flex-col flex-1 py-20 bg-[#131517] text-white min-h-full w-full items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{" "}
          <a className="text-blue-600" href="https://example.com">
            Moxie Chat
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          Get started by finding rooms in the right bar 👉🏻👉🏻{" "}
        </p>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Blog &rarr;</h3>
            <p className="mt-4 text-xl">
              How this app was made, tech stack, etc
            </p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Submission Video &rarr;</h3>
            <p className="mt-4 text-xl">Submission video for our hackathon</p>
          </a>
        </div>
      </main>
    </div>
  );
};

export default Home;
