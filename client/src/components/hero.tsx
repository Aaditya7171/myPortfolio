import { motion } from "framer-motion";
import profileImage from "/attached_assets/uoAkbiKI_4x (1).jpg";

export default function Hero() {
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
            <div className="relative w-48 h-48 md:w-80 md:h-80 group">
              {/* Moderate purple gradient aura */}
              <div className="absolute -inset-6 md:-inset-8 rounded-full bg-gradient-to-r from-purple-600/30 via-fuchsia-500/30 to-cyan-400/30 blur-lg dark:from-purple-600/50 dark:via-fuchsia-500/50 dark:to-cyan-400/50 opacity-0 dark:opacity-60 group-hover:opacity-70 transition-all duration-700"></div>

              {/* Animated border */}
              <div className="absolute -inset-2 rounded-full border-4 border-primary/20 animate-pulse"></div>

              {/* Animated glow on hover */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-600 to-cyan-400 opacity-0 group-hover:opacity-30 blur-md transition-all duration-500 dark:group-hover:opacity-40"></div>

              <img
                src="/attached_assets/uoAkbiKI_4x (1).jpg"
                alt="Profile"
                className="relative w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-105 z-10"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}