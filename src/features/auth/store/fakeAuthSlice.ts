import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { FakeAuthState, FakeAuthPayload } from '../../../types';

const TOKEN = 'token';

const storedToken = localStorage.getItem(TOKEN);

const initialState: FakeAuthState = {
  auth: storedToken ? { user: { id: '', email: '' }, token: storedToken } : null,
  isAuthenticated: Boolean(storedToken),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<FakeAuthPayload>) => {
      state.auth = action.payload;
      state.isAuthenticated = true;
      localStorage.setItem(TOKEN, action.payload.token);
    },
    logout: (state) => {
      state.auth = null;
      state.isAuthenticated = false;
      localStorage.removeItem(TOKEN);
    },
  },
});

export const { setAuth, logout } = authSlice.actions;
export default authSlice.reducer;
