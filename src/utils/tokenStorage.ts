import { CONSTANTS } from '../constants/constants';

export const tokenStorage = {
  getAccessToken: (): string | null => {
    return localStorage.getItem(CONSTANTS.ACCESS_TOKEN);
  },

  setAccessToken: (token: string): void => {
    localStorage.setItem(CONSTANTS.ACCESS_TOKEN, token);
  },

  removeAccessToken: (): void => {
    localStorage.removeItem(CONSTANTS.ACCESS_TOKEN);
  },

  hasAccessToken: (): boolean => {
    return Boolean(tokenStorage.getAccessToken());
  },
};
