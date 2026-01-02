import { Tabs } from 'radix-ui';
import AllTabContent from './components/AllTabContent';
import MusicTabContent from './components/MusicTabContent';
import PodcastsTabContent from './components/PodcastsTabContent';
import HomeMobileHeader from './components/HomeMobileHeader';
/*import useSpotifyProfile from '../user/hooks/useSpotifyProfile';
import { useEffect } from 'react';
import { playlistQueries } from '../../services/api/playlistsQueries';
import { useQuery } from '@tanstack/react-query';*/

export default function HomePage() {
  /*const { data: profile, isSuccess } = useSpotifyProfile();
  useEffect(() => {
    if (isSuccess && profile) {
      console.log('Kullanıcı Profili:', profile);
    }
  }, [isSuccess, profile]);

  const { data: featuredPlaylists, isSuccess: isFeaturedPlaylistsSuccess } = useQuery(
    playlistQueries.getFeaturedPlaylists()
  );
  useEffect(() => {
    if (isFeaturedPlaylistsSuccess && featuredPlaylists) {
      console.log('Öne Çıkan Listeler:', featuredPlaylists);
    }
  }, [isFeaturedPlaylistsSuccess, featuredPlaylists]);*/

  return (
    <div>
      {/* Desktop Layout */}
      <div className="hidden md:block">
        <Tabs.Root className="text-white" defaultValue="all">
          <Tabs.List className="flex gap-2 mb-8" aria-label="Select media type">
            <Tabs.Trigger
              className="px-4 py-2 rounded-full text-sm font-bold bg-encore-background-elevated-base hover:bg-encore-background-elevated-highlight data-[state=active]:bg-white data-[state=active]:text-black transition-colors cursor-pointer"
              value="all"
            >
              Tümü
            </Tabs.Trigger>
            <Tabs.Trigger
              className="px-4 py-2 rounded-full text-sm font-bold bg-encore-background-elevated-base hover:bg-encore-background-elevated-highlight data-[state=active]:bg-white data-[state=active]:text-black transition-colors cursor-pointer"
              value="music"
            >
              Müzik
            </Tabs.Trigger>
            <Tabs.Trigger
              className="px-4 py-2 rounded-full text-sm font-bold bg-encore-background-elevated-base hover:bg-encore-background-elevated-highlight data-[state=active]:bg-white data-[state=active]:text-black transition-colors cursor-pointer"
              value="podcasts"
            >
              Podcast'ler
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content className="focus:outline-none" value="all">
            <AllTabContent />
          </Tabs.Content>
          <Tabs.Content className="focus:outline-none" value="music">
            <MusicTabContent />
          </Tabs.Content>
          <Tabs.Content className="focus:outline-none" value="podcasts">
            <PodcastsTabContent />
          </Tabs.Content>
        </Tabs.Root>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden">
        <HomeMobileHeader />
        <AllTabContent />
      </div>
    </div>
  );
}
