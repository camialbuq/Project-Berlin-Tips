import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import berlinBear from "../assets/berlin-bear.png";
import { useState } from "react";

function Navbar() {
  // this will be used to display the add form popup
  const [seen, setSeen] = useState(false);
  function togglePop() {
    setSeen(!seen);
  }

  return (
    <div className="NavBar">
      <nav className="bg-pink-700 dark:bg-pink-700 fixed w-full z-20 top-0 start-0 border-b border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-left justify-left p-4">
          <img src={berlinBear} className="h-8 ml-3 mr-6" alt="BerlinBear" />
          <span className="self-center text-2xl font-anton whitespace-nowrap dark:text-white">
            Berlin, was machst du mit mir?
          </span>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-pink-700 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-pink-700 dark:bg-pink-700 md:dark:bg-pink-700 dark:border-gray-100">
              <li>
                <Link
                  className="block py-2 px-3 ml-8 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-700 md:p-0 md:dark:hover:text-gray-700 dark:text-white dark:hover:bg-pink-700 dark:hover:text-gray-700 md:dark:hover:bg-transparent dark:border-gray-700"
                  to="/"
                >
                  | Home |
                </Link>
              </li>
              <li>
                <Link
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-700 md:p-0 md:dark:hover:text-gray-700 dark:text-white dark:hover:bg-pink-700 dark:hover:text-gray-700 md:dark:hover:bg-transparent dark:border-gray-700"
                  to="/about"
                >
                  | About |
                </Link>
              </li>
              <li>
                <Link
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-700 md:p-0 md:dark:hover:text-gray-700 dark:text-white dark:hover:bg-pink-700 dark:hover:text-gray-700 md:dark:hover:bg-transparent dark:border-gray-700"
                  to="/addTip"
                >
                  | Add Tip |
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
