import React from "react";
import { price } from "../../localData";
import "./Price.css";

const PriceCard = () => {
  return (
    <>
      {price.map((val) => (
        <div className="items shadow">
          <h4>{val.name}</h4>
          <h1>
            <span> 月 </span>
            {val.price}
            <span> 円</span>
          </h1>
          <p>{val.desc}</p>
          <button className="outline-btn">始める</button>
        </div>
      ))}
    </>
  );
};

export default PriceCard;
