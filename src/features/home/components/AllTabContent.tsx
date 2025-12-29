import List from '../../../components/ui/List';

export default function AllTabContent() {
  return (
    <div className="flex flex-col gap-y-8">
      <List header="Senin için önerilenler" />
      <List header="Öne Çıkan Listeler" />
      <List header="Denemeye Değer Programlar" />
    </div>
  );
}
