import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

const Button = () => {
  return (
    <>
      <Link to="/login">
        <button className="btn">Sign In</button>
      </Link>
      <Link to="/newuser/addNewUser">
        <button className="btn">Sign Up</button>
      </Link>
    </>
  );
};

export default Button;
