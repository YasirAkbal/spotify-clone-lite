import { useState } from 'react';
import { Button } from '../ui/Button';
import { CloseRightSidebarIcon, LeftIcon } from '../../assets/icons';

export default function RightSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="hidden lg:flex relative h-full">
      {isOpen ? (
        <aside className="w-[420px] h-full bg-encore-background-elevated-base rounded-lg flex flex-col transition-all duration-300 ease-out overflow-hidden">
          <div className="flex items-center p-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-encore-text-subdued hover:text-white transition-colors hover:bg-encore-background-highlight rounded-sm h-8 w-8"
            >
              <CloseRightSidebarIcon size={16} />
            </Button>
          </div>

          <div className="flex-1 flex flex-col relative overflow-hidden">
            <div className="flex-1 relative min-h-0">
              <img
                src="https://open.spotifycdn.com/cdn/images/download-page-image.781553a2.png"
                alt="Spotify Desktop App"
                className="absolute top-0 left-0 w-[160%] max-w-none h-full object-cover object-left [mask-image:linear-gradient(to_bottom,black_0%,black_50%,transparent_90%)]"
              />
            </div>

            <div className="relative z-10 px-8 pb-10 space-y-4">
              <h3 className="text-white font-bold text-[1.75rem] leading-tight">
                Windows için
                <br />
                Spotify'ı indir
              </h3>
              <p className="text-encore-text-subdued text-sm leading-relaxed">
                Yüksek ses kalitesinin ve çevrimdışı çalma deneyiminin tadını çıkar, sürekli
                güncellenen arkadaş akışı ile arkadaşlarının favorilerini takip et.
              </p>
              <Button variant="spotify" size="lg" className="rounded-full">
                Ücretsiz uygulamayı indir
              </Button>
            </div>
          </div>
        </aside>
      ) : (
        <div
          className="h-full w-6 bg-encore-background-base rounded-lg flex items-center justify-center transition-all duration-200 hover:w-8 hover:bg-encore-background-elevated-base group cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <Button
            variant="ghost"
            size="icon"
            className="w-full h-12 p-0 text-encore-text-subdued group-hover:text-white transition-colors hover:bg-transparent"
          >
            <LeftIcon size={16} />
          </Button>
        </div>
      )}
    </div>
  );
}
