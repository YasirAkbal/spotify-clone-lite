import { z } from 'zod';

interface MockApiConfig {
  url: string;
  params?: Record<string, unknown>;
}

/**
 * Mock API için fetch helper
 * MSW tarafından intercept edilen endpoint'ler için kullanılır
 */
export async function fetchMockApi<T extends z.ZodTypeAny>(
  schema: T,
  config: MockApiConfig
): Promise<z.infer<T>> {
  const url = new URL(config.url, window.location.origin);
  if (config.params) {
    Object.entries(config.params).forEach(([key, value]) => {
      url.searchParams.set(key, String(value));
    });
  }

  const response = await fetch(url);
  const data = await response.json();
  return schema.parse(data);
}
