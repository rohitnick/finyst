import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface AnimatedTextProps {
  pretext: string;  // Static text part
  words: string[]; // List of words to animate
  posttext: string;  // Static text part
  colors: string[]; // List of colors for each word
  interval?: number; // Optional interval duration (default is 1500ms)
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ pretext, words, posttext, colors, interval = 1500 }) => {
  const [index, setIndex] = useState(0);
  const intervalIdRef = useRef<NodeJS.Timeout | null>(null);

  // Use effect to change index periodically based on the interval
  useEffect(() => {
    // Set interval only once when component mounts
    intervalIdRef.current = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);

    // Clear interval when component unmounts
    return () => {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
      }
    };
  }, [words.length, interval]); // Only trigger effect when words or interval changes

  return (
    <>
      <h1 className="text-4xl md:text-5xl font-semibold mb-2 md:mb-3 w-full overflow-hidden">
        <div>
          {/* Static part of the text */}
          <span className="p-2 rounded-md inline-block">
            {pretext}
          </span>

          {/* Animated part */}
          <div className="inline-block w-[200px]">
            <AnimatePresence mode="wait">
              <motion.span
                key={words[index]} // Unique key for re-mounting animation
                className={`block text-left ${colors[index]}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
                transition={{ duration: 0.5 }}
              >
                {words[index]}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>
        {/* Static part of the text */}
        <div className="py-2 rounded-md">
          {posttext}
        </div>
      </h1>
    </>
  );
};

export default AnimatedText;
