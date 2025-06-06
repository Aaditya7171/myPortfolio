import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export default function Hero() {
  const [showAltImage, setShowAltImage] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const hasBeenClicked = useRef(false);
  const [imageLoaded, setImageLoaded] = useState({
    primary: false,
    secondary: false
  });

  // Writing animation states
  const [displayedTitle, setDisplayedTitle] = useState("");
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  const titleText = "Hi WAVE BREAK I'm Aditya Tomar";
  const subtitleText = "A passionate Full Stack Developer crafting innovative web solutions";

  // Preload images
  useEffect(() => {
    const primaryImg = new Image();
    primaryImg.src = "/attached_assets/dp.jpg";
    primaryImg.onload = () => setImageLoaded(prev => ({ ...prev, primary: true }));

    const secondaryImg = new Image();
    secondaryImg.src = "/attached_assets/dp2.png";
    secondaryImg.onload = () => setImageLoaded(prev => ({ ...prev, secondary: true }));
  }, []);

  // Writing animation effect
  useEffect(() => {
    let currentTitleTimer: NodeJS.Timeout | null = null;
    let subtitleTimeout: NodeJS.Timeout | null = null;

    const animateText = () => {
      // Clear any existing timers
      if (currentTitleTimer) clearInterval(currentTitleTimer);
      if (subtitleTimeout) clearTimeout(subtitleTimeout);

      // Reset states
      setDisplayedTitle("");
      setShowSubtitle(false);

      // Calculate timing for title
      const titleLength = titleText.length; // 19 characters
      // Title: 1.87 seconds = 1870ms / 19 characters = ~98.4ms per character
      const titleInterval = 1870 / titleLength; // ~98.4ms per character

      let titleIndex = 0;

      // Animate title (typewriter effect)
      currentTitleTimer = setInterval(() => {
        if (titleIndex < titleLength) {
          setDisplayedTitle(titleText.substring(0, titleIndex + 1));
          titleIndex++;
        } else {
          if (currentTitleTimer) clearInterval(currentTitleTimer);

          // Show subtitle after title completes (pop up from bottom)
          subtitleTimeout = setTimeout(() => {
            setShowSubtitle(true);
          }, 200); // Small delay after title completes
        }
      }, titleInterval);
    };

    // Start animation after loading screen disappears (3.5 seconds delay)
    const initialDelay = setTimeout(() => {
      animateText();
    }, 3500);

    // Set up repeating animation every 12 seconds (starting after initial animation)
    const repeatInterval = setInterval(() => {
      setAnimationKey(prev => prev + 1);
      animateText();
    }, 12000);

    return () => {
      clearTimeout(initialDelay);
      if (currentTitleTimer) clearInterval(currentTitleTimer);
      if (subtitleTimeout) clearTimeout(subtitleTimeout);
      clearInterval(repeatInterval);
    };
  }, [titleText, subtitleText]);

  // Log state changes for debugging
  useEffect(() => {
    console.log("Profile image:", showAltImage ? "dp2.png" : "dp.jpg");
    console.log("Is hovering:", isHovering);
    console.log("Has been clicked:", hasBeenClicked.current);
    console.log("Images loaded:", imageLoaded);
  }, [showAltImage, isHovering, imageLoaded]);

  // Handle click on profile image with enhanced transition
  const handleProfileClick = () => {
    // Set clicked state immediately
    hasBeenClicked.current = true;

    // Toggle the image with a slight delay for better animation flow
    setTimeout(() => {
      setShowAltImage(prev => !prev);
      console.log("Image clicked, toggling to:", !showAltImage);
    }, 50);

    // Keep click state active longer to maintain the toggled state
    // Extended duration for smoother experience when hovering after click
    setTimeout(() => {
      hasBeenClicked.current = false;
    }, 3000);
  };

  // Handle mouse enter with smoother transition
  const handleMouseEnter = () => {
    // Set hovering state immediately for aura effects
    setIsHovering(true);

    // Only change image if not in clicked state
    if (!hasBeenClicked.current) {
      // Small delay for more natural feel when hovering
      setTimeout(() => {
        setShowAltImage(true);
        console.log("Mouse enter, showing dp2.png");
      }, 30);
    }
  };

  // Handle mouse leave with smoother transition
  const handleMouseLeave = () => {
    // Set hovering state immediately for aura effects
    setIsHovering(false);

    // Only change image if not in clicked state
    if (!hasBeenClicked.current) {
      // Small delay before changing image for smoother transition
      setTimeout(() => {
        setShowAltImage(false);
        console.log("Mouse leave, showing dp.jpg");
      }, 50);
    } else {
      console.log("Mouse leave but keeping current image due to click state");
    }
  };
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center py-16 md:py-0 relative overflow-hidden">
      {/* Purple glowing background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-purple-400/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-purple-500/12 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-36 h-36 bg-purple-600/9 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-400/6 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="order-2 md:order-1 text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 min-h-[6rem] sm:min-h-[4rem] md:min-h-[6rem] relative leading-tight">


              <motion.span
                key={`title-${animationKey}`}
                className="inline-block"
              >
                {(() => {
                  // Process the title and handle placeholders properly
                  const processedTitle = displayedTitle
                    .replace(/WAVE/g, '~')
                    .replace(/BREAK/g, '\n');

                  // Find the exact position of "Aditya Tomar" in the processed string
                  const adityaTomarStartIndex = processedTitle.indexOf("Aditya Tomar");
                  const adityaTomarEndIndex = adityaTomarStartIndex + "Aditya Tomar".length;

                  let charIndex = 0;
                  return processedTitle.split('').map((char, index) => {
                    // Handle line break for small screens
                    if (char === '\n') {
                      return <br key={`break-${index}-${animationKey}`} className="block sm:hidden" />;
                    }

                    // Handle wave placeholder with simple text
                    if (char === '~') {
                      const currentIndex = charIndex++;
                      return (
                        <motion.span
                          key={`wave-${index}-${animationKey}`}
                          className="relative inline-block text-2xl md:text-4xl select-none wave-text"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          transition={{
                            duration: 0.3,
                            delay: currentIndex * 0.098,
                            ease: "easeOut"
                          }}
                          style={{
                            display: 'inline-block',
                            fontSize: '1.2em',
                            color: '#a855f7',
                            fontWeight: 'bold',
                            textShadow: '0 0 10px rgba(168, 85, 247, 0.8), 0 0 20px rgba(147, 51, 234, 0.6)',
                            animation: 'wave-animation 2.5s ease-in-out infinite',
                            transformOrigin: '70% 70%',
                          }}
                        >
                          👋
                        </motion.span>
                      );
                    }

                    // Check if this character is part of "Aditya Tomar" only (not "I'm")
                    const isAdityaTomarPart = adityaTomarStartIndex !== -1 && index >= adityaTomarStartIndex && index < adityaTomarEndIndex;
                    const isLastTyped = index === processedTitle.length - 1;
                    const currentIndex = charIndex++;

                    return (
                      <motion.span
                        key={`${char}-${index}-${animationKey}`}
                        className={`relative inline-block ${isAdityaTomarPart ? "font-semibold" : ""}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          duration: 0.3,
                          delay: currentIndex * 0.098,
                          ease: "easeOut"
                        }}
                        style={isAdityaTomarPart ? {
                          color: '#9333ea',
                          textShadow: '0 0 6px rgba(147, 51, 234, 0.3), 0 0 12px rgba(147, 51, 234, 0.2), 0 0 18px rgba(147, 51, 234, 0.1)',
                          filter: 'drop-shadow(0 0 4px rgba(147, 51, 234, 0.25))'
                        } : {}}
                      >
                        {char === ' ' ? '\u00A0' : char}

                        {/* Subtle purple gradient glow around letter during typing - only for Aditya Tomar */}
                        {isAdityaTomarPart && (
                          <motion.div
                            className="absolute -inset-1 bg-gradient-to-r from-purple-600/25 via-purple-400/35 to-purple-600/25 rounded-md blur-sm"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{
                              opacity: isLastTyped ? [0, 0.6, 0] : [0, 0.6, 0],
                              scale: isLastTyped ? [0.8, 1.1, 1] : [0.8, 1.1, 1]
                            }}
                            transition={{
                              duration: 0.6,
                              delay: currentIndex * 0.098,
                              ease: "easeOut"
                            }}
                          />
                        )}

                        {/* Subtle purple shadow effect that appears during typing and fades after completion - only for Aditya Tomar */}
                        {isAdityaTomarPart && (
                          <motion.div
                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600/40 to-purple-400/40 rounded-full"
                            initial={{ opacity: 0, scaleX: 0 }}
                            animate={{
                              opacity: isLastTyped ? [0, 0.7, 0] : [0, 0.7, 0.5, 0],
                              scaleX: isLastTyped ? [0, 1, 1] : [0, 1, 1, 1]
                            }}
                            transition={{
                              duration: isLastTyped ? 1.5 : 0.8,
                              delay: currentIndex * 0.098,
                              ease: "easeOut"
                            }}
                          />
                        )}

                        {/* Subtle additional purple glow for Aditya Tomar only */}
                        {isAdityaTomarPart && (
                          <motion.div
                            className="absolute -inset-2 bg-purple-600/10 rounded-lg blur-md"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, 0.4, 0.2] }}
                            transition={{
                              duration: 1,
                              delay: currentIndex * 0.098 + 0.3,
                              ease: "easeOut"
                            }}
                          />
                        )}
                      </motion.span>
                    );
                  });
                })()}
              </motion.span>
            </h1>
            <motion.div
              className="relative min-h-[3rem] md:min-h-[4rem] mb-8"
              key={`subtitle-container-${animationKey}`}
            >
              {/* Multiple layered purple gradient effects */}
              <motion.div
                className="absolute -inset-3 bg-gradient-to-r from-purple-600/20 via-purple-400/30 to-purple-600/20 rounded-xl blur-lg"
                initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
                animate={{
                  opacity: showSubtitle ? [0, 1, 0.7, 0] : 0,
                  scale: showSubtitle ? [0.8, 1.2, 1.05, 1] : 0.8,
                  rotate: showSubtitle ? [-2, 2, -1, 0] : -2
                }}
                transition={{
                  duration: 1.5,
                  ease: "easeOut"
                }}
              />

              {/* Secondary glow effect */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-purple-500/15 via-purple-300/25 to-purple-500/15 rounded-lg blur-sm"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: showSubtitle ? [0, 0.8, 0.5, 0] : 0,
                  scale: showSubtitle ? [0.9, 1.1, 1.02, 1] : 0.9
                }}
                transition={{
                  duration: 1.3,
                  ease: "easeOut",
                  delay: 0.1
                }}
              />

              {/* Sparkle effects */}
              <motion.div
                className="absolute -top-2 -right-2 w-2 h-2 bg-purple-400 rounded-full"
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: showSubtitle ? [0, 1, 0] : 0,
                  scale: showSubtitle ? [0, 1.5, 0] : 0
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: "easeOut"
                }}
              />

              <motion.div
                className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-purple-300 rounded-full"
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: showSubtitle ? [0, 1, 0] : 0,
                  scale: showSubtitle ? [0, 1.2, 0] : 0
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.7,
                  ease: "easeOut"
                }}
              />

              <motion.p
                className="text-xl md:text-2xl relative z-10 font-medium bg-gradient-to-r from-slate-700 via-purple-600 to-slate-700 dark:from-slate-300 dark:via-purple-400 dark:to-slate-300 bg-clip-text text-transparent leading-relaxed"
                key={`subtitle-${animationKey}`}
                initial={{ opacity: 0, y: 40, letterSpacing: "0.1em", scale: 0.95 }}
                animate={{
                  opacity: showSubtitle ? 1 : 0,
                  y: showSubtitle ? 0 : 40,
                  letterSpacing: showSubtitle ? "0.02em" : "0.1em",
                  scale: showSubtitle ? 1 : 0.95
                }}
                transition={{
                  duration: 1.2,
                  ease: "easeOut"
                }}
                style={{
                  textShadow: showSubtitle ? '0 0 20px rgba(168, 85, 247, 0.3)' : 'none'
                }}
              >
                {subtitleText}
              </motion.p>
            </motion.div>
            <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 xl:gap-6 2xl:gap-8 justify-center md:justify-start items-center xs:items-stretch">
              {/* See My Work Button */}
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
                animate={{
                  y: [0, -1, 0],
                }}
                transition={{
                  y: {
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              >
                {/* Enhanced gradient aura effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400/40 via-purple-400/60 to-purple-600/40 rounded-lg blur-md opacity-40 group-hover:opacity-80 transition duration-500 group-hover:duration-200 animate-pulse"></div>

                {/* Secondary glow layer */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-70 transition duration-500 group-hover:duration-200"></div>

                <button
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="relative bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg transition-all duration-300 overflow-hidden group z-10 shadow-lg hover:shadow-cyan-500/25 w-full xs:w-auto min-w-[140px] text-sm sm:text-base"
                >
                  {/* Animated shine effect */}
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-out"></span>

                  {/* Cyan glow overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-300/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>

                  <div className="flex items-center gap-2 relative z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:rotate-12 transition-transform duration-300">
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                    <span>See My Work</span>
                  </div>
                </button>
              </motion.div>

              {/* Contact Me Button */}
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
                animate={{
                  y: [0, -1, 0],
                }}
                transition={{
                  y: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }
                }}
              >
                {/* Enhanced gradient aura effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/40 via-purple-400/60 to-cyan-400/40 rounded-lg blur-md opacity-40 group-hover:opacity-80 transition duration-500 group-hover:duration-200 animate-pulse"></div>

                {/* Secondary glow layer */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-400 rounded-lg blur opacity-30 group-hover:opacity-70 transition duration-500 group-hover:duration-200"></div>

                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="relative bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg transition-all duration-300 overflow-hidden group z-10 shadow-lg hover:shadow-purple-500/25 w-full xs:w-auto min-w-[140px] text-sm sm:text-base"
                >
                  {/* Animated shine effect */}
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-out"></span>

                  {/* Purple glow overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-cyan-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>

                  <div className="flex items-center gap-2 relative z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:rotate-12 transition-transform duration-300">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <span>Contact Me</span>
                  </div>
                </button>
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="order-1 md:order-2 flex justify-center"
          >
            <motion.div
              className="relative w-48 h-48 md:w-80 md:h-80 group cursor-pointer overflow-visible"
              onClick={handleProfileClick}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              whileHover={{
                scale: 1.03,
                transition: {
                  type: "spring",
                  stiffness: 200,
                  damping: 15
                }
              }}
              whileTap={{
                scale: 0.97,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 15
                }
              }}
            >
              {/* Enhanced purple gradient aura with smooth animation */}
              <motion.div
                className="absolute -inset-6 md:-inset-10 rounded-full bg-gradient-to-r from-purple-600/40 via-fuchsia-500/40 to-cyan-400/40 blur-xl dark:from-purple-600/60 dark:via-fuchsia-500/60 dark:to-cyan-400/60"
                animate={{
                  opacity: isHovering ? 0.8 : 0.6,
                  scale: isHovering ? 1.05 : 1,
                  rotate: isHovering ? 5 : 0
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut"
                }}
              ></motion.div>

              {/* Animated border with enhanced pulse */}
              <motion.div
                className="absolute -inset-2 rounded-full border-4 border-primary/30"
                animate={{
                  scale: isHovering ? [1, 1.03, 1] : [1, 1.02, 1],
                  opacity: isHovering ? [0.6, 0.8, 0.6] : [0.3, 0.5, 0.3]
                }}
                transition={{
                  duration: isHovering ? 1.5 : 2.5,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              ></motion.div>

              {/* Enhanced glow on hover with smoother transition */}
              <motion.div
                className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-600 to-cyan-400 blur-md"
                animate={{
                  opacity: isHovering ? 0.6 : 0.2,
                  scale: isHovering ? 1.05 : 1
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut"
                }}
              ></motion.div>

              {/* Image container with both images - enhanced transitions */}
              <div className="relative w-full h-full rounded-full overflow-hidden">
                {/* Primary image (dp.jpg) with smoother transition */}
                {imageLoaded.primary && (
                  <motion.img
                    src="/attached_assets/dp.jpg"
                    alt="Profile"
                    className="absolute inset-0 w-full h-full object-cover rounded-full z-10"
                    initial={{ opacity: 1 }}
                    animate={{
                      opacity: showAltImage ? 0 : 1,
                      scale: showAltImage ? 0.92 : 1,
                      rotate: showAltImage ? -5 : 0
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 15,
                      duration: 0.6
                    }}
                  />
                )}

                {/* Secondary image (dp2.png) with smoother transition */}
                {imageLoaded.secondary && (
                  <motion.img
                    src="/attached_assets/dp2.png"
                    alt="Profile Alternative"
                    className="absolute inset-0 w-full h-full object-cover rounded-full z-10"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: showAltImage ? 1 : 0,
                      scale: showAltImage ? 1 : 0.92,
                      rotate: showAltImage ? 0 : 5
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 15,
                      duration: 0.6
                    }}
                  />
                )}
              </div>

              {/* Enhanced flick animation overlay with smoother transition */}
              <motion.div
                className="absolute inset-0 bg-white/30 rounded-full z-20"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 0.6, 0],
                  scale: [1, 1.1, 1],
                  rotate: [0, 2, 0]
                }}
                transition={{
                  duration: 0.8,
                  times: [0, 0.4, 1],
                  ease: "easeInOut"
                }}
                key={showAltImage ? "alt" : "primary"}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}