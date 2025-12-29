import { Outlet } from 'react-router-dom';
import Header from './Header';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import { ErrorBoundary } from 'react-error-boundary';
import Fallback from './Fallback';
import BottomNavigation from './BottomNavigation';

export default function Layout() {
  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      <div className="h-screen flex flex-col overflow-x-hidden">
        <Header />
        <div className="flex flex-1">
          <LeftSidebar />
          <main className="flex-1">
            <Outlet />
            <BottomNavigation />
          </main>
          <RightSidebar />
        </div>
      </div>
    </ErrorBoundary>
  );
}
