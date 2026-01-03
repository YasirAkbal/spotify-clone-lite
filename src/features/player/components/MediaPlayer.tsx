import { useRef } from 'react';
import musicFile from '@/assets/music/music-free-458044.mp3';
import { useAppSelector, useAppDispatch } from '@/app/hooks';
import { setPlayingStatus } from '../store/mediaPlayerSlice';
import { PlayIcon, PauseIcon, LikeIcon } from '@/assets/icons';
import { Button } from '@/components/ui/Button';

export default function MediaPlayer({ bottomNavTop }: { bottomNavTop: number }) {
  const ref = useRef<HTMLAudioElement>(null);
  const dispatch = useAppDispatch();
  const isPlaying = useAppSelector((state) => state.mediaPlayer.isPlaying);

  function handlePlayPause() {
    if (ref.current) {
      if (isPlaying) {
        ref.current.pause();
        dispatch(setPlayingStatus(false));
      } else {
        ref.current.play();
        dispatch(setPlayingStatus(true));
      }
    }
  }

  return (
    <section
      className="fixed left-0 w-full z-40 h-14"
      style={{ bottom: `calc(100vh - ${bottomNavTop}px)` }}
    >
      <div className="relative grid grid-cols-[auto_1fr_auto] grid-rows-[1fr_1fr_auto] h-14 mx-2 p-2 rounded-md bg-[rgb(160,0,8)] z-10 gap-x-2">
        <img
          src="https://i.scdn.co/image/ab67616d00001e0245a1fbca75f107d024f34bf5"
          alt="Album Cover"
          className="w-10 h-10 rounded object-cover self-center row-span-2"
        />

        <div className="flex flex-col justify-center min-w-0 row-span-2">
          <div className="overflow-hidden">
            <div className="truncate">
              <span className="text-white text-sm font-medium">Selamlar</span>
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="truncate">
              <span className="text-white text-xs">Yasir Ben</span>
            </div>
          </div>
        </div>

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
            onClick={handlePlayPause}
            className="w-8 h-8 flex items-center justify-center [&_svg]:size-6"
          >
            {isPlaying ? <PauseIcon size={24} /> : <PlayIcon size={24} />}
          </Button>
        </div>

        {/* Progress Bar - row 3, spans all columns */}
        <div className="w-full h-1 bg-white/20 rounded-full mt-1 col-span-full">
          <div className={`h-full bg-white rounded-full w-[30%]`} />
        </div>

        <audio ref={ref}>
          <source src={musicFile} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </section>
  );
}
