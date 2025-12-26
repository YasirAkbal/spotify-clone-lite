import { useEffect } from 'react';
import useOAuth from '../hooks/useOAuth';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../constants/routeConstants';

export default function AuthCallback() {
  const navigate = useNavigate();
  const { fetchAndSaveAccessToken, isExchanging } = useOAuth();

  useEffect(() => {
    //let state = urlParams.get('state');
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const error = urlParams.get('error');

    if (error) {
      console.error('OAuth error:', error);
      navigate(ROUTES.LOGIN, { replace: true });
      return;
    }

    if (!code) {
      console.error('No authorization code');
      navigate(ROUTES.LOGIN, { replace: true });
      return;
    }

    fetchAndSaveAccessToken(code);
  }, []);

  if (isExchanging) {
    return <div>Token alınıyor...</div>;
  }

  return <h1>Yönlendiriliyor...</h1>;
}
