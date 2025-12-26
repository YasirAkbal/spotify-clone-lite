import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { type CurrentUserProfileType } from '../schemas';

interface UserState {
  profile: CurrentUserProfileType | null;
}

const initialState: UserState = {
  profile: null,
};

const currentUserProfileSlice = createSlice({
  name: 'currentUserProfile',
  initialState: initialState,
  reducers: {
    setUserProfileData: (state, action: PayloadAction<CurrentUserProfileType>) => {
      state.profile = action.payload;
    },
    clearUserProfileData: (state) => {
      state.profile = null;
    },
  },
});

export default currentUserProfileSlice.reducer;
export const { setUserProfileData, clearUserProfileData } = currentUserProfileSlice.actions;
