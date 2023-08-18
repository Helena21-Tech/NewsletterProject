import React from "react";
import List from "./List";
import Form from "./Form";
import mainImg from "../assets/images/illustration-sign-up-desktop.svg";
import mainImgMobile from "../assets/images/illustration-sign-up-mobile.svg";
import classes from "./Main.module.css";
import Card from "./UI/Card";

const Main = (props) => {
  const getEmailHandler = (email) => {
    return props.onSubmit(email);
  };
  return (
    <Card className={classes.main}>
      <picture>
        <source
          srcSet={mainImgMobile}
          alt="main image"
          media="(max-width: 990px)"
          className={classes.mainImg}
        />
        <source
          srcSet={mainImg}
          alt="main image"
          media="(min-width:1296px)"
          className={classes.mainImg}
        />
        <img src={mainImg} alt="main image" className={classes.mainImg} />
      </picture>
      <div className={classes["main_content"]}>
        <h1>Stay updated!</h1>
        <h4>Join 60,000+ product managers receiving monthly updates on:</h4>
        <List />
        <Form getEmail={getEmailHandler} />
      </div>
    </Card>
  );
};

export default Main;
