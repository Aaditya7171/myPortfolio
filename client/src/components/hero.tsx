import { motion } from "framer-motion";
import profileImage from "/attached_assets/dp.jpg";

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
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary text-z px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Contact Me
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="order-1 md:order-2 flex justify-center"
          >
            <div className="relative w-48 h-48 md:w-80 md:h-80">
              <div className="absolute -inset-2 rounded-full border-4 border-primary/20 animate-pulse"></div>
              <img
                src="attached_assets/dp.jpg"
                alt="Profile"
                className="relative w-full h-full object-cover rounded-full"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}