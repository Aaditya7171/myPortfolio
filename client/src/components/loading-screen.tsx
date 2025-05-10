import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
  profileImage: string;
}

export default function LoadingScreen({ onLoadingComplete, profileImage }: LoadingScreenProps) {
  const [loadingText, setLoadingText] = useState("");
  const [showLoader, setShowLoader] = useState(true);
  const loadingString = "LOADING";

  useEffect(() => {
    // Animate the loading text letter by letter - faster to complete within 3 seconds
    let currentIndex = 0;
    const textInterval = setInterval(() => {
      if (currentIndex <= loadingString.length) {
        setLoadingText(loadingString.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(textInterval);
      }
    }, 150); // Faster interval to complete within 3 seconds

    // Set a timeout to hide the loader after exactly 3 seconds
    const hideTimeout = setTimeout(() => {
      setShowLoader(false);
      onLoadingComplete();
    }, 3000);

    return () => {
      clearInterval(textInterval);
      clearTimeout(hideTimeout);
    };
  }, [onLoadingComplete]);

  return (
    <AnimatePresence mode="wait">
      {showLoader && (
        <motion.div
          className="fixed inset-0 flex flex-col items-center justify-center bg-background z-50"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.2
            }}
          >
            {/* Animated gradient aura - further reduced intensity */}
            <div className="absolute -inset-14 sm:-inset-20 md:-inset-24 lg:-inset-28 rounded-full blur-2xl bg-gradient-to-r from-purple-600/10 via-fuchsia-500/10 to-cyan-400/10 opacity-40 animate-pulse"></div>
            <div className="absolute -inset-12 sm:-inset-16 md:-inset-20 lg:-inset-24 rounded-full blur-xl bg-gradient-to-r from-purple-600/15 via-fuchsia-500/15 to-cyan-400/15 opacity-40 animate-pulse" style={{ animationDelay: "300ms" }}></div>
            <div className="absolute -inset-10 sm:-inset-12 md:-inset-16 lg:-inset-20 rounded-full blur-lg bg-gradient-to-r from-purple-600/20 via-fuchsia-500/20 to-cyan-400/20 opacity-40 animate-pulse" style={{ animationDelay: "600ms" }}></div>

            {/* Rotating gradient border - thinner and more subtle */}
            <div className="absolute -inset-0.5 sm:-inset-1 md:-inset-1.5 rounded-full bg-gradient-to-r from-purple-600 via-fuchsia-500 to-cyan-400 animate-spin-slow opacity-30"></div>

            {/* Profile image - increased size with thinner border */}
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border border-white/10">
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Loading text animation */}
          <motion.div
            className="mt-20 sm:mt-24 md:mt-28 h-12 flex items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className="flex items-center justify-center">
              {/* Render each letter with its own animation */}
              {loadingText.split('').map((letter, index) => (
                <motion.span
                  key={`${letter}-${index}`}
                  className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-widest bg-gradient-to-r from-purple-600 to-cyan-400 bg-clip-text text-transparent mx-0.5 sm:mx-1"
                  initial={{ opacity: 0, y: 20, scale: 0.5 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    delay: 0.5 + (index * 0.1),
                    duration: 0.3,
                    type: "spring",
                    stiffness: 300,
                    damping: 10
                  }}
                >
                  {letter}
                </motion.span>
              ))}
              <motion.span
                className="inline-block w-1.5 sm:w-2 h-8 sm:h-10 md:h-12 ml-1 bg-gradient-to-r from-purple-600 to-cyan-400"
                animate={{ opacity: [0, 1, 0], height: ["60%", "100%", "60%"] }}
                transition={{ repeat: Infinity, duration: 1 }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
