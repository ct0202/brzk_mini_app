import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: null,
  isAuthenticated: false
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserEmail: (state, action) => {
      state.email = action.payload;
    },
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    clearUserData: (state) => {
      state.email = null;
      state.isAuthenticated = false;
    }
  }
});

export const { setUserEmail, setIsAuthenticated, clearUserData } = userSlice.actions;
export default userSlice.reducer; 