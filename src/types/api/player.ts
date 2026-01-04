import { type Track } from './playlists';

export type MediaPlayerState = {
  id: Track['id'];
  name: Track['name'];
  duration: Track['duration_ms'];
  album: Pick<Track['album'], 'images'>;
  artists: Pick<Track['artists'][number], 'name' | 'id'>[];
  isPlaying: boolean;
  volumePercent: number;
  currentTimestamp: number;
};
