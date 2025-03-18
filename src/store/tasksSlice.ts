import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
export interface Task {
  id: string;
  title: string;
  description?: string;
  status: "to do" | "in progress" | "done";
}
export interface TaskState {
  tasks: Task[];
  editingTask: Task | null;
}
const initialState: TaskState = {
  tasks: [],
  editingTask: null,
};
export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
    setEditingTask: (state, action: PayloadAction<Task | null>) => {
      state.editingTask = action.payload;
    },
    updateTask: (state, action: PayloadAction<Task>) => {
      const index = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      );
      if (index !== -1) {
        state.tasks[index] = action.payload;
      }
      state.editingTask = null;
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    clearEditingTask: (state) => {
      state.editingTask = null;
    },
  },
});
export const { addTask, setEditingTask, updateTask, clearEditingTask, deleteTask } =
  tasksSlice.actions;
export const tasksSelector = (state: RootState) => state.tasksReducer;
export default tasksSlice.reducer;
