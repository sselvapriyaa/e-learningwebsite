import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

const Button = () => {
  return (
    <>
     {/*<Link to="/loginUser">*/}
      <Link to="/sign-in">
        <button className="btn">Sign In</button>
      </Link>
      {/*<Link to="/newuser/addNewUser">*/}
      <Link to="/sign-up">
        <button className="btn">Sign Up</button>
      </Link>
    </>
  );
};

export default Button;
