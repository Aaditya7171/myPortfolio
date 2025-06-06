import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import {
  SiHtml5, SiCss3, SiJavascript, SiJquery, SiNodedotjs, SiExpress,
  SiGithub, SiCplusplus, SiEjs, SiPostgresql, SiTypescript, SiBootstrap,
  SiTailwindcss, SiReact, SiVuedotjs, SiRedis, SiGit, SiPostman, SiSocketdotio,
  SiReactquery, SiFramer
} from "react-icons/si";
import { TbApi, TbBrandAuth0, TbLock, TbCookie, TbShield, TbTerminal2 } from "react-icons/tb";
import { FaGoogle } from "react-icons/fa";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E", description: "Versatile scripting language for building interactive web applications." },
      { icon: SiTypescript, name: "TypeScript", color: "#3178C6", description: "Superset of JavaScript with static typing and compile-time error checking." },
      { icon: SiCplusplus, name: "C++", color: "#00599C", description: "High-performance language commonly used for systems programming and algorithm implementation." },
    ]
  },
  {
    title: "Frontend",
    skills: [
      { icon: SiHtml5, name: "HTML5", color: "#E34F26", description: "Markup language for structuring and presenting content on the web." },
      { icon: SiCss3, name: "CSS3", color: "#1572B6", description: "Styling language for defining layout, colors, and typography of web pages." },
      { icon: SiBootstrap, name: "Bootstrap 5", color: "#7952B3", description: "Responsive front-end framework with prebuilt components and utilities." },
      { icon: SiTailwindcss, name: "Tailwind CSS", color: "#06B6D4", description: "Utility-first CSS framework for rapid UI development with low-level styling classes." },
      { icon: SiReact, name: "React.js", color: "#61DAFB", description: "Component-based JavaScript library for building dynamic user interfaces." },
      { icon: SiVuedotjs, name: "Vue.js", color: "#4FC08D", description: "Progressive framework for building user interfaces with reactive data binding." },
      { icon: SiJquery, name: "jQuery", color: "#0769AD", description: "Lightweight JavaScript library for simplified DOM manipulation and event handling." },
      { icon: SiEjs, name: "EJS", color: "#B4CA65", description: "Embedded JavaScript templating language for generating HTML with server-side data." },
    ]
  },
  {
    title: "Backend",
    skills: [
      { icon: SiNodedotjs, name: "Node.js", color: "#339933", description: "JavaScript runtime for executing server-side code and building scalable network applications." },
      { icon: SiExpress, name: "Express.js", color: "#FFFF00", description: "Minimalist web framework for Node.js, enabling rapid API and server development." },
      { icon: TbApi, name: "REST APIs", color: "#8A2BE2", description: "Architectural style for designing networked applications using stateless, resource-based requests." },
    ]
  },
  {
    title: "Databases & Caching",
    skills: [
      { icon: SiPostgresql, name: "PostgreSQL", color: "#336791", description: "Open-source relational database management system with advanced SQL compliance." },
      { icon: SiRedis, name: "Redis", color: "#DC382D", description: "In-memory data store used for caching, real-time analytics, and message brokering." },
    ]
  },
  {
    title: "Authentication & Security",
    skills: [
      { icon: TbBrandAuth0, name: "JWT", color: "#8A2BE2", description: "JSON Web Tokens for securely transmitting information between parties as a JSON object." },
      { icon: FaGoogle, name: "Google Auth", color: "#4285F4", description: "Authentication method allowing users to log in via their Google accounts." },
      { icon: TbLock, name: "bcrypt", color: "#8A2BE2", description: "Password-hashing function designed to protect against brute-force attacks." },
      { icon: TbCookie, name: "HTTP-only cookies", color: "#8A2BE2", description: "Secure cookies that cannot be accessed via JavaScript, preventing XSS attacks." },
      { icon: TbShield, name: "CORS configuration", color: "#8A2BE2", description: "Cross-Origin Resource Sharing settings that control resource access between different domains." },
    ]
  },
  {
    title: "Tools",
    skills: [
      { icon: SiGit, name: "Git", color: "#F05032", description: "Distributed version control system for tracking changes and collaborating on code." },
      { icon: SiGithub, name: "GitHub", color: "#8A2BE2", description: "Cloud-based hosting service for Git repositories, enabling collaboration and CI/CD workflows." },
      { icon: SiPostman, name: "Postman", color: "#FF6C37", description: "API development tool for designing, testing, and documenting RESTful services." },
      { icon: TbTerminal2, name: "Bash/CLI", color: "#8A2BE2", description: "Command-line interface for interacting with the operating system and automating tasks." },
    ]
  },
  {
    title: "Libraries & UI Frameworks",
    skills: [
      { icon: SiSocketdotio, name: "Socket.IO", color: "#8A2BE2", description: "Library for real-time, bidirectional communication between web clients and servers." },
      { icon: SiReactquery, name: "React Query", color: "#FF4154", description: "Data-fetching library for managing server state, caching, and synchronization in React apps." },
      { icon: SiFramer, name: "Framer Motion", color: "#0055FF", description: "Animation library for React, offering declarative motion components and gestures." },
      { icon: TbApi, name: "Shadcn UI", color: "#8A2BE2", description: "Collection of accessible, customizable UI components built on top of Tailwind CSS." },
    ]
  }
];

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState<any>(null);

  return (
    <section id="skills" className="py-24 relative">
      {/* Background gradient effect for dark mode */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-cyan-900/5 dark:from-purple-900/20 dark:to-cyan-900/10 pointer-events-none"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 -right-20 w-64 h-64 bg-gradient-to-br from-purple-600/5 to-cyan-400/5 dark:from-purple-600/10 dark:to-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 -left-32 w-96 h-96 bg-gradient-to-tr from-purple-600/5 to-cyan-400/5 dark:from-purple-600/10 dark:to-cyan-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-cyan-400 bg-clip-text text-transparent mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Technical Skills
          </motion.h2>
          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            My expertise across various technologies and programming languages
          </motion.p>
        </div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold text-center bg-gradient-to-r from-purple-600 to-cyan-400 bg-clip-text text-transparent">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <Dialog key={skill.name}>
                    <DialogTrigger asChild>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: skillIndex * 0.05 }}
                        whileHover={{ y: -5, scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="cursor-pointer"
                        onClick={() => setSelectedSkill(skill)}
                      >
                        <Card className="border border-purple-500/10 dark:border-purple-500/20 hover:border-purple-500/30 dark:hover:border-purple-500/50 transition-all duration-300 overflow-hidden group shadow-md hover:shadow-xl h-full">
                          <CardContent className="p-4 flex flex-col items-center justify-center space-y-3 relative">
                            {/* Glowing background effect */}
                            <div
                              className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg blur-xl"
                              style={{
                                background: `radial-gradient(circle, ${skill.color}40 0%, transparent 70%)`,
                                animation: 'pulse 2s infinite'
                              }}
                            />

                            {/* Icon with glow effect */}
                            <div className="relative">
                              <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-60 transition-opacity duration-300 rounded-full blur-md"
                                style={{
                                  background: `radial-gradient(circle, ${skill.color} 0%, transparent 70%)`,
                                  animation: 'pulse 2s infinite'
                                }}
                              />
                              <skill.icon
                                className="w-8 h-8 sm:w-10 sm:h-10 relative z-10 transition-all duration-300 group-hover:scale-110"
                                style={{ color: skill.color }}
                              />
                            </div>

                            <h4 className="text-xs sm:text-sm font-medium text-center transition-all duration-300 group-hover:text-purple-600 dark:group-hover:text-purple-400">
                              {skill.name}
                            </h4>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </DialogTrigger>
                    <DialogContent className="max-w-md">
                      <div
                        className="p-6 rounded-lg border-2 transition-all duration-300"
                        style={{
                          borderImage: `linear-gradient(45deg, ${skill.color}, ${skill.color}80, ${skill.color}) 1`,
                          background: `linear-gradient(135deg, ${skill.color}10, transparent)`
                        }}
                      >
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="relative">
                            <div
                              className="absolute inset-0 opacity-60 rounded-full blur-md animate-pulse"
                              style={{
                                background: `radial-gradient(circle, ${skill.color} 0%, transparent 70%)`
                              }}
                            />
                            <skill.icon
                              className="w-12 h-12 relative z-10"
                              style={{ color: skill.color }}
                            />
                          </div>
                          <h3 className="text-xl font-semibold">{skill.name}</h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {skill.description}
                        </p>
                      </div>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}