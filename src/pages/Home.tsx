import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Button } from '../components/ui/Button';
import { ModelViewer } from '../components/3d/ModelViewer';
import { Link } from 'react-router-dom';
import { ArrowRight, Wand2, Cuboid as Cube, DownloadCloud, SlidersHorizontal, Shield, Heart } from 'lucide-react';
import { mockModels } from '../data/mockModels';
import { ModelCard } from '../components/ui/Card';
import { motion } from 'framer-motion';

export const Home: React.FC = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-cream-50 to-accent-50 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <motion.div 
              className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.2 }
                }
              }}
            >
              <motion.h1 
                className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-chocolate-800 mb-4 leading-tight"
                variants={fadeIn}
              >
                Transform Delicious Foods Into Amazing 3D Models
              </motion.h1>
              
              <motion.p 
                className="text-lg md:text-xl text-chocolate-600 mb-8"
                variants={fadeIn}
              >
                Create stunning, game-ready 3D models of your favorite sweets and dishes. 
                Perfect for games, movies, and creative projects.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-4"
                variants={fadeIn}
              >
                <Link to="/generate">
                  <Button size="lg" variant="primary" icon={<Wand2 />}>Start Creating</Button>
                </Link>
                <Link to="/explore">
                  <Button size="lg" variant="outline">Explore Models</Button>
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2 relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="bg-white p-6 rounded-3xl shadow-soft overflow-hidden">
                <ModelViewer 
                  placeholderType="cake" 
                  className="w-full h-[300px] md:h-[400px]"
                />
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-primary-500 text-white px-4 py-2 rounded-xl shadow-md transform rotate-[-4deg] z-10">
                <p className="font-display font-bold">AI-Generated</p>
              </div>
              
              <div className="absolute -top-4 -right-4 bg-accent-500 text-chocolate-800 px-4 py-2 rounded-xl shadow-md transform rotate-[4deg] z-10">
                <p className="font-display font-bold">Game-Ready</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-chocolate-800 mb-4">
              Sweet Features, Delicious Results
            </h2>
            <p className="text-chocolate-600 text-lg max-w-3xl mx-auto">
              Our platform makes it easy to turn food concepts into beautiful 3D models
              with powerful tools for creators and developers.
            </p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <FeatureCard 
              icon={<Wand2 className="h-8 w-8 text-primary-500" />}
              title="AI-Powered Generation"
              description="Transform food descriptions into detailed 3D models with our advanced AI generation engine."
            />
            
            <FeatureCard 
              icon={<Cube className="h-8 w-8 text-primary-500" />}
              title="Real-Time 3D Viewing"
              description="Instantly preview and interact with your 3D food models in our browser-based viewer."
            />
            
            <FeatureCard 
              icon={<DownloadCloud className="h-8 w-8 text-primary-500" />}
              title="Multi-Format Export"
              description="Download your models in formats compatible with Unity, Unreal Engine, and other 3D platforms."
            />
            
            <FeatureCard 
              icon={<SlidersHorizontal className="h-8 w-8 text-primary-500" />}
              title="Customization Tools"
              description="Fine-tune textures, colors, and details to get exactly the food model you need."
            />
            
            <FeatureCard 
              icon={<Shield className="h-8 w-8 text-primary-500" />}
              title="Commercial Licensing"
              description="All models include licenses for commercial use in games, films, and other projects."
            />
            
            <FeatureCard 
              icon={<Heart className="h-8 w-8 text-primary-500" />}
              title="Curated Collections"
              description="Browse themed collections of food models created by our community and professional artists."
            />
          </motion.div>
        </div>
      </section>
      
      {/* Featured Models Section */}
      <section className="py-16 bg-cream-100">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="font-display font-bold text-2xl md:text-3xl text-chocolate-800">
              Trending Food Models
            </h2>
            <Link 
              to="/explore"
              className="text-primary-600 font-medium flex items-center hover:text-primary-700 transition-colors"
            >
              View all <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockModels.slice(0, 4).map((model) => (
              <ModelCard key={model.id} model={model} />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">
            Ready to Create Your Own Food Models?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Start generating beautiful 3D food models today and bring your creative projects to life.
          </p>
          <Link to="/generate">
            <Button 
              size="lg" 
              variant="secondary"
              className="px-8"
            >
              Get Started Now
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <motion.div 
      className="card p-6"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
      }}
    >
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="font-display font-bold text-xl mb-3 text-chocolate-800">{title}</h3>
      <p className="text-chocolate-600">{description}</p>
    </motion.div>
  );
};