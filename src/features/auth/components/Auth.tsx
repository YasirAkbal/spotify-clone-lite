import { SpotifyLogo } from '../../../assets/icons';
import { useForm } from 'react-hook-form';
import FormField from '../../../components/ui/FormField';
import TextInput from '../../../components/ui/TextInput';
import Button from '../../../components/ui/Button';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<{ email: string; password: string }>();

  const { login, isLoggingIn, loginError } = useAuth();
  const navigate = useNavigate();

  const onSubmit = (data: { email: string; password: string }) => {
    login(data, {
      onSuccess: () => {
        navigate('/');
      },
    });
  };

  return (
    <div className="flex flex-col items-center bg-black text-white gap-4 h-[100vh] justify-center">
      <SpotifyLogo size={30} className="color-white" />
      <h1>Tekrar hoş geldin</h1>
      <form className="flex flex-col gap-4 items-center" onSubmit={handleSubmit(onSubmit)}>
        <FormField
          label="E-posta adresi veya kullanıcı adı"
          id="email"
          error={errors.email?.message as string | undefined}
        >
          <TextInput
            id="email"
            type="email"
            error={!!errors.email || !!loginError}
            {...register('email', { required: 'E-posta gerekli' })}
          />
        </FormField>
        <FormField
          label="Parola"
          id="password"
          error={errors.password?.message as string | undefined}
        >
          <TextInput
            id="password"
            type="password"
            error={!!errors.password || !!loginError}
            {...register('password', { required: 'Parola gerekli' })}
          />
        </FormField>
        <Button type="submit" disabled={isLoggingIn}>
          Oturum aç
        </Button>
      </form>
      <span>veya</span>
      <Button>Google ile devam et</Button>
      <Button>Facebook ile devam et</Button>
      <Button>Apple ile devam et</Button>

      <div className="flex flex-col items-center">
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
