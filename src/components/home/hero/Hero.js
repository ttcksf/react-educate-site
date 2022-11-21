import React from "react";
import Title from "../../common/title/Title";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <Title
              subtitle="ようこそ ゆるグラへ！"
              title="「楽しい！」を分かち合うプログラミングコミュニティ"
            />
            <p>
              この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています
            </p>
            <div className="button">
              <button className="primary-btn">
                さあ、始めましょう！
                <i className="fa fa-long-arrow-alt-right"></i>
              </button>
              <button>
                コースを見る
                <i className="fa fa-long-arrow-alt-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Hero;
