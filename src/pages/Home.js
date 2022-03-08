import React from "react";
import '../app.scss'
import Navi from "../moduls/Navi";
import Header from "../moduls/Header";

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
          @장민식팀
        </div>
    </div>
  );
}

export default Home;
