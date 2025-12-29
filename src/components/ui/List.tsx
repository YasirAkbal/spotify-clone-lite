import ListCard from './ListCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './Carousel';

export default function List({ header }: { header: string }) {
  return (
    <section>
      <h2 className="text-white font-fontStackTitle text-larger mb-3 font-bold">{header}</h2>
      <div className="mt-4">
        <Carousel orientation="horizontal">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <ListCard />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
