import React from "react";

import ToDoItem from "./ToDoItem";

import "./ToDoList.css";

const ToDoList = (props) => {
  const deleteItemHandler = (item) => {
    const item_it = item;
    props.onSaveId(item_it);
  };

  const List = props.items.map((ToDoDate) => (
    <ToDoItem onSaveId={deleteItemHandler} item={ToDoDate} />
  ));
  return <div>{List}</div>;
};

export default ToDoList;
