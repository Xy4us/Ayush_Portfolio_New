import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from "./projectsSlice";

const appStore = configureStore({
  reducer: {
    projects: projectsReducer,
  },
});

export default appStore;
