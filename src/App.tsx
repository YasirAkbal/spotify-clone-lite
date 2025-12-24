import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './features/home/HomePage';
import Auth from './features/auth/components/Auth';
import AuthRequired from './components/layout/AuthRequired';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Auth />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />

          <Route element={<AuthRequired />}>{/* Protected routes go here */}</Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
