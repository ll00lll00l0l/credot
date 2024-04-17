import React from 'react';
import "./styles/login.css";

function Login() {
  return (
    <div className="loginbody">
      <div>
        <h1>Login/Register to your account</h1>
        <p className="loginp">Lorem ipsum dolor sit amet consectetur. Sapien ut libero sed lacinia egestas placerat ut sagittionec. </p>
        <form className="loginform" action="#/home" method="get">
          <input type="email" placeholder="Email ID" name="u1" className="logininput"/>
          <input type="password" placeholder="Password" name="p1" className="logininput"/>
          <button type="submit" className="loginbutton">LOGIN</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
