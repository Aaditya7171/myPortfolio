import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { SiHtml5, SiCss3, SiJavascript, SiBootstrap, SiJquery, SiNodedotjs, SiExpress, SiGit, SiGithub, SiCplusplus, SiEjs } from "react-icons/si";
import { TbApi } from "react-icons/tb";

const skills = [
  { icon: SiHtml5, name: "HTML5" },
  { icon: SiCss3, name: "CSS3" },
  { icon: SiJavascript, name: "JavaScript" },
  { icon: SiBootstrap, name: "Bootstrap 5" },
  { icon: SiJquery, name: "jQuery" },
  { icon: SiNodedotjs, name: "Node.js" },
  { icon: SiExpress, name: "Express.js" },
  { icon: SiEjs, name: "EJS" },
  { icon: TbApi, name: "REST API" },
  { icon: SiCplusplus, name: "C++" },
  { icon: SiGit, name: "Git" },
  { icon: SiGithub, name: "GitHub" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-purple-500 mb-12">Technical Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="p-6 flex flex-col items-center">
                  <skill.icon className="w-12 h-12 mb-4" />
                  <span className="font-medium">{skill.name}</span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}