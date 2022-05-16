import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUserAction } from "../store/Action";
import "./Register.css";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [regDate, setRegDate] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    
    e.preventDefault();
    const postData = {
      firstName: firstName,
      lastName: lastName,
      regDate: regDate,
      address: address,
      phoneNumber: phoneNumber,
      userName: userName,
      email: email,
      password: password,
     
    };
   dispatch(addUserAction(postData));
   navigate('/enroll');
        
  };

  return (
    <div className="user">
      <form className="user_form" onSubmit={(e) => handleSubmit(e)}>
        <h3>New User Registration</h3>
        <label>First Name </label>
        <input
          type="text"
          placeholder="Enter First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br />
        <label>Last Name </label>
        <input
          type="text"
          placeholder="Enter Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      <br />
        <label>Reg Date </label>
        <input
          type="text"
          placeholder="Enter Reg Date"
          value={regDate}
          onChange={(e) => setRegDate(e.target.value)}
        />
        <br />
        <label>Address </label>
        <input
          type="text"
          placeholder="Enter Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <br />
        <label>Phone Number </label>
        <input
          type="number"
          placeholder="Enter Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <br />
        <label>User Name</label>
        <input
          type="text"
          placeholder="Enter User Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <br />
        <label>Email </label>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label>Password </label>
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />

        <button type="submit" className="submit_btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;

