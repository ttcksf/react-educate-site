import React from "react";
import Back from "../common/back/Back";
import "./Contact.css";

const Contact = () => {
  const map =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d630.3173752294683!2d135.70231096527436!3d34.96460317425592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600106905b39f85f%3A0xd4abaf158898c22e!2z44CSNjE1LTgxMDMg5Lqs6YO95bqc5Lqs6YO95biC6KW_5Lqs5Yy65bed5bO25YWt44OO5Z2q55S677yZ77yU4oiS77yR!5e0!3m2!1sja!2sjp!4v1669395714193!5m2!1sja!2sjp";
  return (
    <>
      <Back title="お問い合わせ" />
      <section className="contact padding">
        <div className="container shadow flexSB">
          <div className="left row">
            <iframe src={map}></iframe>
          </div>
          <div className="right row">
            <h1>お問い合わせ先</h1>
            <p>
              下記のフォームにてご記入ください。
              お急ぎの場合はメールアドレスに直接お送り頂いても大丈夫です。
            </p>
            <div className="items">
              <div className="box">
                <h4>住所：</h4>
                <p>京都府京都市西京区川島六ノ坪町９４−１</p>
              </div>
              <div className="box">
                <h4>メールアドレス：</h4>
                <p>ttc0104ksf1993@yahoo.co.jp</p>
              </div>
              <div className="box">
                <h4>電話番号：</h4>
                <p>08061634629</p>
              </div>
            </div>
            <form action="">
              <div className="flexSB">
                <input type="text" placeholder="お名前" />
                <input type="email" placeholder="メールアドレス" />
              </div>
              <input type="text" placeholder="ご用件" />
              <textarea cols="30" rows="10">
                簡単なプロフィール、経歴を記載してください。
              </textarea>
              <button className="primary-btn">送信</button>
            </form>
            <h3>SNSやってます！</h3>
            <span>Facebook Twitter Instagram</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
