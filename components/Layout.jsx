// components/Layout.jsx
// This component provides the common layout structure for all pages
// It includes the navigation bar, main content area, footer, and toast container

import Navbar from './Navbar';
import ToastContainer from './ToastContainer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation bar at the top of every page */}
      <Navbar />
      
      {/* Main content area where page-specific content is rendered */}
      <main>{children}</main>
      
      {/* Footer with attribution */}
      <footer className="bg-white border-t border-gray-200 mt-auto">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <a
              href="https://bolt.new"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-500 hover:text-gray-700 transition"
            >
              <span className="text-sm">Built on</span>
              <div className="bg-black text-white px-2 py-1 rounded text-xs font-bold">
                BOLT
              </div>
            </a>
          </div>
        </div>
      </footer>
      
      {/* Toast notification container for displaying alerts */}
      <ToastContainer />
    </div>
  );
}