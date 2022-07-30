import React from "react";

import DeleteTaskButton from "./DeleteTaskButton";

import "./ToDoItem.css";

const ToDoItem = (props) => {
  const deleteItemHandler = (item) => {
    const item_it = item;
    props.onSaveId(item_it);
  };

  const mouth = props.item.date.toLocaleString("en-US", { month: "long" });
  const day = props.item.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.item.date.getFullYear();
  console.log(props.item.id);
  return (
    <div className="container_to_do">
      <div className="container_date">
        <div>{day}</div>
        <div>{mouth}</div>
        <div>{year}</div>
      </div>
      <div> {props.item.to_do} </div>
      <DeleteTaskButton onSaveId={deleteItemHandler} id={props.item.id} />
    </div>
  );
};

export default ToDoItem;
