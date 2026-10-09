import React, { useEffect, useState } from 'react';

interface FlipWordsProps {
  words: string[];
  duration?: number;
  className?: string;
}

export const FlipWords: React.FC<FlipWordsProps> = ({
  words,
  duration = 2600,
  className = '',
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setIsAnimating(false);
      }, 400);
    }, duration);

    return () => clearInterval(interval);
  }, [words, duration]);

  const currentWord = words[currentWordIndex];

  return (
    <span
      className={`inline-block relative font-bold text-[#121214] underline decoration-[#CCFF00] decoration-wavy decoration-2 sm:decoration-4 underline-offset-8 transition-all duration-300 ${
        isAnimating
          ? 'opacity-0 -translate-y-2 scale-95 blur-[2px]'
          : 'opacity-100 translate-y-0 scale-100 blur-0'
      } ${className}`}
    >
      {currentWord}
    </span>
  );
};
