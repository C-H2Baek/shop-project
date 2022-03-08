import React from "react";
import { Link } from "react-router-dom";
import "../styles/headerStyle.scss";

function Headerlist() {

  const open_category = () =>{
   const category = document.querySelector('.seidbar')
   if(category.classList.contains('open')){
     category.classList.remove('open')
     category.classList.add('close')
   }
   else{
    category.classList.remove('close')
    category.classList.add('open')
   }
  }
  return (
    <>
      <div className="header-category-btn-box">
        <button onClick={open_category} className="header-category-btn">category</button>
      </div>

      <div className="notice-login-singUp-language-box">
        <div className="header-notice-box">
          <button className="header-notice">notice</button>
        </div>

        <div className="header-login-box">
          <Link className="link" to ="/Login">
            <button className="header-login" to = "/Login">login</button>
          </Link>
        </div>

        <div className="header-singUp-box">
          <Link className="link" to ="/Register">
            <button className="header-singUp">sign up</button>
          </Link>
        </div>

        <div className="header-language-box">
          <button className="header-language">global</button>
        </div>
      </div>
    </>
  );
}

export default Headerlist;
