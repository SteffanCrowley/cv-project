import React from "react";

const Overview = (props) => {
  const { name, email } = props;

  return (
    <div>
      <div>Name: {name}</div>
      <div>Email: {email}</div>
    </div>
  );
};

export default Overview;
