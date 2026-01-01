import { SpotifyLogo, GoogleIcon, FacebookColorIcon, AppleIcon } from '../../../assets/icons';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import FormField from '../../../components/ui/FormField';
import TextInput from '../../../components/ui/TextInput';
import { Button } from '../../../components/ui/Button';
import { useAuth } from '../hooks/useFakeAuth';
import { Navigate } from 'react-router-dom';
import useOAuth from '../hooks/useOAuth';
import { ROUTES } from '../../../constants/routeConstants';
import { MockLoginFormSchema } from '../schemas/mockAuth';
import type { MockLoginFormData } from '@/types';

export default function Login() {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<MockLoginFormData>({
    resolver: zodResolver(MockLoginFormSchema),
    mode: 'onChange',
  });

  const { login, isLoggingIn, loginError, isAuthenticated, isLoginError } = useAuth();

  const onSubmit = (data: MockLoginFormData) => {
    login(data);
  };

  const { handleOAuthLogin } = useOAuth();

  if (isAuthenticated) {
    return <Navigate to={ROUTES.HOME} replace />;
  }

  return (
    <div className="flex flex-col items-center bg-black text-white gap-2 h-[100vh] justify-between px-6 pt-10 pb-6">
      <div className="flex flex-col justify-center items-center">
        <SpotifyLogo size={32} className="color-white" />
        <h1 className="text-larger-5 font-extrabold font-fontStackTitle text-center mt-2">
          Tekrar hoş geldin
        </h1>
        <form
          className="flex flex-col gap-4 items-center w-full max-w-[450px] mt-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          {(errors.root || isLoginError) && (
            <div className="text-red-500 text-center p-2 bg-red-100 rounded">
              {errors.root?.message || (loginError as Error)?.message}
            </div>
          )}

          <FormField
            label="E-posta adresi veya kullanıcı adı"
            id="email"
            error={errors.email?.message}
            className="w-full"
          >
            <TextInput
              id="email"
              type="text"
              error={!!errors.email || !!loginError}
              {...register('email')}
            />
          </FormField>
          <FormField
            label="Parola"
            id="password"
            className="w-full"
            error={errors.password?.message}
          >
            <TextInput
              id="password"
              type="password"
              error={!!errors.password || !!loginError}
              {...register('password')}
            />
          </FormField>
          <Button
            variant="spotify"
            size="lg"
            type="submit"
            className="w-full"
            disabled={isLoggingIn || !isValid}
          >
            Oturum aç
          </Button>
        </form>

        <div className="w-full max-w-[450px] flex flex-col gap-2">
          <div className="py-3 text-center">
            <span className="text-sm font-bold">veya</span>
          </div>

          <Button
            className="bg-orange-600 hover:bg-orange-500 w-full mb-2"
            onClick={handleOAuthLogin}
            size="lg"
          >
            Spotify ile devam et
          </Button>

          <Button variant="social" size="lg" className="w-full relative">
            <GoogleIcon className="absolute left-8" />
            Google ile devam et
          </Button>
          <Button variant="social" size="lg" className="w-full relative">
            <FacebookColorIcon className="absolute left-8" />
            Facebook ile devam et
          </Button>
          <Button variant="social" size="lg" className="w-full relative">
            <AppleIcon className="absolute left-8" />
            Apple ile devam et
          </Button>
        </div>

        <div className="flex flex-col items-center mt-10 gap-y-4">
          <p className="text-encore-text-subdued">Hesabın yok mu?</p>
          <a href="/signup">Kaydol</a>
        </div>
      </div>

      <p className="text-smaller-2 text-center text-encore-text-subdued">
        Bu site reCAPTCHA tarafından korunmaktadır ve Google Gizlilik Politikası ile Hizmet
        Koşulları geçerlidir.
      </p>
    </div>
  );
}
