import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../store/Action";
import { useNavigate } from "react-router-dom";

import "./Loginform.css";

const Loginform = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const value = useSelector((state) => {
  //   return state;
  // });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (value) {
  //     navigate("/userprofile");
  //   }
  // }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const postData = {
      username: userName,
      email: email,
      password: password,
    };
    dispatch(loginAction(postData));
    navigate('/courses/addCourses');
  };

  return (
    <>
      <h3>Login Form</h3>
      <div className="login">
        <form className="login_form" onSubmit={(e) => handleSubmit(e)}>
          <label>User Name: </label>

          <input
            type="text"
            placeholder="Enter User Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <br />
          <label>Email: </label>

          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label>Password: </label>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <button type="submit" className="submit_btn">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Loginform;
