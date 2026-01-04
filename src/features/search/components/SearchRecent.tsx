import BackButton from '@/components/ui/BackButton';
import TextInput from '@/components/ui/TextInput';
import { SearchIcon } from '@/assets/icons/SearchIcon';

export default function SearchRecent() {
  return (
    <section className="flex flex-col px-2">
      <div className="flex gap-2">
        <BackButton />
        <div className="flex items-center bg-white w-full text-black rounded-sm px-3">
          <SearchIcon size={18} />
          <TextInput
            type="text"
            placeholder="Ne dinlemek istiyorsun?"
            className="border-none bg-white text-black py-0"
          />
        </div>
      </div>

      <h1 className="mt-12">Sevdiklerini çal</h1>
      <p className="mt-4 text-smaller">Sanatçı, şarkı, podcast ve daha fazlasını ara.</p>
    </section>
  );
}
