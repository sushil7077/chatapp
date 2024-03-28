import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here, e.g., call an API or authenticate user
    console.log("Username:", username);
    console.log("Password:", password);
  };
  return (
    <>
      <div className="login-container">
        <div className="login-logo">
          <h1>LOGO</h1>
        </div>
        <div className="login-form-container">
          <div className="login-form">
            <h1 className="login-title">Login</h1>
            <form onSubmit={handleSubmit}>
              {/* <label htmlFor="username" className="username-label">
                User Name */}
              <input
                type="text"
                id="username"
                className="username-input"
                placeholder="User Name"
                value={username}
                onChange={handleUsernameChange}
              />
              {/* </label> */}
              {/* <label htmlFor="password" className="password-label">
                Password */}
              <input
                type="password"
                id="password"
                className="password-input"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
              {/* </label> */}
              <div className="button-container">
                <button type="submit" className="login-button">
                  Login
                </button>
                <button type="submit" className="signup-button">
                  Signup
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
