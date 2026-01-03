import { SpotifyLogo, HomePageIcon, SearchIcon, LibraryIcon } from '@/assets/icons';
import { NavLink } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';

interface BottomNavigationItem {
  to: string;
  icon: React.ComponentType<{ size: number }>;
  label: string;
  showPopover?: boolean;
}

const items: BottomNavigationItem[] = [
  { to: '/', icon: HomePageIcon, label: 'Ana Sayfa' },
  { to: '/search', icon: SearchIcon, label: 'Ara' },
  { to: '/library', icon: LibraryIcon, label: 'Kitaplığın', showPopover: true },
  { to: '/download', icon: SpotifyLogo, label: 'Uygulamayı edin' },
];

interface LibraryPopoverProps {
  onClose: () => void;
  navTop: number;
  buttonCenterX: number;
}

function LibraryPopover({ onClose, navTop, buttonCenterX }: LibraryPopoverProps) {
  return (
    <div
      className="fixed z-50 left-0 right-0 px-4"
      style={{ bottom: `calc(100vh - ${navTop}px + 12px)` }}
    >
      <div className="rounded-lg p-4 text-white mx-auto bg-[#4687d6] shadow-lg">
        <div className="flex flex-col gap-y-2">
          <div className="text-base font-bold">Kitaplığının Tadını Çıkar</div>
          <div className="text-sm leading-relaxed opacity-95">
            Spotify Uygulamasında kaydettiğin şarkılar, podcast'ler, sanatçılar ve çalma listeleri
            burada.
          </div>
          <div className="flex items-center gap-x-4 mt-3 self-end">
            <button
              className="text-sm font-bold text-white hover:scale-105 transition-transform"
              onClick={onClose}
            >
              Şimdi değil
            </button>
            <Button variant="popover" size="lg">
              Uygulamayı Edin
            </Button>
          </div>
        </div>
      </div>
      {/* Arrow */}
      <div
        className="absolute w-0 h-0 -translate-x-1/2 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-[#4687d6]"
        style={{ left: `${buttonCenterX}px` }}
      />
    </div>
  );
}

export default function BottomNavigation({
  onNavTopChange,
}: {
  onNavTopChange?: (top: number) => void;
}) {
  const navRef = useRef<HTMLElement>(null);
  const libraryButtonRef = useRef<HTMLDivElement>(null);
  const [showPopover, setShowPopover] = useState(false);
  const [navTop, setNavTop] = useState(0);
  const [buttonCenterX, setButtonCenterX] = useState(0);

  useEffect(() => {
    const updatePositions = () => {
      if (navRef.current) {
        const navTop = navRef.current.getBoundingClientRect().top;
        setNavTop(navTop);
        onNavTopChange?.(navTop);
      }
      if (libraryButtonRef.current) {
        const rect = libraryButtonRef.current.getBoundingClientRect();
        setButtonCenterX(rect.left + rect.width / 2);
      }
    };

    updatePositions();
    window.addEventListener('resize', updatePositions);
    return () => window.removeEventListener('resize', updatePositions);
  }, [showPopover, onNavTopChange]);

  const handleLibraryClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowPopover(!showPopover);
  };

  return (
    <>
      {showPopover && (
        <LibraryPopover
          onClose={() => setShowPopover(false)}
          navTop={navTop}
          buttonCenterX={buttonCenterX}
        />
      )}
      <nav
        ref={navRef}
        className="md:hidden flex fixed bottom-0 left-0 w-full justify-between items-center bg-black px-6 py-4 opacity-85 z-40"
      >
        {items.map(({ to, icon: Icon, label, showPopover: hasPopover }) => (
          <div key={to} ref={hasPopover ? libraryButtonRef : undefined}>
            <NavLink to={to} onClick={hasPopover ? handleLibraryClick : undefined}>
              <div className="flex flex-col items-center justify-center gap-y-1">
                <Icon size={24} />
                <span className="text-smaller-2">{label}</span>
              </div>
            </NavLink>
          </div>
        ))}
      </nav>
    </>
  );
}
