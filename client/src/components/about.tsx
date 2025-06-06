import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-muted/50 relative overflow-hidden">
      {/* Purple glowing stars */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-1 h-1 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-32 right-20 w-1.5 h-1.5 bg-purple-300 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-48 left-1/4 w-1 h-1 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 right-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-60 left-1/2 w-1 h-1 bg-purple-300 rounded-full animate-pulse" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-60 right-10 w-1 h-1 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-32 left-20 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-40 left-3/4 w-1 h-1 bg-purple-300 rounded-full animate-pulse" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute bottom-50 right-1/4 w-1 h-1 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '3.5s' }}></div>
        <div className="absolute top-72 left-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '4.5s' }}></div>
      </div>

      {/* Animated background elements with breathing effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-purple-600/10 to-cyan-400/10 dark:from-purple-600/20 dark:to-cyan-400/20 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-tr from-purple-600/10 to-cyan-400/10 dark:from-purple-600/20 dark:to-cyan-400/20 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-purple-500/5 to-purple-600/5 dark:from-purple-500/10 dark:to-purple-600/10 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2
            className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-cyan-400 bg-clip-text text-transparent mb-8"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.h2>

          <motion.div
            className="max-w-4xl relative"
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {/* Glowing background for content */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-transparent to-cyan-400/5 dark:from-purple-600/10 dark:via-transparent dark:to-cyan-400/10 rounded-xl blur-xl"></div>

            <div className="relative bg-white/30 dark:bg-gray-900/30 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 dark:border-purple-500/30">
              <motion.p
                className="text-lg text-muted-foreground mb-4 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                I'm a Full-Stack Web Developer with a strong foundation in React.js, Vue.js, Node.js, and PostgreSQL, recently graduated with a B.Tech in Computer Science Engineering from LNCTS, Indore (CGPA: 7.62).
              </motion.p>
              <motion.p
                className="text-lg text-muted-foreground mb-4 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                I've built and deployed production-ready applications like FilmFusion (1,000+ users, 67% faster APIs) and EcoVolt (EV station management with real-time maps and role-based access), leveraging tools like Redis, Docker, Tailwind CSS, and Framer Motion.
              </motion.p>
              <motion.p
                className="text-lg text-muted-foreground mb-4 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                I'm also deeply skilled in data structures and algorithms, having solved 200+ problems across LeetCode and HackerRank, where I'm ranked in the top 5% globally with a 5-star proficiency badge.
              </motion.p>
              <motion.p
                className="text-lg text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                My focus lies in building performant, user-centric applications and continuously improving development workflows through AI tools, caching strategies, and clean architecture. I actively engage in hackathons, open-source collaboration, and side projects to keep learning and pushing boundaries.
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}