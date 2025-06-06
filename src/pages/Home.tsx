import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Button } from '../components/ui/Button';
import { ModelViewer } from '../components/3d/ModelViewer';
import { Link } from 'react-router-dom';
import { ArrowRight, Wand2, Cuboid as Cube, DownloadCloud, SlidersHorizontal, Shield, Heart, Zap, Palette, Upload, Share2, Star, TrendingUp, Users, Clock } from 'lucide-react';
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

  const stats = [
    { icon: <Users className="h-6 w-6" />, value: '50K+', label: 'Active Creators', color: 'text-primary-500' },
    { icon: <Cube className="h-6 w-6" />, value: '2M+', label: 'Models Generated', color: 'text-accent-500' },
    { icon: <DownloadCloud className="h-6 w-6" />, value: '500K+', label: 'Downloads', color: 'text-secondary-500' },
    { icon: <Star className="h-6 w-6" />, value: '4.9', label: 'User Rating', color: 'text-warning-500' },
  ];

  const features = [
    {
      icon: <Wand2 className="h-8 w-8 text-primary-500" />,
      title: "AI-Powered Generation",
      description: "Transform food descriptions into detailed 3D models with our advanced AI generation engine.",
      gradient: "from-primary-500 to-primary-600"
    },
    {
      icon: <Zap className="h-8 w-8 text-accent-500" />,
      title: "Lightning Fast",
      description: "Generate high-quality 3D models in under 30 seconds with our optimized processing pipeline.",
      gradient: "from-accent-500 to-accent-600"
    },
    {
      icon: <Palette className="h-8 w-8 text-secondary-500" />,
      title: "Style Transfer",
      description: "Apply different artistic styles to your models - from photorealistic to cartoon aesthetics.",
      gradient: "from-secondary-500 to-secondary-600"
    },
    {
      icon: <Upload className="h-8 w-8 text-success-500" />,
      title: "Batch Processing",
      description: "Upload multiple references and generate entire food collections in one go.",
      gradient: "from-success-500 to-success-600"
    },
    {
      icon: <Share2 className="h-8 w-8 text-warning-500" />,
      title: "Team Collaboration",
      description: "Share models, collections, and collaborate with your team in real-time.",
      gradient: "from-warning-500 to-warning-600"
    },
    {
      icon: <Shield className="h-8 w-8 text-error-500" />,
      title: "Commercial License",
      description: "All models include licenses for commercial use in games, films, and other projects.",
      gradient: "from-error-500 to-error-600"
    }
  ];
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-cream-50 to-accent-50 pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary-200 to-accent-200 rounded-full opacity-20 animate-float"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-secondary-200 to-primary-200 rounded-full opacity-20 animate-spin-slow"></div>
        </div>

        <div className="container mx-auto px-4 relative">
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
              <motion.div
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-100 to-accent-100 rounded-full mb-6 border border-primary-200"
                variants={fadeIn}
              >
                <TrendingUp className="h-4 w-4 text-primary-600 mr-2" />
                <span className="text-sm font-medium text-primary-700">Now with AI Style Transfer!</span>
              </motion.div>

              <motion.h1 
                className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-chocolate-800 mb-4 leading-tight"
                variants={fadeIn}
              >
                Transform Delicious Foods Into 
                <span className="gradient-text"> Amazing 3D Models</span>
              </motion.h1>
              
              <motion.p 
                className="text-lg md:text-xl text-chocolate-600 mb-8"
                variants={fadeIn}
              >
                Create stunning, game-ready 3D models of your favorite sweets and dishes in seconds. 
                Perfect for games, movies, and creative projects with our AI-powered platform.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-4 mb-8"
                variants={fadeIn}
              >
                <Link to="/generate">
                  <Button size="lg" variant="primary" icon={<Wand2 />} className="shadow-glow">
                    Start Creating Free
                  </Button>
                </Link>
                <Link to="/explore">
                  <Button size="lg" variant="outline" icon={<ArrowRight />}>
                    Explore Gallery
                  </Button>
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
                variants={fadeIn}
              >
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className={cn("flex items-center justify-center mb-2", stat.color)}>
                      {stat.icon}
                    </div>
                    <div className="font-display font-bold text-2xl text-chocolate-800">{stat.value}</div>
                    <div className="text-sm text-chocolate-600">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2 relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-hover overflow-hidden border border-white/50">
                <ModelViewer 
                  placeholderType="cake" 
                  className="w-full h-[300px] md:h-[400px]"
                />
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-4 py-2 rounded-xl shadow-md transform rotate-[-4deg] z-10">
                <p className="font-display font-bold">AI-Generated</p>
              </div>
              
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-secondary-500 to-secondary-600 text-white px-4 py-2 rounded-xl shadow-md transform rotate-[4deg] z-10">
                <p className="font-display font-bold">Game-Ready</p>
              </div>

              <div className="absolute top-1/2 -right-8 bg-gradient-to-r from-accent-500 to-accent-600 text-white px-3 py-2 rounded-xl shadow-md transform rotate-[8deg] z-10">
                <p className="font-display font-bold text-sm">30s</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display font-bold text-3xl md:text-4xl text-chocolate-800 mb-4">
                Sweet Features, <span className="gradient-text">Delicious Results</span>
              </h2>
              <p className="text-chocolate-600 text-lg max-w-3xl mx-auto">
                Our platform makes it easy to turn food concepts into beautiful 3D models
                with powerful tools for creators and developers.
              </p>
            </motion.div>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {features.map((feature, index) => (
              <FeatureCard 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                gradient={feature.gradient}
              />
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Featured Models Section */}
      <section className="py-16 bg-gradient-to-br from-cream-100 via-white to-primary-50/30 relative">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="font-display font-bold text-2xl md:text-3xl text-chocolate-800 mb-2">
                Trending Food Models
              </h2>
              <p className="text-chocolate-600">Discover what the community is creating</p>
            </div>
            <Link 
              to="/explore"
              className="text-primary-600 font-medium flex items-center hover:text-primary-700 transition-colors group"
            >
              View all 
              <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockModels.slice(0, 4).map((model) => (
              <ModelCard key={model.id} model={model} />
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions Section */}
      <section className="py-16 bg-gradient-to-r from-chocolate-800 via-chocolate-700 to-chocolate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/20 to-accent-900/20"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-cream-100 text-lg mb-8 max-w-2xl mx-auto">
              Choose your path to creating amazing 3D food models
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link to="/generate" className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                <div className="bg-primary-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Wand2 className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-display font-bold text-xl mb-2">Generate from Text</h3>
                <p className="text-cream-200 text-sm">Describe your food and watch AI create it</p>
              </div>
            </Link>

            <Link to="/generate" className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                <div className="bg-accent-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Upload className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-display font-bold text-xl mb-2">Upload Reference</h3>
                <p className="text-cream-200 text-sm">Upload photos to create 3D models</p>
              </div>
            </Link>

            <Link to="/explore" className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                <div className="bg-secondary-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-display font-bold text-xl mb-2">Browse Gallery</h3>
                <p className="text-cream-200 text-sm">Explore thousands of ready-made models</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 via-accent-500 to-secondary-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center mb-6">
              <Clock className="h-8 w-8 mr-3" />
              <span className="text-lg font-medium">Limited Time: Free Pro Trial</span>
            </div>
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">
              Start Creating Your Food Models Today
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of creators who are already using Sweet3D to bring their food concepts to life.
              Get started with our free trial - no credit card required.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/generate">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="px-8 shadow-glow-accent"
                  icon={<Wand2 />}
                >
                  Start Free Trial
                </Button>
              </Link>
              <Link to="/pricing">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="px-8 border-white text-white hover:bg-white hover:text-primary-600"
                >
                  View Pricing
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, gradient }) => {
  return (
    <motion.div 
      className="card p-6 group hover:scale-105 transition-all duration-300"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
      }}
      whileHover={{ y: -5 }}
    >
      <div className={cn("mb-4 w-16 h-16 rounded-2xl bg-gradient-to-br flex items-center justify-center group-hover:scale-110 transition-transform", gradient)}>
        {icon}
      </div>
      <h3 className="font-display font-bold text-xl mb-3 text-chocolate-800">{title}</h3>
      <p className="text-chocolate-600">{description}</p>
    </motion.div>
  );
};