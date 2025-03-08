import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-purple-500 mb-8">About Me</h2>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-48 h-48 rounded-full overflow-hidden flex-shrink-0">

            </div>

            <div className="max-w-2xl text-left">
              <p className="text-lg text-muted-foreground mb-4">
                I'm an aspiring Computer Science student specializing in full-stack web development,
                currently pursuing my Bachelor of Technology in Computer Science Engineering at LNCTS, Indore
                with a CGPA of 7.63.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                I have a strong foundation in data structures and algorithms, having solved over 100 problems
                on LeetCode/HackerRank and earned a 3-star HackerRank badge. I'm passionate about using AI tools
                to enhance efficiency and accuracy in development.
              </p>
              <p className="text-lg text-muted-foreground">
                When I'm not coding, I actively participate in coding contests to sharpen my analytical skills
                and contribute to collaborative coding projects.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}