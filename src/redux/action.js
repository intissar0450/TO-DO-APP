import { type } from "@testing-library/user-event/dist/type";
import {
  ADD_TASK,
  COMPLETE_TASK,
  DELETE_TASK,
  FILTER_TASK,
} from "./actionTypes";

export const deleteTask = (TaskID) => {
  return {
    type: DELETE_TASK,
    payload: TaskID,
  };
};

export const compTask = (TaskID) => {
  return {
    type: COMPLETE_TASK,
    payload: TaskID,
  };
};

export const filterTask = () => {
  return {
    type: FILTER_TASK,
  };

  export const AddTask = (newTask) => {
    return {
      type: ADD_TASK,
      payload: newTask,
    };
  };
};
