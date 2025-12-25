import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './features/home/HomePage';
import Auth from './features/auth/components/Auth';
import AuthRequired from './components/layout/AuthRequired';
import AuthCallback from './features/auth/components/AuthCallback';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Auth />} />
        <Route path="auth/callback" element={<AuthCallback />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />

          <Route element={<AuthRequired />}>{/* Protected routes go here */}</Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
