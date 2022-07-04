import React from "react";
import "../styles/App.css";

const Preview2 = (props) => {
  const { name, email, phone } = props;

  return (
    <div className="Overview">
      <div>School Name: {name}</div>
      <div>Degree: {email}</div>
      <div>Date Finished: {phone}</div>
    </div>
  );
};

export default Preview2;
