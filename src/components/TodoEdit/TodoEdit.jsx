import EditIcon from "@mui/icons-material/Edit";
import { Button } from "@mui/material";
import React, { useEffect, useRef } from "react";

const TodoEdit = ({
  edit,
  setShowEdit,
  currentTodo,
  handleEditInput,
  updateTodo,
}) => {
  const editModal = useRef("");

  useEffect(() => {
    /**
     * Perform if clicked on outside of element
     */
    const handleClickOutside = (event) => {
      if (editModal.current && !editModal.current.contains(event.target)) {
        setShowEdit(false);
      }
    };
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [editModal]);

  return (
    <div className="app__todolist-container_todolist-edit">
      <div
        ref={editModal}
        className="app__todolist-container_todolist-edit_modal"
      >
        <h2>Edit Todo</h2>
        <h3>{currentTodo}</h3>

        <div>
          <input type="text" value={edit.value} onChange={handleEditInput} />
          <Button
            onClick={() => updateTodo(edit.index)}
            variant="contained"
            startIcon={<EditIcon />}
            aria-label="Add Todo"
            disableElevation
            disableRipple
          >
            Edit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TodoEdit;
