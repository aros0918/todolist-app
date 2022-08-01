import React, { useEffect, useState } from "react";
import TodoCreate from "../TodoCreate/TodoCreate";
import TodoEdit from "../TodoEdit/TodoEdit";
import TodoItem from "../TodoItem/TodoItem";
import "./Todolist.scss";

const Todolist = () => {
  //todolist state
  const [list, setList] = useState({ todo: "", todolist: [] });

  //edit state
  const [showEdit, setShowEdit] = useState(false);
  const [edit, setEdit] = useState({
    index: "",
    value: "",
  });

  useEffect(() => {
    const data = localStorage.getItem("todolist");
    setList(JSON.parse(data));
  }, []);

  useEffect(() => {
    localStorage.setItem("todolist", JSON.stringify(list));
  }, [list]);

  //index of list to show in edit component
  const currentTodo = list.todolist[edit.index];

  //update/edit
  const handleShowEdit = (index) => {
    setShowEdit(true);
    setEdit((prevEdit) => ({ ...prevEdit, index: index }));
  };

  //update
  const updateTodo = (index) => {
    const newTodo = list.todolist;
    newTodo[index] = edit.value;
    setList((prevList) => ({ ...prevList, todolist: newTodo }));
    setShowEdit(false);
    localStorage.setItem("todolist", JSON.stringify(newTodo));
  };

  const handleEditInput = (e) => {
    const { value } = e.target;
    setEdit((prevEdit) => ({ ...prevEdit, value: value }));
  };

  //create
  const handleAddInput = (e) => {
    const { value } = e.target;
    setList((prevList) => ({ ...prevList, todo: value }));
  };

  const createTodo = (e) => {
    e.preventDefault();
    const newTodo = list.todolist;
    newTodo.push(list.todo);
    setList((prevList) => ({ todo: "", todolist: newTodo }));
    localStorage.setItem("todolist", JSON.stringify(newTodo));
  };

  //delete
  const deleteTodo = (index) => {
    const newTodo = list.todolist;
    newTodo.splice(index, 1);
    setList((prevList) => ({ ...prevList, todolist: newTodo }));
    localStorage.setItem("todolist", JSON.stringify(newTodo));
  };

  return (
    <main className="app__todolist">
      <div className="app__todolist-container">
        <h1 className="app__todolist-container_title">Todolist</h1>
        <div className="app__todolist-container_todolist">
          <TodoCreate
            list={list}
            handleAddInput={handleAddInput}
            createTodo={createTodo}
          />
          <ul className="app__todolist-container_todolist-todo">
            {list.todolist.length ? (
              list.todolist.map((todo, index) => (
                <TodoItem
                  key={index}
                  index={index}
                  todo={todo}
                  handleShowEdit={handleShowEdit}
                  deleteTodo={deleteTodo}
                />
              ))
            ) : (
              <div style={{ padding: "1rem" }}>
                <h3 style={{ fontSize: "3rem" }}>No todos found!</h3>
              </div>
            )}
          </ul>
          {showEdit && (
            <TodoEdit
              edit={edit}
              setShowEdit={setShowEdit}
              currentTodo={currentTodo}
              handleEditInput={handleEditInput}
              updateTodo={updateTodo}
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Todolist;
