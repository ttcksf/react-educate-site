import React from "react";
import Title from "../common/title/Title";
import PriceCard from "../price/PriceCard";

const HomePrice = () => {
  return (
    <div>
      <section className="homePrice padding">
        <Title subtitle="plan" title="プラン一覧" />
        <div className="price container grid">
          <PriceCard />
        </div>
      </section>
    </div>
  );
};

export default HomePrice;
