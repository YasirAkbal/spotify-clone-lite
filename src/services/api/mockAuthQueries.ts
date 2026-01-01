import { fetchMockApi } from '../../lib/mockApiClient';
import { MockAuthResponseSchema } from '../../features/auth/schemas/mockAuth';
import type { MockRegisterRequest, MockRegisterResponse } from '@/types';

/**
 * Mock Auth Mutations
 * API calls for mock authentication (register, login, etc.)
 */
export const mockAuthMutations = {
  register: (data: MockRegisterRequest) => mockRegisterUser(data),
};

async function mockRegisterUser(data: MockRegisterRequest): Promise<MockRegisterResponse> {
  return fetchMockApi(MockAuthResponseSchema, {
    method: 'post',
    url: '/api/auth/register',
    data: data,
  });
}
