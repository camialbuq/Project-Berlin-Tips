import React from "react";

function AddTip() {
  return (
    <div className="tipsContainer w-1/2 items-center h-4/5 translate-x-1/2 translate-y-1/4">
      <div className="h-4/5 z-0 flex flex-col w-full justify-center text-center items-center dark:bg-pink-200 p-6">
        <h3 className="font text-2xl font-bold tracking-tight text-pink-500 sm:text-2xl">
          Show us what you got!
        </h3>
        <form className="max-w-sm mx-auto mt-5">
          <div className="mb-5">
            <label
              for="base-input"
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
              for="base-input"
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
              for="base-input"
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
          <div className="mb-5">
            <label
              for="comment"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Describe the vibe
            </label>
            <textarea
              rows="4"
              class="mb-4 px-3 py-2 border-2 border-gray-300 rounded-lg"
              id="comment"
              name="comment"
            ></textarea>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTip;
