import {React,useState}  from "react";
import {Link} from "react-router-dom";
import "../styles/login.scss";
import $ from 'jquery'
const Login = () => {
  
  const [id, setId] = useState('')
  const [password, setPassword] = useState('') 
  
  const handleChange = (e) => {
    const { name, value } = e.target
    console.log(name, value)
    name === 'id' ? setId(value) : setPassword(value)
  }

  const login = (e) => {
    let id = $('#id');
    let pw = $('#pw');
    let btn = $('#btn');

    $(btn).on('click', function() {
    console.log(id)
    console.log(pw)
    if($(id).val() == "") {
        $(id).next('label').addClass('warning');
        setTimeout(function(){
            $('label').removeClass('warning');
        },1500);

    }
    else if($(pw).val() == "") {
        $(pw).next('label').addClass('warning');
        setTimeout(function(){
            $('label').removeClass('warning');
        },1500);
    }
    // 서버로 
    fetch()
});
  }

  return (
    <div className="login-box">

      <Link to="/Home">
        <button className="logo">Arzt</button>
      </Link>

      <h1>LOGIN</h1>

      <form>
        <div className="int-area">
          <input type="text" name="id" id="id" autoComplete="off" value={id} onChange={handleChange} required />
          <label htmlFor="id">USER ID</label>
        </div>

        <div className="int-area">
          <input type="password"  name="pw"  id="pw"  autoComplete="off" value={password} onChange={handleChange}  required />
          <label htmlFor="pw">PASSWORD</label>
        </div>

        <div className="btn-area">
          <button id="btn" onClick={login}>
            LOGIN
          </button>
        </div>
      </form>

      <div className="caption">
      <Link to="/ForgetPassword">
        <button className="forgetPassword">
            Forgot Password?
        </button>
      </Link>
      </div>

    </div>
  );
};

export default Login;
