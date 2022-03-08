import React from "react";
import '../app.scss'
import Navi from "../moduls/home/Navi";
import Header from "../moduls/home/Header";

function Home() {
  return (
    <div className="App">
      <div className="navi">
        <Navi/>
      </div>
      <div className="header">
        <Header/>
      </div>
      <div className="body">
        <div className="seidbar close">
          메뉴</div>
        <div className="container">
            <div className="slide">슬라이드</div>
            <div className="content">메인</div>
          </div>
        </div>
      <div className="footer">
          by 장민식팀
        </div>
    </div>
  );
}

export default Home;
