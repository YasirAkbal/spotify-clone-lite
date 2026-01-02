import { SpotifyLogo } from '@/assets/icons';
import BackButton from '../../../components/ui/BackButton';
import { Button } from '@/components/ui/Button';

export default function Download() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#c44fc4] via-[#5a3d7a] to-[#1a1a1a] -m-4 p-5">
      <BackButton />

      <section className="flex flex-col gap-y-2 justify-center items-center bg-white/35 rounded-lg mt-4 p-4">
        <SpotifyLogo size={48} className="text-spotify-green" />
        <h1>Spotify uygulamasını edin</h1>
        <p className="text-center">
          Sadece ücretsiz değil aynı zamanda Spotify özelliklerinin tamamına sahip. Aktarmak ve
          tadını çıkarmak için bir başka yol.
        </p>
        <Button variant="popover" size="lg">
          Uygulamayı Edin
        </Button>
      </section>
    </div>
  );
}
