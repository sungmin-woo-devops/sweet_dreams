import React, { useState } from 'react';
import { Layout } from '../components/layout/Layout';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { TextArea } from '../components/ui/TextArea';
import { Mail, MessageSquare, Phone, MapPin, Clock, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-display font-bold text-4xl md:text-5xl text-chocolate-800 mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-chocolate-600 max-w-2xl mx-auto">
              Have questions about Sweet3D? We're here to help! Reach out to our team
              and we'll get back to you as soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-2xl shadow-soft p-6 md:p-8">
                <h2 className="font-display font-bold text-2xl text-chocolate-800 mb-6">
                  Send Us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <Input
                    label="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                  />

                  <Input
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />

                  <Input
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    required
                  />

                  <TextArea
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help..."
                    required
                  />

                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full"
                    icon={<Send className="h-5 w-5" />}
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-cream-100 rounded-2xl p-6 md:p-8">
                <h2 className="font-display font-bold text-2xl text-chocolate-800 mb-6">
                  Contact Information
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-white p-3 rounded-xl shadow-sm">
                      <Mail className="h-6 w-6 text-primary-500" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-display font-semibold text-chocolate-800 mb-1">
                        Email
                      </h3>
                      <a
                        href="mailto:hello@sweet3d.com"
                        className="text-chocolate-600 hover:text-primary-500 transition-colors"
                      >
                        hello@sweet3d.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-white p-3 rounded-xl shadow-sm">
                      <MessageSquare className="h-6 w-6 text-primary-500" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-display font-semibold text-chocolate-800 mb-1">
                        Live Chat
                      </h3>
                      <p className="text-chocolate-600">
                        Available Monday to Friday, 9am - 5pm PST
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-white p-3 rounded-xl shadow-sm">
                      <Phone className="h-6 w-6 text-primary-500" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-display font-semibold text-chocolate-800 mb-1">
                        Phone
                      </h3>
                      <a
                        href="tel:+1234567890"
                        className="text-chocolate-600 hover:text-primary-500 transition-colors"
                      >
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-chocolate-800 text-white rounded-2xl p-6 md:p-8">
                <h2 className="font-display font-bold text-2xl mb-6">
                  Office Location
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-primary-400 flex-shrink-0" />
                    <div className="ml-4">
                      <h3 className="font-display font-semibold mb-1">
                        Address
                      </h3>
                      <p className="text-cream-200">
                        123 Sweet Street<br />
                        San Francisco, CA 94105<br />
                        United States
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-primary-400 flex-shrink-0" />
                    <div className="ml-4">
                      <h3 className="font-display font-semibold mb-1">
                        Business Hours
                      </h3>
                      <p className="text-cream-200">
                        Monday - Friday: 9:00 AM - 5:00 PM PST<br />
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};