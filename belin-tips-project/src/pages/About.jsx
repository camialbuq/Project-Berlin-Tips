import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Hey, "du"...!
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              Here you can find both touristic and cool things to do in Berlin.
              Try your best to actually get to know this city, sit naked at the
              lake, and take any u-bahn line without getting lost. All that
              while smoking your legal joint.
            </p>
            <h3 className="font text-2xl font-bold tracking-tight text-pink-500 sm:text-2xl mt-10">
              I am Cami Albuquerque, brazilian junior web developer living in
              Berlin.
            </h3>
            <p className="mt-4 text-xl text-gray-500">
              This is a single user application project built with React.
              <br /> It uses{" "}
              <span className="text-orange-500 font-bold">
                html, TailwindCSS and Javascript.
              </span>{" "}
              <br />
              Here I have combined two passions: coding and travelling in a
              simple, fun and easy to read webapp.
            </p>
            <Link to="/">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 mt-10 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Back to Home
                </span>
              </button>
            </Link>
          </div>
          <div className="ImagesContainer">
            <div
              aria-hidden="true"
              className="pointer-events-none ml-30 lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl mt-10"
            >
              <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/3 lg:-translate-y-1/2 lg:translate-x-8">
                <div className="flex items-center space-x-6 lg:space-x-8">
                  <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                      <img
                        src="https://c.tenor.com/1hSmMJDBL1wAAAAd/tenor.gif"
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                      <img
                        src="https://c.tenor.com/Lvfuu2wwg8gAAAAd/tenor.gif"
                        alt=""
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  </div>
                  <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                      <img
                        src="https://c.tenor.com/iN3oRYGa-HIAAAAC/tenor.gif"
                        alt=""
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                      <img
                        src="https://c.tenor.com/zMWompBbXZAAAAAC/tenor.gif"
                        alt=""
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                      <img
                        src="https://c.tenor.com/x2yzkgdpi1oAAAAd/tenor.gif"
                        alt=""
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  </div>
                  <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                      <img
                        src="https://c.tenor.com/4cP22dcypM8AAAAd/tenor.gif"
                        alt=""
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                      <img
                        src="https://c.tenor.com/AAojnURr7eMAAAAC/tenor.gif"
                        alt=""
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
