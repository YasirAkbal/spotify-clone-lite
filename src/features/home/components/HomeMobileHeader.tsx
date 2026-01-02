import { useState } from 'react';
import { SettingsIcon } from '@/assets/icons';
import { getGreeting } from '@/utils/getGreeting';
import SettingsSheet from './SettingsSheet.tsx';

export default function HomeMobileHeader() {
  const greeting = getGreeting();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const openSettings = () => setIsSettingsOpen(true);
  const closeSettings = () => setIsSettingsOpen(false);

  return (
    <>
      <header className="flex md:hidden items-center justify-between mb-8 pt-1 pr-3">
        <p className="text-larger text-white font-bold">{greeting}</p>
        <button type="button" aria-label="Ayarlar" className="p-2" onClick={openSettings}>
          <SettingsIcon size={24} />
        </button>
      </header>

      <SettingsSheet isOpen={isSettingsOpen} onClose={closeSettings} />
    </>
  );
}
