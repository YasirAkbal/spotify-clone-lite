import { SpotifyLogo, HomePageIcon, SearchIcon, LibraryIcon } from '@/assets/icons';
import { NavLink } from 'react-router-dom';

const items = [
  { to: '/', icon: HomePageIcon, label: 'Ana Sayfa' },
  { to: '/search', icon: SearchIcon, label: 'Ara' },
  { to: '/library', icon: LibraryIcon, label: 'Kitaplığın' },
  { to: '/download', icon: SpotifyLogo, label: 'Uygulamayı edin' },
];

export default function BottomNavigation() {
  return (
    <nav className="md:hidden flex fixed bottom-0 left-0 w-full justify-between items-center bg-black px-8 py-4 opacity-50">
      {items.map(({ to, icon: Icon, label }) => (
        <NavLink key={to} to={to} className="flex flex-col items-center justify-center gap-y-1">
          <Icon size={24} />
          <span className="text-smaller-2">{label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
