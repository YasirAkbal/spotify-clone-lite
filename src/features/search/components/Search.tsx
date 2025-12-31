import { SearchIcon } from '../../../assets/icons/SearchIcon.tsx';
import { Button } from '@/components/ui/Button';
import CategoryCard from './CategoryCard.tsx';
import categoryImage from '@/assets/images/unnamed.png';

export default function Search() {
  return (
    <section className="flex flex-col gap-y-4 py-8">
      <h1 className="text-larger-2">Ara</h1>

      <Button size="search" variant="search" className="w-full rounded-sm text-base">
        <div className="flex items-center gap-2">
          <SearchIcon />
          <span>Ne dinlemek istiyorsun?</span>
        </div>
      </Button>

      <h2 className="mt-1">Hepsine göz at</h2>

      <div className="grid grid-cols-2 gap-4 mb-16 mt-4">
        {Array.from({ length: 16 }).map((_, index) => (
          <CategoryCard
            key={index}
            playlistId={`playlist-${index}`}
            color="#1DB954"
            image={{ src: categoryImage, alt: 'Category Image' }}
          />
        ))}
      </div>
    </section>
  );
}
