import { Component, React } from "react";
import { Link } from "react-router-dom";
import "../styles/register.scss";
import $ from "jquery";

class Registers extends Component {
  state = {
    id: "",
    pw: "",
    name: "",
    sex: "",
    phone: "",
    email: "",
  };

  create = (e) => {
    let id = $("#id");
    let pw = $("#pw");
    let btn = $("#btn");

    $(btn).on("click", function () {
      console.log(id);
      console.log(pw);
      if ($(id).val() == "") {
        $(id).next("label").addClass("warning");
        setTimeout(function () {
          $("label").removeClass("warning");
        }, 1500);
      } else if ($(pw).val() == "") {
        $(pw).next("label").addClass("warning");
        setTimeout(function () {
          $("label").removeClass("warning");
        }, 1500);
      }
    });
  };
  render() {
    return (
      <div className="register-box">
        <Link to="/Home">
          <button className="logo">Arzt</button>
        </Link>
        <h1>Sign Up</h1>
        <form>
          <div className="int-area">
            <input type="text" name="id" id="id" autoComplete="off" required />
            <label htmlFor="id">ID</label>
          </div>
          <div className="int-area">
            <input  type="password"  name="pw"  id="pw"  autoComplete="off"  required/>
            <label htmlFor="pw">PASSWORD</label>
          </div>
          <div className="int-area">
            <input  type="password"  name="cpw"  id="cpw"  autoComplete="off"  required/>
            <label htmlFor="cpw">CHECK PASSWORD</label>
          </div>
          <div className="int-area">
            <input  type="text"  name="name"  id="name"  autoComplete="off"  required/>
            <label htmlFor="name">NAME</label>
          </div>
          <div className="int-area">
            <input  type="text"  name="sex"  id="sex"  autoComplete="off"  required/>
            <label htmlFor="sex">SEX</label>
          </div>
          <div className="int-area">
            <input  type="text"  name="phone"  id="phone"  autoComplete="off"  required/>
            <label htmlFor="phone">PHONE</label>
          </div>
          <div className="int-area">
            <input  type="text"  name="mail"  id="mail"  autoComplete="off"  required/>
            <label htmlFor="mail">E-MAIL</label>
          </div>
          <div className="btn-area">
            <button id="btn" onClick={this.create}>
              CREATE
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Registers;
