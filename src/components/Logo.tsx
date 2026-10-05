import React from 'react';

interface LogoProps {
  variant?: 'dark' | 'light';
  mode?: 'full' | 'mark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  mode = 'full',
  size = 'md',
  className = '',
}) => {
  const isDark = variant === 'dark';

  // Colors matching the official Indahiro logo
  const goldGradientId = `gold-grad-${variant}-${Math.random().toString(36).substr(2, 9)}`;
  const panColor = isDark ? '#FFFFFF' : '#111215';
  const dotColor = isDark ? '#FFFFFF' : '#111215';
  const indahiroTextColor = isDark ? '#FFFFFF' : '#111215';
  const fellowshipColor = '#DCAE38';

  const sizeClasses = {
    sm: mode === 'full' ? 'h-8' : 'h-8 w-8',
    md: mode === 'full' ? 'h-11' : 'h-10 w-10',
    lg: mode === 'full' ? 'h-16' : 'h-16 w-16',
    xl: mode === 'full' ? 'h-24' : 'h-24 w-24',
  }[size];

  if (mode === 'mark') {
    return (
      <svg
        viewBox="0 0 300 320"
        className={`${sizeClasses} ${className}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Indahiro Fellowship Emblem"
      >
        <defs>
          <linearGradient id={goldGradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F5D268" />
            <stop offset="25%" stopColor="#E2B742" />
            <stop offset="60%" stopColor="#C99827" />
            <stop offset="100%" stopColor="#E7C054" />
          </linearGradient>
          <filter id="subtle-gold-glow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="1" stdDeviation="1" floodColor="#000000" floodOpacity="0.15" />
          </filter>
        </defs>

        {/* The Dot of the 'i' */}
        <circle cx="152" cy="46" r="14" fill={dotColor} />

        {/* Monogram Ligature 'i' and 'F' in Metallic Gold */}
        <g filter="url(#subtle-gold-glow)">
          {/* Angled 'i' stem and 'F' main spine structure */}
          <path
            d="M 144 68 L 161 68 L 140 236 L 123 236 Z"
            fill={`url(#${goldGradientId})`}
          />
          {/* 'F' right vertical / upright stem */}
          <path
            d="M 166 68 L 222 68 L 222 92 L 188 92 L 170 236 L 220 236 L 220 260 L 110 260 L 144 68 Z"
            fill={`url(#${goldGradientId})`}
          />
        </g>

        {/* Left Scales of Justice */}
        <g stroke={panColor} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
          {/* Support arm curving left */}
          <path d="M 148 130 C 132 120 114 120 98 135" />
          {/* Scale hanging strings */}
          <path d="M 98 135 L 85 168" strokeWidth="2.5" />
          <path d="M 98 135 L 112 168" strokeWidth="2.5" />
          {/* Scale pan (semicircle) */}
          <path
            d="M 82 168 Q 98 190 115 168 Z"
            fill={panColor}
            strokeWidth="2"
          />
        </g>

        {/* Right Scales of Justice */}
        <g stroke={panColor} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
          {/* Support arm curving right */}
          <path d="M 180 132 C 196 138 208 136 220 126" />
          {/* Scale hanging strings */}
          <path d="M 220 126 L 207 158" strokeWidth="2.5" />
          <path d="M 220 126 L 233 158" strokeWidth="2.5" />
          {/* Scale pan (semicircle) */}
          <path
            d="M 204 158 Q 220 180 236 158 Z"
            fill={panColor}
            strokeWidth="2"
          />
        </g>
      </svg>
    );
  }

  // Full Lockup: Emblem + INDAHIRO + Fellowship
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Icon Emblem */}
      <svg
        viewBox="0 0 300 320"
        className={sizeClasses}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={goldGradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F7D875" />
            <stop offset="30%" stopColor="#E2B742" />
            <stop offset="70%" stopColor="#CA9928" />
            <stop offset="100%" stopColor="#E8C359" />
          </linearGradient>
        </defs>

        {/* Dot of the 'i' */}
        <circle cx="152" cy="46" r="14" fill={dotColor} />

        {/* 'iF' Interlocking Structure */}
        <path
          d="M 144 68 L 161 68 L 140 236 L 123 236 Z"
          fill={`url(#${goldGradientId})`}
        />
        <path
          d="M 166 68 L 222 68 L 222 92 L 188 92 L 170 236 L 220 236 L 220 260 L 110 260 L 144 68 Z"
          fill={`url(#${goldGradientId})`}
        />

        {/* Left Scales */}
        <g stroke={panColor} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M 148 130 C 132 120 114 120 98 135" />
          <path d="M 98 135 L 85 168" strokeWidth="2.5" />
          <path d="M 98 135 L 112 168" strokeWidth="2.5" />
          <path d="M 82 168 Q 98 190 115 168 Z" fill={panColor} strokeWidth="2" />
        </g>

        {/* Right Scales */}
        <g stroke={panColor} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M 180 132 C 196 138 208 136 220 126" />
          <path d="M 220 126 L 207 158" strokeWidth="2.5" />
          <path d="M 220 126 L 233 158" strokeWidth="2.5" />
          <path d="M 204 158 Q 220 180 236 158 Z" fill={panColor} strokeWidth="2" />
        </g>
      </svg>

      {/* Typography Lockup */}
      <div className="flex flex-col justify-center leading-none">
        <span
          className="font-sans font-black tracking-[0.14em] uppercase text-lg sm:text-xl md:text-2xl"
          style={{ color: indahiroTextColor, fontWeight: 900 }}
        >
          INDAHIRO
        </span>
        <span
          className="font-sans tracking-[0.22em] text-[11px] sm:text-xs md:text-sm font-semibold mt-0.5"
          style={{ color: fellowshipColor }}
        >
          Fellowship
        </span>
      </div>
    </div>
  );
};
