import AlbumPhoto from '../../assets/images/unnamed.png';

export default function ListCard({ onClick }: { onClick?: () => void }) {
  return (
    <button onClick={onClick} className="flex flex-col gap-y-2 rounded-sm">
      <img src={AlbumPhoto} alt="Album Art" className="w-[152px] rounded-sm" />
      <h3 className="text-left font-body font-normal text-base">Album Title</h3>
    </button>
  );
}
