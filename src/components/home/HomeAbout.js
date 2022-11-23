import React from "react";
import { coursesCard } from "../../localData";
import Title from "../common/title/Title";

const HomeAbout = () => {
  return (
    <>
      <section className="homeAbout">
        <div className="container">
          <Title
            subtitle="let's study"
            title="幅広いジャンルのスキルを身につけましょう！"
          />
          <div className="coursesCard">
            <div className="grid2">
              {coursesCard.slice(0, 3).map((val) => (
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
                      <div className="details">
                        {/* {val.courseTeacher.map((detail) => (
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
                    ))} */}
                      </div>
                    </div>
                  </div>
                  <div className="price">
                    <h3>
                      {val.priceAll} / {val.pricePer}
                    </h3>
                  </div>
                  <div className="margin2"></div>
                  <button className="outline-btn">今すぐ見る</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeAbout;
