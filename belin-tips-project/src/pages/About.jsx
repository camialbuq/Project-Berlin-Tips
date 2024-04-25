import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div class="relative overflow-hidden bg-white">
      <div class="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div class="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div class="sm:max-w-lg">
            <h1 class="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Hey, "du"...!
            </h1>
            <p class="mt-4 text-xl text-gray-500">
              Here you can find both touristic and also cool things to do in
              Berlin. Try your best to actually get to know this city, skip club
              queues and take any u-bahn line while smoking your legal joint.
            </p>
            <h3 class="font text-2xl font-bold tracking-tight text-pink-500 sm:text-2xl mt-10">
              I am Cami Albuquerque, brazilian web developer living in Berlin.
            </h3>
            <p class="mt-4 text-xl text-gray-500">
              This is a single user application built with React. It uses{" "}
              <span className="text-orange-500 font-bold">
                html, TailwindCSS and Javascript.
              </span>{" "}
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
              class="pointer-events-none ml-30 lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl mt-10"
            >
              <div class="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                <div class="flex items-center space-x-6 lg:space-x-8">
                  <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div class="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                      <img
                        src="https://c.tenor.com/1hSmMJDBL1wAAAAd/tenor.gif"
                        class="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div class="h-64 w-44 overflow-hidden rounded-lg">
                      <img
                        src="https://c.tenor.com/Lvfuu2wwg8gAAAAd/tenor.gif"
                        alt=""
                        class="h-full w-full object-cover object-center"
                      />
                    </div>
                  </div>
                  <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div class="h-64 w-44 overflow-hidden rounded-lg">
                      <img
                        src="https://c.tenor.com/zMWompBbXZAAAAAC/tenor.gif"
                        alt=""
                        class="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div class="h-64 w-44 overflow-hidden rounded-lg">
                      <img
                        src="https://c.tenor.com/iN3oRYGa-HIAAAAC/tenor.gif"
                        alt=""
                        class="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div class="h-64 w-44 overflow-hidden rounded-lg">
                      <img
                        src="https://c.tenor.com/x2yzkgdpi1oAAAAd/tenor.gif"
                        alt=""
                        class="h-full w-full object-cover object-center"
                      />
                    </div>
                  </div>
                  <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div class="h-64 w-44 overflow-hidden rounded-lg">
                      <img
                        src="https://c.tenor.com/4cP22dcypM8AAAAd/tenor.gif"
                        alt=""
                        class="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div class="h-64 w-44 overflow-hidden rounded-lg">
                      <img
                        src="https://c.tenor.com/AAojnURr7eMAAAAC/tenor.gif"
                        alt=""
                        class="h-full w-full object-cover object-center"
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
