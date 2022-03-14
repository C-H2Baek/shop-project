import React, { Component } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default class SimpleSlider extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000,
        centerMode: true,
        centerPadding: "20px"
      };
      return (
        <div>
          <h2> Event Item</h2>
          <Slider {...settings}>
            <div>
              <img src="https://www.affde.com/uploads/article/36015/KngPLTYbXI3UMmlg.png"/>
            </div>
            <div>
              <img src="https://img.kr.news.samsung.com/kr/wp-content/uploads/2016/08/Grace_kor01.jpg"/>
            </div>
            <div>
              <img src="https://cdn-cms.packative.com/wp-content/uploads/2020/05/04223515/%EC%84%B8%EB%A6%AC%ED%94%84-%ED%8F%B0%ED%8A%B8-600x600.jpeg"/>
            </div>
        
          </Slider>
        </div>
      );
    }
  }