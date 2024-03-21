import React from "react";
import { useDispatch } from "react-redux";
import { compTask, deleteTask } from "../redux/action";
import { EDIT_TASK } from "../redux/actionTypes";

const TaskCard = ({ el }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <h1 id={el.isDone ? "comp" : "uncomp"}>{el.action}</h1>
      <button onClick={() => dispatch(deleteTask(el.id))}>Delete</button>

      <button onClick={() => dispatch(compTask(el.id))}>
        {el.isDone ? "Undo" : " Complete"}
      </button>
    </div>
  );
};

export default TaskCard;
