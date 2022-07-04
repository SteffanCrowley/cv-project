import React from "react";
import "../styles/App.css";

const Preview3 = (props) => {
  const { name, email, phone, phone2 } = props;

  return (
    <div className="Overview">
      <div>Company Name: {name}</div>
      <div>Position: {email}</div>
      <div>Start Date: {phone}</div>
      <div>End Date: {phone2}</div>
    </div>
  );
};

export default Preview3;
