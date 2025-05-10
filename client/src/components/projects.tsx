import { motion, useMotionValue, useTransform } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import styles from "./Projects.module.css";

const projects = [
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
    <section id="projects" className={`${styles.whoWeAre} py-24 bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden`}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-purple-500 mb-12">Projects</h2>
        <p className="text-2xl font-semibold text-gray-300 mb-8">Showcasing My Development Journey</p>
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
                  {/* Project Image */}
                  <div className="relative overflow-hidden h-64 md:h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-cyan-900/20 dark:from-purple-900/40 dark:to-cyan-900/40 z-10"></div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                    />
                  </div>

                  {/* Project Details */}
                  <div className="p-6 flex flex-col">
                    <CardHeader className="px-0 pt-0">
                      <CardTitle className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-cyan-400 bg-clip-text text-transparent">
                        {project.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="px-0 py-2 flex-grow">
                      <div className="prose prose-sm dark:prose-invert max-h-[300px] overflow-y-auto pr-4 custom-scrollbar">
                        {project.description.split('\n\n').map((paragraph, i) => (
                          <p key={i} className="text-muted-foreground mb-4 text-sm">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </CardContent>
                    <div className="mt-auto flex flex-wrap gap-4 items-center">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-purple-500 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        GitHub
                      </a>
                      <Button
                        asChild
                        className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white shadow-md hover:shadow-lg transition-all duration-300"
                      >
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Visit Project
                        </a>
                      </Button>
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
