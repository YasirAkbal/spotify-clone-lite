import { Button } from '@/components/ui/Button';
import { LikeIcon, PlayIcon, PauseIcon } from '@/assets/icons';
import NowPlayingInfo from './NowPlayingInfo';
import ProgressBar from './ProgressBar';
import type { ProgressBarControl } from '../hooks/useMediaPlayer';

interface MobilePlayerProps {
  bottomNavTop: number;
  isPlaying: boolean;
  coverUrl: string;
  title: string;
  artist: string;
  progressBar: ProgressBarControl;
  onPlayPause: () => void;
}

export default function MobilePlayer({
  bottomNavTop,
  isPlaying,
  coverUrl,
  title,
  artist,
  progressBar,
  onPlayPause,
}: MobilePlayerProps) {
  return (
    <section
      className="fixed left-0 w-full z-40 h-14 md:hidden"
      style={{ bottom: `calc(100vh - ${bottomNavTop}px)` }}
    >
      <div className="relative grid grid-cols-[auto_1fr_auto] grid-rows-[1fr_1fr_auto] h-14 mx-2 p-2 rounded-md bg-[rgb(160,0,8)] z-10 gap-x-2">
        <img
          src={coverUrl}
          alt="Album Cover"
          className="w-10 h-10 rounded object-cover self-center row-span-2"
        />

        <NowPlayingInfo coverUrl={coverUrl} title={title} artist={artist} />

        <div className="flex items-center row-span-2 gap-x-3 mr-2">
          <Button
            variant="ghost"
            size="icon"
            type="button"
            role="switch"
            className="p-2 h-auto w-auto [&_svg]:size-6"
          >
            <LikeIcon className="w-6 h-6 text-encore-text-subdued" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            role="switch"
            onClick={onPlayPause}
            className="w-8 h-8 flex items-center justify-center [&_svg]:size-6"
          >
            {isPlaying ? <PauseIcon size={24} /> : <PlayIcon size={24} />}
          </Button>
        </div>

        <ProgressBar
          progressPercentage={progressBar.progressPercentage}
          onProgressBarClick={progressBar.handleProgressBarOnClick}
          onMouseDown={progressBar.progressBarHandleMouseDown}
        />
      </div>
    </section>
  );
}
