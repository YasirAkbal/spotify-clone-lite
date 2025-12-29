import { CreatePlaylistIcon, LibraryIcon } from '../../assets/icons';

export default function LeftSidebar() {
  return (
    <aside className="hidden md:h-full md:w-16 md:flex md:flex-col md:items-center md:py-4 md:gap-6 md:text-white">
      <LibraryIcon size={24} />
      <CreatePlaylistIcon size={24} />
    </aside>
  );
}
