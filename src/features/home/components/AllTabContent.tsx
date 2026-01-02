import List from '../../../components/ui/List';

export default function AllTabContent() {
  return (
    <div className="flex flex-col gap-y-8 md:gap-y-10">
      <List header="Senin için önerilenler" />
      <List header="Öne Çıkan Listeler" />
      <List header="Denemeye Değer Programlar" />
      <List header="Türkçe Müzik" />
      <List header="Yeni Çıkanlar" />
    </div>
  );
}
