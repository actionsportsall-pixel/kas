import React from 'react';

interface WaveSeparatorProps {
  flipX?: boolean;
  className?: string;
}

export const WaveSeparator: React.FC<WaveSeparatorProps> = ({ flipX = false, className = '' }) => {
  return (
    <div className={`w-full overflow-hidden leading-none pointer-events-none ${className}`}>
      <svg
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        className={`w-full h-6 sm:h-8 text-[#A8C7C2]/20 fill-current ${flipX ? 'scale-x-[-1]' : ''}`}
      >
        <path d="M0,0 C150,40 350,-20 500,25 C650,70 900,10 1200,30 L1200,60 L0,60 Z" />
      </svg>
    </div>
  );
};
