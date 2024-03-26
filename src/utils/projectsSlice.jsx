import { createSlice } from "@reduxjs/toolkit";

const projectsSlice = createSlice({
  name: "projects",

  initialState: {
    projects: null,
  },

  reducers: {
    addProjects: (state, action) => {
      state.projects = action.payload;
    },
  },
});

export const { addProjects } = projectsSlice.actions;

export default projectsSlice.reducer;
