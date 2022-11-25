import React from "react";
import { Link } from "react-router-dom";
import { blog } from "../../../localData";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <section className="newsLetter">
        <div className="container flexSB">
          <div className="left row">
            <h1>メルマガ配信中！</h1>
            <span>
              プログラミング学習やIT業界の知って得する情報をお届けします。
            </span>
          </div>
          <div className="right row">
            <input type="text" placeholder="メールアドレスを入力" />
            <i className="fa fa-paper-plane"></i>
          </div>
        </div>
      </section>
      <footer>
        <div className="container padding">
          <div className="box logo">
            <h1>ゆるグラ</h1>
            <span>シェアリングエコノミー型プログラミングコミュニティ</span>
            <p>
              未経験も経験者もワイワイ楽しく勉強して、自分の生活を豊かにしましょう！
            </p>
            <i className="fab fa-facebook-f icon"></i>
            <i className="fab fa-instagram icon"></i>
            <i className="fab fa-twitter icon"></i>
          </div>
          <div className="box link">
            <h3>メニュー</h3>
            <ul>
              <li>
                <Link to="/">ホーム</Link>
              </li>
              <li>
                <Link to="/courses">ジャンル</Link>
              </li>
              <li>
                <Link to="/about">コミュニティ</Link>
              </li>
              <li>
                <Link to="/team">運営</Link>
              </li>
              <li>
                <Link to="/price">プラン</Link>
              </li>
              {/* <li>
              <Link to="/blog">お知らせ</Link>
            </li> */}
              <li>
                <Link to="/contact">お問合わせ</Link>
              </li>
            </ul>
          </div>
          {/* <div className="box">
            <h3>最新のお知らせ</h3>
            {blog.slice(0, 3).map((val) => (
              <div className="items flexSB">
                <div className="img">
                  <img src={val.cover} />
                </div>
                <div className="text">
                  <span>
                    <i className="fa fa-user"></i>
                    <label htmlFor="">{val.type}</label>
                  </span>
                  <span>
                    <i className="fa fa-calendar-alt"></i>
                    <label htmlFor="">{val.date}</label>
                  </span>
                  <h4>{val.title}</h4>
                </div>
              </div>
            ))}
          </div> */}
          <div className="box last">
            <h3>お問い合わせ先</h3>
            <ul>
              <li>
                <i className="fa fa-map"></i>
                京都府京都市西京区川島六ノ坪町９４−１
              </li>
              <li>
                <i className="fa fa-phone-alt"></i>
                08061634629
              </li>
              <li>
                <i className="fa fa-paper-plane"></i>
                ttc0104ksf1993@yahoo.co.jp
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="legal">
        <p>Copyright @2022 All rights reserved by Yurugura</p>
      </div>
    </>
  );
};

export default Footer;
