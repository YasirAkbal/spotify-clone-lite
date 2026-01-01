import { useMutation } from '@tanstack/react-query';
import { setAuth, logout } from '../store/fakeAuthSlice';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { useEffect } from 'react';
import { fetchMockApi } from '../../../lib/mockApiClient';
import { MockAuthResponseSchema } from '../schemas';
import type { MockLoginRequest } from '@/types/api/auth';

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.fakeAuth);

  useEffect(() => {
    const checkSession = async () => {
      const token = auth.auth?.token;
      if (!token || token === 'null' || token === 'undefined' || auth.auth?.user) {
        return;
      }

      try {
        const response = await fetchMockApi(MockAuthResponseSchema, {
          headers: { Authorization: `Bearer ${token}` },
          method: 'get',
          url: '/api/auth/me',
        });

        dispatch(setAuth({ user: response.user, token }));
      } catch {
        dispatch(logout());
      }
    };

    checkSession();
  }, []);

  const loginMutation = useMutation({
    mutationFn: async (credentials: MockLoginRequest) => {
      const response = await fetchMockApi(MockAuthResponseSchema, {
        method: 'post',
        url: '/api/auth/login',
        data: credentials,
      });

      return response;
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
    isLoginError: Boolean(loginMutation.error),
    // Methods
    login: loginMutation.mutate,
    logout: handleLogout,
    // Loading states
    isLoggingIn: loginMutation.isPending,
    // Errors
    loginError: loginMutation.error,
  };
};
