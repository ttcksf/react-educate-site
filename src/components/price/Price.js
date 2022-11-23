import React from "react";
import Back from "../common/back/Back";
import PriceCard from "./PriceCard";
import "./Price.css";

const Price = () => {
  return (
    <>
      <Back title="プランのご紹介" />
      <section className="price padding">
        <div className="container grid">
          <PriceCard />
        </div>
      </section>
    </>
  );
};

export default Price;
