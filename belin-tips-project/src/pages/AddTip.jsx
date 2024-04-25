import React from "react";
import { Link } from "react-router-dom";

function AddTip() {
  return (
    <div className="tipsContainer w-1/2 items-center h-1/2 translate-x-1/2 translate-y-1/2">
      <div className="h-full z-0 flex w-full justify-center items-center dark:bg-pink-200 p-8 mb-10 mt-10">
        <h3>Add a hint</h3>
        <form className="max-w-sm mx-auto">
          <div className="mb-5">
            <label
              for="base-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Base input
            </label>
            <input
              type="text"
              id="base-input"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          <div className="mb-5">
            <label
              for="large-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Large input
            </label>
            <input
              type="text"
              id="large-input"
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTip;
