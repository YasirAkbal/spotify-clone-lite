import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface OAuthState {
  access_token: string;
  token_type: string;
  scope: string;
  expires_in: number;
  refresh_token: string;
  expiresAt: number | null;
}

const initialState: OAuthState = {
  access_token: '',
  token_type: 'Bearer',
  scope: '',
  expires_in: 0,
  refresh_token: '',
  expiresAt: null,
};

const authSlice = createSlice({
  name: 'oauth',
  initialState: initialState,
  reducers: {
    setAuth: (
      state,
      action: PayloadAction<{
        auth: {
          access_token: string;
          token_type: string;
          scope: string;
          expires_in: number;
          refresh_token: string;
        };
      }>
    ) => {
      state.access_token = action.payload.auth.access_token;
      state.token_type = action.payload.auth.token_type;
      state.scope = action.payload.auth.scope;
      state.expires_in = action.payload.auth.expires_in;
      state.refresh_token = action.payload.auth.refresh_token;
      state.expiresAt = Date.now() + action.payload.auth.expires_in * 1000;
    },
    logout: (state) => {
      state = { ...initialState };
    },
  },
});

export const { setAuth, logout } = authSlice.actions;
export default authSlice.reducer;
