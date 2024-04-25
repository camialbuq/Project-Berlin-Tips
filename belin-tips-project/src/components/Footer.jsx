import React from "react";
import berlinWall from "../assets/berlin-wall.png";

function Footer() {
  return (
    <div className="Footer">
      <footer className="fixed bottom-0 left-0 z-50 w-full p-3 bg-gray-800 border-t border-gray-800 shadow md:flex md:items-center md:justify-between md:p-4 dark:bg-gray-800 dark:border-gray-800">
        <span className="text-sm text-gray-200 sm:text-center dark:text-gray-200">
          © 2024{" "}
          <a
            href="https://github.com/camialbuq/Mini-Project-Berlin-Tips/tree/main/belin-tips-project"
            className="hover:underline"
          >
            Cami Albuquerque | Berlin Tips - React App Projet Git Hub
          </a>
        </span>
        {/* <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul> */}
        <img src={berlinWall} className="fixed bottom-0 right-0 w-2/5" />
      </footer>
    </div>
  );
}

export default Footer;
