import React from "react";
import { testimonial } from "../../../localData";
import Title from "../../common/title/Title";
import "./Testimonial.css";

const Testimonial = () => {
  return (
    <>
      <section className="testimonial padding">
        <div className="container">
          <Title subtitle="testimonial" title="メンバーの声" />
          <div className="content grid2">
            {testimonial.map((val) => (
              <div className="items shadow">
                <div className="box flex">
                  <div className="img">
                    <img src={val.cover} />
                    <i className="fa fa-quote-left icon"></i>
                  </div>
                  <div className="name">
                    <h2>{val.name}</h2>
                    <span>{val.post}</span>
                  </div>
                </div>
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
