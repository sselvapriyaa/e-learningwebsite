import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
//import { useDispatch } from "react-redux";
import { getCoursesAction } from "../store/Action";

//import { Link } from "react-router-dom";

let uName = '';
const LoggedIn = () => {
   const value = useSelector((state) => {
    return state;
  });

  /*let userId = '';
const LoggedIn = () => {
   const value = useSelector((state) => {
    return state;
  });*/
  
  uName = value.items.userName;
  //userId = value.items.userId;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function getValue(){
      dispatch(getCoursesAction()); 
      navigate('/courses');
  }

  return (
    <div>
      {/*<h1>Welcome Students {value.items.userName}!</h1><br/> */}
      <h1>Welcome {value.items.userName}!</h1><br/>
      <h3 onClick={getValue}>Click here to go to courses</h3>
    </div>
  );
};

export default LoggedIn;
export {uName};
//export {userId};