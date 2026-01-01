import { http, HttpResponse } from 'msw';

interface MockUser {
  id: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  birthDate?: string;
  avatar: string;
}

interface UserWithPassword extends MockUser {
  password: string;
}

interface RegisterRequest {
  email: string;
  password: string;
  username: string;
  firstName: string;
  lastName: string;
  birthDate: string;
}

interface LoginRequest {
  email: string;
  password: string;
}

const users: UserWithPassword[] = [
  {
    id: '1',
    email: 'test@spotify.com',
    password: 'test123',
    username: 'testuser',
    firstName: 'Test',
    lastName: 'User',
    birthDate: '1990-01-01',
    avatar: 'https://i.pravatar.cc/300?img=1',
  },
];

const SECRET_KEY = 'spotify-mock-secret-key';

const createToken = (user: UserWithPassword) => {
  const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
  const payload = btoa(
    JSON.stringify({
      sub: user.id,
      exp: Date.now() + 1000 * 60 * 60 * 24,
    })
  );
  const signature = btoa(`${header}.${payload}.${SECRET_KEY}`);
  return `${header}.${payload}.${signature}`;
};

const verifyToken = (token: string) => {
  try {
    const [header, payload, signature] = token.split('.');
    if (!header || !payload || !signature) return null;

    const expectedSignature = btoa(`${header}.${payload}.${SECRET_KEY}`);
    if (signature !== expectedSignature) return null;

    const decodedPayload = JSON.parse(atob(payload));
    if (decodedPayload.exp < Date.now()) return null;

    return users.find((u) => u.id === decodedPayload.sub) || null;
  } catch (error) {
    return null;
  }
};

export const authHandlers = [
  http.post('/api/auth/register', async ({ request }) => {
    const body = (await request.json()) as RegisterRequest;

    const existingUser = users.find((u) => u.email === body.email);
    if (existingUser) {
      return HttpResponse.json({ message: 'Email already exists' }, { status: 400 });
    }

    const existingUsername = users.find((u) => u.username === body.username);
    if (existingUsername) {
      return HttpResponse.json({ message: 'Username already exists' }, { status: 400 });
    }

    const newUser: UserWithPassword = {
      id: String(users.length + 1),
      email: body.email,
      password: body.password,
      username: body.username,
      firstName: body.firstName,
      lastName: body.lastName,
      birthDate: body.birthDate,
      avatar: `https://i.pravatar.cc/300?img=${users.length + 1}`,
    };

    users.push(newUser);

    const token = createToken(newUser);

    return HttpResponse.json({
      user: {
        id: newUser.id,
        email: newUser.email,
        username: newUser.username,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        birthDate: newUser.birthDate,
        avatar: newUser.avatar,
      },
      token,
    });
  }),

  http.post('/api/auth/login', async ({ request }) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const body = (await request.json()) as LoginRequest;

    if (!body.email && !body.password) {
      return HttpResponse.json({ message: 'Email and password are required' }, { status: 400 });
    }

    const user = users.find((u) => u.email === body.email && u.password === body.password);

    if (!user) {
      return HttpResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }

    const token = createToken(user);

    return HttpResponse.json({
      user: {
        id: user.id,
        email: user.email,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
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
    const user = verifyToken(token);

    if (!user) {
      return HttpResponse.json({ message: 'Invalid or expired token' }, { status: 401 });
    }

    return HttpResponse.json({
      id: user.id,
      email: user.email,
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      avatar: user.avatar,
    });
  }),

  http.post('/api/auth/logout', () => {
    return HttpResponse.json({ message: 'Logged out successfully' });
  }),
];
