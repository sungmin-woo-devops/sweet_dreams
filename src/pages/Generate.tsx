import React, { useState } from 'react';
import { Layout } from '../components/layout/Layout';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { TextArea } from '../components/ui/TextArea';
import { ModelViewer } from '../components/3d/ModelViewer';
import { Wand2, Sparkles, Image as ImageIcon, UploadCloud, Camera, CheckCircle2, ChevronRight } from 'lucide-react';

const placeholderTypes = ['cupcake', 'donut', 'cake', 'generic'] as const;
type PlaceholderType = typeof placeholderTypes[number];

export const Generate: React.FC = () => {
  const [foodName, setFoodName] = useState('');
  const [description, setDescription] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isGenerated, setIsGenerated] = useState(false);
  const [modelType, setModelType] = useState<PlaceholderType>('cupcake');
  
  const handleGenerate = () => {
    if (!foodName) return;
    
    setIsGenerating(true);
    
    // Simulate generation process
    setTimeout(() => {
      setIsGenerating(false);
      setIsGenerated(true);
      
      // Set model type based on input for demo purposes
      if (foodName.toLowerCase().includes('cake')) {
        setModelType('cake');
      } else if (foodName.toLowerCase().includes('donut')) {
        setModelType('donut');
      } else if (foodName.toLowerCase().includes('cupcake')) {
        setModelType('cupcake');
      } else {
        setModelType('generic');
      }
    }, 3000);
  };
  
  const handleReset = () => {
    setFoodName('');
    setDescription('');
    setIsGenerated(false);
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-display font-bold text-3xl md:text-4xl text-chocolate-800 mb-2">
            Generate 3D Food Models
          </h1>
          <p className="text-chocolate-600 mb-8">
            Create stunning 3D models from food descriptions or images. Perfect for games, visualizations, and creative projects.
          </p>
          
          <div className="bg-white rounded-2xl shadow-soft overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Input Section */}
              <div className="p-6 md:p-8 border-r border-cream-200">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-display font-bold text-xl mb-4 text-chocolate-800 flex items-center">
                      <Wand2 className="mr-2 h-5 w-5 text-primary-500" />
                      Create Your Food Model
                    </h3>
                    
                    <Input
                      label="Food Name"
                      placeholder="e.g., Chocolate Cupcake, Strawberry Cake"
                      value={foodName}
                      onChange={(e) => setFoodName(e.target.value)}
                      className="mb-4"
                    />
                    
                    <TextArea
                      label="Description (optional)"
                      placeholder="Describe the appearance, colors, textures, or any specific details..."
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                  
                  <div className="border-t border-cream-200 pt-6">
                    <h3 className="font-display font-bold text-xl mb-4 text-chocolate-800 flex items-center">
                      <ImageIcon className="mr-2 h-5 w-5 text-primary-500" />
                      Reference Images (optional)
                    </h3>
                    
                    <div className="border-2 border-dashed border-cream-300 rounded-xl p-8 text-center">
                      <UploadCloud className="h-10 w-10 text-chocolate-400 mx-auto mb-3" />
                      <p className="text-chocolate-600 mb-2">
                        Drag and drop images here or click to upload
                      </p>
                      <p className="text-chocolate-500 text-sm mb-4">
                        PNG, JPG or WEBP (max. 5MB)
                      </p>
                      
                      <div className="flex justify-center gap-3">
                        <Button variant="outline" size="sm" icon={<UploadCloud className="h-4 w-4" />}>
                          Upload
                        </Button>
                        <Button variant="ghost" size="sm" icon={<Camera className="h-4 w-4" />}>
                          Take Photo
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t border-cream-200 pt-6 flex justify-between items-center">
                    {isGenerated && (
                      <Button 
                        variant="outline"
                        onClick={handleReset}
                      >
                        Reset
                      </Button>
                    )}
                    <Button 
                      className="ml-auto"
                      disabled={!foodName || isGenerating}
                      isLoading={isGenerating}
                      icon={<Sparkles className="h-4 w-4" />}
                      onClick={handleGenerate}
                    >
                      {isGenerating ? 'Generating...' : 'Generate Model'}
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Preview Section */}
              <div className="p-6 md:p-8 bg-cream-50">
                <h3 className="font-display font-bold text-xl mb-4 text-chocolate-800">
                  Preview
                </h3>
                
                <div className="bg-white rounded-xl p-4 shadow-sm mb-6">
                  <ModelViewer 
                    placeholderType={modelType}
                    className="w-full h-[300px]"
                  />
                </div>
                
                {isGenerated && (
                  <div className="space-y-4">
                    <div className="bg-green-50 border border-green-100 rounded-xl p-4 flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <p className="text-green-800 text-sm">
                        Your 3D model of "{foodName}" has been successfully generated!
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <Button variant="primary" icon={<DownloadButton className="h-4 w-4" />}>
                        Download
                      </Button>
                      <Button variant="outline" icon={<CustomizeButton className="h-4 w-4" />}>
                        Customize
                      </Button>
                    </div>
                    
                    <h4 className="font-display font-semibold text-chocolate-800 pt-2">
                      Export Options
                    </h4>
                    
                    <div className="grid grid-cols-2 gap-3">
                      {['Unity', 'Unreal', 'GLTF', 'FBX'].map(format => (
                        <Button 
                          key={format}
                          variant="ghost"
                          size="sm"
                          className="justify-between"
                        >
                          {format} <ChevronRight className="h-4 w-4" />
                        </Button>
                      ))}
                    </div>
                  </div>
                )}
                
                {!isGenerated && !isGenerating && (
                  <div className="text-center text-chocolate-500 p-4">
                    {foodName ? (
                      <p>Click "Generate Model\" to create your 3D food model</p>
                    ) : (
                      <p>Enter a food name to get started</p>
                    )}
                  </div>
                )}
                
                {isGenerating && (
                  <div className="text-center text-chocolate-500 p-4">
                    <p className="mb-2">Creating your delicious 3D model...</p>
                    <div className="w-full h-2 bg-cream-200 rounded-full overflow-hidden">
                      <div className="h-full bg-primary-500 animate-pulse rounded-full"></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

// Simple icon components for the buttons
const DownloadButton = (props: React.SVGProps<SVGSVGElement>) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const CustomizeButton = (props: React.SVGProps<SVGSVGElement>) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);