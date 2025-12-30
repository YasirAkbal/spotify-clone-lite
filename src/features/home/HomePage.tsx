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
      <div className="hidden">
        <Tabs.Root className="TabsRoot text-white" defaultValue="all">
          <Tabs.List className="TabsList mb-6" aria-label="Select media type">
            <Tabs.Trigger className="TabsTrigger" value="all">
              Tümü
            </Tabs.Trigger>
            <Tabs.Trigger className="TabsTrigger" value="music">
              Müzik
            </Tabs.Trigger>
            <Tabs.Trigger className="TabsTrigger" value="podcasts">
              Podcast'ler
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content className="TabsContent" value="all">
            <AllTabContent />
          </Tabs.Content>
          <Tabs.Content className="TabsContent" value="music">
            <MusicTabContent />
          </Tabs.Content>
          <Tabs.Content className="TabsContent" value="podcasts">
            <PodcastsTabContent />
          </Tabs.Content>
        </Tabs.Root>
      </div>

      <div>
        <HomeMobileHeader />
        <AllTabContent />
      </div>

      <section></section>
    </div>
  );
}
