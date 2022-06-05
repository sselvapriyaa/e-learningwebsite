import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div>
      <h2>ELearning Website</h2>
      <ul>
        <li>
          <Link to="/newuser/addNewUser"> User Registration</Link>
          {/*<Link to="/register"> User Registration</Link>*/}
        </li>
        <li>
          <Link to="/newuser/loginUser">Login Here</Link>
        </li>
        <li>
          <Link to="/enroll/addEnrollment">Enroll course</Link>
        </li>
        <li>
          {/*<Link to="courses/getCourses">Get List of Courses</Link>*/}
          <Link to="/getCourses">Get List of Courses</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
