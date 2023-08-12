import React, { useState } from "react";
import "./AppBox.css";
import { MdBrightness7 } from "react-icons/md";
import TodoList from "./components/TodoList";

export default function AppBox() {
  const [todos, setTodos] = useState(initialTodo);
  let nextId = 6;
  const [inputs, setInputs] = useState({
    id: nextId,
    content: "",
    status: "0",
  });

  const handleChange = (e) => {
    setInputs({ ...inputs, content: e.target.value });
  };

  // 추가
  const handleAdd = () => {
    setTodos([...todos, inputs]);
    nextId++;
    setInputs({ ...inputs, id: nextId, content: "" }); // 인풋 value 초기화 시키기
  };

  // 삭제
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const printTodo = () => {
    console.log("todolist: ", todos);
  };

  return (
    <div className="back">
      <div className="box">
        <header className="header">
          <MdBrightness7 className="mdBright" onClick={printTodo} />
          <div className="right">
            <span>All</span>
            <span>Active</span>
            <span>Completed</span>
          </div>
        </header>
        <div className="container">
          <TodoList todos={todos} handleDelete={handleDelete} />
          <div className="inputBox">
            <input
              type="text"
              name="todo"
              value={inputs.content}
              placeholder="  Add a To-do"
              onChange={handleChange}
            />
            <button onClick={handleAdd}>Add</button>
          </div>
        </div>
      </div>
    </div>
  );
}

const initialTodo = [
  {
    id: 1,
    content: "리스트 보여주기",
    status: true,
  },
  {
    id: 2,
    content: "아이템 삭제",
    status: false,
  },
  {
    id: 3,
    content: "아이템 체크박스",
    status: false,
  },
  {
    id: 4,
    content: "아이템 추가",
    status: false,
  },
  {
    id: 5,
    content: "다크모드 지원",
    state: true,
  },
];
