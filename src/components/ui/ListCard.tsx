import AlbumPhoto from '../../assets/images/unnamed.png';
import { PlayIcon } from '@/assets/icons';
import { Button } from './Button';

export default function ListCard({ onClick }: { onClick?: () => void }) {
  return (
    <Button
      variant="ghost"
      onClick={onClick}
      className="group/card flex flex-col gap-y-2 p-2 md:p-3 md:hover:bg-encore-background-highlight transition-colors relative h-auto hover:bg-transparent md:hover:bg-encore-background-highlight"
    >
      <div className="relative">
        <img
          src={AlbumPhoto}
          alt="Album Art"
          className="w-[140px] md:w-[160px] lg:w-[180px] rounded-md shadow-lg"
        />
        <div className="hidden md:block absolute bottom-2 right-2 opacity-0 group-hover/card:opacity-100 translate-y-2 group-hover/card:translate-y-0 transition-all duration-300 pointer-events-none">
          <div className="w-12 h-12 rounded-full bg-spotify-green hover:bg-[#1ed760] flex items-center justify-center shadow-xl">
            <PlayIcon className="text-black" size={28} />
          </div>
        </div>
      </div>
      <h3 className="text-left font-body font-normal text-base text-white truncate w-full">
        Album Title
      </h3>
      <p className="hidden md:block text-left text-sm text-encore-text-subdued truncate w-full">
        Artist Name
      </p>
    </Button>
  );
}
