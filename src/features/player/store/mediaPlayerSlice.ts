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
    name: '',
    id: '',
  },
  artists: [],
  isPlaying: false,
  volumePercent: 100,
  currentTimestamp: 0,
  isMuted: false,
  previousVolume: 100,
};

const mediaPlayerSlice = createSlice({
  name: 'mediaPlayer',
  initialState: initialMediaPlayerState,
  reducers: {
    setTrack: (state, action: PayloadAction<Track>) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.duration = action.payload.duration_ms;
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
    setMuted: (state, action: PayloadAction<boolean>) => {
      state.isMuted = action.payload;
    },
    setPreviousVolume: (state, action: PayloadAction<number>) => {
      state.previousVolume = action.payload;
    },
  },
});

export const {
  setTrack,
  setPlayingStatus,
  setVolumePercent,
  setCurrentTimestamp,
  setDuration,
  setMuted,
  setPreviousVolume,
} = mediaPlayerSlice.actions;
export default mediaPlayerSlice.reducer;
