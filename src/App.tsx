import Header from './components/layout/Header.tsx';
import LeftSidebar from './components/layout/LeftSidebar.tsx';
import HomePage from './pages/HomePage.tsx';
import RightSidebar from './components/layout/RightSidebar.tsx';

function App() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <LeftSidebar />
        <HomePage />
        <RightSidebar />
      </div>
    </div>
  );
}

export default App;
