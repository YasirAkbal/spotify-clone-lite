import ListCard from './ListCard';

export default function List({ header }: { header: string }) {
  return (
    <section>
      <h2 className="text-white">{header}</h2>
      <div className="flex gap-4">
        <ListCard />
        <ListCard />
        <ListCard />
        <ListCard />
        <ListCard />
        <ListCard />
      </div>
    </section>
  );
}
