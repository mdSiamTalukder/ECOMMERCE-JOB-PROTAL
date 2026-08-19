import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  applications: [],
};

const applicationSlice = createSlice({
  name: "applications",
  initialState,

  reducers: {
    addApplication: (state, action) => {
      const alreadyApplied = state.applications.some(
        (application) => application.jobId === action.payload.jobId,
      );

      if (alreadyApplied) {
        return;
      }

      state.applications.push({
        ...action.payload,
        id: Date.now(),
        status: "Pending",
        appliedAt: new Date().toLocaleDateString(),
      });
    },

    removeApplication: (state, action) => {
      state.applications = state.applications.filter(
        (application) => application.id !== action.payload,
      );
    },

    updateApplicationStatus: (state, action) => {
      const application = state.applications.find(
        (item) => item.id === action.payload.id,
      );

      if (application) {
        application.status = action.payload.status;
      }
    },
  },
});

export const { addApplication, removeApplication, updateApplicationStatus } =
  applicationSlice.actions;

export default applicationSlice.reducer;
