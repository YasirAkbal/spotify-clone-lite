# Spotify Web App Clone

A React application aiming to recreate the Spotify web interface using modern web technologies.

## 🚧 Project Status

The project is currently under development. While Authentication and User Profile API integrations are implemented, other integrations are pending due to maintenance on the Spotify Public API.

**Current Features:**

- ✅ Authentication
- ✅ User Profile API integration
- ✅ Some Completed Components and Mobile Layout Stylings

## 🚀 Future Plans (To-Do)

- [ ] Complete API integration
- [ ] Add Music Player
- [ ] Complete responsive design and unfinished styling
- [ ] Playlist management (List, add/remove songs, create new playlist)
- [ ] Write tests
- [ ] Multi Language Support

## 🛠 Tech Stack & Architecture

This project utilizes the following technologies and patterns:

- **Core:** React, TypeScript, Vite
- **State Management:** Redux Toolkit, TanStack Query
- **Routing:** React Router
- **UI Library:** Radix UI&Shadcn/UI
- **Validation Library:** Zod
- **Styling:** Tailwind CSS
- **Mocking:** MSW (Mock Service Worker)
- **Architecture:** Feature-based folder structure

### Folder Structure

The project is organized by features for scalability and maintainability:

- `/features`: Contains components, hooks, and store slices specific to each feature (auth, player, playlists, etc.).
- `/components`: Shared UI components (Button, Layout, etc.).
- `/services`: API definitions and requests.
- `/store`: Global state management configuration.

---

_Note: Detailed documentation will be added once the project is completed._

_Disclaimer: This project is an educational clone of Spotify built for professional learning purposes.
It is not affiliated with Spotify. All content is accessed through the public Spotify Web API._
