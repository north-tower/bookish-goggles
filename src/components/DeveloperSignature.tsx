'use client';

import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface DeveloperSignatureProps {
  className?: string;
  variant?: 'minimal' | 'detailed' | 'badge';
  showGitHub?: boolean;
  showPortfolio?: boolean;
  portfolioUrl?: string;
}

export default function DeveloperSignature({ 
  className = '',
  variant = 'minimal',
  showGitHub = true,
  showPortfolio = false,
  portfolioUrl = 'https://github.com/north-tower'
}: DeveloperSignatureProps) {
  const handleClick = () => {
    window.open(portfolioUrl, '_blank', 'noopener,noreferrer');
  };

  if (variant === 'minimal') {
    return (
      <div 
        className={`flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer group ${className}`}
        onClick={handleClick}
        title="Developed by north-tower"
      >
        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full group-hover:scale-110 transition-transform"></div>
        <span>north-tower</span>
        {showGitHub && <Github className="w-3 h-3" />}
      </div>
    );
  }

  if (variant === 'badge') {
    return (
      <div 
        className={`inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-full text-xs font-medium text-blue-700 hover:from-blue-100 hover:to-purple-100 transition-all cursor-pointer group ${className}`}
        onClick={handleClick}
        title="Developed by north-tower"
      >
        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full group-hover:scale-110 transition-transform"></div>
        <span>Developed by north-tower</span>
        <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </div>
    );
  }

  if (variant === 'detailed') {
    return (
      <div className={`flex items-center gap-3 text-sm ${className}`}>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          <span className="font-medium">Developed by north-tower</span>
        </div>
        {showGitHub && (
          <a
            href="https://github.com/north-tower"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>
        )}
        {showPortfolio && (
          <a
            href={portfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Portfolio</span>
          </a>
        )}
      </div>
    );
  }

  return null;
}
