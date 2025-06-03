import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { Users, Target, Rocket, Award, ChefHat, Sparkles } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-chocolate-800 mb-6">
              Transforming Food into Digital Art
            </h1>
            <p className="text-lg md:text-xl text-chocolate-600 mb-8">
              Sweet3D is revolutionizing the way creators bring food to life in digital spaces.
              From game development to advertising, we're making it easier than ever to create
              stunning 3D food models.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/generate">
                <Button variant="primary" size="lg">Start Creating</Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">Contact Us</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-cream-100 rounded-3xl">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display font-bold text-3xl md:text-4xl text-chocolate-800 mb-4">
                Our Mission
              </h2>
              <p className="text-chocolate-600 text-lg">
                We're on a mission to make high-quality 3D food assets accessible to creators worldwide,
                empowering them to build more immersive and appetizing digital experiences.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl">
                <Target className="h-12 w-12 text-primary-500 mb-4" />
                <h3 className="font-display font-bold text-xl mb-2 text-chocolate-800">
                  Vision
                </h3>
                <p className="text-chocolate-600">
                  To become the go-to platform for 3D food model generation, serving creators
                  across gaming, film, advertising, and beyond.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl">
                <Users className="h-12 w-12 text-primary-500 mb-4" />
                <h3 className="font-display font-bold text-xl mb-2 text-chocolate-800">
                  Community
                </h3>
                <p className="text-chocolate-600">
                  Building a vibrant community of creators who share, collaborate, and inspire
                  each other to push the boundaries of digital food representation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-chocolate-800 mb-12 text-center">
              Why Choose Sweet3D?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="h-8 w-8 text-primary-500" />
                </div>
                <h3 className="font-display font-bold text-xl mb-2 text-chocolate-800">
                  Fast Generation
                </h3>
                <p className="text-chocolate-600">
                  Create detailed 3D food models in minutes, not hours, with our AI-powered platform.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary-500" />
                </div>
                <h3 className="font-display font-bold text-xl mb-2 text-chocolate-800">
                  Quality Output
                </h3>
                <p className="text-chocolate-600">
                  Get high-quality, game-ready 3D models optimized for various platforms and engines.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ChefHat className="h-8 w-8 text-primary-500" />
                </div>
                <h3 className="font-display font-bold text-xl mb-2 text-chocolate-800">
                  Food Expertise
                </h3>
                <p className="text-chocolate-600">
                  Specialized in food modeling with attention to texture, color, and appetizing details.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-chocolate-800 text-white rounded-3xl">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
              Meet Our Team
            </h2>
            <p className="text-cream-100 mb-12">
              We're a passionate team of 3D artists, developers, and food enthusiasts working
              together to revolutionize digital food creation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <img
                  src="https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg"
                  alt="Team member"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-display font-bold text-xl mb-1">Sarah Chen</h3>
                <p className="text-cream-200">Founder & CEO</p>
              </div>

              <div>
                <img
                  src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg"
                  alt="Team member"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-display font-bold text-xl mb-1">Mike Rodriguez</h3>
                <p className="text-cream-200">Lead 3D Artist</p>
              </div>

              <div>
                <img
                  src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg"
                  alt="Team member"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-display font-bold text-xl mb-1">Emma Wilson</h3>
                <p className="text-cream-200">Tech Lead</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-12">
              <Sparkles className="h-16 w-16 text-white mx-auto mb-6" />
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
                Ready to Start Creating?
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Join thousands of creators who are already using Sweet3D to bring their food concepts to life.
              </p>
              <Link to="/generate">
                <Button variant="secondary" size="lg">
                  Try Sweet3D Now
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};