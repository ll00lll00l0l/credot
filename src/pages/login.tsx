import React, { useState, useEffect } from "react";
import "./styles/login.css";
import { Link } from "react-router-dom";
function Login() {
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  useEffect(() => {
    setShowRegisterForm(false);
  }, []);

  const toggleForm = () => {
    setShowRegisterForm(!showRegisterForm);
  };

  return (
    <div className="loginbody">
      <div>
        <h1>Login/Register to your account</h1>
        {showRegisterForm ? (
          <div >
            
            <p className="login-text">
              Not registered? <Link  to='' onClick={toggleForm}>Create an account</Link>
            </p>
            <form className="loginform" action="#/home" method="get">
              <input type="email" placeholder="Email ID" name="u1" className="logininput" />
              <input type="password" placeholder="Password" name="p1" className="logininput" />
              <button type="submit" className="loginbutton">LOGIN</button>
            </form>
          </div>
        ) : (
          <div>
            <p className="login-text">
              Already registered? <Link  to=' 'onClick={toggleForm}>Sign In</Link>
            </p>
            <form className="loginform" action="create" method="get">
              <input type="text" placeholder="User Name" name="u1" className="logininput" />
              <input type="email" placeholder="Email ID" name="u1" className="logininput" />
              <input type="password" placeholder="Password" name="p1" className="logininput" />
              <button type="submit" className="loginbutton">CREATE</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
