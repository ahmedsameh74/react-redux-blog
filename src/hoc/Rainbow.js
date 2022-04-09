import React from "react";

const Rainbow = (WrappedComponent) => {
  const colors = ["red", "black", "white"];
  const randomColors = colors[Math.floor(Math.random() * 3)];
  const className = randomColors + "-text";
  return (props) => {
    return (
      <div className={className}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default Rainbow;
