import "./Total.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";

const Target = () => {
  const [todos, setTodos] = useState([
    { text: "", checked: false, editing: false },
    { text: "", checked: false, editing: false },
  ]);

  const [newTodos, setNewTodos] = useState(["", ""]);

  const toggleCheck = (index) => {
    if (todos[index].editing) return;

    const updatedTodos = [...todos];
    updatedTodos[index].checked = !updatedTodos[index].checked;
    setTodos(updatedTodos);
  };

  const startEditing = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].editing = true;
    setTodos(updatedTodos);
  };

  const endEditing = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].editing = false;
    setTodos(updatedTodos);
  };

  const handleTodoChange = (index, e) => {
    const updatedTodos = [...todos];
    updatedTodos[index].text = e.target.value;
    setTodos(updatedTodos);
  };

  const handleNewTodoChange = (index, e) => {
    const updatedNewTodos = [...newTodos];
    updatedNewTodos[index] = e.target.value;
    setNewTodos(updatedNewTodos);
  };

  const addTodo = (index) => {
    if (newTodos[index].trim() !== "") {
      const updatedTodos = [...todos];
      updatedTodos[index] = {
        text: newTodos[index],
        checked: false,
        editing: false,
      };
      setTodos(updatedTodos);

      const updatedNewTodos = [...newTodos];
      updatedNewTodos[index] = "";
      setNewTodos(updatedNewTodos);
    }
  };

  const deleteTodo = (index) => {
    if (todos[index].checked) {
      window.alert("해당 목표에 달성하여 목표 삭제가 불가능합니다.");
    } else {
      const updatedTodos = [...todos];
      updatedTodos[index].text = "";
      setTodos(updatedTodos);
    }
  };

  return (
    <div className="Cal_Target">
      <p className="Cal_Title">월간 목표</p>
      <hr
        style={{
          width: "80%",
          border: "none",
          borderTop: "7px dotted #999",
        }}
      />

      <div>
        {todos.map((todo, index) => (
          <div
            key={index}
            className={`Cal_TargetItem ${todo.checked ? "checked" : ""}`}
          >
            <span onClick={() => toggleCheck(index)}>
              <input
                type="checkbox"
                style={{
                  display: "none" /* 숨겨진 원래 체크박스를 숨김 */,
                }}
              />
              <div
                style={{
                  display: "inline-flex",
                  marginLeft: "5%",
                  marginTop: "2%",
                  marginBottom: "2%",
                }}
              >
                {todo.checked ? (
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ color: "#007bff" }}
                  />
                ) : (
                  <FontAwesomeIcon icon={faSquare} style={{ color: "gray" }} />
                )}
              </div>
            </span>

            <input
              type="text"
              placeholder="목표를 입력해주세요."
              className="Cal_Text"
              value={newTodos[index]}
              onChange={(e) => handleNewTodoChange(index, e)}
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  addTodo(index);
                }
              }}
            />

            {todo.editing ? (
              <input
                type="text"
                className="Cal_Save"
                value={todo.text}
                onChange={(e) => handleTodoChange(index, e)}
                onBlur={() => endEditing(index)}
              />
            ) : (
              <>
                <label onClick={() => startEditing(index)}>{todo.text}</label>
                <button
                  onClick={() => deleteTodo(index)}
                  className="Cal_DeleteButton"
                >
                  X
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Target;
