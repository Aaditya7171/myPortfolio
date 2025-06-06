import { motion, useMotionValue, useTransform } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import styles from "./Projects.module.css";

const projects = [
  {
    title: "FilmFusion",
    description: "Multi-Category Movie Discovery Platform\n\n• Developed a full-stack movie discovery platform using React 19, TypeScript, Node.js, Express.js, and PostgreSQL across categories such as Bollywood, Hollywood, K-dramas & Anime.\n\n• Configured & integrated authentication using JWT and Google OAuth2, managing sessions via HTTP-only cookies; utilized Redis caching to reduce API response times by 67% (600 ms ➔ 200 ms).\n\n• Architected a responsive UI in Tailwind CSS with Framer Motion animations, leveraging React Context API, useCallback, useMemo, and skeleton loaders— achieved Lighthouse performance score: 92%.",
    github: "https://github.com/Aaditya7171/FilmFusion",
    demo: "https://filmfusion-live.netlify.app/",
    image: "/attached_assets/project-images/FilmFusionSS.png"
  },
  {
    title: "EcoVolt",
    description: "EV Charging Station Locator\n\n• Built full-stack EV charging station management system with Vue.js 3, Node.js, Express.js, and PostgreSQL, handling 500+ stations and role-based access.\n\n• Enforced JWT authentication with bcrypt and integrated Leaflet.js & OpenStreetMap with custom markers, real-time filtering, and status-based color coding, improving lookup efficiency by 40%.\n\n• Designed a responsive Tailwind CSS UI with dark/light toggle, micro-interactions, and a dashboard for station approvals, earning 95% positive feedback in alpha testing.",
    github: "https://github.com/Aaditya7171/EcoVolt",
    demo: "https://ecovolt-nu.vercel.app/chargers",
    image: "/attached_assets/project-images/EcoVoltSS.png"
  },
  {
    title: "LNCT Connect",
    description: "LNCT Connect is a comprehensive campus networking platform I developed for Lakshmi Narain College of Technology. This full-stack application serves as a centralized hub for students, faculty, and alumni to connect, communicate, and collaborate within the college ecosystem.\n\nKey Features Implemented: Real-time Messaging System with online status indicators and media sharing capabilities, Interactive Forum for academic discussions and knowledge sharing, Professional Networking with connection management similar to LinkedIn, Customizable User Profiles showcasing academic achievements and skills, Responsive Design with multiple theme options including a custom animated purple theme.\n\nTechnology Stack: Frontend: React.js, TypeScript, Tailwind CSS, Socket.io Client, Backend: Node.js, Express.js, PostgreSQL, JWT Authentication, Infrastructure: AWS S3 for media storage, Vercel for deployment",
    github: "https://github.com/Aaditya7171/LNCT-Connect",
    demo: "https://github.com/Aaditya7171/LNCT-Connect",
    image: "/attached_assets/project-images/LNCTConnect.png"
  },
  {
    title: "Quiz Master",
    description: "A responsive and interactive quiz application built using HTML, CSS, and JavaScript. The website allows users to answer multiple-choice questions, view their scores, and receive instant feedback. It includes features like dynamic question loading, real-time answer validation, and score tracking. Designed with a clean UI and smooth user experience, the project demonstrates core web development skills, DOM manipulation, and basic logic implementation.",
    github: "https://github.com/Aaditya7171/Quiz_Website",
    demo: "https://aaditya7171.github.io/Quiz_Website/",
    image: "/attached_assets/project-images/QuizMaster.png"
  },
  {
    title: "Weather Forecast",
    description: "A simple and user-friendly web application that displays real-time weather information for any city using the OpenWeatherMap API. Built with HTML, CSS, and JavaScript, the app fetches and presents data such as temperature, weather conditions, humidity, and wind speed. It features clean design, responsive layout, and intuitive input handling, showcasing API integration, asynchronous JavaScript (fetch/async-await), and front-end development skills.",
    github: "https://github.com/Aaditya7171/Weather-Forecast",
    demo: "https://aaditya7171.github.io/Weather-Forecast/",
    image: "/attached_assets/project-images/WeatherForecast.png"
  },
  {
    title: "Simon Game",
    description: "A classic memory-based game built using HTML, CSS, and JavaScript. Inspired by the original Simon game, it challenges users to repeat an increasingly complex sequence of colors and sounds. The game includes smooth animations, audio cues, level progression, and a restart feature on failure. This project demonstrates strong skills in event handling, game logic, DOM manipulation, and enhancing user interaction with feedback mechanisms.",
    github: "https://github.com/Aaditya7171/Simon_Game",
    demo: "https://aaditya7171.github.io/Simon_Game/",
    image: "/attached_assets/project-images/SimonGame.png"
  },
];

export default function Projects() {
  return (
    <section id="projects" className={`${styles.whoWeAre} py-24 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black text-gray-900 dark:text-white relative overflow-hidden`}>
      {/* Animated background elements with breathing effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-purple-600/10 to-cyan-400/10 dark:from-purple-600/20 dark:to-cyan-400/20 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-tr from-purple-600/10 to-cyan-400/10 dark:from-purple-600/20 dark:to-cyan-400/20 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-purple-500/5 to-purple-600/5 dark:from-purple-500/10 dark:to-purple-600/10 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-cyan-400 bg-clip-text text-transparent mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>
        <motion.p
          className="text-2xl font-semibold text-gray-600 dark:text-gray-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Showcasing My Development Journey
        </motion.p>
        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className={styles.projectCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border-purple-500/20 dark:border-purple-500/30 hover:border-purple-500/40 dark:hover:border-purple-500/50 transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Project Image - Clickable */}
                  <div
                    className="relative overflow-hidden h-64 md:h-full cursor-pointer group"
                    onClick={() => window.open(project.demo, '_blank')}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white font-semibold text-lg">View Live Demo</span>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="p-6 flex flex-col">
                    <CardHeader className="px-0 pt-0">
                      <CardTitle className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-cyan-400 bg-clip-text text-transparent">
                        {project.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="px-0 py-2 flex-grow">
                      <motion.div
                        className="relative"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                      >
                        {/* Glowing background for description */}
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/3 via-transparent to-cyan-400/3 dark:from-purple-600/5 dark:via-transparent dark:to-cyan-400/5 rounded-lg blur-sm"></div>

                        <div className="relative bg-white/20 dark:bg-gray-900/20 backdrop-blur-sm rounded-lg p-4 border border-purple-500/10 dark:border-purple-500/20">
                          <div className="prose prose-sm dark:prose-invert max-h-[300px] overflow-y-auto pr-4 custom-scrollbar">
                            {project.description.split('\n\n').map((paragraph, i) => (
                              <p key={i} className="text-muted-foreground mb-4 text-sm leading-relaxed">
                                {paragraph}
                              </p>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </CardContent>
                    <div className="mt-auto flex flex-wrap gap-4 items-center">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative flex items-center gap-2 text-sm text-muted-foreground hover:text-purple-500 transition-colors px-3 py-2 rounded-lg overflow-hidden group"
                        whileHover={{
                          scale: 1.05,
                          y: -2
                        }}
                        whileTap={{ scale: 0.95 }}
                        animate={{
                          y: [0, -1, 0],
                        }}
                        transition={{
                          y: {
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }
                        }}
                      >
                        {/* Glowing background effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>

                        {/* Shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

                        <Github className="w-4 h-4 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                        <span className="relative z-10">GitHub</span>
                      </motion.a>

                      <motion.div
                        whileHover={{
                          scale: 1.05,
                          y: -2
                        }}
                        whileTap={{ scale: 0.95 }}
                        animate={{
                          y: [0, -1, 0],
                        }}
                        transition={{
                          y: {
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.5
                          }
                        }}
                      >
                        <Button
                          asChild
                          className="relative bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group"
                        >
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            {/* Enhanced glowing background */}
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/50 to-cyan-300/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            {/* Shine effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

                            <ExternalLink className="w-4 h-4 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                            <span className="relative z-10">Visit Project</span>
                          </a>
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
