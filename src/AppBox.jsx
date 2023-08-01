import React, { useState } from "react";
import "./AppBox.css";
import { MdBrightness7 } from "react-icons/md";

export default function AppBox() {
  const [todo, setTodo] = useState(initialTodo);
  return (
    <div className="back">
      <div className="box">
        <header className="header">
          <MdBrightness7 className="mdBright" />
          <div className="right">
            <span>All</span>
            <span>Active</span>
            <span>Completed</span>
          </div>
        </header>
        <div className="container">
          <div className="inputBox">
            <input type="text" className="input" />
            <button className="inputButton">Add</button>
          </div>
        </div>
      </div>
    </div>
  );
}

const initialTodo = [
  {
    content: "리스트 보여주기",
    state: "1",
  },
  {
    content: "아이템 삭제",
    state: "0",
  },
  {
    content: "아이템 체크박스",
    state: "0",
  },
  {
    content: "아이템 추가",
    state: "0",
  },
  {
    content: "다크모드 지원",
    state: "1",
  },
];
