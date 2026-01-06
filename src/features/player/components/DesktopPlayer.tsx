import { Button } from '@/components/ui/Button';
import { LyricsIcon, QueueIcon, DeviceIcon, MiniPlayerIcon, FullscreenIcon } from '@/assets/icons';
import NowPlayingInfo from './NowPlayingInfo';
import PlayerControls from './PlayerControls';
import ProgressBar from './ProgressBar';
import VolumeControl from './VolumeControl';
import type {
  ProgressBarControl,
  VolumeControl as VolumeControlType,
} from '../hooks/useMediaPlayer';

interface DesktopPlayerProps {
  isPlaying: boolean;
  coverUrl: string;
  title: string;
  artist: string;
  currentTimestamp: number;
  duration: number;
  progressBar: ProgressBarControl;
  volumeControl: VolumeControlType;
  onPlayPause: () => void;
  formatTime: (seconds: number) => string;
}

export default function DesktopPlayer({
  isPlaying,
  coverUrl,
  title,
  artist,
  currentTimestamp,
  duration,
  progressBar,
  volumeControl,
  onPlayPause,
  formatTime,
}: DesktopPlayerProps) {
  return (
    <aside
      aria-label="Now playing bar"
      className="hidden md:flex fixed bottom-0 left-0 right-0 h-[72px] bg-black z-40 px-4 min-w-[620px]"
    >
      <div className="flex items-center justify-between w-full">
        {/* Left Section - Now Playing Info */}
        <div className="flex items-center gap-3 min-w-[180px] w-[30%]">
          <NowPlayingInfo coverUrl={coverUrl} title={title} artist={artist} />
        </div>

        {/* Center Section - Player Controls */}
        <div className="flex flex-col items-center max-w-[722px] w-[40%]">
          <PlayerControls isPlaying={isPlaying} onPlayPause={onPlayPause} />

          {/* Progress Bar */}
          <div className="flex items-center gap-2 w-full">
            <span className="text-[0.6875rem] text-encore-text-subdued min-w-[40px] text-right">
              {formatTime(currentTimestamp)}
            </span>

            <ProgressBar
              progressPercentage={progressBar.progressPercentage}
              onProgressBarClick={progressBar.handleProgressBarOnClick}
              onMouseDown={progressBar.progressBarHandleMouseDown}
            />

            <span className="text-[0.6875rem] text-encore-text-subdued min-w-[40px]">
              {formatTime(duration)}
            </span>
          </div>
        </div>

        {/* Right Section - Volume & Extra Controls */}
        <div className="flex items-center justify-end gap-2 min-w-[180px] w-[30%]">
          <Button
            variant="ghost"
            size="icon"
            type="button"
            aria-label="Lyrics"
            className="h-8 w-8 p-0 text-encore-text-subdued hover:text-white hover:bg-transparent [&_svg]:size-4"
          >
            <LyricsIcon size={16} />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            type="button"
            aria-label="Queue"
            className="h-8 w-8 p-0 text-encore-text-subdued hover:text-white hover:bg-transparent [&_svg]:size-4"
          >
            <QueueIcon size={16} />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            type="button"
            aria-label="Connect to a device"
            className="h-8 w-8 p-0 text-encore-text-subdued hover:text-white hover:bg-transparent [&_svg]:size-4"
          >
            <DeviceIcon size={16} />
          </Button>

          <VolumeControl
            volumePercent={volumeControl.volumePercent}
            isMuted={volumeControl.isMuted}
            onMuteToggle={volumeControl.handleMuteToggle}
            onVolumeChange={volumeControl.handleVolumeChange}
            onMouseDown={volumeControl.volumeHandleMouseDown}
          />

          <Button
            variant="ghost"
            size="icon"
            type="button"
            aria-label="Mini player"
            className="h-8 w-8 p-0 text-encore-text-subdued hover:text-white hover:bg-transparent [&_svg]:size-4"
          >
            <MiniPlayerIcon size={16} />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            type="button"
            aria-label="Fullscreen"
            className="h-8 w-8 p-0 text-encore-text-subdued hover:text-white hover:bg-transparent [&_svg]:size-4"
          >
            <FullscreenIcon size={16} />
          </Button>
        </div>
      </div>
    </aside>
  );
}
