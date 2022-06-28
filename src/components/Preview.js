import React from "react";
import "../styles/App.css";

const Preview = (props) => {
  const { name, email, phone } = props;

  return (
    <div className="Overview">
      <div>Name: {name}</div>
      <div>Email: {email}</div>
      <div>Phone: {phone}</div>
    </div>
  );
};

export default Preview;
