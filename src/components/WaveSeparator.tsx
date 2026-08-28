import React from 'react';

interface WaveSeparatorProps {
  className?: string;
  flipX?: boolean;
  flipY?: boolean;
  bgColor?: string; // background of container if needed
}

export const WaveSeparator: React.FC<WaveSeparatorProps> = ({
  className = '',
  flipX = false,
  flipY = false,
  bgColor = 'transparent',
}) => {
  return (
    <div
      className={`w-full overflow-hidden leading-none select-none pointer-events-none ${className}`}
      style={{ backgroundColor: bgColor }}
      aria-hidden="true"
    >
      <div
        className="relative w-full overflow-hidden leading-none"
        style={{
          transform: `${flipX ? 'scaleX(-1)' : ''} ${flipY ? 'scaleY(-1)' : ''}`.trim() || undefined,
        }}
      >
        {/* Back Wave - Soft Sage / Aqua */}
        <svg
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          className="relative block w-full h-4 sm:h-7 text-[#A8C7C2]/60 fill-current"
        >
          <path d="M0,25 C280,55 520,5 780,30 C1040,55 1280,10 1440,28 L1440,60 L0,60 Z" />
        </svg>

        {/* Front Wave - Ocean Teal Accent */}
        <svg
          viewBox="0 0 1440 50"
          preserveAspectRatio="none"
          className="relative block w-full h-3.5 sm:h-6 text-[#73999C] fill-current -mt-2.5 sm:-mt-4"
        >
          <path d="M0,15 C340,45 700,5 1060,25 C1240,38 1360,12 1440,20 L1440,50 L0,50 Z" />
        </svg>

        {/* Fine Terracotta Accent Line at the very bottom edge */}
        <div className="w-full h-[2px] bg-[#C96F4B]/60" />
      </div>
    </div>
  );
};

export default WaveSeparator;
