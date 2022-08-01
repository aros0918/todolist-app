import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import React from "react";

const TodoCreate = ({ list, handleAddInput, createTodo }) => {
  return (
    <form
      className="app__todolist-container_todolist-form"
      onSubmit={createTodo}
    >
      <input
        type="text"
        placeholder="What do you need todo?"
        value={list.todo}
        onChange={handleAddInput}
      />
      <Button
        variant="contained"
        startIcon={<AddIcon />}
        aria-label="Add Todo"
        disableElevation
        disableRipple
        onClick={createTodo}
      >
        Add
      </Button>
    </form>
  );
};

export default TodoCreate;
