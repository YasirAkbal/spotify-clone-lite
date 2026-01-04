import { Button } from '@/components/ui/Button';
import {
  ShuffleIcon,
  PreviousIcon,
  NextIcon,
  RepeatIcon,
  PlayIcon,
  PauseIcon,
} from '@/assets/icons';

interface PlayerControlsProps {
  isPlaying: boolean;
  onPlayPause: () => void;
}

export default function PlayerControls({ isPlaying, onPlayPause }: PlayerControlsProps) {
  return (
    <div className="flex items-center gap-4 mb-2">
      <Button
        variant="ghost"
        size="icon"
        type="button"
        aria-label="Shuffle"
        className="h-8 w-8 p-0 text-encore-text-subdued hover:text-white hover:bg-transparent [&_svg]:size-4"
      >
        <ShuffleIcon size={16} />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        type="button"
        aria-label="Previous"
        className="h-8 w-8 p-0 text-encore-text-subdued hover:text-white hover:bg-transparent [&_svg]:size-4"
      >
        <PreviousIcon size={16} />
      </Button>

      <Button
        variant="default"
        size="icon"
        type="button"
        onClick={onPlayPause}
        aria-label={isPlaying ? 'Pause' : 'Play'}
        className="h-8 w-8 rounded-full bg-white text-black hover:scale-105 hover:bg-white transition-transform [&_svg]:size-4"
      >
        {isPlaying ? <PauseIcon size={16} /> : <PlayIcon size={16} />}
      </Button>

      <Button
        variant="ghost"
        size="icon"
        type="button"
        aria-label="Next"
        className="h-8 w-8 p-0 text-encore-text-subdued hover:text-white hover:bg-transparent [&_svg]:size-4"
      >
        <NextIcon size={16} />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        type="button"
        aria-label="Repeat"
        className="h-8 w-8 p-0 text-encore-text-subdued hover:text-white hover:bg-transparent [&_svg]:size-4"
      >
        <RepeatIcon size={16} />
      </Button>
    </div>
  );
}
