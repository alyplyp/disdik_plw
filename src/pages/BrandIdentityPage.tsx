import React, { useState } from 'react';

interface BrandAsset {
  title: string;
  description: string;
  image: string;
  usageGuidelines: string;
}

const BrandIdentityPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('logo');

  const brandAssets: Record<string, BrandAsset[]> = {
    logo: [
      {
        title: 'Logo Dinas Pendidikan Kota Palu',
        description: 'The main visual representation of our brand',
        image: '/images/logo.jpeg',
        usageGuidelines: 'Use on all official communications. Maintain minimum clear space around the logo.'
      },
      {
        title: 'Lambang Kota Palu',
        description: 'Official city emblem',
        image: '/images/badge.png',
        usageGuidelines: 'Use for official government documents and communications.'
      }
    ],
    tagline: [
      {
        title: 'Main Tagline',
        description: 'Our core brand promise',
        image: 'https://source.unsplash.com/random/400x200?text&sig=3',
        usageGuidelines: 'Use in all major marketing materials. Always pair with logo.'
      }
    ],
    slogan: [
      {
        title: 'Primary Slogan',
        description: 'Our memorable catchphrase',
        image: 'https://source.unsplash.com/random/400x200?text&sig=4',
        usageGuidelines: 'Use in advertising campaigns. Maintain consistent typography.'
      },
      {
        title: 'Secondary Slogan',
        description: 'Supporting brand message',
        image: 'https://source.unsplash.com/random/400x200?text&sig=5',
        usageGuidelines: 'Use for specific product lines or services.'
      }
    ],
  };

  const tabs = [
    { id: 'logo', label: 'Logo' },
    { id: 'tagline', label: 'Tagline' },
    { id: 'slogan', label: 'Slogan' },
  ];

  const sectionInfo = {
    logo: 'Our visual identity represents our brand values and should be used consistently across all materials.',
    tagline: 'Our tagline communicates our core promise and should always be presented clearly.',
    slogan: 'These memorable phrases help reinforce our brand identity in marketing communications.'
  };

  return (
    <div>
      {/* Banner Section */}
      <div className="relative h-[300px] bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl font-bold mb-4">Brand Identity</h1>
          <p className="text-xl">Dinas Pendidikan Kota Palu</p>
        </div>
      </div>

      {/* Brand Assets Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          {/* Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-lg bg-gray-100 p-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`px-6 py-3 rounded-lg text-sm font-medium transition ${
                    activeTab === tab.id
                      ? 'bg-white shadow-md text-blue-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* About Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">About {tabs.find(t => t.id === activeTab)?.label}</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto text-center">
              {sectionInfo[activeTab as keyof typeof sectionInfo]}
            </p>
          </div>

          {/* Brand Asset Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {brandAssets[activeTab].map((asset, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
              >
                <div className="h-[300px] overflow-hidden flex items-center justify-center bg-gray-100">
                  <img
                    src={asset.image}
                    alt={asset.title}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{asset.title}</h3>
                  <p className="text-blue-600 font-semibold mb-1">{asset.description}</p>
                  <p className="text-gray-600 mb-4">{asset.usageGuidelines}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandIdentityPage;
