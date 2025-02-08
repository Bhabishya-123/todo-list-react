import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item as ItemType } from "../types/Item";

interface TaskState {
  items: ItemType[];
  filter: string;
}

const initialState: TaskState = {
  items: JSON.parse(localStorage.getItem("tasks") || "[]"),
  filter: "all",
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      const newTask: ItemType = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };
      state.items.push(newTask);
      localStorage.setItem("tasks", JSON.stringify(state.items));
    },
    editTask: (
      state,
      action: PayloadAction<{ id: number; newText: string }>
    ) => {
      const { id, newText } = action.payload;
      const task = state.items.find((item) => item.id === id);
      if (task) {
        task.text = newText;
        localStorage.setItem("tasks", JSON.stringify(state.items));
      }
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem("tasks", JSON.stringify(state.items));
    },
    toggleTaskComplete: (state, action: PayloadAction<number>) => {
      const task = state.items.find((item) => item.id === action.payload);
      if (task) {
        task.completed = !task.completed;
        localStorage.setItem("tasks", JSON.stringify(state.items));
      }
    },
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
    moveTask: (
      state,
      action: PayloadAction<{ dragIndex: number; hoverIndex: number }>
    ) => {
      const { dragIndex, hoverIndex } = action.payload;
      const reorderedItems = [...state.items];
      const [movedItem] = reorderedItems.splice(dragIndex, 1);
      reorderedItems.splice(hoverIndex, 0, movedItem);
      state.items = reorderedItems;
      localStorage.setItem("tasks", JSON.stringify(state.items));
    },
  },
});

export const {
  addTask,
  editTask,
  deleteTask,
  toggleTaskComplete,
  setFilter,
  moveTask,
} = taskSlice.actions;
export default taskSlice.reducer;
