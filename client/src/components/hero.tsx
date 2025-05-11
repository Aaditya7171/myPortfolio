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

  // Preload images
  useEffect(() => {
    const primaryImg = new Image();
    primaryImg.src = "/attached_assets/dp.jpg";
    primaryImg.onload = () => setImageLoaded(prev => ({ ...prev, primary: true }));

    const secondaryImg = new Image();
    secondaryImg.src = "/attached_assets/dp2.png";
    secondaryImg.onload = () => setImageLoaded(prev => ({ ...prev, secondary: true }));
  }, []);

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
    <section className="min-h-[calc(100vh-4rem)] flex items-center py-16 md:py-0">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="order-2 md:order-1 text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hi, I'm <span className="text-primary">Aditya Tomar</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              A passionate Full Stack Developer crafting innovative web solutions
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
              >
                {/* Gradient aura effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-400 rounded-lg blur opacity-30 group-hover:opacity-70 transition duration-500 group-hover:duration-200"></div>

                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="relative bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white px-6 py-3 rounded-lg transition-all duration-300 overflow-hidden group z-10"
                >
                  {/* Animated shine effect */}
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-out"></span>

                  <div className="flex items-center gap-2 relative z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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