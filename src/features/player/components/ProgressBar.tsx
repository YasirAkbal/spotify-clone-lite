import { Button } from '@/components/ui/Button';

interface ProgressBarProps {
  progressPercentage: number;
  onProgressBarClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseDown: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseMove: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseUp: () => void;
}

export default function ProgressBar({
  progressPercentage,
  onProgressBarClick,
  onMouseDown,
  onMouseMove,
  onMouseUp,
}: ProgressBarProps) {
  return (
    <Button
      variant="ghost"
      type="button"
      onClick={onProgressBarClick}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      className="
        w-full h-1 p-0 gap-0 justify-start rounded-full transition-colors
        bg-white/20 hover:bg-white/30 mt-1 col-span-full
        md:flex-1 md:bg-spotify-gray md:hover:bg-spotify-gray md:mt-0 md:col-span-1 md:group md:relative
      "
    >
      <div
        className="
          h-full bg-white rounded-full transition-colors
          md:group-hover:bg-spotify-green md:relative
        "
        style={{ width: `${progressPercentage}%` }}
      >
        <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 shadow-md transition-opacity" />
      </div>
    </Button>
  );
}
