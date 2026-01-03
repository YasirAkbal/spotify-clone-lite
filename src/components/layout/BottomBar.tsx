import MediaPlayer from '@/features/player/components/MediaPlayer';
import BottomNavigation from './BottomNavigation';
import { useState } from 'react';

export default function BottomBar() {
  const [bottomNavTop, setBottomNavTop] = useState(0);

  return (
    <div>
      <MediaPlayer bottomNavTop={bottomNavTop} />
      <BottomNavigation onNavTopChange={(top: number) => setBottomNavTop(top)} />
    </div>
  );
}
