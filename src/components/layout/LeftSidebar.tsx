import { CreatePlaylistIcon, LibraryIcon } from '../../assets/icons';

export default function LeftSidebar() {
  return (
    <aside className="h-full w-16 bg-gray-900 flex flex-col items-center py-4 gap-6 text-white">
      <LibraryIcon size={24} />
      <CreatePlaylistIcon size={24} />
    </aside>
  );
}
