import React, { useState } from "react";
import Button from "./UI/Button";
import classes from "./Form.module.css";

const Form = (props) => {
  const [email, setEmail] = useState("");
  const [emailIsValid, setEmailIsVaild] = useState(true);

  const checkEmail = (email) => {
    return setEmailIsVaild(() => {
      return email.includes("@gmail.com");
    });
  };
  const emailValueHandler = (event) => {
    setEmail(event.target.value);
    checkEmail(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    checkEmail(email);
    if (email.trim().length <= 0 || !emailIsValid) return;
    props.getEmail(email);
  };
  return (
    <form action="submit" onSubmit={submitHandler}>
      <div className={classes.label}>
        <label htmlFor="email">Email address </label>
        {!emailIsValid && (
          <label htmlFor="email" className={classes.check}>
            Valid mail required
          </label>
        )}
      </div>
      <input
        className={emailIsValid ? classes.valid : classes.invalid}
        type="email"
        placeholder="email@company.com"
        onChange={emailValueHandler}
        value={email}
      />
      <Button
        type="submit"
        content="Subscribe to monthly newsletter"
        className={classes.btn}
      />
    </form>
  );
};

export default Form;
