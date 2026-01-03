import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import { ErrorBoundary } from 'react-error-boundary';
import Fallback from './Fallback';
import { Footer } from './Footer';
import { ROUTES } from '../../constants/routeConstants';
import BottomBar from './BottomBar';

const MOBILE_FOOTER_ROUTES = [ROUTES.HOME, ROUTES.PLAYLIST_DETAIL] as const;

export default function Layout() {
  const location = useLocation();
  const footerVisibilityClass = MOBILE_FOOTER_ROUTES.includes(location.pathname as any)
    ? 'block'
    : 'hidden md:block';

  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      {/* Mobile Layout */}
      <div className="md:hidden h-screen flex flex-col overflow-x-hidden py-4 px-2">
        <main className="flex-1 min-w-0">
          <Outlet />
          <BottomBar />
        </main>
        <div className={footerVisibilityClass}>
          <Footer />
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex md:flex-col h-screen overflow-hidden bg-black p-2">
        <Header />

        <div className="flex flex-1 overflow-hidden gap-x-2">
          <LeftSidebar />

          <main className="flex-1 min-w-0 bg-gradient-to-b from-encore-background-highlight to-encore-background-base rounded-lg overflow-y-auto">
            <div className="p-6">
              <Outlet />
            </div>
            <Footer />
          </main>

          <RightSidebar />
        </div>
      </div>
    </ErrorBoundary>
  );
}
