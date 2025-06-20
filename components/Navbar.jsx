// components/Navbar.jsx
// This component renders the navigation bar at the top of every page
// It includes the app logo, navigation links, and user authentication controls

import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { 
  Bars3Icon, 
  XMarkIcon,
  DocumentTextIcon,
  UserIcon,
  ShieldCheckIcon,
  QuestionMarkCircleIcon
} from '@heroicons/react/24/outline';

export default function Navbar() {
  // Get authentication state and functions from the auth context
  const { user, signOut } = useAuth();
  const router = useRouter();
  // State for mobile menu toggle
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle user sign out
  const handleSignOut = async () => {
    await signOut();
    router.push('/login');
  };

  // Navigation links configuration
  const navigation = [
    { name: 'Tenders', href: '/tenders', icon: DocumentTextIcon },
    { name: 'Profile', href: '/company', icon: UserIcon },
    { name: 'Reputation', href: '/reputation', icon: ShieldCheckIcon },
    { name: 'Help', href: '/todos', icon: QuestionMarkCircleIcon },
  ];

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and brand name */}
          <div className="flex items-center">
            <Link href={user ? "/tenders" : "/"} className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-gray-900">Tenderly</span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {user && navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition ${
                    router.pathname.startsWith(item.href)
                      ? 'text-primary bg-blue-50'
                      : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                  }`}
                >
                  <Icon className="h-4 w-4 mr-2" />
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* User Menu - shows user email and logout button when logged in, or login button when logged out */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                <span className="text-sm text-gray-700">{user.email}</span>
                <button
                  onClick={handleSignOut}
                  className="btn btn-secondary text-sm"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link href="/login" className="btn btn-primary text-sm">
                Login
              </Link>
            )}
          </div>

          {/* Mobile menu button - only visible on small screens */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-50"
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu - only visible when mobileMenuOpen is true */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {user && navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center px-3 py-2 rounded-md text-base font-medium ${
                    router.pathname.startsWith(item.href)
                      ? 'text-primary bg-blue-50'
                      : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Icon className="h-5 w-5 mr-3" />
                  {item.name}
                </Link>
              );
            })}
            {user && (
              <div className="border-t border-gray-200 pt-4 pb-3">
                <div className="px-3 py-2 text-sm text-gray-700">{user.email}</div>
                <button
                  onClick={handleSignOut}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}