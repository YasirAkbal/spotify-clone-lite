import { Button } from '@/components/ui/Button';
import { VolumeHighIcon, VolumeMuteIcon } from '@/assets/icons';

interface VolumeControlProps {
  volumePercent: number;
  isMuted: boolean;
  onMuteToggle: () => void;
  onVolumeChange: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseDown: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function VolumeControl({
  volumePercent,
  isMuted,
  onMuteToggle,
  onVolumeChange,
  onMouseDown,
}: VolumeControlProps) {
  return (
    <div className="flex items-center gap-1">
      <Button
        variant="ghost"
        size="icon"
        type="button"
        onClick={onMuteToggle}
        aria-label={isMuted ? 'Unmute' : 'Mute'}
        className="h-8 w-8 p-0 text-encore-text-subdued hover:text-white hover:bg-transparent [&_svg]:size-4"
      >
        {isMuted || volumePercent === 0 ? (
          <VolumeMuteIcon size={16} />
        ) : (
          <VolumeHighIcon size={16} />
        )}
      </Button>

      <Button
        variant="ghost"
        type="button"
        onClick={onVolumeChange}
        onMouseDown={onMouseDown}
        className="w-24 h-1 p-0 gap-0 justify-start bg-spotify-gray rounded-full hover:bg-spotify-gray group relative"
      >
        <div
          className="h-full bg-white rounded-full group-hover:bg-spotify-green relative"
          style={{ width: `${volumePercent}%` }}
        >
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 shadow-md" />
        </div>
      </Button>
    </div>
  );
}
