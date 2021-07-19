import React, { useState } from "react";

function WatchList() {
  const [text, setText] = useState("");
  const [list, setList] = useState([
    { name: "episode 5", complited: false },
    { name: "episode 2", complited: false },
    { name: "episode 3", complited: false },
  ]);
  const oncomplitedTodo = (i) => {
    const newTodo = [...list];
    newTodo[i].complited = !newTodo[i].complited;
    setList(newTodo);
  };

  const addTodo = () => {
    const item = { name: text, complited: false, important: false };
    const newTodo = [...list, item];
    setList(newTodo);
    setText("");
  };
  const deleteItem = (i) => {
    const newArr = [...list.slice(0, i), ...list.slice(i + 1)];
    setList(newArr);
  };

  return (
    <div className="text-center container pl-5  mt-5 border app">
      <h1>ToDo Watch Episodes</h1>
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button
          className="btn btn-primary"
          onClick={() => {
            addTodo();
          }}
        >
          Add Todo
        </button>
      </div>
      {list.length === 0 ? (
        <div>
          <h1>Please add Todo</h1>
        </div>
      ) : (
        <ul className="">
          {list.map((e, i) => {
            return (
              <li key={e.name} className="d-flex ">
                <h3
                  onClick={() => oncomplitedTodo(i)}
                  className={
                    e.complited === true ? "complited cursor" : "cursor"
                  }
                >
                  {e.name}
                </h3>

                <button
                  onClick={() => {
                    deleteItem(i);
                  }}
                  className="btn btn-danger"
                >
                  delete
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default WatchList;
