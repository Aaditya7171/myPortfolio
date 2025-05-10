import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { SiHtml5, SiCss3, SiJavascript, SiJquery, SiNodedotjs, SiExpress, SiGithub, SiCplusplus, SiEjs, SiPostgresql, SiTypescript } from "react-icons/si";
import { TbApi } from "react-icons/tb";

const skills = [
  { icon: SiHtml5, name: "HTML5", proficiency: 9 },
  { icon: SiCss3, name: "CSS3", proficiency: 8 },
  { icon: SiJavascript, name: "JavaScript", proficiency: 8 },
  { icon: SiJquery, name: "jQuery", proficiency: 7 },
  { icon: SiNodedotjs, name: "Node.js", proficiency: 9 },
  { icon: SiExpress, name: "Express.js", proficiency: 9 },
  { icon: SiEjs, name: "EJS", proficiency: 8 },
  { icon: TbApi, name: "REST API", proficiency: 7 },
  { icon: SiCplusplus, name: "C++", proficiency: 10 },
  { icon: SiGithub, name: "GitHub", proficiency: 7 },
  { icon: SiPostgresql, name: "PostgreSQL", proficiency: 7 },
  { icon: SiTypescript, name: "TypeScript", proficiency: 8 },
];

export default function Skills() {
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
            My proficiency levels across various technologies and programming languages
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <Card className="border border-purple-500/10 dark:border-purple-500/20 hover:border-purple-500/30 dark:hover:border-purple-500/50 transition-all duration-300 overflow-hidden group shadow-md hover:shadow-xl h-full">
                <CardContent className="p-4 sm:p-5 relative z-10">
                  <div className="flex items-center mb-3">
                    <div className="bg-gradient-to-br from-purple-600/10 to-cyan-400/10 dark:from-purple-600/20 dark:to-cyan-400/20 p-2 sm:p-3 rounded-lg mr-3 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-md">
                      <skill.icon className="w-6 h-6 sm:w-7 sm:h-7 text-purple-600 dark:text-purple-400 transition-all duration-300 group-hover:text-cyan-500 dark:group-hover:text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-base sm:text-lg transition-all duration-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 group-hover:translate-x-1">{skill.name}</h3>
                      <div className="mt-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.05 + 0.3, duration: 0.8, ease: "easeOut" }}
                        >
                          <div className="relative">
                            {/* Background track */}
                            <div className="h-3 sm:h-3.5 bg-gradient-to-r from-purple-100/50 to-cyan-100/50 dark:from-purple-900/30 dark:to-cyan-900/30 rounded-full overflow-hidden"></div>

                            {/* Animated progress bar */}
                            <div
                              className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-600 via-fuchsia-500 to-cyan-400 rounded-full transition-all duration-500 group-hover:shadow-[0_0_8px_rgba(138,43,226,0.6)] group-hover:brightness-110"
                              style={{ width: `${skill.proficiency * 10}%`, transition: 'width 1s ease-out, box-shadow 0.3s ease' }}
                            >
                              {/* Animated shine effect */}
                              <div className="absolute inset-0 overflow-hidden">
                                <div
                                  className="w-[120%] h-full absolute -left-[100%] top-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 group-hover:animate-shine"
                                ></div>
                              </div>

                              {/* Subtle pattern overlay */}
                              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4=')] opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>

                  {/* Removed beginner, intermediate, expert text as the score already represents proficiency */}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}