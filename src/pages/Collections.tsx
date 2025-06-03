import React, { useState } from 'react';
import { Layout } from '../components/layout/Layout';
import { ModelCard } from '../components/ui/Card';
import { mockModels } from '../data/mockModels';
import { Plus, Grid, List, Filter, Search, FolderPlus } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Link } from 'react-router-dom';

export const Collections: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  // Mock collections data
  const collections = [
    {
      id: '1',
      name: 'Dessert Favorites',
      description: 'A collection of sweet treats and desserts',
      modelCount: 12,
      thumbnailUrl: 'https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg',
      models: mockModels.filter(model => model.category === 'Dessert').slice(0, 4)
    },
    {
      id: '2',
      name: 'Breakfast Items',
      description: 'Essential breakfast and brunch models',
      modelCount: 8,
      thumbnailUrl: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg',
      models: mockModels.filter(model => model.category === 'Breakfast').slice(0, 4)
    },
    {
      id: '3',
      name: 'Party Snacks',
      description: 'Perfect for events and celebrations',
      modelCount: 15,
      thumbnailUrl: 'https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg',
      models: mockModels.slice(0, 4)
    }
  ];

  const filteredCollections = collections.filter(collection =>
    collection.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    collection.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="font-display font-bold text-3xl md:text-4xl text-chocolate-800 mb-2">
              Your Collections
            </h1>
            <p className="text-chocolate-600">
              Organize and manage your favorite 3D food models
            </p>
          </div>

          <Button variant="primary" icon={<FolderPlus className="h-5 w-5" />}>
            New Collection
          </Button>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1">
            <Input
              placeholder="Search collections..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              icon={<Search className="h-5 w-5" />}
            />
          </div>

          <div className="flex gap-2">
            <Button
              variant="outline"
              icon={<Filter className="h-5 w-5" />}
              onClick={() => setShowFilters(!showFilters)}
            >
              Filters
            </Button>
            <div className="border-l border-cream-200" />
            <Button
              variant={viewMode === 'grid' ? 'primary' : 'outline'}
              onClick={() => setViewMode('grid')}
              icon={<Grid className="h-5 w-5" />}
            />
            <Button
              variant={viewMode === 'list' ? 'primary' : 'outline'}
              onClick={() => setViewMode('list')}
              icon={<List className="h-5 w-5" />}
            />
          </div>
        </div>

        {showFilters && (
          <div className="bg-white p-4 rounded-xl shadow-sm mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-chocolate-700 mb-1">
                Sort By
              </label>
              <select className="input">
                <option>Recently Updated</option>
                <option>Name (A-Z)</option>
                <option>Most Models</option>
                <option>Date Created</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-chocolate-700 mb-1">
                Visibility
              </label>
              <select className="input">
                <option>All Collections</option>
                <option>Public Only</option>
                <option>Private Only</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-chocolate-700 mb-1">
                Category
              </label>
              <select className="input">
                <option>All Categories</option>
                <option>Desserts</option>
                <option>Main Courses</option>
                <option>Beverages</option>
              </select>
            </div>
          </div>
        )}

        {filteredCollections.length > 0 ? (
          <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
            {filteredCollections.map(collection => (
              <Link key={collection.id} to={`/collection/${collection.id}`}>
                <div className="card group hover:shadow-hover transition-all duration-300">
                  <div className="aspect-video relative overflow-hidden rounded-t-2xl">
                    <img
                      src={collection.thumbnailUrl}
                      alt={collection.name}
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-chocolate-900/70 to-transparent flex items-end p-4">
                      <div className="text-white">
                        <h3 className="font-display font-bold text-xl mb-1">{collection.name}</h3>
                        <p className="text-cream-100 text-sm">{collection.modelCount} models</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4">
                    <p className="text-chocolate-600 mb-4">{collection.description}</p>
                    <div className="grid grid-cols-4 gap-2">
                      {collection.models.map((model, index) => (
                        <div key={model.id} className="relative aspect-square rounded-lg overflow-hidden">
                          <img
                            src={model.thumbnailUrl}
                            alt={model.name}
                            className="w-full h-full object-cover"
                          />
                          {index === 3 && collection.modelCount > 4 && (
                            <div className="absolute inset-0 bg-chocolate-900/70 flex items-center justify-center">
                              <span className="text-white font-medium">+{collection.modelCount - 4}</span>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="bg-cream-100 rounded-xl p-8 text-center">
            <h3 className="font-display font-semibold text-xl mb-2">No collections found</h3>
            <p className="text-chocolate-600 mb-4">
              Try adjusting your search or create a new collection
            </p>
            <Button
              variant="primary"
              icon={<Plus className="h-5 w-5" />}
            >
              Create Collection
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
};