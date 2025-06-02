import React from 'react';
import { Link } from 'react-router-dom';
import { CakeSlice, Twitter, Instagram, Youtube, Github, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-chocolate-800 text-cream-50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <CakeSlice className="text-primary-400 h-6 w-6" />
              <span className="font-display font-bold text-xl text-white">Sweet3D</span>
            </div>
            <p className="text-cream-200 mb-6">
              Transform delicious food concepts into stunning 3D models for games, movies, 
              and creative projects.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-cream-200 hover:text-primary-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-cream-200 hover:text-primary-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-cream-200 hover:text-primary-400 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-cream-200 hover:text-primary-400 transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-display text-lg font-bold mb-4 text-white">Platform</h3>
            <ul className="space-y-3">
              <li><Link to="/explore" className="text-cream-200 hover:text-primary-400 transition-colors">Explore Models</Link></li>
              <li><Link to="/generate" className="text-cream-200 hover:text-primary-400 transition-colors">Generate Models</Link></li>
              <li><Link to="/collections" className="text-cream-200 hover:text-primary-400 transition-colors">Collections</Link></li>
              <li><Link to="/pricing" className="text-cream-200 hover:text-primary-400 transition-colors">Pricing</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display text-lg font-bold mb-4 text-white">Resources</h3>
            <ul className="space-y-3">
              <li><Link to="/docs" className="text-cream-200 hover:text-primary-400 transition-colors">Documentation</Link></li>
              <li><Link to="/tutorials" className="text-cream-200 hover:text-primary-400 transition-colors">Tutorials</Link></li>
              <li><Link to="/blog" className="text-cream-200 hover:text-primary-400 transition-colors">Blog</Link></li>
              <li><Link to="/faq" className="text-cream-200 hover:text-primary-400 transition-colors">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display text-lg font-bold mb-4 text-white">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-cream-200 hover:text-primary-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-cream-200 hover:text-primary-400 transition-colors">Contact</Link></li>
              <li><Link to="/terms" className="text-cream-200 hover:text-primary-400 transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-cream-200 hover:text-primary-400 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-chocolate-600 flex flex-col md:flex-row justify-between items-center">
          <p className="text-cream-300 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Sweet3D. All rights reserved.
          </p>
          <div className="flex items-center">
            <a href="mailto:hello@sweet3d.com" className="flex items-center text-cream-300 hover:text-primary-400 transition-colors text-sm">
              <Mail className="h-4 w-4 mr-2" />
              hello@sweet3d.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};