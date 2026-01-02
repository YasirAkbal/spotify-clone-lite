import { Link } from 'react-router-dom';
import {
  BrowseIcon,
  DownloadOurAppIcon,
  FriendActivityIcon,
  HomePageIcon,
  NotificationsIcon,
  SearchIcon,
  SpotifyLogo,
} from '../../assets/icons';
import { Button } from '../ui/Button.tsx';
import TextInput from '../ui/TextInput.tsx';
import { ROUTES } from '@/constants/routeConstants';

export default function Header() {
  return (
    <header className="hidden md:flex w-full text-white py-2 pl-5 pr-2 items-center justify-between gap-4 -mt-2">
      <div className="flex-shrink-0">
        <Link to={ROUTES.HOME}>
          <SpotifyLogo size={32} />
        </Link>
      </div>

      <div className="flex items-center gap-2 flex-1 max-w-[600px]">
        <Link
          to={ROUTES.HOME}
          className="bg-encore-background-elevated-base hover:bg-encore-background-elevated-highlight p-3 rounded-full transition-colors"
        >
          <HomePageIcon size={24} />
        </Link>

        <div className="flex items-center flex-1 bg-encore-background-elevated-base hover:bg-encore-background-elevated-highlight rounded-full px-4 py-3 gap-3 transition-colors">
          <Button
            variant="ghost"
            size="icon"
            className="hover:scale-105 transition-transform p-0 h-auto w-auto hover:bg-transparent [&_svg]:size-6"
          >
            <SearchIcon size={24} className="text-encore-text-subdued cursor-pointer" />
          </Button>
          <TextInput
            type="text"
            placeholder="Ne çalmak istiyorsun?"
            className="bg-transparent flex-1 text-white placeholder:text-encore-text-subdued outline-none text-sm border-none p-0"
          />
          <div className="w-px h-6 bg-footer-border" />
          <Button
            variant="ghost"
            size="icon"
            className="hover:scale-105 transition-transform cursor-pointer p-0 h-auto w-auto hover:bg-transparent [&_svg]:size-6"
          >
            <BrowseIcon size={24} className="text-encore-text-subdued hover:text-white" />
          </Button>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button
          asChild
          variant="outline"
          size="defaultShorter"
          className="rounded-full text-sm text-black font-bold border-white/60 hover:border-white hover:scale-105 transition-all"
        >
          <a href="https://www.spotify.com/premium" target="_blank">
            Premium'u keşfet
          </a>
        </Button>
        <Button
          asChild
          variant="ghost"
          className="rounded-full px-4 py-2 text-sm font-bold text-encore-text-subdued hover:text-white hover:scale-105 hover:bg-inherit transition-all"
        >
          <a href="https://www.spotify.com/download" target="_blank">
            <DownloadOurAppIcon size={16} />
            <span>Uygulamayı Yükle</span>
          </a>
        </Button>
        <Button
          asChild
          variant="ghost"
          size="icon"
          className="text-encore-text-subdued hover:text-white transition-colors hover:bg-transparent"
        >
          <Link to={ROUTES.NOTIFICATIONS}>
            <NotificationsIcon size={20} />
          </Link>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="text-encore-text-subdued hover:text-white transition-colors hover:bg-transparent"
        >
          <FriendActivityIcon size={20} />
        </Button>
        <Button
          asChild
          className="bg-spotify-green rounded-full w-8 h-8 p-4 text-black font-bold border-8 border-background-highlight text-sm hover:scale-105 transition-transform"
        >
          <Link to={ROUTES.PROFILE}>Y</Link>
        </Button>
      </div>
    </header>
  );
}
