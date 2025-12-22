import AlbumPhoto from '../../assets/images/unnamed.png';

export default function ListCard() {
  return (
    <div>
      <img src={AlbumPhoto} alt="Album Art" />
      <h3>Album Title</h3>
    </div>
  );
}
