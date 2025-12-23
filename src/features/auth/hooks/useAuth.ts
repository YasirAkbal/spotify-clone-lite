import { useMutation } from '@tanstack/react-query';
import { useDispatch, useSelector } from 'react-redux';
import { setAuth, logout } from '../store/authSlice';
import type { RootState } from '../../../app/store';

export const useAuth = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state: RootState) => state.auth);

  const loginMutation = useMutation({
    mutationFn: async (credentials: { email: string; password: string }) => {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify(credentials),
      });

      return res.json();
    },
    onSuccess: (data) => {
      dispatch(setAuth({ user: data.user, token: data.token }));
    },
  });

  const signupMutation = useMutation({
    mutationFn: async (data: { email: string; password: string }) => {
      const res = await fetch('api/auth/signup', {
        method: 'POST',
        body: JSON.stringify(data),
      });

      return res.json();
    },
    onSuccess: (data) => {
      dispatch(setAuth({ user: data.user, token: data.token }));
    },
  });

  const handleLogout = () => {
    dispatch(logout());
  };

  return {
    // State
    user: auth.user,
    isAuthenticated: auth.isAuthenticated,
    token: auth.token,
    // Methods
    login: loginMutation.mutate,
    signup: signupMutation.mutate,
    logout: handleLogout,
    // Loading states
    isLoggingIn: loginMutation.isPending,
    isSigningUp: signupMutation.isPending,
    // Errors
    loginError: loginMutation.error,
    signupError: signupMutation.error,
  };
};
