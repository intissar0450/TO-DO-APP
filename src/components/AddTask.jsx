import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { compTask, filterTask } from "../redux/action";

const AddTask = () => {
  //---------------------inputState-------------
  const [text, setText] = useState("");
  //--------------------------------------------

  //-----------------------redux-----------------------
  const { filter } = useSelector((state) => state);
  const dispatch = useDispatch();
  //---------------------------------------------------

  //-------------------------functions------------------------------------
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Math.random(),
      isDone: false,
    };
  };

  //----------------------------------------------------------------------
  return (
    <div>
      <h1>TODO LIST</h1>
      <form action="">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={() => dispatch(filterTask())}>Add</button>
      </form>
      <button>{filter ? "Show All " : "Show Uncompleted"}</button>
    </div>
  );
};

export default AddTask;
