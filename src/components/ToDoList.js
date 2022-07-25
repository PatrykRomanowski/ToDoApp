import React from "react";

import ToDoItem from "./ToDoItem";

import "./ToDoList.css";

const ToDoList = (props) => {
  const List = props.items.map((ToDoDate) => <ToDoItem item={ToDoDate} />);
  return <div>{List}</div>;
};

export default ToDoList;
