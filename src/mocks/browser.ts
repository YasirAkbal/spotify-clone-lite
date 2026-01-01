import { setupWorker } from 'msw/browser';
import { authHandlers } from './handlers/authHandlers';
import { genreHandlers } from './handlers/genreHandlers';

export const worker = setupWorker(...authHandlers, ...genreHandlers);
