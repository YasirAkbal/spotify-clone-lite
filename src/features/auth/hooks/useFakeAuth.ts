import { useMutation, useQuery } from '@tanstack/react-query';
import { useDispatch, useSelector } from 'react-redux';
import { setAuth, logout } from '../store/fakeAuthSlice';
import type { RootState } from '../../../app/store';
import axios from 'axios';
import { useEffect } from 'react';

export const useAuth = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state: RootState) => state.auth);

  // Check session on load if token exists but user is missing
  const { data: userProfile, isError } = useQuery({
    queryKey: ['auth', 'me'],
    queryFn: async () => {
      const res = await axios.get('/api/auth/me', {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      return res.data;
    },
    enabled: !!auth.token && auth.token !== 'null' && auth.token !== 'undefined' && !auth.user,
    retry: false,
  });

  useEffect(() => {
    if (userProfile && auth.token) {
      dispatch(setAuth({ user: userProfile, token: auth.token }));
    }
  }, [userProfile, auth.token, dispatch]);

  useEffect(() => {
    if (isError) {
      dispatch(logout());
    }
  }, [isError, dispatch]);

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
