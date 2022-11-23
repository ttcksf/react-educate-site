import React from "react";
import { homeAbout } from "../../localData";
import Title from "../common/title/Title";
import AboutWrapper from "./AboutWrapper";
import "./About.css";

const AboutCard = () => {
  return (
    <>
      <section className="aboutHome">
        <div className="container flexSB">
          <div className="left row">
            <img src="./images/about.jpg" />
          </div>
          <div className="right row">
            <Title subtitle="What's Yurugura?" title="ゆるグラの特徴" />
            <div className="items">
              {homeAbout.map((val) => (
                <div className="item flexSB">
                  <div className="img">
                    <img src={val.cover} />
                  </div>
                  <div className="text">
                    <h2>{val.title}</h2>
                    <p>{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <AboutWrapper />
    </>
  );
};

export default AboutCard;
