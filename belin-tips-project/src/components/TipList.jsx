import React from "react";
import tipsData from "../tips-data.json";
import TipCard from "./TipCard";
import { useState } from "react";
import { Link } from "react-router-dom";

function TipList() {
  const [tips, setTips] = useState(tipsData);

  const deleteTip = (tipId) => {
    const filteredTips = tips.filter((tip) => {
      return tip.id !== tipId;
    });
    setTips(filteredTips);
  };
  //console.log(tips);

  return (
    <div className="tipsContainer">
      <div className="h-full z-0 flex w-full justify-center items-center dark:bg-gray-100 p-2 mb-10">
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-2 xl:p-6 mb-8">
          {tips &&
            tips.map((tip) => {
              return (
                <TipCard
                  tip={tip}
                  key={tip.id}
                  // {...recipe}
                  clickToDelete={deleteTip}
                />
                // <Link to={`/tips/${tip.id}`} key={tip.id}>
                //   <TipCard
                //     tip={tip}
                //     key={tip.id}
                //     // {...recipe}
                //     clickToDelete={deleteTip}
                //   />
                // </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default TipList;
