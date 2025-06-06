import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, User, Heart, Plus, CakeSlice, Settings, LogOut, Bell, BookOpen, Crown, Zap, Download, Upload, Palette, Share2, History, Star } from 'lucide-react';
import { cn } from '../../utils/cn';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [notificationMenuOpen, setNotificationMenuOpen] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const notificationMenuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setUserMenuOpen(false);
      }
      if (notificationMenuRef.current && !notificationMenuRef.current.contains(event.target as Node)) {
        setNotificationMenuOpen(false);
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
    { id: 1, text: "Your model 'Chocolate Cake' was featured!", isNew: true, time: '2m ago', type: 'success' },
    { id: 2, text: "New comment on your cupcake model", isNew: true, time: '5m ago', type: 'info' },
    { id: 3, text: "Model generation completed", isNew: false, time: '1h ago', type: 'success' },
    { id: 4, text: "Welcome to Sweet3D Pro!", isNew: false, time: '2h ago', type: 'info' }
  ];

  const quickActions = [
    { icon: <Zap className="h-4 w-4" />, label: 'Quick Generate', action: () => {}, color: 'bg-primary-500' },
    { icon: <Upload className="h-4 w-4" />, label: 'Batch Upload', action: () => {}, color: 'bg-accent-500' },
    { icon: <Palette className="h-4 w-4" />, label: 'Style Transfer', action: () => {}, color: 'bg-secondary-500' },
    { icon: <Share2 className="h-4 w-4" />, label: 'Share Collection', action: () => {}, color: 'bg-success-500' },
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
          <div className="relative">
            <CakeSlice className="text-primary-500 h-8 w-8 animate-bounce-gentle" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-secondary-400 rounded-full animate-pulse"></div>
          </div>
          <span className="font-display font-bold text-2xl bg-gradient-to-r from-primary-500 via-accent-500 to-secondary-500 bg-clip-text text-transparent">
            Sweet3D
          </span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search models, creators, tags..."
              className="input pr-10 w-80 bg-white/80 backdrop-blur-sm border-2 border-primary-100 focus:border-primary-300 focus:ring-primary-200"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-chocolate-400 h-5 w-5" />
          </div>
          
          <nav className="flex items-center space-x-6">
            <Link 
              to="/explore" 
              className={cn(
                "font-medium transition-all duration-200 hover:scale-105",
                isActive('/explore') 
                  ? "text-primary-600 font-bold" 
                  : "text-chocolate-700 hover:text-primary-500"
              )}
            >
              Explore
            </Link>
            <Link 
              to="/generate" 
              className={cn(
                "font-medium transition-all duration-200 hover:scale-105 relative",
                isActive('/generate') 
                  ? "text-primary-600 font-bold" 
                  : "text-chocolate-700 hover:text-primary-500"
              )}
            >
              Generate
              <span className="absolute -top-1 -right-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                AI
              </span>
            </Link>
            <Link 
              to="/collections" 
              className={cn(
                "font-medium transition-all duration-200 hover:scale-105",
                isActive('/collections') 
                  ? "text-primary-600 font-bold" 
                  : "text-chocolate-700 hover:text-primary-500"
              )}
            >
              Collections
            </Link>
            <Link 
              to="/pricing" 
              className={cn(
                "font-medium transition-all duration-200 hover:scale-105",
                isActive('/pricing') 
                  ? "text-primary-600 font-bold" 
                  : "text-chocolate-700 hover:text-primary-500"
              )}
            >
              Pricing
            </Link>
          </nav>
          
          <div className="flex items-center space-x-3">
            {/* Quick Actions */}
            <div className="hidden lg:flex items-center space-x-2">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  onClick={action.action}
                  className={cn(
                    "p-2 rounded-xl text-white transition-all duration-200 hover:scale-110 shadow-soft",
                    action.color
                  )}
                  title={action.label}
                >
                  {action.icon}
                </button>
              ))}
            </div>

            {/* Notifications */}
            <div className="relative" ref={notificationMenuRef}>
              <button 
                onClick={() => setNotificationMenuOpen(!notificationMenuOpen)}
                className="p-2 rounded-full hover:bg-cream-100 relative transition-all duration-200 hover:scale-110"
              >
                <Bell className="h-5 w-5 text-chocolate-700" />
                <span className="absolute top-0 right-0 h-2 w-2 bg-primary-500 rounded-full animate-pulse"></span>
              </button>

              {notificationMenuOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-hover py-2 border border-cream-200 max-h-96 overflow-y-auto">
                  <div className="px-4 py-3 border-b border-cream-200">
                    <div className="flex items-center justify-between">
                      <h3 className="font-display font-bold text-chocolate-800">Notifications</h3>
                      <button className="text-primary-500 text-sm font-medium hover:text-primary-600">
                        Mark all read
                      </button>
                    </div>
                  </div>

                  <div className="py-2">
                    {notifications.map(notification => (
                      <div key={notification.id} className={cn(
                        "px-4 py-3 hover:bg-cream-50 cursor-pointer border-l-4 transition-colors",
                        notification.isNew ? "border-l-primary-500 bg-primary-50/30" : "border-l-transparent"
                      )}>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <p className={cn(
                              "text-sm",
                              notification.isNew ? "font-medium text-chocolate-800" : "text-chocolate-600"
                            )}>
                              {notification.text}
                            </p>
                            <p className="text-xs text-chocolate-500 mt-1">{notification.time}</p>
                          </div>
                          {notification.isNew && (
                            <div className="w-2 h-2 bg-primary-500 rounded-full ml-2 mt-1"></div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="px-4 py-3 border-t border-cream-200">
                    <Link to="/notifications" className="text-primary-500 text-sm font-medium hover:text-primary-600">
                      View all notifications
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Favorites */}
            <button className="p-2 rounded-full hover:bg-cream-100 relative transition-all duration-200 hover:scale-110">
              <Heart className="h-5 w-5 text-chocolate-700" />
              <span className="absolute -top-1 -right-1 bg-primary-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                3
              </span>
            </button>

            {/* Create Button */}
            <Link to="/generate" className="btn-primary flex items-center gap-1 shadow-glow hover:shadow-glow-accent transition-all duration-300">
              <Plus className="h-4 w-4" /> Create
            </Link>

            {/* User Menu */}
            <div className="relative" ref={userMenuRef}>
              <button 
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="h-10 w-10 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full flex items-center justify-center hover:from-primary-200 hover:to-accent-200 transition-all duration-200 relative border-2 border-white shadow-soft hover:scale-110"
              >
                <User className="h-5 w-5 text-chocolate-700" />
                <span className="absolute -top-1 -right-1 h-3 w-3 bg-success-500 border-2 border-white rounded-full"></span>
              </button>

              {userMenuOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-hover py-2 border border-cream-200">
                  <div className="px-4 py-3 border-b border-cream-200">
                    <div className="flex items-center">
                      <div className="h-12 w-12 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full flex items-center justify-center">
                        <User className="h-6 w-6 text-primary-600" />
                      </div>
                      <div className="ml-3 flex-1">
                        <p className="text-sm font-medium text-chocolate-800">Sarah Chen</p>
                        <p className="text-xs text-chocolate-500">sarah@sweet3d.com</p>
                      </div>
                      <div className="ml-auto">
                        <span className="inline-flex items-center px-2 py-1 bg-gradient-to-r from-secondary-100 to-secondary-200 text-secondary-800 text-xs rounded-full border border-secondary-300">
                          <Crown className="h-3 w-3 mr-1" /> Pro
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="py-2">
                    <Link to="/profile" className="flex items-center px-4 py-2 text-sm text-chocolate-700 hover:bg-cream-50 transition-colors">
                      <User className="h-4 w-4 mr-3 text-primary-500" />
                      Profile & Settings
                    </Link>
                    <Link to="/dashboard" className="flex items-center px-4 py-2 text-sm text-chocolate-700 hover:bg-cream-50 transition-colors">
                      <BookOpen className="h-4 w-4 mr-3 text-accent-500" />
                      My Models
                    </Link>
                    <Link to="/downloads" className="flex items-center px-4 py-2 text-sm text-chocolate-700 hover:bg-cream-50 transition-colors">
                      <Download className="h-4 w-4 mr-3 text-secondary-500" />
                      Downloads
                    </Link>
                    <Link to="/history" className="flex items-center px-4 py-2 text-sm text-chocolate-700 hover:bg-cream-50 transition-colors">
                      <History className="h-4 w-4 mr-3 text-success-500" />
                      Generation History
                    </Link>
                    <Link to="/favorites" className="flex items-center px-4 py-2 text-sm text-chocolate-700 hover:bg-cream-50 transition-colors">
                      <Star className="h-4 w-4 mr-3 text-warning-500" />
                      Favorites
                    </Link>
                    <Link to="/settings" className="flex items-center px-4 py-2 text-sm text-chocolate-700 hover:bg-cream-50 transition-colors">
                      <Settings className="h-4 w-4 mr-3 text-chocolate-500" />
                      Settings
                    </Link>
                    <button className="w-full flex items-center px-4 py-2 text-sm text-error-600 hover:bg-error-50 transition-colors">
                      <LogOut className="h-4 w-4 mr-3" />
                      Sign Out
                    </button>
                  </div>

                  <div className="px-4 py-3 bg-gradient-to-r from-cream-50 to-primary-50 rounded-b-2xl border-t border-cream-200">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <p className="text-xs font-medium text-chocolate-800">Pro Plan</p>
                        <p className="text-xs text-chocolate-500">50/100 models used</p>
                      </div>
                      <Link to="/pricing" className="text-xs text-primary-600 font-medium hover:text-primary-700">
                        Upgrade
                      </Link>
                    </div>
                    <div className="w-full h-2 bg-cream-200 rounded-full overflow-hidden">
                      <div className="w-1/2 h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 md:hidden rounded-full hover:bg-cream-100 transition-colors"
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
        <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-cream-200 py-4 px-4 shadow-md">
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