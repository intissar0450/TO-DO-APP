import { type } from "@testing-library/user-event/dist/type";
import { COMPLETE_TASK, DELETE_TASK, FILTER_TASK } from "./actionTypes";

const initialState = {
  tasks: [
    { id: Math.random(), action: "learn React", isDone: true },
    { id: Math.random(), action: "learn Props ", isDone: true },
    { id: Math.random(), action: "learn API ", isDone: true },
  ],
  filter: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case DELETE_TASK:
      return { ...state, tasks: state.tasks.filter((el) => el.id !== payload) };
    case COMPLETE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((el) =>
          el.id === payload ? { ...el, isDone: !el.isDone } : el
        ),
      };
    case FILTER_TASK:
      return { ...state, filter: !state.filter };
    default:
      return state;
  }
};

export default reducer;
