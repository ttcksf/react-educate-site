import React from "react";
import { online } from "../../localData";
import Title from "../common/title/Title";

const OnlineCourses = () => {
  return (
    <>
      <section className="online">
        <div className="container">
          <Title subtitle="ジャンル" title="ゆるグラで体験できるジャンル" />
          <div className="content grid3">
            {online.map((val) => (
              <div className="box">
                <div className="img">
                  <img src={val.cover} />
                  <img src={val.hoverCover} className="show" />
                </div>
                <h1>{val.courseName}</h1>
                <span>{val.course}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OnlineCourses;
