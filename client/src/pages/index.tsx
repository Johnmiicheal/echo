"use client";
import { useRouter } from "next/router";
import { Player } from "@lottiefiles/react-lottie-player";

export default function HomePage() {
  const router = useRouter();

  return (
      <body className="bg-[url('/bg.png')] bg-center">
        <header className="justify-between flex py-4 px-5 h-14 items-center">
          <a
            href="/"
            className="flex items-center text-xl font-semibold text-gray-900 dark:text-white gap-1"
          >
            <img
              width="32"
              height="32"
              className="bg-black rounded-full"
              src="https://img.icons8.com/wired/64/ffffff/voice-recognition-scan.png"
              alt="voice-recognition-scan"
            />
            ECHO
          </a>
          <div>
            <button
              className="z-40 bg-white outline outline-black outline-1 text-black px-4 py-2 relative"
              onMouseEnter={() => {
                const divs = document.querySelectorAll(".hover-div");
                divs.forEach((div) => {
                  div.classList.add("bg-indigo-600");
                });
              }}
              onMouseLeave={() => {
                const divs = document.querySelectorAll(".hover-div");
                divs.forEach((div) => {
                  div.classList.remove("bg-indigo-600");
                });
              }}
              onClick={()=> router.push('/signin')}
            >
              Sign In
            </button>
            <div
              className="z-20 h-10 w-20 outline outline-black outline-1 hover-div"
              style={{ marginTop: -37, marginLeft: -4 }}
            ></div>
            <div
              className="z-0 h-10 w-20 outline outline-black outline-1 "
              style={{ marginTop: -37, marginLeft: -8 }}
            ></div>
          </div>
        </header>
        <section>
          <div className="justify-center items-center px-40">
            <h1
              className="text-center text-5xl font-black mt-20"
              style={{ lineHeight: 1.4, color: 'black' }}
            >
              Transcribe speech to text and be <br />a part of wholesome
              conversations.
            </h1>
            <Player
              autoplay
              loop
              src="/conversation.json"
              style={{ height: "400px", width: "400px" }}
            ></Player>
          </div>
        </section>
        <div className="fixed bottom-0 bg-white outline outline-black outline-2 text-black px-4 w-full">
        &copy; 2023 Echo: A final year project of Olumuyiwa Favour Jesutomisin- Covenant University
      </div>
      </body>
  );
}
