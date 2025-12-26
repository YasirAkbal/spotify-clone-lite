import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { OAuthState, OAuthPayload } from '../../../types';

const initialState: OAuthState = {
  auth: null,
  expiresAt: null,
};

const authSlice = createSlice({
  name: 'oauth',
  initialState: initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<OAuthPayload>) => {
      state.auth = action.payload;
      state.expiresAt = Date.now() + action.payload.expires_in * 1000;
    },
    logout: (state) => {
      state.auth = null;
      state.expiresAt = null;
    },
  },
});

export const { setAuth, logout } = authSlice.actions;
export default authSlice.reducer;
