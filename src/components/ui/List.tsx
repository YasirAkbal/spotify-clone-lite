import ListCard from './ListCard';

export default function List() {
  return (
    <section>
      <h2>Senin için önerilenler</h2>
      <div className="flex">
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
