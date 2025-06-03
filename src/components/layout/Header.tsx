import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, User, Heart, Plus, CakeSlice, Settings, LogOut, Bell, BookOpen, Crown } from 'lucide-react';
import { cn } from '../../utils/cn';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setUserMenuOpen(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const notifications = [
    { id: 1, text: "Your model 'Chocolate Cake' was featured!", isNew: true },
    { id: 2, text: "New comment on your cupcake model", isNew: true },
    { id: 3, text: "Welcome to Sweet3D Pro!", isNew: false }
  ];
  
  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled 
        ? "bg-white/95 backdrop-blur-sm shadow-md py-2" 
        : "bg-transparent py-4"
    )}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <CakeSlice className="text-primary-500 h-8 w-8" />
          <span className="font-display font-bold text-2xl bg-gradient-to-r from-primary-500 to-chocolate-700 bg-clip-text text-transparent">
            Sweet3D
          </span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search models..."
              className="input pr-10 w-64"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-chocolate-400 h-5 w-5" />
          </div>
          
          <nav className="flex items-center space-x-6">
            <Link 
              to="/explore" 
              className={cn(
                "font-medium transition-colors duration-200",
                isActive('/explore') 
                  ? "text-primary-600" 
                  : "text-chocolate-700 hover:text-primary-500"
              )}
            >
              Explore
            </Link>
            <Link 
              to="/generate" 
              className={cn(
                "font-medium transition-colors duration-200",
                isActive('/generate') 
                  ? "text-primary-600" 
                  : "text-chocolate-700 hover:text-primary-500"
              )}
            >
              Generate
            </Link>
            <Link 
              to="/collections" 
              className={cn(
                "font-medium transition-colors duration-200",
                isActive('/collections') 
                  ? "text-primary-600" 
                  : "text-chocolate-700 hover:text-primary-500"
              )}
            >
              Collections
            </Link>
            <Link 
              to="/pricing" 
              className={cn(
                "font-medium transition-colors duration-200",
                isActive('/pricing') 
                  ? "text-primary-600" 
                  : "text-chocolate-700 hover:text-primary-500"
              )}
            >
              Pricing
            </Link>
          </nav>
          
          <div className="flex items-center space-x-3">
            {/* Notifications */}
            <div className="relative">
              <button className="p-2 rounded-full hover:bg-cream-100 relative">
                <Bell className="h-5 w-5 text-chocolate-700" />
                <span className="absolute top-0 right-0 h-2 w-2 bg-primary-500 rounded-full"></span>
              </button>
            </div>

            {/* Favorites */}
            <button className="p-2 rounded-full hover:bg-cream-100 relative">
              <Heart className="h-5 w-5 text-chocolate-700" />
              <span className="absolute -top-1 -right-1 bg-primary-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                3
              </span>
            </button>

            {/* Create Button */}
            <Link to="/generate" className="btn-primary flex items-center gap-1">
              <Plus className="h-4 w-4" /> Create
            </Link>

            {/* User Menu */}
            <div className="relative" ref={userMenuRef}>
              <button 
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="h-10 w-10 bg-chocolate-100 rounded-full flex items-center justify-center hover:bg-chocolate-200 transition-colors relative"
              >
                <User className="h-5 w-5 text-chocolate-700" />
                <span className="absolute -top-1 -right-1 h-3 w-3 bg-accent-500 border-2 border-white rounded-full"></span>
              </button>

              {userMenuOpen && (
                <div className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-lg py-2 border border-cream-200">
                  <div className="px-4 py-3 border-b border-cream-200">
                    <div className="flex items-center">
                      <div className="h-10 w-10 bg-primary-100 rounded-full flex items-center justify-center">
                        <User className="h-5 w-5 text-primary-600" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-chocolate-800">Sarah Chen</p>
                        <p className="text-xs text-chocolate-500">sarah@sweet3d.com</p>
                      </div>
                      <div className="ml-auto">
                        <span className="inline-flex items-center px-2 py-1 bg-accent-100 text-accent-800 text-xs rounded-full">
                          <Crown className="h-3 w-3 mr-1" /> Pro
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="py-2">
                    <Link to="/profile" className="flex items-center px-4 py-2 text-sm text-chocolate-700 hover:bg-cream-50">
                      <User className="h-4 w-4 mr-3" />
                      Profile
                    </Link>
                    <Link to="/dashboard" className="flex items-center px-4 py-2 text-sm text-chocolate-700 hover:bg-cream-50">
                      <BookOpen className="h-4 w-4 mr-3" />
                      My Models
                    </Link>
                    <Link to="/settings" className="flex items-center px-4 py-2 text-sm text-chocolate-700 hover:bg-cream-50">
                      <Settings className="h-4 w-4 mr-3" />
                      Settings
                    </Link>
                    <button className="w-full flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50">
                      <LogOut className="h-4 w-4 mr-3" />
                      Sign Out
                    </button>
                  </div>

                  <div className="px-4 py-3 bg-cream-50 rounded-b-xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-medium text-chocolate-800">Pro Plan</p>
                        <p className="text-xs text-chocolate-500">50/100 models used</p>
                      </div>
                      <div className="w-24 h-2 bg-cream-200 rounded-full overflow-hidden">
                        <div className="w-1/2 h-full bg-accent-500"></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 md:hidden"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-chocolate-700" />
          ) : (
            <Menu className="h-6 w-6 text-chocolate-700" />
          )}
        </button>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-cream-200 py-4 px-4 shadow-md">
          <div className="flex items-center mb-4">
            <input
              type="text"
              placeholder="Search models..."
              className="input pr-10 flex-1"
            />
            <Search className="absolute right-8 text-chocolate-400 h-5 w-5" />
          </div>
          
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/explore" 
              className={cn(
                "font-medium py-2 transition-colors duration-200",
                isActive('/explore') ? "text-primary-600" : "text-chocolate-700"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              Explore
            </Link>
            <Link 
              to="/generate" 
              className={cn(
                "font-medium py-2 transition-colors duration-200",
                isActive('/generate') ? "text-primary-600" : "text-chocolate-700"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              Generate
            </Link>
            <Link 
              to="/collections" 
              className={cn(
                "font-medium py-2 transition-colors duration-200",
                isActive('/collections') ? "text-primary-600" : "text-chocolate-700"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              Collections
            </Link>
            <Link 
              to="/pricing" 
              className={cn(
                "font-medium py-2 transition-colors duration-200",
                isActive('/pricing') ? "text-primary-600" : "text-chocolate-700"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              to="/profile" 
              className={cn(
                "font-medium py-2 transition-colors duration-200",
                isActive('/profile') ? "text-primary-600" : "text-chocolate-700"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              Profile
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};