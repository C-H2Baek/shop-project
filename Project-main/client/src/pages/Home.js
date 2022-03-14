import React from "react";
import '../app.scss'
import Navi from "../moduls/home/Navi";
import Header from "../moduls/home/Header";
import Menu from "../moduls/home/Menu";
import Slide from "../moduls/home/Sliede";

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
        <div className="container">
          <Menu/>
          <div className="slide"><Slide/></div>
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
