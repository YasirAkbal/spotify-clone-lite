import type { MediaPlayerState } from '@/types';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { type Track } from '@/types';

const initialMediaPlayerState: MediaPlayerState = {
  id: '',
  name: '',
  durationMs: 0,
  album: {
    images: [],
  },
  artists: [],
  isPlaying: false,
  volumePercent: 100,
  timestamp: 0,
};

const mediaPlayerSlice = createSlice({
  name: 'mediaPlayer',
  initialState: initialMediaPlayerState,
  reducers: {
    setTrack: (state, action: PayloadAction<Track>) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.durationMs = action.payload.duration_ms;
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
    setTimestamp: (state, action: PayloadAction<number>) => {
      state.timestamp = action.payload;
    },
  },
});

export const { setTrack, setPlayingStatus, setVolumePercent, setTimestamp } =
  mediaPlayerSlice.actions;
export default mediaPlayerSlice.reducer;
