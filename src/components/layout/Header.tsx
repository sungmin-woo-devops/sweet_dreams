import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, User, Heart, Plus, CakeSlice } from 'lucide-react';
import { cn } from '../../utils/cn';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
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
            <button className="p-2 rounded-full hover:bg-cream-100">
              <Heart className="h-5 w-5 text-chocolate-700" />
            </button>
            <Link to="/generate" className="btn-primary flex items-center gap-1">
              <Plus className="h-4 w-4" /> Create
            </Link>
            <Link to="/profile">
              <div className="h-10 w-10 bg-chocolate-100 rounded-full flex items-center justify-center">
                <User className="h-5 w-5 text-chocolate-700" />
              </div>
            </Link>
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