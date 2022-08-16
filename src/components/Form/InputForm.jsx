import React, { useState } from "react";

const InputForm = (props) => {
  const [userTask, setUserTask] = useState("");
  const [userDate, setUserDate] = useState("");
  const [userName, setUserName] = useState("");

  const formChanged = (event) => {
    // neperkrauna puslapio
    event.preventDefault();
    const taskData = {
      taskName: userTask,
      dueDate: userDate,
      taskVardas: userName,
    };
    props.onDataSaved(taskData);
  };

  const userTaskHandler = (event) => {
    setUserTask(event.target.value);
  };

  const userDateHandler = (event) => {
    setUserDate(event.target.value);
  };

  const userNameHandler = (event) => {
    setUserName(event.target.value);
  };

  return (
    <div>
      <form onSubmit={formChanged}>
        <div>
          <label htmlFor="">Įveskite užduotį</label>
          <input type="text" onChange={userTaskHandler} />
        </div>
        <div>
          <label htmlFor="">Įveskite atlikimo datą</label>
          <input type="text" onChange={userDateHandler} />
        </div>
        <div>
          <label htmlFor="">
            Įveskite užduočiai priskirto darbuotojo vardą
          </label>
          <input type="text" onChange={userNameHandler} />
        </div>
        <button type="submit">Sukurti užduotį</button>
      </form>
    </div>
  );
};

export default InputForm;
