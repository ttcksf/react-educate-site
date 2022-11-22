import React from "react";
import { aboutWrapper } from "../../localData";

const AboutWrapper = () => {
  return (
    <>
      <section className="aboutWrapper">
        <div className="container grid">
          {aboutWrapper.map((val) => (
            <div className="box flex">
              <div className="img">
                <img src={val.cover} />
              </div>
              <div className="text">
                <h1>{val.data}</h1>
                <h3>{val.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default AboutWrapper;
