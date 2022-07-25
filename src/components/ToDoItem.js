import React from "react";

import "./ToDoItem.css";

const ToDoItem = (props) => {
  return <h1> {props.item.to_do} </h1>;
};

export default ToDoItem;
