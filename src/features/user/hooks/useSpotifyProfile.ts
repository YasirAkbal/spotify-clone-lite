import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import useOAuth from '../../auth/hooks/useOAuth';
import { fetchWithSchema } from '../../../lib/apiClient.ts';
import { CurrentUserProfile } from '../schemas.ts';
import { useAppDispatch } from '../../../app/hooks.ts';
import { setUserProfileData, clearUserProfileData } from '../store/spotifyProfileSlice.ts';

export default function useSpotifyProfile() {
  const { getAccessToken } = useOAuth();
  const token = getAccessToken();
  const dispatch = useAppDispatch();

  const { data, isSuccess, isError } = useQuery({
    queryKey: ['spotifyProfile', token],
    queryFn: () =>
      fetchWithSchema(CurrentUserProfile, {
        url: '/me',
        headers: { Authorization: `Bearer ${token}` },
      }),
    enabled: !!token,
  });

  useEffect(() => {
    if (isSuccess && data) {
      dispatch(setUserProfileData(data));
    } else if (isError) {
      dispatch(clearUserProfileData());
    }
  }, [isSuccess, isError, data, dispatch]);

  return { data, isSuccess, isError };
}
