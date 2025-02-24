import { motion, useMotionValue, useTransform } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, ExternalLink } from "lucide-react";
import styles from "./Projects.module.css";

const projects = [
  {
    title: "Weather App",
    description: "An interactive weather application using OpenWeatherMap API with asynchronous JavaScript. Improved load times by 20% through optimized API calls and Bootstrap 5 for responsive layouts.",
    github: "https://github.com/Aaditya7171/Weather-Forecast",
    demo: "https://aaditya7171.github.io/Weather-Forecast/",
  },
  {
    title: "Drum Kit",
    description: "An interactive web application using HTML, CSS, and JavaScript that allows users to play drum sounds via keyboard inputs or mouse clicks. Features event listeners and audio playback for an engaging user experience.",
    github: "https://github.com/Aaditya7171/Drum_Kit",
    demo: "https://aaditya7171.github.io/Drum_Kit/",
  },
  {
    title: "QuizzyTech",
    description: "A quiz platform using HTML, CSS, and JavaScript with scoring logic and progress-saving via local storage. Achieved 90% code test coverage.",
    github: "https://github.com/Aaditya7171/QuizzyTech",
    demo: "https://aaditya7171.github.io/QuizzyTech/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className={`${styles.whoWeAre} py-24 bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden`}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-purple-500 mb-12">Projects</h2>
        <p className="text-2xl font-semibold text-gray-300 mb-8">Empowering Coders, Enabling Dreams</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className={styles.projectCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              style={{
                rotateX: useTransform(useMotionValue(0), [0, 1], [-10, 10]),
                rotateY: useTransform(useMotionValue(0), [0, 1], [-10, 10]),
                transition: "all 0.2s ease-out"
              }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width;
                const y = (e.clientY - rect.top) / rect.height;
                const rotateX = (y - 0.5) * 20;
                const rotateY = (x - 0.5) * 20;
                e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
              }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:text-primary/80"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:text-primary/80"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
