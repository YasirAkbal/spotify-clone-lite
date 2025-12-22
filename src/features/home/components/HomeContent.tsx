import { Tabs } from 'radix-ui';
import AllTabContent from './AllTabContent.tsx';
import MusicTabContent from './MusicTabContent.tsx';
import PodcastsTabContent from './PodcastsTabContent.tsx';

export default function HomeContent() {
  return (
    <Tabs.Root className="TabsRoot" defaultValue="all">
      <Tabs.List className="TabsList" aria-label="Select media type">
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
  );
}
