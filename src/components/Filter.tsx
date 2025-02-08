import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../store/taskSlice";
import { RootState } from "../store/store";
import "../styles/Filter.scss";

const Filter: React.FC = () => {
  const currentFilter = useSelector((state: RootState) => state.tasks.filter);
  const dispatch = useDispatch();

  return (
    <div className="filters">
      <button
        onClick={() => dispatch(setFilter("all"))}
        className={currentFilter === "all" ? "active" : ""}
      >
        All
      </button>
      <button
        onClick={() => dispatch(setFilter("completed"))}
        className={currentFilter === "completed" ? "active" : ""}
      >
        Completed
      </button>
      <button
        onClick={() => dispatch(setFilter("incomplete"))}
        className={currentFilter === "incomplete" ? "active" : ""}
      >
        Incomplete
      </button>
    </div>
  );
};

export default Filter;
