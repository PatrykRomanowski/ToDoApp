import React from "react";

import "./DeleteTaskButton.css";

const DeleteTaskButton = (props) => {
  const DeleteItemHandler = () => {
    props.onSaveId(props.id);
  };

  return (
    <button onClick={DeleteItemHandler} className="delete-class-button">
      Usuń zadanie
    </button>
  );
};

export default DeleteTaskButton;
