import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../features/auth/hooks/useFakeAuth';

export default function AuthRequired() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
}
