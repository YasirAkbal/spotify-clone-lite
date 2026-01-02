import ListCard from './ListCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './Carousel';
import { Link, useNavigate } from 'react-router-dom';
import { ROUTES } from '@/constants/routeConstants';

export default function List({ header }: { header: string }) {
  const navigate = useNavigate();
  return (
    <section className="group">
      <div className="flex items-center justify-between mx-2 mb-2 md:mb-4 md:mx-4">
        <h2 className="text-white font-fontStackTitle text-larger font-bold md:hover:underline md:cursor-pointer">
          {header}
        </h2>
        <Link
          to="#"
          className="hidden md:block text-encore-text-subdued text-sm font-bold hover:underline"
        >
          Tümünü göster
        </Link>
      </div>

      <div className="relative">
        <Carousel orientation="horizontal" opts={{ align: 'start', dragFree: true }}>
          <CarouselContent className="ml-0 md:p-1 ">
            {Array.from({ length: 10 }).map((_, index) => (
              <CarouselItem key={index} className="p-0">
                <ListCard onClick={() => navigate(ROUTES.PLAYLIST_DETAIL)} />
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="hidden md:flex -left-4 bg-encore-background-elevated-base hover:bg-encore-background-elevated-highlight border-none text-white opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-0" />
          <CarouselNext className="hidden md:flex -right-4 bg-encore-background-elevated-base hover:bg-encore-background-elevated-highlight border-none text-white opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-0" />
        </Carousel>
      </div>
    </section>
  );
}
