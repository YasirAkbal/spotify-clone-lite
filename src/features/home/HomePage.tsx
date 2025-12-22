import { Tabs } from 'radix-ui';
import AllTabContent from './components/AllTabContent';
import MusicTabContent from './components/MusicTabContent';
import PodcastsTabContent from './components/PodcastsTabContent';

export default function HomePage() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-white mb-4">İyi akşamlar</h1>
      </div>

      <Tabs.Root className="TabsRoot" defaultValue="all">
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
  );
}
