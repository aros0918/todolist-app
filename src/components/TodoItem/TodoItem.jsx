import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Button } from "@mui/material";
import React, { useState } from "react";

const TodoItem = ({ index, todo, handleShowEdit, handleOpen, deleteTodo }) => {
  const [checkbox, setCheckbox] = useState(false);

  const handleCheckbox = () => {
    setCheckbox(!checkbox);
  };

  return (
    <>
      <li>
        <input type="checkbox" checked={checkbox} onChange={handleCheckbox} />
        <h3 style={checkbox ? { textDecoration: "line-through" } : null}>
          {todo}
        </h3>
        <div className="buttons">
          <Button
            onClick={() => handleShowEdit(index)}
            variant="contained"
            startIcon={<EditIcon />}
            aria-label="Add Todo"
            disableElevation
            disableRipple
          >
            Edit
          </Button>
          <Button
            onClick={() => deleteTodo(index)}
            className="delete-btn"
            variant="contained"
            startIcon={<DeleteIcon />}
            aria-label="Add Todo"
            disableElevation
            disableRipple
          >
            Delete
          </Button>
        </div>
      </li>
    </>
  );
};

export default TodoItem;
