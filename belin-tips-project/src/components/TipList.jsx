import React from "react";
import tipsData from "../tips-data.json";
import tipCard from "./TipCard";
import { useState } from "react";
import { Link } from "react-router-dom";

function ItemList() {
  const [tips, setTips] = useState(tipsData);

  return <div>ItemList</div>;
}

export default ItemList;
