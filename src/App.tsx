import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import { HomePage } from './features/home';
import Auth from './features/auth/components/Auth';
import AuthRequired from './components/layout/AuthRequired';
import AuthCallback from './features/auth/components/AuthCallback';
import { ROUTES } from './constants/routeConstants';
import Search from './features/search/components/Search';
import Download from './features/download/components/Download';
import PlaylistDetail from './features/playlists/components/PlaylistDetail';
import Register from './features/register/components/Register';
import SearchRecent from './features/search/components/SearchRecent';
import UserProfile from './features/user/components/UserProfile.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.LOGIN} element={<Auth />} />
        <Route path={ROUTES.AUTH_CALLBACK} element={<AuthCallback />} />
        <Route path={ROUTES.HOME} element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={ROUTES.SEARCH} element={<Search />} />
          <Route path={ROUTES.DOWNLOAD} element={<Download />} />
          <Route path={ROUTES.PLAYLIST_DETAIL} element={<PlaylistDetail />} />
          <Route path={ROUTES.REGISTER} element={<Register />} />
          <Route path={ROUTES.SEARCH_RECENT} element={<SearchRecent />} />
          <Route path={ROUTES.PROFILE} element={<UserProfile />} />

          <Route element={<AuthRequired />}>
            {/*<Route path={ROUTES.PROFILE} element={<UserProfile />} />*/}
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
