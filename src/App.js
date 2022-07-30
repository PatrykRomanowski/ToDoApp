import { useState } from "react";

import ToDoList from "./components/ToDoList";

import "./App.css";
import FormComponent from "./components/Form";

const TO_DO_INITIAL = [
  {
    id: 1,
    to_do: "zrobić zakupy",
    date: new Date(2022, 8, 15),
  },
  {
    id: 2,
    to_do: "kupić buty",
    date: new Date(2022, 9, 15),
  },
  {
    id: 3,
    to_do: "pójść do fryzjera",
    date: new Date(2022, 9, 14),
  },
];

function App() {
  const [toDo, setToDo] = useState(TO_DO_INITIAL);

  const deleteItemHandler = (item_id) => {
    console.log(item_id + "XD");
    const newArray = toDo.filter((el) => el.id !== item_id);
    setToDo(newArray);
  };

  const newThingToDo = (thing) => {
    setToDo((prevToDo) => {
      return [...prevToDo, thing];
    });
  };

  return (
    <div className="App">
      <FormComponent onAddThingToDo={newThingToDo} />
      <ToDoList onSaveId={deleteItemHandler} items={toDo} />
    </div>
  );
}

export default App;
