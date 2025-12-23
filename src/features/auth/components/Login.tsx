import { SpotifyLogo } from '../../../assets/icons';
import { useForm } from 'react-hook-form';
import FormField from '../../../components/ui/FormField';
import TextInput from '../../../components/ui/TextInput';
import Button from '../../../components/ui/Button';

export default function Login() {
  {
    /*return (
    <section className="flex flex-col items-center justify-center">
      <SpotifyLogo size={30} />
      <h1>Tekrar hoş geldin</h1>
    </section>
  );*/
  }

  const {
    register,
    formState: { errors },
  } = useForm();

  return (
    <div className="flex flex-col items-center bg-black text-white gap-4 h-[100vh] justify-center">
      <SpotifyLogo size={30} className="color-white" />
      <h1>Tekrar hoş geldin</h1>
      <FormField
        label="E-posta adresi veya kullanıcı adı"
        id="email"
        error={errors.email?.message as string | undefined}
      >
        <TextInput
          id="email"
          type="email"
          error={!!errors.email}
          {...register('email', { required: 'E-posta gerekli' })}
        />
      </FormField>
      <Button>Devam</Button>
      <span>veya</span>
      <Button>Google ile devam et</Button>
      <Button>Facebook ile devam et</Button>
      <Button>Apple ile devam et</Button>

      <div>
        <p>Hesabın yok mu?</p>
        <a href="/signup">Kaydol</a>
      </div>

      <div>
        Bu site reCAPTCHA tarafından korunmaktadır ve Google Gizlilik Politikası ile Hizmet
        Koşulları geçerlidir.
      </div>
    </div>
  );
}
