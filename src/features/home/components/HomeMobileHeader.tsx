import { SettingsIcon } from '@/assets/icons';

export default function HomeMobileHeader() {
  return (
    <header className="flex md:hidden items-center justify-between mb-8 -ml-1 pt-1">
      <p className="text-larger text-white font-bold">Günaydın</p>
      <button type="button" aria-label="Ayarlar" className="p-2">
        <SettingsIcon size={24} />
      </button>
    </header>
  );
}
