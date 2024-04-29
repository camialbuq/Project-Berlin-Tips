import React from "react";

function AddTip() {
  return (
    <div className="tipsContainer w-1/2 items-center h-4/5 translate-x-1/2 translate-y-1/4 mb-10">
      {/* <div className="tipFormContainer w-1/2 flex flex-col items-center mx-auto my-10"> */}
      <div className="h-2/3 z-0 flex flex-col w-full justify-center text-center items-center dark:bg-pink-200 p-4 mb-10 rounded-2xl">
        <h3 className="font-anton text-2xl font-bold tracking-tight text-pink-500 sm:text-2xl lg:w-2/3">
          Show us what you got!
        </h3>
        <form className="mt-5 w-2/3 items-center text-center">
          <div className="mb-5">
            <label
              htmlFor="base-input"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Title: what to do?
            </label>
            <input
              type="text"
              id="base-input"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-pink-500 block w-full p-2.5 dark:focus:border-pink-500"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="base-input"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Image URL
            </label>
            <input
              type="text"
              id="base-input"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-pink-500 block w-full p-2.5 dark:focus:border-pink-500"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="base-input"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Location
            </label>
            <input
              type="text"
              id="base-input"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-pink-500 block w-full p-2.5 dark:focus:border-pink-500"
            />
          </div>
          <div className="mb-5 items-center justify-center w-full relative">
            <label
              htmlFor="comment"
              className="block w-full mb-2 text-sm font-medium text-gray-900"
            >
              Describe the vibe
            </label>
            <textarea
              rows="4"
              className="mb-4 px-3 py-2 border-2 border-gray-300 rounded-lg"
              id="comment"
            ></textarea>
          </div>
          <button
            type="submit"
            className="relative items-center justify-center py-2 mb-1 me-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200"
          >
            <span className="relative items-center font-anton text-xl px-16 py-16 transition-all ease-in duration-75 bg-gray-700 rounded-md group-hover:bg-opacity-0">
              Add tip
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddTip;
