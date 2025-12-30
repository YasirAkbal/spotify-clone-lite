import AlbumPhoto from '../../assets/images/unnamed.png';

export default function ListCard({ onClick }: { onClick?: () => void }) {
  return (
    <button onClick={onClick} className="flex flex-col gap-y-2">
      <img src={AlbumPhoto} alt="Album Art" className="w-[152px]" />
      <h3 className="text-left font-body font-normal text-base">Album Title</h3>
    </button>
  );
}
