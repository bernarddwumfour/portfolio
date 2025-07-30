// components/TypingAnimation.tsx
'use client';

import { TypeAnimation } from 'react-type-animation';

interface TypingAnimationProps {
  id: string;
  sequence: Array<string | number>;
  speed?: number;
  deletionSpeed?: number;
  style?: React.CSSProperties;
  className?: string;
  wrapper?: string;
}

export default function TypingAnimation({
  id,
  sequence,
  speed = 40,
  deletionSpeed = 30,
  style,
  className,
  wrapper = 'span'
}: TypingAnimationProps) {
  return (
    <TypeAnimation
      key={id} // Unique key for each instance
      sequence={sequence}
      speed={speed}
      deletionSpeed={deletionSpeed}
      style={style}
      className={className}
      wrapper={wrapper}
      repeat={Infinity}
    />
  );
}