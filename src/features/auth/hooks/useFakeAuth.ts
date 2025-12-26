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
      if (!auth.token || auth.token === 'null' || auth.token === 'undefined' || auth.user) {
        return;
      }

      try {
        const res = await axios.get('/api/auth/me', {
          headers: { Authorization: `Bearer ${auth.token}` },
        });
        dispatch(setAuth({ user: res.data, token: auth.token }));
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
