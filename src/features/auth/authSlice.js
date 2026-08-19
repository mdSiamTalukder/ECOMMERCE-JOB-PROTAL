import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,

  registeredUsers: [],

  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {
    // =========================
    // REGISTER
    // =========================

    registerStart: (state) => {
      state.loading = true;
      state.error = null;
    },

    registerSuccess: (state, action) => {
      state.loading = false;

      state.registeredUsers.push(action.payload.user);

      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;

      state.error = null;
    },

    registerFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
    },

    // =========================
    // LOGIN
    // =========================

    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },

    loginSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.error = null;
    },

    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
    },

    // =========================
    // LOGOUT
    // =========================

    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.error = null;
    },

    // =========================
    // CLEAR ERROR
    // =========================

    clearAuthError: (state) => {
      state.error = null;
    },
  },
});

export const {
  registerStart,
  registerSuccess,
  registerFailure,
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
  clearAuthError,
} = authSlice.actions;

export default authSlice.reducer;
