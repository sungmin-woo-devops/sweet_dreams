import React, { useState } from 'react';
import { Layout } from '../components/layout/Layout';
import { Button } from '../components/ui/Button';
import { Check } from 'lucide-react';

const PricingTier: React.FC<{
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
}> = ({ name, price, description, features, isPopular = false, buttonText }) => {
  return (
    <div className={`card p-6 flex flex-col h-full relative ${isPopular ? 'border-2 border-primary-500' : ''}`}>
      {isPopular && (
        <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/3">
          <div className="bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            POPULAR
          </div>
        </div>
      )}
      
      <div className="mb-6">
        <h3 className="font-display font-bold text-xl mb-2 text-chocolate-800">{name}</h3>
        <div className="mb-2">
          <span className="font-display font-bold text-3xl">{price}</span>
          {price !== 'Free' && <span className="text-chocolate-500">/month</span>}
        </div>
        <p className="text-chocolate-600">{description}</p>
      </div>
      
      <div className="flex-1">
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-chocolate-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <Button
        variant={isPopular ? 'primary' : 'outline'}
        className="w-full mt-auto"
      >
        {buttonText}
      </Button>
    </div>
  );
};

export const Pricing: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="font-display font-bold text-4xl md:text-5xl text-chocolate-800 mb-4">
            Choose Your Plan
          </h1>
          <p className="text-lg text-chocolate-600 max-w-3xl mx-auto">
            Select the perfect plan for your needs, from individual creators to large teams.
            All plans include access to our 3D model generator and viewer.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PricingTier
            name="Starter"
            price="Free"
            description="Perfect for beginners and hobbyists"
            features={[
              "5 model generations per month",
              "Basic export options",
              "Standard resolution models",
              "Community support",
              "Limited model library access"
            ]}
            buttonText="Get Started Free"
          />
          
          <PricingTier
            name="Creator"
            price="$19"
            description="Ideal for indie game developers"
            isPopular={true}
            features={[
              "50 model generations per month",
              "Advanced export options (all formats)",
              "High-resolution models",
              "Priority support",
              "Full model library access",
              "Model customization tools",
              "Commercial license"
            ]}
            buttonText="Start Free Trial"
          />
          
          <PricingTier
            name="Studio"
            price="$49"
            description="For professional studios and teams"
            features={[
              "Unlimited model generations",
              "All export options + source files",
              "Ultra-high resolution models",
              "Dedicated support manager",
              "Full model library access",
              "Advanced customization tools",
              "Extended commercial license",
              "API access for integrations",
              "Team collaboration features"
            ]}
            buttonText="Contact Sales"
          />
        </div>
        
        <div className="mt-16 bg-cream-100 rounded-2xl p-8 max-w-4xl mx-auto">
          <h2 className="font-display font-bold text-2xl text-chocolate-800 mb-4 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <FAQ 
              question="What formats can I export 3D models in?"
              answer="You can export models in GLB/GLTF, FBX, OBJ, and USDZ formats. Premium plans also include source file access for further customization."
            />
            
            <FAQ 
              question="Can I use the 3D models commercially?"
              answer="Yes, all Creator and Studio plan models include a commercial license that allows use in games, films, and other commercial projects."
            />
            
            <FAQ 
              question="How accurate are the 3D food models?"
              answer="Our AI generates highly detailed models that capture the essence of the described food. The models are stylistically accurate, though perfect photorealism may require some manual adjustments."
            />
            
            <FAQ 
              question="Can I modify the generated models?"
              answer="Yes, all models can be customized using our online editor. Premium plans allow more advanced modifications and downloads of editable source files."
            />
            
            <FAQ 
              question="Are the models optimized for game engines?"
              answer="Yes, all models are automatically optimized for real-time rendering in engines like Unity and Unreal Engine, with appropriate polygon counts and textures."
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

const FAQ: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-cream-200 pb-4">
      <button 
        className="w-full text-left flex justify-between items-center py-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="font-display font-semibold text-chocolate-800">{question}</h3>
        <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>
      {isOpen && (
        <div className="pt-2 pb-2 text-chocolate-600">
          {answer}
        </div>
      )}
    </div>
  );
};