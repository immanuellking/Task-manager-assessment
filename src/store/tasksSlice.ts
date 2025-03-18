import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
export interface Task {
  id: string;
  title: string;
  description: string;
  status: "todo" | "in-progress" | "done";
}
const initialState: Array<Task> = [];
export const tasksSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.push(action.payload);
    },
  },
});
export const { addTask } = tasksSlice.actions;
export const tasksSelector = (state: RootState) => state.tasksReducer;
export default tasksSlice.reducer;
