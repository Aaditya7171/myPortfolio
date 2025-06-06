import React from 'react';

interface WavingHandProps {
  className?: string;
  style?: React.CSSProperties;
}

const WavingHand: React.FC<WavingHandProps> = ({ className = '', style = {} }) => {
  return (
    <span 
      className={`inline-block ${className}`}
      style={{
        animation: 'wave-animation 2.5s ease-in-out infinite',
        transformOrigin: '70% 70%',
        display: 'inline-block',
        ...style
      }}
    >
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          filter: 'drop-shadow(0 0 6px rgba(168, 85, 247, 0.6)) drop-shadow(0 0 12px rgba(147, 51, 234, 0.4))',
        }}
      >
        {/* Hand Palm */}
        <ellipse
          cx="50"
          cy="65"
          rx="18"
          ry="25"
          fill="url(#purpleGradient)"
        />
        
        {/* Thumb */}
        <ellipse
          cx="32"
          cy="55"
          rx="8"
          ry="15"
          fill="url(#purpleGradient)"
          transform="rotate(-30 32 55)"
        />
        
        {/* Index Finger */}
        <ellipse
          cx="42"
          cy="35"
          rx="6"
          ry="18"
          fill="url(#purpleGradient)"
          transform="rotate(-10 42 35)"
        />
        
        {/* Middle Finger */}
        <ellipse
          cx="50"
          cy="30"
          rx="6"
          ry="20"
          fill="url(#purpleGradient)"
        />
        
        {/* Ring Finger */}
        <ellipse
          cx="58"
          cy="35"
          rx="6"
          ry="18"
          fill="url(#purpleGradient)"
          transform="rotate(10 58 35)"
        />
        
        {/* Pinky */}
        <ellipse
          cx="65"
          cy="42"
          rx="5"
          ry="15"
          fill="url(#purpleGradient)"
          transform="rotate(20 65 42)"
        />
        
        {/* Gradient Definition */}
        <defs>
          <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="50%" stopColor="#9333ea" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
        </defs>
      </svg>
    </span>
  );
};

export default WavingHand;
