import React from "react";
//import { useNavigate } from "react-router-dom";
//import { useDispatch } from "react-redux";
import { currentUser} from "../store/Reducer";
//import { enrollAction } from "../store/Action"
import { useSelector } from "react-redux";

/*let uName = '';
let enrollID = '';*/
const Enrollment = () => {
   //const firstname = useSelector(currentFirstName);
   //const lastname = useSelector(currentLastName);
   const user = useSelector(currentUser);
   /* return state;
  });*/
  /*uName = value.items.userName;
  enrollID = value.items.enrollmentID;*/

  /*let enrollmentID = '';
const Enrollment = () => {
   const value = useSelector((state) => {
    return state;
  });
  enrollmentID = value.items.enrollmentID;*/

  /*const navigate = useNavigate();
  const dispatch = useDispatch();
 function getValue(){
    dispatch(enrollAction()); 
    navigate('/enrolluser');
}*/

/*return (
  <div>
    <h1>Welcome Students {value.items.userName}!</h1><br/> 
    <h3 onClick={getValue}>Click here to go to courses</h3>
  </div>
);
};*/

  return (
    <div>
      <h1>Hi {user} ! Thank you for your enrollment in Glad Academy</h1>
      {/*<h1>Hi {userId}! Thank you for your enrollment in Glad Academy</h1>*/}
      {/*<h3 onClick={getValue}>Click here to go to enrollment</h3>*/}
    </div>
   
  );

  
};

export default Enrollment;
//export {enrolluser };
//export {user};


