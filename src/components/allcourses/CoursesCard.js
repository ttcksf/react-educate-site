import React from "react";
import { coursesCard } from "../../localData";
import "./Courses.css";

const CoursesCard = () => {
  return (
    <>
      <section className="coursesCard">
        <div className="container grid2">
          {coursesCard.map((val) => (
            <div className="items">
              <div className="content flex">
                <div className="left">
                  <div className="img">
                    <img src={val.cover} />
                  </div>
                </div>
                <div className="text">
                  <h1>{val.coursesName}</h1>
                  {/* <div className="rate">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <label htmlFor="">(5.0)</label>
                  </div> */}
                  {/* <div className="details">
                    {val.courseTeacher.map((detail) => (
                      <>
                        <div className="box">
                          <div className="detailImg">
                            <img src={detail.detailCover} />
                          </div>
                          <div className="para">
                            <h4>{detail.name}</h4>
                          </div>
                        </div>
                        <span>{detail.totalTime}</span>
                      </>
                    ))}
                  </div> */}
                </div>
              </div>
              {/* <div className="price">
                <h3>
                  {val.priceAll} / {val.pricePer}
                </h3>
              </div> */}
              <div className="margin2"></div>
              <button className="outline-btn">今すぐ見る</button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CoursesCard;
