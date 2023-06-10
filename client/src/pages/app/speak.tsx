import useTextDownloader from '@/hooks/use-download-text';
import { useWhisper } from '@chengsokdara/use-whisper';
import Link from 'next/link';

const Speak = () => {
  const { recording, speaking, transcribing, transcript, pauseRecording, startRecording, stopRecording } = useWhisper({
    apiKey: process.env.OPENAPI, // YOUR_OPEN_AI_TOKEN
    streaming: true,
    timeSlice: 1_000, // 1 second
    whisperConfig: {
      language: 'en',
    },
  });
  console.log(recording, transcribing);

  const downloadText = useTextDownloader()

  return (
    <main className="container min-h-full mx-auto pb-32">
      <div className="grid place-items-center mt-10">
        <div className="flex justify-between w-full">
          <Link href="/app/upload" className="mx-auto">
            <span className="text-md py-2 px-6 bg-indigo-500 rounded hover:bg-indigo-700 transition text-white font-bold">
              Upload Audio
            </span>
          </Link>
        </div>
      </div>
      <div className="mt-10">
        {/* <p>Recording: {recording}</p>
        <p>Speaking: {speaking}</p>
        <p>Transcribing: {transcribing}</p> */}
        <div className="bg-indigo-300 px-4 py-2 m-auto flex justify-between" style={{ border: "2px solid #ffffff", width: "50rem", height: "20rem", borderRadius: '10px', color: "black" }}>
          <div className="w-full" style={{ overflow: 'auto' }}>
            <p><b>Transcribed Text:</b><br/><br/>{transcript.text}</p>
          </div>
        <button
        type="button"
        className="mt-auto h-10 inline-flex items-center px-4 py-2 bg-slate-800 hover:bg-slate-700 text-sm text-white rounded transition duration-500 ease-in-out hover:text-white focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        onClick={() => downloadText(transcript.text)}
      >
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 mr-2 fill-current"
          fill="currentColor"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            {' '}
            <title></title>{' '}
            <g id="Complete">
              {' '}
              <g id="download">
                {' '}
                <g>
                  {' '}
                  <path
                    d="M3,12.3v7a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2v-7"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></path>{' '}
                  <g>
                    {' '}
                    <polyline
                      data-name="Right"
                      fill="none"
                      id="Right-2"
                      points="7.9 12.3 12 16.3 16.1 12.3"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></polyline>{' '}
                    <line
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      x1="12"
                      x2="12"
                      y1="2.7"
                      y2="14.2"
                    ></line>{' '}
                  </g>{' '}
                </g>{' '}
              </g>{' '}
            </g>{' '}
          </g>
        </svg>
        Download
      </button>
        </div>

        <div className="flex justify-between w-40 gap-5 mt-7 m-auto">
          <button
            type="button"
            className="inline-flex items-center px-5 h-10 bg-indigo-800 hover:bg-indigo-700 text-sm text-white rounded transition duration-500 ease-in-out hover:text-white focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
            onClick={() => startRecording()}
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 mr-2 fill-current"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                {' '}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.00004 7C7.00004 4.23858 9.23862 2 12 2C14.7615 2 17 4.23858 17 7V11C17 13.7614 14.7615 16 12 16C9.23862 16 7.00004 13.7614 7.00004 11V7ZM12 4C10.3432 4 9.00004 5.34315 9.00004 7V11C9.00004 12.6569 10.3432 14 12 14C13.6569 14 15 12.6569 15 11V7C15 5.34315 13.6569 4 12 4ZM4.49483 14.137C4.97144 13.858 5.58401 14.0182 5.86303 14.4948C7.08977 16.5903 9.37755 18 12 18C14.6225 18 16.9103 16.5903 18.137 14.4948C18.4161 14.0182 19.0286 13.858 19.5053 14.137C19.9819 14.416 20.1421 15.0286 19.863 15.5052C18.4479 17.9225 15.9331 19.6272 13 19.946V22C13 22.5523 12.5523 23 12 23C11.4478 23 11 22.5523 11 22V19.946C8.067 19.6272 5.55218 17.9225 4.13704 15.5052C3.85802 15.0286 4.01821 14.416 4.49483 14.137Z"
                  fill="currentColor"
                ></path>{' '}
              </g>
            </svg>
            Start
          </button>
          <button
            type="button"
            className="inline-flex items-center px-5 h-10 bg-indigo-800 hover:bg-indigo-700 text-sm text-white rounded transition duration-500 ease-in-out hover:text-white focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
            onClick={() => stopRecording()}
          >
            <svg fill="currentColor" className="w-4 h-4 mr-2 fill-current" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                {' '}
                <title>stop</title>{' '}
                <path d="M5.92 24.096q0 0.832 0.576 1.408t1.44 0.608h16.128q0.832 0 1.44-0.608t0.576-1.408v-16.16q0-0.832-0.576-1.44t-1.44-0.576h-16.128q-0.832 0-1.44 0.576t-0.576 1.44v16.16z"></path>{' '}
              </g>
            </svg>
            Stop
          </button>
        </div>
      </div>
    </main>
  );
};

export default Speak;
