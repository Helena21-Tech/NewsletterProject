import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  const className = `${classes.button} ${props.className}`;
  return (
    <button className={className} type={props.type} onClick={props.onClick}>
      {props.content}
    </button>
  );
};

export default Button;
