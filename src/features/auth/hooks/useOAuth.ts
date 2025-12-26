import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
import { setAuth } from '../store/oAuthSlice';
import { useAppDispatch } from '../../../app/hooks';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';

export default function useOAuth() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const CLIENT_ID = '0d01c37fe1874c6b85d7624200207c59';
  const REDIRECT_URL = 'https://127.0.0.1:5173/auth/callback';
  const ACCESS_TOKEN_URL = 'https://accounts.spotify.com/api/token';

  const SCOPE = 'user-read-private user-read-email';
  const authUrl = new URL('https://accounts.spotify.com/authorize');

  const codeChallengeRef = useRef<string>(undefined);

  const exchangeTokenMutation = useMutation({
    mutationFn: async (code: string) => {
      const storedCodeVerifier = localStorage.getItem('code_verifier');
      if (!storedCodeVerifier) {
        throw new Error('Code verifier must be generated first');
      }

      const params = new URLSearchParams({
        client_id: CLIENT_ID,
        grant_type: 'authorization_code',
        code,
        redirect_uri: REDIRECT_URL,
        code_verifier: storedCodeVerifier,
      });

      const response = await axios.post(ACCESS_TOKEN_URL, params, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      return response.data;
    },
    onSuccess: (data) => {
      dispatch(setAuth(data));
      localStorage.setItem('access_token', data.access_token);
      localStorage.removeItem('code_verifier');
      navigate('/');
    },
    onError: (error) => {
      console.error('Token exchange failed', error);
    },
  });

  const generateRandomString = (length: number) => {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const values = crypto.getRandomValues(new Uint8Array(length));
    return values.reduce((acc, x) => acc + possible[x % possible.length], '');
  };

  const sha256 = async (plain: string) => {
    const encoder = new TextEncoder();
    const data = encoder.encode(plain);
    return window.crypto.subtle.digest('SHA-256', data);
  };

  const base64encode = (input: ArrayBuffer) => {
    return btoa(String.fromCharCode(...new Uint8Array(input)))
      .replace(/=/g, '')
      .replace(/\+/g, '-')
      .replace(/\//g, '_');
  };

  function generateCodeVerifier() {
    const verifier = generateRandomString(64);
    localStorage.setItem('code_verifier', verifier);
  }

  async function generateCodeChallange() {
    const storedVerifier = localStorage.getItem('code_verifier');
    if (!storedVerifier) {
      throw new Error('Code verifier must be generated first');
    }
    const hashed = await sha256(storedVerifier);
    codeChallengeRef.current = base64encode(hashed);
  }

  function getAuthUrl() {
    if (!codeChallengeRef.current) {
      throw new Error('Code challenge must be generated first');
    }

    const params: Record<string, string> = {
      response_type: 'code',
      client_id: CLIENT_ID,
      scope: SCOPE,
      code_challenge_method: 'S256',
      code_challenge: codeChallengeRef.current,
      redirect_uri: REDIRECT_URL,
    };

    authUrl.search = new URLSearchParams(params).toString();

    return authUrl.toString();
  }

  function getAccessToken() {
    return localStorage.getItem('access_token');
  }

  return {
    generateCodeVerifier,
    generateCodeChallange,
    getAuthUrl,
    getAccessToken,
    fetchAndSaveAccessToken: (code: string) => {
      exchangeTokenMutation.mutate(code);
    },
    isExchanging: exchangeTokenMutation.isPending,
  };
}
