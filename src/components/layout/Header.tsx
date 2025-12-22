import { BrowseIcon } from '../../assets/icons/BrowseIcon';
import { DownloadOurApp } from '../../assets/icons/DownloadOurApp.tsx';
import { FriendActivityIcon } from '../../assets/icons/FriendActivityIcon.tsx';
import { HomePageIcon } from '../../assets/icons/HomePageIcon';
import { NotificationsIcon } from '../../assets/icons/NotificationsIcon.tsx';
import { SearchIcon } from '../../assets/icons/SearchIcon';
import { SpotifyLogo } from '../../assets/icons/SpotifyLogo';
import Button from '../ui/Button.tsx';

export default function Header() {
  return (
    <header className="w-full flex bg-spotify-black text-white px-8 py-2 items-center justify-between bg-red-500">
      <SpotifyLogo size={30} />
      <div className="flex items-center">
        <HomePageIcon size={30} />
        <div className="flex items-center">
          <SearchIcon size={30} />
          <span>Ne çalmak istiyorsun?</span>
          <BrowseIcon size={30} />
        </div>
      </div>
      <div className="flex items-center">
        <Button>Premium'u keşfet</Button>
        <Button>
          <div className="flex items-center gap-2">
            <DownloadOurApp size={16} />
            <span>Uygulamayı Yükle</span>
          </div>
        </Button>
        <NotificationsIcon size={16} />
        <FriendActivityIcon size={16} />
        <span className="bg-blue-500 rounded-full w-12 h-12 flex items-center justify-center border-gray-500 border-6 text-black font-bold">
          Y
        </span>
      </div>
    </header>
  );
}
