import { ROUTES } from '@/constants/routeConstants';
import { NavLink } from 'react-router-dom';

export default function CategoryCard({
  playlistId,
  color,
  image,
}: {
  playlistId: string;
  color: string;
  image: { src: string; alt: string };
}) {
  return (
    <NavLink to={`${ROUTES.PLAYLIST_DETAIL}/${playlistId}`}>
      <div
        style={{ backgroundColor: color }}
        className="rounded-sm h-22 p-3 relative overflow-hidden"
      >
        <p className="font-bold">Müzik</p>
        <img
          src={image.src}
          alt={image.alt}
          className="w-1/3 absolute bottom-0 -right-5 rotate-30"
        />
      </div>
    </NavLink>
  );
}
