import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
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
  filterStatus: "all" | "to do" | "in progress" | "done";
}
const initialState: TaskState = {
  tasks: [],
  editingTask: null,
  filterStatus: "all",
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
    setFilterStatus: (
      state,
      action: PayloadAction<"all" | "to do" | "in progress" | "done">
    ) => {
      state.filterStatus = action.payload;
    },
  },
});
export const {
  addTask,
  setEditingTask,
  updateTask,
  clearEditingTask,
  deleteTask,
  setFilterStatus,
} = tasksSlice.actions;
export const tasksSelector = (state: RootState) => state.tasksReducer;
export const filteredTasksSelector = createSelector(
  [
    (state: RootState) => state.tasksReducer.tasks,
    (state: RootState) => state.tasksReducer.filterStatus,
  ],
  (tasks, filterStatus) => {
    if (filterStatus === "all") return tasks;
    return tasks.filter((task) => task.status === filterStatus);
  }
);
export default tasksSlice.reducer;
