import { LikeIcon, SpotifyLogo, ShareIcon, MoreIcon } from '@/assets/icons';
import { Button } from '@/components/ui/Button';
import { PlayButton } from '@/components/ui/PlayButton';
import playlistImage from '@/assets/images/unnamed.png';
import { NavLink } from 'react-router-dom';
import BackButton from '@/components/ui/BackButton';

function PlayListDetailListItem() {
  return (
    <Button
      asChild
      className="flex justify-start gap-x-3 w-full bg-inherit px-0"
      onClick={() => alert('Parent Button')}
    >
      <div role="button" tabIndex={0}>
        <img src={playlistImage} alt="Playlist Cover" className="w-12 rounded" />
        <div className="flex flex-col gap-y-1 items-start">
          <Button
            variant="link"
            className="m-0 p-0 h-fit w-fit text-white hover:underline font-medium"
            onClick={(e) => {
              e.stopPropagation();
              alert('Child Button');
            }}
          >
            <NavLink to="/intl-tr/track">Şarkı İsmi</NavLink>
          </Button>
          <p className="text-spotify-lightgray text-sm">Sanatçı(lar)</p>
        </div>

        <Button className="bg-inherit [&_svg]:size-6 p-0 ml-auto">
          <MoreIcon className="text-spotify-lightgray hover:text-white" />
        </Button>
      </div>
    </Button>
  );
}

export default function PlaylistDetail() {
  return (
    <section className="flex flex-col gap-y-1">
      <BackButton />

      <img src={playlistImage} alt="Playlist Cover" className="self-center w-2/5 mt-8" />

      <h1 className="text-white font-fontStackTitle text-larger-2 mt-6 mb-2 font-bold">
        En iyi 50 - Türkiye
      </h1>
      <p className="text-spotify-lightgray text-smaller">
        Şu anda en çok çalınan parçalar için günlük güncellemen - Türkiye.
      </p>

      <div className="flex items-center mt-1 gap-x-2">
        {/* In future there will be an img element */}
        <SpotifyLogo size={24} className="text-green-500" />
        <p className="text-white text-smaller font-bold">Spotify</p>
      </div>

      <p className="text-white text-smaller mt-1">121.039 kaydetme</p>

      <div className="flex w-full mt-6 items-center">
        <div className="flex gap-x-8 justify-between w-fit">
          <Button className="bg-inherit [&_svg]:size-6 p-0">
            <LikeIcon className="text-spotify-lightgray" />
          </Button>
          <Button className="bg-inherit [&_svg]:size-6 p-0">
            <ShareIcon className="text-spotify-lightgray" />
          </Button>
          <Button className="bg-inherit [&_svg]:size-6 p-0">
            <MoreIcon className="text-spotify-lightgray" />
          </Button>
        </div>

        <PlayButton className="ml-auto" onClick={() => console.log('Playing playlist...')} />
      </div>

      <div className="flex flex-col gap-y-4 mt-4">
        {Array.from({ length: 15 }).map((_, index) => (
          <PlayListDetailListItem key={index} />
        ))}
      </div>
    </section>
  );
}
