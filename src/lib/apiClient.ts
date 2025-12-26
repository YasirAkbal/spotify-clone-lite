import axios, { type AxiosRequestConfig } from 'axios';
import { z } from 'zod';
import { CONSTANTS } from '../constants/constants';
import { tokenStorage } from '../utils/tokenStorage';

export const apiClient = axios.create({
  baseURL: CONSTANTS.SPOTIFY_API_BASE_URL,
});

export async function fetchWithSchema<T extends z.ZodTypeAny>(
  schema: T,
  config: AxiosRequestConfig
): Promise<z.infer<T>> {
  const response = await apiClient(config);
  return schema.parse(response.data);
}

apiClient.interceptors.request.use((config) => {
  const token = tokenStorage.getAccessToken();
  if (token) {
    config.headers.Authorization = `${CONSTANTS.BEARER} ${token}`;
  }
  return config;
});
