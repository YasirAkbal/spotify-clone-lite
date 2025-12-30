import ListCard from './ListCard';
import { Carousel, CarouselContent, CarouselItem } from './Carousel';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/constants/routeConstants';

export default function List({ header }: { header: string }) {
  const navigate = useNavigate();
  return (
    <section>
      <h2 className="text-white font-fontStackTitle text-larger mb-3 font-bold">{header}</h2>
      <div className="mt-4">
        <Carousel orientation="horizontal">
          <CarouselContent>
            {Array.from({ length: 10 }).map((_, index) => (
              <CarouselItem key={index}>
                <ListCard onClick={() => navigate(ROUTES.PLAYLIST_DETAIL)} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
