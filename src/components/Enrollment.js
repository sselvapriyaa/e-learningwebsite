import React from "react";
import { currentUser } from "../store/Reducer";
import { useSelector } from "react-redux";
const Enrollment = () => {
  const user = useSelector(currentUser);
  return (
    <div>
      <h1>{user} Thank you for your enrollment in Glad Academy</h1>
    </div>
  );
};

export default Enrollment;
