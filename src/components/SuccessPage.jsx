import React from "react";
import iconSuccess from "../assets/images/icon-success.svg";
import Button from "./UI/Button";
import classes from "./SuccessPage.module.css";
import Card from "./UI/Card";

const SuccessPage = (props) => {
  const actionHandler = () => {
    props.onDismiss();
  };
  return (
    <Card className={classes.success}>
      <div>
        <img src={iconSuccess} alt="Success" />
        <h1>Thanks for subscribing!</h1>
        <p className={classes.content}>
          A confirmation email has been sent to <span>{props.email}</span> .
          Please open it and click the button inside to confirm your
          subscription.
        </p>
      </div>

      <Button
        type="button"
        content="Dismiss Message"
        onClick={actionHandler}
        className={classes.btn}
      />
    </Card>
  );
};

export default SuccessPage;
