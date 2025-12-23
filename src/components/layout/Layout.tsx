import { Outlet } from 'react-router-dom';
import Header from './Header';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import { ErrorBoundary } from 'react-error-boundary';
import Fallback from './Fallback';

export default function Layout() {
  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      <div className="h-screen flex flex-col">
        <Header />
        <div className="flex flex-1 overflow-hidden">
          <LeftSidebar />
          <main className="flex-1 bg-gray-800">
            <Outlet />
          </main>
          <RightSidebar />
        </div>
      </div>
    </ErrorBoundary>
  );
}
