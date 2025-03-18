import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
export interface Task {
  id: string;
  title: string;
  description?: string;
  status: "todo" | "in progress" | "done";
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
  },
});
export const { addTask } = tasksSlice.actions;
export const tasksSelector = (state: RootState) => state.tasksReducer;
export default tasksSlice.reducer;
