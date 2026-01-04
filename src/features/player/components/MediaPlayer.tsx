import useMediaPlayer from '../hooks/useMediaPlayer';
import MobilePlayer from './MobilePlayer';
import DesktopPlayer from './DesktopPlayer';

// Helper function to format time (seconds to mm:ss)
function formatTime(seconds: number): string {
  if (!seconds || isNaN(seconds)) return '0:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

export default function MediaPlayer({ bottomNavTop }: { bottomNavTop: number }) {
  const {
    ref,
    isPlaying,
    duration,
    currentTimestamp,
    handlePlayPause,
    handleEnded,
    handleLoadedMetadata,
    handleTimeUpdate,
    progressBar,
    volumeControl,
  } = useMediaPlayer();

  // Mock data - in real app, this would come from Redux/props
  // (unfortunately Spotify Web API doesn't provide tracks that we can fetch freely)
  const trackData = {
    coverUrl: 'https://i.scdn.co/image/ab67616d00001e0245a1fbca75f107d024f34bf5',
    title: 'Selamlar',
    artist: 'Yasir Ben',
  };

  return (
    <>
      <MobilePlayer
        bottomNavTop={bottomNavTop}
        isPlaying={isPlaying}
        coverUrl={trackData.coverUrl}
        title={trackData.title}
        artist={trackData.artist}
        progressBar={progressBar}
        onPlayPause={handlePlayPause}
      />

      <DesktopPlayer
        isPlaying={isPlaying}
        coverUrl={trackData.coverUrl}
        title={trackData.title}
        artist={trackData.artist}
        currentTimestamp={currentTimestamp}
        duration={duration}
        progressBar={progressBar}
        volumeControl={volumeControl}
        onPlayPause={handlePlayPause}
        formatTime={formatTime}
      />

      <audio
        ref={ref}
        preload="metadata"
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
        onLoadedMetadata={handleLoadedMetadata}
      >
        <source src="/music/music-free-458044.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </>
  );
}
