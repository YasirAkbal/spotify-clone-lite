import { useState } from 'react';
import { SettingsIcon } from '@/assets/icons';
import { getGreeting } from '@/utils/getGreeting';
import SettingsSheet from './SettingsSheet';

export default function MobileHeader() {
  const greeting = getGreeting();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isSettingsMounted, setIsSettingsMounted] = useState(false);

  // When opening for the first time: mount first, then animate
  const openSettings = () => {
    if (!isSettingsMounted) {
      // First open: mount the component first (with isOpen=false)
      setIsSettingsMounted(true);
    }
    // Delay the open state to allow mount + paint before animation
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setIsSettingsOpen(true);
      });
    });
  };

  const closeSettings = () => setIsSettingsOpen(false);

  return (
    <>
      <header className="flex md:hidden items-center justify-between mb-8 pt-1 pr-3">
        <p className="text-larger text-white font-bold">{greeting}</p>
        <button type="button" aria-label="Ayarlar" className="p-2" onClick={openSettings}>
          <SettingsIcon size={24} />
        </button>
      </header>

      {/* Mount once opened, keep in DOM for smooth subsequent animations */}
      {isSettingsMounted && <SettingsSheet isOpen={isSettingsOpen} onClose={closeSettings} />}
    </>
  );
}
