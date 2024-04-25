import React from "react";
import deleteButton from "../assets/delete-button-svgrepo-com.svg";
import { Link } from "react-router-dom";

function TipCard(props) {
  const { tip, clickToDelete } = props; //these are the props we will take value from TipList.jsx

  // each tip:
  // "id": 4,
  //   "title": "Experience Berlin's Street Art",
  //   "image": "image-url",
  //   "description": "Explore the vibrant street art culture in Berlin, known for its colorful murals, graffiti, and urban art installations.",
  //   "location": "Lorem Ipsum"

  //   return (
  //     // <div className="RecipeCard">
  //     //   {/* old implementation */}
  //     //  <div className="oldCard">
  //     //     <h3>{tip.name}</h3>
  //     //      <p>Calories: {recipe.calories}</p>
  //     //      <p>Servings: {recipe.servings}</p>
  //     //       <div className="imageContainer">
  //     //         <img src={recipe.image} alt={recipe.name + "image"} />
  //     //       </div>
  //     //   <button onClick={() => clickToDelete(props.id)} className="btn-delete">
  //     //     Delete
  //     //   </button>
  //     // </div>
  //   );
  // }

  //new card with Tailwind
  return (
    <div className="TipCard">
      <div className="max-w-sm bg-gray-900 border-2 border-pink-400 rounded-lg shadow dark:bg-gray-900 dark:border-pink-400 mt-20">
        <Link to={`/tips/${tip.id}`} key={tip.id}>
          <img
            className="rounded-t-lg"
            src={tip.image}
            alt={tip.title + "image"}
          />
        </Link>
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {tip.title}
          </h5>
          <p className="mb-3 font-normal text-gray-200 dark:text-gray-200">
            {tip.description}
          </p>
          <Link to={`/tips/${tip.id}`} key={tip.id}>
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Read more
              </span>
            </button>
          </Link>
          <button
            onClick={() => clickToDelete(tip.id)}
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Delete
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TipCard;
