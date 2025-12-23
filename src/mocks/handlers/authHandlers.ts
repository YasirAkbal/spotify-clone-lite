// src/mocks/handlers/auth.handlers.ts
import { http, HttpResponse } from 'msw';

interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  avatar: string;
}

const users: User[] = [
  {
    id: '1',
    email: 'test@spotify.com',
    password: 'test123',
    name: 'Test User',
    avatar: 'https://i.pravatar.cc/300?img=1',
  },
];

let currentUser: User | null = null;

export const authHandlers = [
  // Register
  http.post('/api/auth/register', async ({ request }) => {
    const body = (await request.json()) as { email: string; password: string; name: string };

    const existingUser = users.find((u) => u.email === body.email);
    if (existingUser) {
      return HttpResponse.json({ message: 'Email already exists' }, { status: 400 });
    }

    const newUser = {
      id: String(users.length + 1),
      email: body.email,
      password: body.password,
      name: body.name,
      avatar: `https://i.pravatar.cc/300?img=${users.length + 1}`,
    };

    users.push(newUser);
    currentUser = newUser;

    const token = btoa(JSON.stringify({ userId: newUser.id }));

    return HttpResponse.json({
      user: {
        id: newUser.id,
        email: newUser.email,
        name: newUser.name,
        avatar: newUser.avatar,
      },
      token,
    });
  }),

  http.post('/api/auth/login', async ({ request }) => {
    const body = (await request.json()) as { email: string; password: string };

    const user = users.find((u) => u.email === body.email && u.password === body.password);

    if (!user) {
      return HttpResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }

    currentUser = user;
    const token = btoa(JSON.stringify({ userId: user.id }));

    return HttpResponse.json({
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        avatar: user.avatar,
      },
      token,
    });
  }),

  http.get('/api/auth/me', ({ request }) => {
    const authHeader = request.headers.get('Authorization');

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return HttpResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const token = authHeader.replace('Bearer ', '');

    try {
      const decoded = JSON.parse(atob(token)) as { userId: string };
      const user = users.find((u) => u.id === decoded.userId);

      if (!user) {
        return HttpResponse.json({ message: 'User not found' }, { status: 404 });
      }

      return HttpResponse.json({
        id: user.id,
        email: user.email,
        name: user.name,
        avatar: user.avatar,
      });
    } catch {
      return HttpResponse.json({ message: 'Invalid token' }, { status: 401 });
    }
  }),

  http.post('/api/auth/logout', () => {
    currentUser = null;
    return HttpResponse.json({ message: 'Logged out successfully' });
  }),
];
