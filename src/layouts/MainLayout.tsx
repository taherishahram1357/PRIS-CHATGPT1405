import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Dashboard from '../pages/Dashboard';

export default function MainLayout() {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <Dashboard />
      </div>
    </div>
  );
}
