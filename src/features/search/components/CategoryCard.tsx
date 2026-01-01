import type { Genre } from '@/types';

interface CategoryCardProps {
  genre: Genre;
}

export default function CategoryCard({ genre }: CategoryCardProps) {
  return (
    <div
      style={{ backgroundColor: genre.color }}
      className="rounded-sm h-22 p-3 relative overflow-hidden"
    >
      <p className="font-bold">{genre.name}</p>
      <img
        src={genre.image.url}
        alt={genre.image.alt}
        className="w-1/3 absolute bottom-0 -right-5 rotate-30 rounded-sm"
      />
    </div>
  );
}
