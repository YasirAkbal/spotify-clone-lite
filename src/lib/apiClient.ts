import axios, { type AxiosRequestConfig } from 'axios';
import { z } from 'zod';

export const apiClient = axios.create({
  baseURL: 'https://api.spotify.com/v1',
});

export async function fetchWithSchema<T extends z.ZodTypeAny>(
  schema: T,
  config: AxiosRequestConfig
): Promise<z.infer<T>> {
  const response = await apiClient(config);
  return schema.parse(response.data);
}
