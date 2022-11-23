import React from "react";
import Back from "../common/back/Back";
import TeamCard from "./TeamCard";

const Team = () => {
  return (
    <>
      <Back title="運営メンバー" />
      <section className="team padding">
        <div className="container grid">
          <TeamCard />
        </div>
      </section>
    </>
  );
};

export default Team;
