import { Link } from "wouter";
import { motion } from "framer-motion";
import ThemeToggle from "./theme-toggle";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <nav className="fixed w-full backdrop-blur-sm bg-background/80 z-[100] border-b dark:border-purple-900/30">
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
            className="relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 group-hover:text-primary transition-colors duration-300">Projects</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
          </motion.button>

          {/* Photography link */}
          <Link href="/photography">
            <motion.button
              className="relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 group-hover:text-primary transition-colors duration-300">Photography</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </motion.button>
          </Link>

          {/* Resume button */}
          <motion.button
            onClick={() => document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' })}
            className="relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 group-hover:text-primary transition-colors duration-300">Resume</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
          </motion.button>

          {/* Contact button */}
          <motion.button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 group-hover:text-primary transition-colors duration-300">Contact</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
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

          {/* Hamburger Menu Button */}
          <motion.button
            className="relative flex items-center justify-center p-2 rounded-full bg-gradient-to-r from-purple-600/10 to-purple-600/20 dark:from-purple-600/20 dark:to-purple-600/30 text-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/0 to-purple-600/0 dark:from-purple-600/10 dark:to-purple-600/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-[90] bg-background/95 backdrop-blur-md">
          <div className="container mx-auto px-4 pt-20 pb-6">
            <div className="flex flex-col space-y-6">
              {navItems.map((item, index) => (
                <div key={index} className="relative">
                  {item.href ? (
                    <Link href={item.href}>
                      <motion.button
                        className="text-lg font-medium w-full text-left py-2 relative group"
                        onClick={item.onClick}
                        whileTap={{ scale: 0.98 }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <span className="relative z-10 group-hover:text-primary transition-colors duration-300">
                          {item.name}
                        </span>
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
                      </motion.button>
                    </Link>
                  ) : (
                    <motion.button
                      className="text-lg font-medium w-full text-left py-2 relative group"
                      onClick={item.onClick}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <span className="relative z-10 group-hover:text-primary transition-colors duration-300">
                        {item.name}
                      </span>
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
                    </motion.button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
