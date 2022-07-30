import React from "react";

import "./ToDoItem.css";

const ToDoItem = (props) => {
  const mouth = props.item.date.toLocaleString("en-US", { month: "long" });
  const day = props.item.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.item.date.getFullYear();
  console.log(props.item.id);
  return (
    <div className="containet_to_do">
      <div>
        <div>{day}</div>
        <div>{mouth}</div>
        <div>{year}</div>
      </div>
      <div> {props.item.to_do} </div>
    </div>
  );
};

export default ToDoItem;
