import React, { useState } from "react";

import DateFnsUtils from "@date-io/date-fns";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";

import "./Form.css";

import { Input } from "@material-ui/core";
import { InputBase } from "@material-ui/core";

const FormComponent = (props) => {
  const [ThinkToDo, setThinkToDo] = useState("");
  const [DateTaken, setDataTaken] = useState(new Date("2022-08-11"));

  const submitHandler = (event) => {
    event.preventDefault();

    const ToDoData = {
      to_do: ThinkToDo,
      date: DateTaken,
      key: Math.random().toString(),
    };

    props.onAddThingToDo(ToDoData);
    setThinkToDo("");
  };

  const ToDoChangeHandler = (e) => {
    setThinkToDo(e.target.value);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <div className="new-to-do">
        <form onSubmit={submitHandler}>
          <div className="new-to-do-wrapper">
            <div>
              <label>Wpisz co masz do zrobienia:</label>
              <Input
                type="text"
                value={ThinkToDo}
                onChange={ToDoChangeHandler}
              ></Input>
            </div>
            <div>
              <label>Ustaw date</label>
              <DatePicker
                value={DateTaken}
                onChange={setDataTaken}
              ></DatePicker>
            </div>
            <div>
              <button type="submit">Dodaj rzecz do zrobienia</button>
            </div>
          </div>
        </form>
      </div>
    </MuiPickersUtilsProvider>
  );
};

export default FormComponent;
