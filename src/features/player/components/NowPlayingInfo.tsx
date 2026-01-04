import { Button } from '@/components/ui/Button';
import { AddIcon } from '@/assets/icons';

interface NowPlayingInfoProps {
  coverUrl: string;
  title: string;
  artist: string;
}

export default function NowPlayingInfo({ coverUrl, title, artist }: NowPlayingInfoProps) {
  return (
    <>
      {/* Mobile Layout */}
      <div className="flex flex-col justify-center min-w-0 row-span-2 md:hidden">
        <div className="truncate">
          <span className="text-white text-sm font-medium">{title}</span>
        </div>
        <div className="truncate">
          <span className="text-white text-xs">{artist}</span>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:contents">
        <button
          type="button"
          className="relative w-14 h-14 rounded overflow-hidden group cursor-pointer shrink-0"
        >
          <img src={coverUrl} alt="Album Cover" className="w-full h-full object-cover" />
        </button>

        <div className="flex flex-col justify-center min-w-0">
          <a href="#" className="text-white text-sm font-normal hover:underline truncate">
            {title}
          </a>
          <a
            href="#"
            className="text-encore-text-subdued text-[0.6875rem] hover:underline hover:text-white truncate"
          >
            {artist}
          </a>
        </div>

        <Button
          variant="ghost"
          size="icon"
          type="button"
          aria-label="Add to Liked Songs"
          className="h-8 w-8 p-0 text-encore-text-subdued hover:text-white hover:bg-transparent [&_svg]:size-4"
        >
          <AddIcon size={16} />
        </Button>
      </div>
    </>
  );
}
