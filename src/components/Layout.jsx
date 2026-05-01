import { Outlet, Link } from 'react-router-dom';  // Link اضافه شد
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer> 
      </Footer>
    </div>
  );
}