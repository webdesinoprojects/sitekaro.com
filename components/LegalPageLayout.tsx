import React from 'react';

interface LegalPageLayoutProps {
  title: string;
  lastUpdated?: string;
  children: React.ReactNode;
}

const LegalPageLayout: React.FC<LegalPageLayoutProps> = ({ title, lastUpdated, children }) => {
  return (
    <div className="min-h-screen bg-white">
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-[#ff4b11] mb-4">{title}</h1>
          {lastUpdated && (
            <p className="text-gray-600 mb-8">Effective Date: {lastUpdated}</p>
          )}
          <div className="prose prose-lg max-w-none prose-headings:text-[#ff4b11] prose-a:text-[#ff4b11]">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};

export default LegalPageLayout;
