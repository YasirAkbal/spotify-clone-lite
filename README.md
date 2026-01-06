# 🎵 Spotify Web App Clone

<p align="center">
  <img src="https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-7.3.0-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4.1.18-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Redux_Toolkit-2.11.2-764ABC?style=for-the-badge&logo=redux&logoColor=white" alt="Redux Toolkit" />
  <img src="https://img.shields.io/badge/TanStack_Query-5.90.12-FF4154?style=for-the-badge&logo=reactquery&logoColor=white" alt="TanStack Query" />
  <img src="https://img.shields.io/badge/React_Router-7.11.0-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white" alt="React Router" />
  <img src="https://img.shields.io/badge/Zod-4.2.1-3E67B1?style=for-the-badge&logo=zod&logoColor=white" alt="Zod" />
</p>

A pixel-perfect, fully responsive Spotify web application clone built with modern React ecosystem technologies. This project aims to recreate the complete Spotify web experience with real API integration and professional-grade code architecture.

<!-- TODO: Add your screenshots here -->

## 📸 Screenshots

### Desktop View

<p align="center">
  <img width="500" alt="Image" src="https://github.com/user-attachments/assets/17a591a0-7c8f-4498-a72c-96b763ed63df" />
  <img width="500" alt="Image" src="https://github.com/user-attachments/assets/aaaf143b-eee7-4364-b2cc-b71afe51c6ee" />
</p>

### Mobile View

<p align="center">
  <img width="180" alt="Image" src="https://github.com/user-attachments/assets/3d272291-2893-4198-ad3a-16fe3acb0b12" />
  <img width="180" alt="Image" src="https://github.com/user-attachments/assets/a93923a7-4a57-4a65-8d4a-1dc347465f34" />
  <img width="180" alt="Image" src="https://github.com/user-attachments/assets/941d4ff6-4327-42e5-ac8f-b8c804d10bd3" />
  <img width="180" alt="Image" src="https://github.com/user-attachments/assets/b41e6e09-abe1-4f06-a728-0bc27fa10a44" />
  <img width="180" alt="Image" src="https://github.com/user-attachments/assets/13edc1b0-f8e9-412a-907c-1f4e1f84f74d" />
</p>

---

## 🚧 Project Status

**Currently Under Active Development**

The project has a solid foundation with **80%+ of the UI completed** for both mobile and desktop layouts. Core features including **OAuth authentication**, **custom Mock Auth system**, **fully functional media player**, and **User Profile API** are implemented and working. Due to ongoing maintenance on the Spotify Web API, remaining integrations (Search, Playlist CRUD operations) will be implemented once the API becomes available again.

---

## ✅ Completed Features

### 🔐 Authentication System (Dual Implementation - Learning Purpose)

This project implements **two separate authentication flows** for learning and demonstration purposes:

#### 2️⃣ Spotify OAuth 2.0 with PKCE (Production Implementation)

> 🎯 **Purpose:** Real authentication to obtain access tokens from Spotify API for fetching user data and (future) music content.

- **Complete OAuth Flow** - Authorization code flow with PKCE for enhanced security
- **Code Verifier & Challenge Generation** - Cryptographic functions using Web Crypto API (SHA-256, Base64URL encoding)
- **Token Exchange** - Secure token exchange with Spotify's token endpoint
- **Auto Token Injection** - Axios interceptors automatically attach Bearer tokens to API requests
- **Persistent Sessions** - Token storage with localStorage for session persistence

#### 1️⃣ Fake Auth (Learning Implementation)

> 🎓 **Purpose:** Built from scratch to understand JWT authentication flow, token management, and backend simulation.
>
> ⚠️ **Note:** This is purely for educational purposes and has no effect on the rest of the application.

- **Custom JWT-like Auth System** - Complete authentication API implemented from scratch using Mock Service Worker
- **User Registration** - Full signup flow with form validation (email, password, username)
- **Login/Logout Flow** - Session management with mock backend responses
- **Token Generation & Validation** - Simulated JWT token handling
- **MSW Handlers** - Custom request handlers mimicking real backend behavior

### 👤 User Profile (Spotify API Integration)

- **Real API Integration** - Fetching user data from Spotify's `/me` endpoint
- **Profile Display** - Username, email, follower count, country, subscription type

### ▶️ Media Player (Full Implementation)

The media player is a **complete implementation** with both desktop and mobile variants:

#### Core Audio Engine

- **HTML5 Audio API** - Native browser audio playback with full control
- **Custom useMediaPlayer Hook** - Centralized audio state management with TypeScript interfaces
- **Redux State Management** - Playing status, timestamps, volume, and mute state stored in Redux

### 🎨 UI/UX Implementation

#### Layout Components

- **Desktop Layout** - Three-column layout with header, left sidebar, main content, and right sidebar
- **Mobile Layout** - Single column with bottom navigation bar
- **Header** - Navigation, search bar, user controls, and premium/download CTAs
- **Left Sidebar** - Collapsible library with playlist filtering (Playlists, Artists, Albums)
- **Bottom Navigation** - Mobile-optimized navigation with popover hints
- **Footer** - Spotify-styled footer with navigation links and social media icons

#### Home Page

- **Tab Navigation** - All, Music, Podcasts tabs with Radix UI Tabs
- **Content Carousels** - Horizontal scrollable lists with Embla Carousel
- **Playlist Cards** - Interactive cards with hover play button animation
- **Responsive Grid** - Adaptive card sizing for different screen sizes

#### Search Page

- **Category Grid** - Colorful genre/category cards with dynamic backgrounds
- **Search Input** - Spotify-styled search bar component
- **Recent Searches** - Search history page
- **Mock Genre API** - MSW handlers serving genre data

#### Playlist Detail Page

- **Playlist Header** - Cover image, title, description, owner info
- **Track List** - Song items with artwork, title, artist
- **Action Buttons** - Like, Share, More options with icon buttons

#### Additional Pages

- **Download Page** - App download promotion page with gradient background
- **Register Page** - User registration form with validation
- **User Profile Page** - Account information display

### 🎯 Design System

#### Custom Tailwind Theme (Spotify Design Tokens)

Implemented Spotify's "Encore" design system with custom CSS variables:

```css
/* Color Tokens */
--color-spotify-green: #1ed760;
--color-encore-background-base: #121212;
--color-encore-background-highlight: #1f1f1f;
--color-encore-background-elevated-base: #1f1f1f;
--color-encore-text-base: #ffffff;
--color-encore-text-subdued: #b3b3b3;

/* Typography Scale (10 sizes) */
--text-smaller-2: 0.6875rem; /* 11px */
--text-base: 1rem; /* 16px */
--text-larger-5: 3rem; /* 48px */

/* Spacing Scale */
--spacing-tighter-5: 2px;
--spacing-looser-6: 64px;

/* Border Radius */
--radius-rounded: 9999px;
```

#### Component Library

- **Button** - 8 variants (default, destructive, outline, secondary, ghost, link, spotify, social)
- **TextInput** - Form input with error states
- **FormField** - Label and error message wrapper
- **Carousel** - Horizontal/vertical carousel with navigation controls
- **PlayButton** - Spotify-styled circular play button
- **BackButton** - Navigation back button
- **ListCard** - Content card with hover effects

### 🔧 Technical Architecture

#### State Management (Redux Toolkit + TanStack Query)

**Redux Toolkit** for client state:

```typescript
// Configured slices
const rootReducer = {
  fakeAuth: fakeAuthReducer, // Mock auth state
  auth: oAuthReducer, // OAuth token state
  currentUserProfile: currentUserProfileReducer, // User data
  mediaPlayer: mediaPlayerReducer, // Player state
};
```

**TanStack Query** for server state:

- **Query Factory Pattern** - Organized query definitions with `queryOptions()`
- **Error Boundaries Integration** - `throwOnError` for ErrorBoundary fallbacks
- **Query Cache Error Handling** - Centralized error logging and toast notifications

```typescript
// Query factory example
export const userQueries = {
  all: () =>
    queryOptions({
      queryKey: ['user'] as const,
    }),

  profile: () =>
    queryOptions({
      queryKey: [...userQueries.all().queryKey, 'profile'] as const,
      queryFn: () =>
        fetchWithSchema(CurrentUserProfile, {
          url: '/me',
        }),
    }),
};
```

```typescript
// Tanstack error handling
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      throwOnError: (_error, query) => {
        //if there isn't any data to show user, fallback to ErrorComponent
        return typeof query.state.data === 'undefined';
      },
    },
  },

  queryCache: new QueryCache({
    onError: (error, query) => {
      if (typeof query.state.data !== 'undefined') {
        //toast notification
        toast.error(error.message);
      }
    },
  }),
});
```

#### API Layer Architecture

**Axios Client with Interceptors:**

```typescript
// Auto token injection
apiClient.interceptors.request.use((config) => {
  const token = tokenStorage.getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
```

**Schema-Validated Fetching:**

```typescript
// Type-safe API calls with Zod
async function fetchWithSchema<T extends z.ZodTypeAny>(
  schema: T,
  config: AxiosRequestConfig
): Promise<z.infer<T>> {
  const response = await apiClient(config);
  return schema.parse(response.data);
}
```

#### Form Handling

- **React Hook Form** - Performant form state management
- **Zod Validation** - Schema-based validation with type inference
- **Custom Schemas** - Reusable validation schemas (email, password, etc.)

#### Error Handling

- **Error Boundaries** - React Error Boundary with fallback UI and reset functionality
- **Query Error Reset** - TanStack Query `QueryErrorResetBoundary` integration
- **Form Error Display** - Field-level and form-level error messages
- **Graceful Degradation** - Show cached data on error when available

#### Developer Experience

- **MSW (Mock Service Worker)** - Full API mocking for development
  - Auth handlers (login, register, token validation)
  - Genre/Category handlers with mock data
  - Automatic activation in development mode
- **Path Aliases** - Clean imports with `@/` prefix
- **ESLint + Prettier** - Code quality and formatting
- **TypeScript Strict Mode** - Full type safety
- **HTTPS Development** - Local SSL with vite-plugin-mkcert (required for OAuth)

## 📱 Responsive Design

The application is responsive with dedicated layouts for different screen sizes:

| Breakpoint               | Layout Type   | Key Features                                           |
| ------------------------ | ------------- | ------------------------------------------------------ |
| < 768px (Mobile)         | Single Column | Bottom navigation, compact player, simplified header   |
| ≥ 768px (Tablet/Desktop) | Multi-Column  | Sidebar navigation, full player bar, expanded controls |

### Mobile-First Approach

- Touch-optimized interactions
- Swipeable carousels
- Bottom sheet patterns for popovers
- Optimized tap targets

### Desktop Enhancements

- Hover states and animations
- Keyboard navigation support
- Expanded information display
- Multi-column layouts

---

## 🛠 Tech Stack

### Core

| Technology | Version | Purpose                 |
| ---------- | ------- | ----------------------- |
| React      | 19.2.0  | UI Library              |
| TypeScript | 5.9.3   | Type Safety             |
| Vite       | 7.3.0   | Build Tool & Dev Server |

### State Management & Data Fetching

| Technology     | Version | Purpose                  |
| -------------- | ------- | ------------------------ |
| Redux Toolkit  | 2.11.2  | Global State Management  |
| React Redux    | 9.2.0   | React Bindings for Redux |
| TanStack Query | 5.90.12 | Server State & Caching   |
| Axios          | 1.13.2  | HTTP Client              |

### UI & Styling

| Technology   | Version | Purpose                         |
| ------------ | ------- | ------------------------------- |
| Tailwind CSS | 4.1.18  | Utility-First CSS               |
| Radix UI     | 1.4.3   | Headless UI Components          |
| Shadcn/UI    | -       | Component Library (Radix-based) |

### Forms & Validation

| Technology          | Version | Purpose               |
| ------------------- | ------- | --------------------- |
| React Hook Form     | 7.69.0  | Form State Management |
| Zod                 | 4.2.1   | Schema Validation     |
| @hookform/resolvers | 5.2.2   | Zod Integration       |

### Routing

| Technology       | Version | Purpose             |
| ---------------- | ------- | ------------------- |
| React Router DOM | 7.11.0  | Client-Side Routing |

### Development & Testing

| Technology | Version | Purpose         |
| ---------- | ------- | --------------- |
| MSW        | 2.12.4  | API Mocking     |
| ESLint     | 9.39.1  | Code Linting    |
| Prettier   | 3.7.4   | Code Formatting |

### Utilities

| Technology           | Version | Purpose             |
| -------------------- | ------- | ------------------- |
| clsx                 | 2.1.1   | Conditional Classes |
| React Error Boundary | 6.0.0   | Error Handling      |
| React Toastify       | 11.0.5  | Toast Notifications |

---

## 📁 Project Structure

```
spotify-web-app/
├── public/
│   ├── mockServiceWorker.js    # MSW service worker
│   └── music/                  # Static audio files
├── src/
│   ├── app/
│   │   ├── hooks.ts            # Typed Redux hooks
│   │   ├── queryClient.ts      # TanStack Query configuration
│   │   └── store.ts            # Redux store configuration
│   ├── assets/
│   │   ├── fonts/              # Custom fonts
│   │   ├── icons/              # SVG icon components (30+ icons)
│   │   ├── images/             # Static images
│   │   └── music/              # Audio assets
│   ├── components/
│   │   ├── layout/             # Layout components
│   │   │   ├── Layout.tsx      # Main layout wrapper
│   │   │   ├── Header.tsx      # Desktop header
│   │   │   ├── LeftSidebar.tsx # Collapsible left sidebar
│   │   │   ├── RightSidebar.tsx# Collapsible right sidebar
│   │   │   ├── Footer.tsx      # Footer component
│   │   │   ├── BottomBar.tsx   # Mobile bottom bar
│   │   │   ├── BottomNavigation.tsx # Mobile navigation
│   │   │   ├── AuthRequired.tsx# Protected route wrapper
│   │   │   └── Fallback.tsx    # Error fallback
│   │   └── ui/                 # Reusable UI components
│   │       ├── Button.tsx      # Button with variants
│   │       ├── Carousel.tsx    # Carousel component
│   │       ├── TextInput.tsx   # Form input
│   │       ├── FormField.tsx   # Form field wrapper
│   │       ├── List.tsx        # Content list with carousel
│   │       ├── ListCard.tsx    # Card component
│   │       ├── PlayButton.tsx  # Play button
│   │       └── BackButton.tsx  # Navigation back button
│   ├── constants/
│   │   ├── constants.ts        # App constants
│   │   └── routeConstants.ts   # Route definitions
│   ├── features/               # Feature-based modules
│   │   ├── auth/
│   │   │   ├── components/     # Auth UI components
│   │   │   ├── hooks/          # Auth hooks (useOAuth, useFakeAuth)
│   │   │   ├── schemas/        # Validation schemas
│   │   │   └── store/          # Auth Redux slices
│   │   ├── home/
│   │   │   ├── HomePage.tsx    # Home page component
│   │   │   └── components/     # Home sub-components
│   │   ├── player/
│   │   │   ├── components/     # Player UI (Desktop, Mobile)
│   │   │   ├── hooks/          # useMediaPlayer hook
│   │   │   └── store/          # Player Redux slice
│   │   ├── playlists/
│   │   │   └── components/     # Playlist components
│   │   ├── search/
│   │   │   └── components/     # Search components
│   │   ├── user/
│   │   │   ├── components/     # User profile components
│   │   │   ├── hooks/          # User hooks
│   │   │   ├── schemas/        # User schemas
│   │   │   └── store/          # User Redux slice
│   │   ├── download/           # Download page
│   │   ├── library/            # Library feature
│   │   └── register/           # Registration feature
│   ├── hooks/                  # Shared custom hooks
│   ├── lib/
│   │   ├── apiClient.ts        # Axios configuration
│   │   ├── mockApiClient.ts    # Mock API client
│   │   ├── utils.ts            # Utility functions (cn)
│   │   └── schemas/            # Shared Zod schemas
│   ├── mocks/
│   │   ├── browser.ts          # MSW browser setup
│   │   └── handlers/           # Mock API handlers
│   ├── routes/                 # Route components
│   ├── services/
│   │   └── api/                # API query definitions
│   │       ├── userQueries.ts  # User API queries
│   │       ├── genreQueries.ts # Genre API queries
│   │       └── playlistsQueries.ts # Playlist API queries
│   ├── store/
│   │   └── slices/             # Redux slices
│   ├── types/
│   │   ├── index.ts            # Type re-exports
│   │   ├── api/                # API response types
│   │   ├── components/         # Component prop types
│   │   └── store/              # Redux state types
│   ├── utils/
│   │   ├── getGreeting.ts      # Greeting utility
│   │   └── tokenStorage.ts     # Token management
│   ├── App.tsx                 # Root component with routes
│   ├── main.tsx                # Application entry point
│   ├── input.css               # Tailwind & theme configuration
│   └── env.d.ts                # Environment type definitions
├── tests/
│   ├── e2e/                    # End-to-end tests
│   ├── integration/            # Integration tests
│   └── unit/                   # Unit tests
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
└── eslint.config.js
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Spotify Developer Account (for API access)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/YasirAkbal/spotify-clone-lite.git
   cd spotify-clone-lite
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment variables**

   Create a `.env` file in the root directory:

   ```env
   VITE_SPOTIFY_CLIENT_ID=your_spotify_client_id
   VITE_SPOTIFY_REDIRECT_URI=https://127.0.0.1:5173/auth/callback
   VITE_SPOTIFY_TOKEN_URL=https://accounts.spotify.com/api/token
   VITE_SPOTIFY_AUTH_URL=https://accounts.spotify.com/authorize
   VITE_SPOTIFY_SCOPE=user-read-private user-read-email
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**

   Navigate to `https://127.0.0.1:5173`

### Available Scripts

| Command           | Description                         |
| ----------------- | ----------------------------------- |
| `npm run dev`     | Start development server with HTTPS |
| `npm run build`   | Build for production                |
| `npm run preview` | Preview production build            |
| `npm run lint`    | Run ESLint                          |

---

## 🗺️ Roadmap

### Phase 1: Core UI ✅

- [x] Complete responsive layout (Mobile + Desktop)
- [x] Implement all major UI components
- [x] Create design system with Spotify theme
- [x] Build media player with full controls

### Phase 2: Authentication ✅

- [x] Implement Spotify OAuth 2.0 with PKCE
- [x] User profile API integration
- [x] Protected routes

### Phase 3: Other API Integrations (Pending Spotify API Update)

- [ ] Search functionality with Spotify API
- [ ] Playlist CRUD operations

### Phase 4: Advanced Features

- [ ] **Optimistic Updates** - Immediate UI feedback for mutations
- [ ] **Infinite Scroll** - Virtualized lists for large datasets
- [ ] **Skeleton UI** - Loading state placeholders

### Phase 5: Testing

- [ ] Unit tests with Vitest
- [ ] Integration tests
- [ ] E2E tests with Playwright

### Phase 6: Internationalization

- [ ] Multi-language support (i18n)

### Phase 7: Production Ready

- [ ] Monitoring and logging integration
- [ ] WCAG 2.1 accessibility compliance
- [ ] Performance optimization

---

## 📄 License

This project is for educational purposes only. Spotify and its logo are registered trademarks of Spotify AB.

---

_Disclaimer: This project is an educational clone of Spotify built for professional learning purposes.
It is not affiliated with Spotify. All content is accessed through the public Spotify Web API._
