import { useMutation } from '@tanstack/react-query';
import { setAuth, logout } from '../store/fakeAuthSlice';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import axios from 'axios';
import { useEffect } from 'react';

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth);

  useEffect(() => {
    const checkSession = async () => {
      const token = auth.auth?.token;
      if (!token || token === 'null' || token === 'undefined' || auth.auth?.user) {
        return;
      }

      try {
        const res = await axios.get('/api/auth/me', {
          headers: { Authorization: `Bearer ${token}` },
        });
        dispatch(setAuth({ user: res.data, token }));
      } catch {
        dispatch(logout());
      }
    };

    checkSession();
  }, []);

  const loginMutation = useMutation({
    mutationFn: async (credentials: { email: string; password?: string }) => {
      const res = await axios.post('/api/auth/login', credentials);

      return res.data;
    },
    onSuccess: (data) => {
      dispatch(setAuth({ user: data.user, token: data.token }));
    },
  });

  const signupMutation = useMutation({
    mutationFn: async (data: { email: string; password: string }) => {
      const res = await axios.post('/api/auth/signup', data);

      return res.data;
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
    user: auth.auth?.user ?? null,
    isAuthenticated: auth.isAuthenticated,
    token: auth.auth?.token ?? null,
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
