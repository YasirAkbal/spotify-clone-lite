import { SpotifyLogo } from '@/assets/icons';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import FormField from '@/components/ui/FormField';
import TextInput from '@/components/ui/TextInput';
import { Button } from '@/components/ui/Button';
import { MockRegisterFormSchema } from '@/features/auth/schemas/mockAuth';
import type { MockRegisterFormData, MockRegisterRequest } from '@/types';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { mockAuthMutations } from '@/services/api/mockAuthQueries';
import { setAuth } from '@/features/auth/store/fakeAuthSlice';
import { useAppDispatch } from '@/app/hooks';

export default function Register() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<MockRegisterFormData>({
    resolver: zodResolver(MockRegisterFormSchema),
    mode: 'onChange',
  });

  const {
    mutate: registerUser,
    isPending,
    error,
    isError,
  } = useMutation({
    mutationFn: (data: MockRegisterRequest) => mockAuthMutations.register(data),
    onSuccess: (result) => {
      console.log('Registration successful:', result);
      dispatch(setAuth({ user: result.user, token: result.token }));
      navigate('/');
    },
  });

  const onSubmit: SubmitHandler<MockRegisterFormData> = (data) => {
    const { confirmPassword, ...registerData } = data;
    registerUser(registerData);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSubmit(onSubmit)(e);
  };

  return (
    <section className="px-4">
      <div className="flex flex-col items-center mt-12 gap-4">
        <SpotifyLogo size={32} />
        <h1 className="text-larger-2">Spotify'a katıl</h1>
      </div>

      <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 mt-8 mb-20">
        {(errors.root || isError) && (
          <div className="text-red-500 text-center p-2 bg-red-100 rounded">
            {errors.root?.message || (error as Error)?.message}
          </div>
        )}

        <FormField
          label="E-mail address"
          id="email"
          error={errors.email?.message}
          className="w-full"
        >
          <TextInput
            id="email"
            type="email"
            error={!!errors.email}
            disabled={isPending}
            {...register('email')}
          />
        </FormField>

        <FormField
          label="Password"
          id="password"
          error={errors.password?.message}
          className="w-full"
        >
          <TextInput
            id="password"
            type="password"
            error={!!errors.password}
            disabled={isPending}
            {...register('password')}
          />
        </FormField>

        <FormField
          label="Confirm Password"
          id="confirmPassword"
          error={errors.confirmPassword?.message}
          className="w-full"
        >
          <TextInput
            id="confirmPassword"
            type="password"
            error={!!errors.confirmPassword}
            disabled={isPending}
            {...register('confirmPassword')}
          />
        </FormField>

        <FormField
          label="Username"
          id="username"
          error={errors.username?.message}
          className="w-full"
        >
          <TextInput
            id="username"
            type="text"
            error={!!errors.username}
            disabled={isPending}
            {...register('username')}
          />
        </FormField>

        <FormField
          label="First Name"
          id="firstName"
          error={errors.firstName?.message}
          className="w-full"
        >
          <TextInput
            id="firstName"
            type="text"
            error={!!errors.firstName}
            disabled={isPending}
            {...register('firstName')}
          />
        </FormField>

        <FormField
          label="Last Name"
          id="lastName"
          error={errors.lastName?.message}
          className="w-full"
        >
          <TextInput
            id="lastName"
            type="text"
            error={!!errors.lastName}
            disabled={isPending}
            {...register('lastName')}
          />
        </FormField>

        <FormField
          label="Birth Date"
          id="birthDate"
          error={errors.birthDate?.message}
          className="w-full"
        >
          <TextInput
            id="birthDate"
            type="date"
            error={!!errors.birthDate}
            disabled={isPending}
            {...register('birthDate')}
          />
        </FormField>

        <Button variant="spotify" type="submit" disabled={isPending || !isValid} className="mt-2">
          {isPending ? 'Registering...' : 'Register'}
        </Button>
      </form>
    </section>
  );
}
