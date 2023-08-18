import React from "react";
import iconList from "../assets/images/icon-list.svg";
import classes from "./List.module.css";

const listContents = [
  "Product discovery and building what matters",
  "Measuring to ensure updates are a success",
  "And much more!",
];
const List = () => {
  return (
    <ul>
      {listContents.map((content, index) => {
        console.log(index);
        return (
          <li className={classes.list} key={Math.random() * 1}>
            <img src={iconList} alt="iconList" />
            <p className={classes.content}>{content}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
