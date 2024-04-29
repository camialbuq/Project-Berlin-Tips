import React from "react";
import { Link } from "react-router-dom";
import tipsData from "../tips-data.json";
import { useParams } from "react-router-dom";

function TipDetailPage() {
  // Find the current recipe details by id.
  // This is the URL parameter from React Router, e.g. /ItemDetails/:recipeID

  let { tipId } = useParams();
  const tipDetails = tipsData.find((tip) => tip.id === tipId);
  //needed to remove === because it wasnt find the correct id, or change in json to "string"
  console.log(tipId);
  console.log(tipDetails);

  return (
    <div className="TipDetails h-screen mt-10">
      {tipDetails && (
        <section className="pt-10 overflow-hidden bg-white md:pt-0 sm:pt-16 2xl:pt-16 mb-10">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl mt-20 mb-10">
            <div className="grid items-center grid-cols-1 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                  {tipDetails.title}
                </h2>
                <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-900 md:mt-8">
                  {tipDetails.description}
                </p>

                <p className="mt-4 text-xl text-gray-600 dark:text-gray-600 md:mt-8">
                  <span className="relative inline-block">
                    <span className="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300 dark:bg-purple-400"></span>
                    <span className="relative"> {tipDetails.location} </span>
                  </span>
                </p>
                <Link to="/">
                  <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 mt-10 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Back to Home
                    </span>
                  </button>
                </Link>
              </div>

              <div className="relative">
                {/* <img
                  className="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg"
                  alt=""
                /> */}
                <img
                  className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110 rounded ml-4 mr-4 mt-6"
                  src={tipDetails.image}
                  alt="image from tip"
                />
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default TipDetailPage;
