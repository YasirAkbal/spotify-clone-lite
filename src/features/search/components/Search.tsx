import { SearchIcon } from '../../../assets/icons/SearchIcon.tsx';
import { Button } from '@/components/ui/Button';
import CategoryCard from './CategoryCard.tsx';
import { useQuery } from '@tanstack/react-query';
import { genreQueries } from '@/services/api/genreQueries';

export default function Search() {
  const { data, isLoading, error } = useQuery(genreQueries.getGenres());

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
        {isLoading && <div className="col-span-2 text-center py-8">Yükleniyor...</div>}
        {error && <div className="col-span-2 text-center py-8 text-red-500">Bir hata oluştu</div>}
        {data?.genres.map((genre) => (
          <CategoryCard key={genre.id} genre={genre} />
        ))}
      </div>
    </section>
  );
}
