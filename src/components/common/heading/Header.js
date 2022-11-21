import React, { useState } from "react";
import { Link } from "react-router-dom";
import Head from "./Head";
import "./Header.css";

const Header = () => {
  const [click, setClick] = useState(false);
  return (
    <>
      <Head />
      <header>
        <nav className="flexSB">
          <ul
            className={click ? "mobile-nav" : "flexSB"}
            onClick={() => setClick(false)}
          >
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
              <Link to="/pricing">プラン</Link>
            </li>
            <li>
              <Link to="/journal">お知らせ</Link>
            </li>
            <li>
              <Link to="/contact">お問合わせ</Link>
            </li>
          </ul>
          <div className="start">
            <div className="button">証明書を手に入れる</div>
          </div>
          <button className="toggle" onClick={() => setClick(!click)}>
            {click ? (
              <i className="fa fa-times"></i>
            ) : (
              <i className="fa fa-bars"></i>
            )}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
