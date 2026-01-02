import { CreatePlaylistIcon, LibraryIcon, OpenLibraryIcon } from '../../assets/icons';
import { Button } from '../ui/Button';
import { useState } from 'react';

interface LibraryButtonProps {
  isSidebarOpen: boolean;
  currentIcon: React.ReactNode;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick: () => void;
}

function LibraryButton({
  isSidebarOpen,
  currentIcon,
  onMouseEnter,
  onMouseLeave,
  onClick,
}: LibraryButtonProps) {
  return (
    <Button
      variant="ghost"
      className="[&_svg]:size-6"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      {currentIcon}
      {isSidebarOpen ? <span>Kitaplığın</span> : null}
    </Button>
  );
}

export default function LeftSidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentIcon, setCurrentIcon] = useState(<LibraryIcon size={24} />);

  function handleLibraryIconMouseEnter() {
    if (!isSidebarOpen) {
      setCurrentIcon(<OpenLibraryIcon size={24} />);
    }
  }

  function handleLibraryIconMouseLeave() {
    if (!isSidebarOpen) {
      setCurrentIcon(<LibraryIcon size={24} />);
    }
  }

  function handleLibraryIconOnClick() {
    setIsSidebarOpen((prev) => !prev);
  }

  return (
    <aside className="hidden md:flex md:flex-col md:h-full md:bg-encore-background-base md:rounded-lg md:overflow-hidden">
      <nav>
        {isSidebarOpen ? (
          <div className="hidden md:flex md:flex-col md:w-[280px] lg:w-[320px] md:h-full md:bg-encore-background-base md:rounded-lg md:mr-2 md:overflow-hidden">
            <div className="flex items-center justify-between p-4 text-encore-text-subdued">
              <LibraryButton
                isSidebarOpen={isSidebarOpen}
                currentIcon={currentIcon}
                onMouseEnter={handleLibraryIconMouseEnter}
                onMouseLeave={handleLibraryIconMouseLeave}
                onClick={handleLibraryIconOnClick}
              />
              <Button variant="ghost" className="w-8 h-8 p-4 rounded-full bg-background-highlight">
                <CreatePlaylistIcon size={16} />
              </Button>
            </div>

            <div className="flex gap-2 px-4 pb-2">
              <Button className="px-3 py-1.5 bg-encore-background-elevated-base hover:bg-encore-background-elevated-highlight text-white text-sm rounded-full transition-colors h-auto">
                Çalma Listeleri
              </Button>
              <Button className="px-3 py-1.5 bg-encore-background-elevated-base hover:bg-encore-background-elevated-highlight text-white text-sm rounded-full transition-colors h-auto">
                Sanatçılar
              </Button>
              <Button className="px-3 py-1.5 bg-encore-background-elevated-base hover:bg-encore-background-elevated-highlight text-white text-sm rounded-full transition-colors h-auto">
                Albümler
              </Button>
            </div>

            <div className="flex-1 overflow-y-auto px-2 py-2">
              {/* I'll use mock data until Spotify API update is done */}
              {Array.from({ length: 12 }).map((_, i) => (
                <Button
                  key={i}
                  variant="ghost"
                  className="w-full flex items-center gap-3 p-2 rounded-md hover:bg-encore-background-highlight transition-colors text-left h-auto justify-start"
                >
                  <div className="w-12 h-12 bg-encore-background-elevated-base rounded flex-shrink-0" />
                  <div className="flex flex-col min-w-0">
                    <span className="text-white text-sm truncate">Playlist {i + 1}</span>
                    <span className="text-encore-text-subdued text-xs truncate">
                      Çalma listesi • Kullanıcı
                    </span>
                  </div>
                </Button>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center px-2 py-4 gap-2">
            <LibraryButton
              isSidebarOpen={isSidebarOpen}
              currentIcon={currentIcon}
              onMouseEnter={handleLibraryIconMouseEnter}
              onMouseLeave={handleLibraryIconMouseLeave}
              onClick={handleLibraryIconOnClick}
            />
            <Button variant="ghost" className="w-8 h-8 p-4 rounded-full bg-background-highlight">
              <CreatePlaylistIcon size={16} />
            </Button>
          </div>
        )}
      </nav>
    </aside>
  );
}
