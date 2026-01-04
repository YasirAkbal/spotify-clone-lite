import type { MediaPlayerState } from '@/types';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { type Track } from '@/types';

const initialMediaPlayerState: MediaPlayerState = {
  id: '',
  name: '',
  duration: 0,
  album: {
    images: [],
  },
  artists: [],
  isPlaying: false,
  volumePercent: 100,
  currentTimestamp: 0,
};

const mediaPlayerSlice = createSlice({
  name: 'mediaPlayer',
  initialState: initialMediaPlayerState,
  reducers: {
    setTrack: (state, action: PayloadAction<Track>) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      // Keep duration in seconds throughout the UI/player.
      // Spotify API provides duration_ms.
      state.duration = action.payload.duration_ms / 1000;
      state.album = action.payload.album;
      state.artists = action.payload.artists.map((artist) => ({
        name: artist.name,
        id: artist.id,
      }));
    },
    setPlayingStatus: (state, action: PayloadAction<boolean>) => {
      state.isPlaying = action.payload;
    },
    setVolumePercent: (state, action: PayloadAction<number>) => {
      state.volumePercent = action.payload;
    },
    setCurrentTimestamp: (state, action: PayloadAction<number>) => {
      state.currentTimestamp = action.payload;
    },
    setDuration: (state, action: PayloadAction<number>) => {
      state.duration = action.payload;
    },
  },
});

export const { setTrack, setPlayingStatus, setVolumePercent, setCurrentTimestamp, setDuration } =
  mediaPlayerSlice.actions;
export default mediaPlayerSlice.reducer;
