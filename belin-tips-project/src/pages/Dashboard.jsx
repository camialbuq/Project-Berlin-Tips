import React, { useEffect, useState } from "react";
import TipList from "../components/TipList";

// function Dashboard(withAddTip) {
//this for popup AddTip, but didn'T work
// const [addTip, setAddTip] = useState(null);

// useEffect(() => {
//   setAddTip(withAddTip);
// }, [withAddTip]);
// //whenever the withAddTip is updated it is a dependency

function Dashboard() {
  return (
    <div className="dashboardContainer">
      <TipList />
    </div>
  );
}

export default Dashboard;
