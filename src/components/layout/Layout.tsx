import { Outlet } from 'react-router-dom';
import Header from './Header';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';

export default function Layout() {
  return (
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
  );
}
