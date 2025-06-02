import React, { useState } from 'react';
import { Layout } from '../components/layout/Layout';
import { ModelViewer } from '../components/3d/ModelViewer';
import { Button } from '../components/ui/Button';
import { useParams, Link } from 'react-router-dom';
import { mockModels } from '../data/mockModels';
import { Heart, Download, Share2, Flag, Tag, Clock, YoutubeIcon as CubeIcon } from 'lucide-react';
import { ExportOptions } from '../types/model';

export const ModelDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [liked, setLiked] = useState(false);
  const [selectedFormat, setSelectedFormat] = useState<ExportOptions['format']>('glb');
  
  const model = mockModels.find(m => m.id === id);
  
  if (!model) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="font-display text-2xl font-bold text-chocolate-800 mb-4">Model Not Found</h2>
          <p className="mb-8 text-chocolate-600">The model you're looking for doesn't exist or has been removed.</p>
          <Link to="/explore">
            <Button variant="primary">Browse Models</Button>
          </Link>
        </div>
      </Layout>
    );
  }
  
  const relatedModels = mockModels
    .filter(m => m.id !== model.id && (
      m.category === model.category || 
      m.tags.some(tag => model.tags.includes(tag))
    ))
    .slice(0, 3);
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6 flex items-center text-chocolate-500">
          <Link to="/" className="hover:text-primary-500 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/explore" className="hover:text-primary-500 transition-colors">Explore</Link>
          <span className="mx-2">/</span>
          <Link to={`/category/${model.category.toLowerCase()}`} className="hover:text-primary-500 transition-colors">
            {model.category}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-chocolate-800">{model.name}</span>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* 3D Model Viewer */}
          <div className="bg-white rounded-2xl shadow-soft overflow-hidden">
            <div className="bg-cream-50 p-2">
              <ModelViewer 
                placeholderType={model.name.toLowerCase().includes('cake') ? 'cake' : 
                                model.name.toLowerCase().includes('donut') ? 'donut' : 'cupcake'}
                className="w-full h-[400px]"
              />
            </div>
            
            <div className="p-4 flex justify-between">
              <div className="flex space-x-2">
                <Button 
                  variant={liked ? 'primary' : 'outline'} 
                  size="sm" 
                  icon={<Heart className={liked ? 'fill-white' : ''} />}
                  onClick={() => setLiked(!liked)}
                >
                  {liked ? 'Liked' : 'Like'}
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  icon={<Share2 />}
                >
                  Share
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm"
                  icon={<Flag />}
                >
                  Report
                </Button>
              </div>
              
              <Link to="/model/customize/1">
                <Button variant="secondary" size="sm">
                  Customize
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Model Info */}
          <div>
            <h1 className="font-display font-bold text-3xl text-chocolate-800 mb-2">
              {model.name}
            </h1>
            
            <div className="flex items-center mb-4">
              <Link to={`/creator/${model.creator.id}`} className="flex items-center mr-4">
                <img 
                  src={model.creator.avatarUrl} 
                  alt={model.creator.name}
                  className="h-8 w-8 rounded-full mr-2 object-cover"
                />
                <span className="font-medium text-chocolate-700">{model.creator.name}</span>
              </Link>
              
              <div className="flex items-center text-chocolate-500">
                <Clock className="h-4 w-4 mr-1" />
                <span className="text-sm">
                  {new Date(model.createdAt).toLocaleDateString()}
                </span>
              </div>
            </div>
            
            <div className="bg-cream-100 rounded-xl p-4 mb-6">
              <div className="text-chocolate-700">
                <p className="mb-4">
                  A beautifully detailed 3D model of a {model.name.toLowerCase()}, perfect for games, visualizations, and creative projects.
                </p>
                <p>
                  This model features realistic textures, proper scaling, and is optimized for real-time rendering engines.
                </p>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="font-display font-semibold text-lg mb-3 text-chocolate-800">
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {model.tags.map(tag => (
                  <Link 
                    key={tag} 
                    to={`/explore?tag=${tag}`}
                    className="bg-cream-100 px-3 py-1 rounded-full text-sm text-chocolate-700 hover:bg-cream-200 transition-colors flex items-center"
                  >
                    <Tag className="h-3 w-3 mr-1" /> {tag}
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="border-t border-cream-200 pt-6 mb-6">
              <h3 className="font-display font-semibold text-lg mb-4 text-chocolate-800 flex items-center">
                <Download className="h-5 w-5 mr-2 text-primary-500" />
                Download Model
              </h3>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-chocolate-700 mb-2">
                  Choose Format
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {(['glb', 'fbx', 'obj', 'usdz'] as ExportOptions['format'][]).map(format => (
                    <button
                      key={format}
                      className={`px-4 py-2 rounded-lg border-2 ${
                        selectedFormat === format 
                          ? 'border-primary-500 bg-primary-50 text-primary-700' 
                          : 'border-cream-200 hover:border-cream-300'
                      }`}
                      onClick={() => setSelectedFormat(format)}
                    >
                      <div className="flex items-center justify-center">
                        <CubeIcon className="h-4 w-4 mr-1" />
                        <span className="uppercase">{format}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button variant="primary" icon={<Download />} className="w-full">
                  Download for Unity
                </Button>
                <Button variant="primary" icon={<Download />} className="w-full">
                  Download for Unreal
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Models */}
        {relatedModels.length > 0 && (
          <div>
            <h2 className="font-display font-bold text-2xl text-chocolate-800 mb-6">
              Similar Models You Might Like
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedModels.map(model => (
                <Link key={model.id} to={`/model/${model.id}`}>
                  <ModelCard model={model} />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};