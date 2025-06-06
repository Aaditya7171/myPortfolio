import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./theme-toggle";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Control body overflow when menu is open
  useEffect(() => {
    console.log("Menu state changed:", isMenuOpen ? "OPEN" : "CLOSED");

    if (isMenuOpen) {
      // Freeze scrolling when menu is open
      document.body.style.overflow = 'hidden';
      document.body.classList.add('menu-open');

      // Add a class to the body for additional styling when menu is open
      document.body.classList.add('mobile-menu-open');

      // Force a reflow to ensure the menu is properly displayed
      setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
      }, 50);
    } else {
      // Add a small delay before removing the overflow hidden to allow the animation to complete
      setTimeout(() => {
        document.body.style.overflow = '';
        document.body.classList.remove('menu-open');
        document.body.classList.remove('mobile-menu-open');
      }, 300);
    }

    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = '';
      document.body.classList.remove('menu-open');
      document.body.classList.remove('mobile-menu-open');
    };
  }, [isMenuOpen]);

  // Navigation items for reuse
  const navItems = [
    {
      name: "Projects",
      onClick: () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      }
    },
    {
      name: "Photography",
      href: "/photography",
      onClick: () => setIsMenuOpen(false)
    },
    {
      name: "Resume",
      onClick: () => {
        document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      }
    },
    {
      name: "Contact",
      onClick: () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      }
    }
  ];

  return (
    <nav className="fixed w-full backdrop-blur-sm bg-background/80 z-[140] border-b dark:border-purple-900/30">
      {/* Subtle gradient overlay for dark mode */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/5 to-cyan-400/0 dark:from-purple-600/5 dark:via-purple-600/10 dark:to-cyan-400/5 pointer-events-none"></div>

      <div className="container mx-auto px-4 h-16 flex items-center justify-between relative z-[110] pointer-events-auto">
        <Link href="/">
          <span className="text-xl font-bold relative group overflow-hidden">
            <span className="bg-gradient-to-r from-purple-600 to-cyan-400 bg-clip-text text-transparent">Portfolio</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-600 to-cyan-400 transform translate-y-1 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {/* Projects button */}
          <motion.button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="relative group px-4 py-2.5 rounded-xl overflow-hidden border border-transparent hover:border-purple-500/30 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              y: [0, -3, 0],
              scale: [1, 1.02, 1]
            }}
            transition={{
              y: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              },
              scale: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            {/* Enhanced purple glow background with breathing effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-500/30 to-purple-600/0 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl blur-sm"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/15 to-cyan-400/15 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/10 to-cyan-400/10 opacity-0 group-hover:opacity-70 transition-all duration-500 rounded-xl blur-md animate-pulse"></div>

            {/* Animated shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-700 ease-out"></div>

            {/* Enhanced breathing background effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600/8 to-cyan-400/8 rounded-xl"
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [0.98, 1.04, 0.98]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            <span className="relative z-10 group-hover:text-primary transition-colors duration-300 font-medium bg-gradient-to-r from-foreground to-foreground group-hover:from-purple-600 group-hover:to-cyan-400 bg-clip-text group-hover:text-transparent">Projects</span>
            <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-purple-600 to-cyan-400 group-hover:w-full transition-all duration-300 shadow-lg shadow-purple-500/50 rounded-full"></span>
          </motion.button>

          {/* Photography link */}
          <Link href="/photography">
            <motion.button
              className="relative group px-4 py-2.5 rounded-xl overflow-hidden border border-transparent hover:border-purple-500/30 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                y: [0, -3, 0],
                scale: [1, 1.02, 1]
              }}
              transition={{
                y: {
                  duration: 6.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                },
                scale: {
                  duration: 6.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }
              }}
            >
              {/* Enhanced purple glow background with breathing effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-500/30 to-purple-600/0 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl blur-sm"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/15 to-cyan-400/15 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/10 to-cyan-400/10 opacity-0 group-hover:opacity-70 transition-all duration-500 rounded-xl blur-md animate-pulse"></div>

              {/* Animated shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-700 ease-out"></div>

              {/* Enhanced breathing background effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600/8 to-cyan-400/8 rounded-xl"
                animate={{
                  opacity: [0.2, 0.8, 0.2],
                  scale: [0.98, 1.04, 0.98]
                }}
                transition={{
                  duration: 6.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />

              <span className="relative z-10 group-hover:text-primary transition-colors duration-300 font-medium bg-gradient-to-r from-foreground to-foreground group-hover:from-purple-600 group-hover:to-cyan-400 bg-clip-text group-hover:text-transparent">Photography</span>
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-purple-600 to-cyan-400 group-hover:w-full transition-all duration-300 shadow-lg shadow-purple-500/50 rounded-full"></span>
            </motion.button>
          </Link>

          {/* Resume button */}
          <motion.button
            onClick={() => document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' })}
            className="relative group px-4 py-2.5 rounded-xl overflow-hidden border border-transparent hover:border-purple-500/30 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              y: [0, -3, 0],
              scale: [1, 1.02, 1]
            }}
            transition={{
              y: {
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              },
              scale: {
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }
            }}
          >
            {/* Enhanced purple glow background with breathing effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-500/30 to-purple-600/0 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl blur-sm"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/15 to-cyan-400/15 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/10 to-cyan-400/10 opacity-0 group-hover:opacity-70 transition-all duration-500 rounded-xl blur-md animate-pulse"></div>

            {/* Animated shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-700 ease-out"></div>

            {/* Enhanced breathing background effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600/8 to-cyan-400/8 rounded-xl"
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [0.98, 1.04, 0.98]
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            />

            <span className="relative z-10 group-hover:text-primary transition-colors duration-300 font-medium bg-gradient-to-r from-foreground to-foreground group-hover:from-purple-600 group-hover:to-cyan-400 bg-clip-text group-hover:text-transparent">Resume</span>
            <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-purple-600 to-cyan-400 group-hover:w-full transition-all duration-300 shadow-lg shadow-purple-500/50 rounded-full"></span>
          </motion.button>

          {/* Contact button */}
          <motion.button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="relative group px-4 py-2.5 rounded-xl overflow-hidden border border-transparent hover:border-purple-500/30 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              y: [0, -3, 0],
              scale: [1, 1.02, 1]
            }}
            transition={{
              y: {
                duration: 7.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 3
              },
              scale: {
                duration: 7.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 3
              }
            }}
          >
            {/* Enhanced purple glow background with breathing effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-500/30 to-purple-600/0 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl blur-sm"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/15 to-cyan-400/15 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/10 to-cyan-400/10 opacity-0 group-hover:opacity-70 transition-all duration-500 rounded-xl blur-md animate-pulse"></div>

            {/* Animated shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-700 ease-out"></div>

            {/* Enhanced breathing background effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600/8 to-cyan-400/8 rounded-xl"
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [0.98, 1.04, 0.98]
              }}
              transition={{
                duration: 7.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 3
              }}
            />

            <span className="relative z-10 group-hover:text-primary transition-colors duration-300 font-medium bg-gradient-to-r from-foreground to-foreground group-hover:from-purple-600 group-hover:to-cyan-400 bg-clip-text group-hover:text-transparent">Contact</span>
            <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-purple-600 to-cyan-400 group-hover:w-full transition-all duration-300 shadow-lg shadow-purple-500/50 rounded-full"></span>
          </motion.button>

          {/* Theme toggle */}
          <motion.div whileHover={{ rotate: 15 }} whileTap={{ scale: 0.9 }}>
            <ThemeToggle />
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center gap-4">
          {/* Theme toggle */}
          <motion.div whileHover={{ rotate: 15 }} whileTap={{ scale: 0.9 }}>
            <ThemeToggle />
          </motion.div>

          {/* Hamburger Menu Button - with higher z-index to stay visible */}
          <motion.button
            className={`mobile-menu-button ${isMenuOpen ? 'mobile-menu-button-open' : ''} z-[10001]`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <motion.div
              animate={{ rotate: isMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </motion.div>
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/20 to-purple-600/30 dark:from-purple-600/30 dark:to-purple-600/40 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Overlay - Displayed in hero section */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Dark overlay for the entire screen */}
            <motion.div
              className="fixed inset-0 z-[9998] bg-black/70 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu content positioned in hero section */}
            <motion.div
              className="fixed top-16 inset-x-0 z-[9999] md:hidden overflow-hidden"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Close button with purple gradient styling */}
              <motion.button
                className="absolute top-4 right-4 p-2 rounded-full z-[10000] shadow-lg bg-gradient-to-r from-purple-600 to-purple-800 text-white"
                onClick={() => setIsMenuOpen(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <X className="h-5 w-5" />
                {/* Gradient aura effect */}
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/20 to-purple-600/30 dark:from-purple-600/30 dark:to-purple-600/40 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
              </motion.button>

              {/* Menu buttons with gradient styling */}
              <div className="flex flex-col items-center justify-center p-6 pt-16 pb-8 bg-background/95 dark:bg-[#0f0f16]/95 backdrop-blur-sm">
                <div className="w-full max-w-xs mx-auto space-y-4">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{
                        delay: 0.1 + index * 0.05,
                        duration: 0.2
                      }}
                      className="w-full relative group"
                    >
                      {/* Gradient aura effect */}
                      <div className="mobile-nav-button-aura"></div>

                      {item.href ? (
                        <Link href={item.href} className="block w-full">
                          <div className="mobile-nav-button group">
                            {/* Animated shine effect */}
                            <span className="mobile-nav-button-shine"></span>
                            <span className="relative z-10">{item.name}</span>
                          </div>
                        </Link>
                      ) : (
                        <div
                          className="mobile-nav-button group cursor-pointer"
                          onClick={item.onClick}
                        >
                          {/* Animated shine effect */}
                          <span className="mobile-nav-button-shine"></span>
                          <span className="relative z-10">{item.name}</span>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
