import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useAppDispatch } from '../../../app/hooks.ts';
import { setUserProfileData, clearUserProfileData } from '../store/spotifyProfileSlice.ts';
import { userQueries } from '../../../services/api/userQueries.ts';
import { tokenStorage } from '../../../utils/tokenStorage.ts';

export default function useSpotifyProfile() {
  const token = tokenStorage.getAccessToken();
  const dispatch = useAppDispatch();

  const { data, isSuccess, isError } = useQuery({
    ...userQueries.profile(),
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
