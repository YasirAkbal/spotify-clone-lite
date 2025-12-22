import { SpotifyLogo } from '../../../assets/icons';
import { useForm } from 'react-hook-form';
import FormField from '../../../components/ui/FormField';
import TextInput from '../../../components/ui/TextInput';

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
    <>
      <FormField
        label="E-posta adresi"
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
    </>
  );
}
