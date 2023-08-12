import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

export default function TodoList({ todos, handleDelete }) {
  const [checkedItems, setCheckedItems] = useState(new Set()); // 체크된 아이템들 (중복 없이)
  const [isChecked, setIsChecked] = useState(false);

  const checkedItemsHandle = (id, isChecked) => {
    // true: set에 요소 add
    if (isChecked) {
      checkedItems.add(id);
      setCheckedItems(checkedItems);
    }
    // false거나 존재했다면 delete
    if (!isChecked && checkedItems.has(id)) {
      checkedItems.delete(id);
      setCheckedItems(checkedItems);
    }
  };

  const checkHandle = (e, todo) => {
    setIsChecked(!isChecked);
    checkedItemsHandle(todo.id, e.target.checked);
  };

  return (
    <div className="todoBox">
      {todos.map((todo) => (
        <div className="todo" key={todo.id}>
          <input
            type="checkbox"
            checked={checkedItems.has(todo.id)}
            onChange={(e) => checkHandle(e, todo)}
          />
          <span>{todo.content}</span>
          <div className="delete" onClick={() => handleDelete(todo.id)}>
            <DeleteIcon />
          </div>
        </div>
      ))}
    </div>
  );
}
