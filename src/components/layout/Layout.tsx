import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import { ErrorBoundary } from 'react-error-boundary';
import Fallback from './Fallback';
import BottomNavigation from './BottomNavigation';
import { Footer } from './Footer';
import { ROUTES } from '../../constants/routeConstants';

const MOBILE_FOOTER_ROUTES = [ROUTES.HOME] as [string];

export default function Layout() {
  const location = useLocation();
  const footerVisibilityClass = MOBILE_FOOTER_ROUTES.includes(location.pathname)
    ? 'block'
    : 'hidden md:block';

  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      <div className="h-screen flex flex-col overflow-x-hidden p-4">
        <Header />
        <div className="flex flex-1">
          <LeftSidebar />
          <main className="flex-1">
            <Outlet />
            <BottomNavigation />
          </main>
          <RightSidebar />
        </div>
        <div className={footerVisibilityClass}>
          <Footer />
        </div>
      </div>
    </ErrorBoundary>
  );
}
