import React from 'react';
import { cn } from '../../utils/cn';
import { Heart, Download, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FoodModel } from '../../types/model';

interface ModelCardProps {
  model: FoodModel;
  className?: string;
}

export const ModelCard: React.FC<ModelCardProps> = ({ model, className }) => {
  return (
    <div 
      className={cn(
        "card group h-full flex flex-col",
        className
      )}
    >
      <Link to={`/model/${model.id}`} className="relative overflow-hidden">
        <img 
          src={model.thumbnailUrl} 
          alt={model.name}
          className="w-full aspect-square object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-chocolate-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div className="flex items-center gap-3 text-white">
            <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
              <Heart className="h-4 w-4" />
            </button>
            <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
              <Download className="h-4 w-4" />
            </button>
            <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
              <Info className="h-4 w-4" />
            </button>
          </div>
        </div>
      </Link>
      
      <div className="p-4 flex flex-col flex-1">
        <Link to={`/model/${model.id}`}>
          <h3 className="font-display font-bold text-lg text-chocolate-800 mb-1 hover:text-primary-600 transition-colors">
            {model.name}
          </h3>
        </Link>
        
        <div className="text-sm text-chocolate-500 mb-3">
          <Link to={`/category/${model.category.toLowerCase()}`} className="hover:text-primary-500 transition-colors">
            {model.category}
          </Link>
        </div>
        
        <div className="mt-auto flex items-center justify-between">
          <Link 
            to={`/creator/${model.creator.id}`}
            className="flex items-center gap-2 group/creator"
          >
            <img 
              src={model.creator.avatarUrl}
              alt={model.creator.name}
              className="h-8 w-8 rounded-full object-cover"
            />
            <span className="text-sm font-medium text-chocolate-600 group-hover/creator:text-primary-600 transition-colors">
              {model.creator.name}
            </span>
          </Link>
          
          <div className="flex items-center text-chocolate-500">
            <Heart className="h-4 w-4 mr-1 fill-primary-400 text-primary-400" />
            <span className="text-sm">{model.likes}</span>
          </div>
        </div>
      </div>
    </div>
  );
};