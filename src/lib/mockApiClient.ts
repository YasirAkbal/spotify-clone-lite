import axios, { type AxiosRequestConfig } from 'axios';
import { z } from 'zod';

/**
 * Mock API için fetch helper
 * MSW tarafından intercept edilen endpoint'ler için kullanılır
 */
export async function fetchMockApi<T extends z.ZodTypeAny>(
  schema: T,
  config: AxiosRequestConfig
): Promise<z.infer<T>> {
  try {
    const response = await axios(config);
    return schema.parse(response.data);
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.data?.message) {
      throw new Error(error.response.data.message);
    }
    throw error;
  }
}
