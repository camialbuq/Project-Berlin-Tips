import React from "react";
import { Link } from "react-router-dom";
import berlinNudistNews from "../assets/nudist-berlin-news.png";

function NotFound() {
  return (
    <div className="sm:flex items-center max-w-screen-xl">
      <div className="sm:w-1/2 p-5 ml-10">
        <div className="text">
          <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            404 Not Found...!
          </h1>
          <p className="mt-4 text-2xl text-gray-500">
            You got bounced from some club queue, <br />
            try to find the right path next time.
          </p>
          <Link to="/">
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 mt-10 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Back to Home
              </span>
            </button>
          </Link>
        </div>
      </div>
      {/* //fix this another time, image doesnt go below in responsive when small */}
      <div className="w-1/2 p-10 mt-10 ">
        <div className="image object-cover text-center border-purple-400 border-2 rounded-xl">
          <img src={berlinNudistNews} />
        </div>
      </div>
    </div>
  );
}
export default NotFound;
