import { configureStore } from '@reduxjs/toolkit';
import fakeAuthReducer from '../features/auth/store/fakeAuthSlice';
import oAuthReducer from '../features/auth/store/oAuthSlice';
import currentUserProfileReducer from '../features/user/store/spotifyProfileSlice';
import mediaPlayerReducer from '../features/player/store/mediaPlayerSlice';

const rootReducer = {
  fakeAuth: fakeAuthReducer,
  auth: oAuthReducer,
  currentUserProfile: currentUserProfileReducer,
  mediaPlayer: mediaPlayerReducer,
};

export const store = configureStore({
  reducer: rootReducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
