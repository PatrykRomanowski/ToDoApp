import React, { useState } from "react";

import "./Form.css";

const FormComponent = (props) => {
  const [ThinkToDo, setThinkToDo] = useState("");
  const [DateTaken, setDataTaken] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    const ToDoData = {
      to_do: ThinkToDo,
      date: new Date(DateTaken),
    };
    props.onAddThingToDo(ToDoData);
    setThinkToDo("");
    setDataTaken("2022-07-25");
  };

  const ToDoChangeHandler = (e) => {
    setThinkToDo(e.target.value);
  };

  const DataHandler = (e) => {
    setDataTaken(e.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <div>
          <label>Wpisz co masz do zrobienia:</label>
          <input
            type="text"
            value={ThinkToDo}
            onChange={ToDoChangeHandler}
          ></input>
        </div>
        <div>
          <label>Ustaw date</label>
          <input type="date" value={DateTaken} onChange={DataHandler}></input>
        </div>
        <div>
          <button type="submit">Dodaj rzecz do zrobienia</button>
        </div>
      </div>
    </form>
  );
};

export default FormComponent;
