import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow p-4">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
