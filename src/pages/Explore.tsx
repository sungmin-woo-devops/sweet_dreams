import React, { useState } from 'react';
import { Layout } from '../components/layout/Layout';
import { CategoryFilter } from '../components/ui/CategoryFilter';
import { ModelCard } from '../components/ui/Card';
import { mockModels, CATEGORIES } from '../data/mockModels';
import { ModelCategory } from '../types/model';
import { Search, Filter } from 'lucide-react';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';

export const Explore: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ModelCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  
  const filteredModels = mockModels.filter(model => {
    const matchesCategory = selectedCategory === 'All' || model.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      model.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      model.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
    return matchesCategory && matchesSearch;
  });
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="font-display font-bold text-3xl md:text-4xl text-chocolate-800 mb-6">
            Explore Food Models
          </h1>
          
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <Input
                placeholder="Search models..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                icon={<Search className="h-5 w-5" />}
              />
            </div>
            
            <Button 
              variant="outline" 
              className="md:w-auto" 
              icon={<Filter className="h-5 w-5" />}
              onClick={() => setShowFilters(!showFilters)}
            >
              Filters
            </Button>
          </div>
          
          {showFilters && (
            <div className="bg-white p-4 rounded-xl shadow-sm mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-chocolate-700 mb-1">
                  Sort By
                </label>
                <select className="input">
                  <option>Newest First</option>
                  <option>Most Popular</option>
                  <option>Alphabetical</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-chocolate-700 mb-1">
                  Style
                </label>
                <select className="input">
                  <option>All Styles</option>
                  <option>Realistic</option>
                  <option>Stylized</option>
                  <option>Low Poly</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-chocolate-700 mb-1">
                  Format
                </label>
                <select className="input">
                  <option>All Formats</option>
                  <option>GLB/GLTF</option>
                  <option>FBX</option>
                  <option>OBJ</option>
                </select>
              </div>
            </div>
          )}
          
          <CategoryFilter 
            categories={CATEGORIES}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </div>
        
        {filteredModels.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredModels.map(model => (
              <ModelCard key={model.id} model={model} />
            ))}
          </div>
        ) : (
          <div className="bg-cream-100 rounded-xl p-8 text-center">
            <h3 className="font-display font-semibold text-xl mb-2">No models found</h3>
            <p className="text-chocolate-600 mb-4">
              We couldn't find any models matching your search criteria.
            </p>
            <Button 
              variant="primary" 
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
};