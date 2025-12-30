import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import { HomePage } from './features/home';
import Auth from './features/auth/components/Auth';
import AuthRequired from './components/layout/AuthRequired';
import AuthCallback from './features/auth/components/AuthCallback';
import { ROUTES } from './constants/routeConstants';
import Search from './features/search/components/Search';
import Download from './features/download/components/Download';

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

          <Route element={<AuthRequired />}>{/* Protected routes go here */}</Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
