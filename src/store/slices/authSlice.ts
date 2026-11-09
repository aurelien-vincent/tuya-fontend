import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  isDemoLoggedIn: boolean;
}

const initialState: AuthState = {
  isDemoLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginDemo: (state) => {
      state.isDemoLoggedIn = true;
    },

    logoutDemo: (state) => {
      state.isDemoLoggedIn = false;
    },
  },
});

export const { loginDemo, logoutDemo } = authSlice.actions;

export default authSlice.reducer;