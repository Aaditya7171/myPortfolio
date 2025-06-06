import { Github, Linkedin, Instagram, Code2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="bg-background border-t py-8 relative overflow-hidden">
            {/* Enhanced background glow effects similar to About/Skills sections */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-32 h-32 bg-purple-600/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-purple-400/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            {/* Animated background elements with breathing effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-10 -right-10 w-48 h-48 bg-gradient-to-br from-purple-600/10 to-cyan-400/10 dark:from-purple-600/20 dark:to-cyan-400/20 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
                <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-gradient-to-tr from-purple-600/10 to-cyan-400/10 dark:from-purple-600/20 dark:to-cyan-400/20 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-gradient-to-r from-purple-500/5 to-purple-600/5 dark:from-purple-500/10 dark:to-purple-600/10 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Purple glowing stars */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-4 left-10 w-1 h-1 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0s' }}></div>
                <div className="absolute top-6 right-20 w-1.5 h-1.5 bg-purple-300 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-4 left-1/4 w-1 h-1 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
                <div className="absolute bottom-6 right-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
                <div className="absolute top-8 left-1/2 w-1 h-1 bg-purple-300 rounded-full animate-pulse" style={{ animationDelay: '4s' }}></div>
                <div className="absolute bottom-8 right-10 w-1 h-1 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute top-2 left-3/4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                <div className="absolute bottom-2 right-1/4 w-1 h-1 bg-purple-300 rounded-full animate-pulse" style={{ animationDelay: '2.5s' }}></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col items-center gap-4">
                    <div className="flex items-center gap-6">
                        <motion.a
                            href="https://www.linkedin.com/in/adityatomar91/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative text-muted-foreground hover:text-primary transition-colors p-3 rounded-full group overflow-hidden"
                            whileHover={{
                                scale: 1.1,
                                y: -2
                            }}
                            whileTap={{ scale: 0.95 }}
                            animate={{
                                y: [0, -1, 0],
                            }}
                            transition={{
                                y: {
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }
                            }}
                        >
                            {/* Glowing background effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>

                            {/* Shine effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-full"></div>

                            <Linkedin className="w-6 h-6 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                            <span className="sr-only">LinkedIn</span>
                        </motion.a>

                        <motion.a
                            href="https://github.com/Aaditya7171"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative text-muted-foreground hover:text-primary transition-colors p-3 rounded-xl group overflow-hidden border border-transparent hover:border-purple-500/30 backdrop-blur-sm"
                            whileHover={{
                                scale: 1.1,
                                y: -3
                            }}
                            whileTap={{ scale: 0.95 }}
                            animate={{
                                y: [0, -1, 0],
                            }}
                            transition={{
                                y: {
                                    duration: 3.2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 0.5
                                }
                            }}
                        >
                            {/* Enhanced purple theme glowing background effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-purple-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/15 to-purple-400/15 opacity-0 group-hover:opacity-70 transition-opacity duration-500 rounded-xl blur-sm"></div>

                            {/* Enhanced shine effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-xl"></div>

                            {/* Breathing background effect */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-purple-400/5 rounded-xl"
                                animate={{
                                    opacity: [0.3, 0.6, 0.3],
                                    scale: [1, 1.05, 1]
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 0.5
                                }}
                            />

                            <Github className="w-6 h-6 relative z-10 group-hover:rotate-12 transition-transform duration-300 group-hover:text-purple-300" />
                            <span className="sr-only">GitHub</span>
                        </motion.a>

                        <motion.a
                            href="https://leetcode.com/u/Aditya1919/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative text-muted-foreground hover:text-primary transition-colors p-3 rounded-xl group overflow-hidden border border-transparent hover:border-purple-500/30 backdrop-blur-sm"
                            whileHover={{
                                scale: 1.1,
                                y: -3
                            }}
                            whileTap={{ scale: 0.95 }}
                            animate={{
                                y: [0, -1, 0],
                            }}
                            transition={{
                                y: {
                                    duration: 2.8,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 1
                                }
                            }}
                        >
                            {/* Enhanced purple theme glowing background effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-cyan-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/15 to-cyan-400/15 opacity-0 group-hover:opacity-70 transition-opacity duration-500 rounded-xl blur-sm"></div>

                            {/* Enhanced shine effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-xl"></div>

                            {/* Breathing background effect */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-cyan-400/5 rounded-xl"
                                animate={{
                                    opacity: [0.3, 0.6, 0.3],
                                    scale: [1, 1.05, 1]
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 1
                                }}
                            />

                            <Code2 className="w-6 h-6 relative z-10 group-hover:rotate-12 transition-transform duration-300 group-hover:text-cyan-300" />
                            <span className="sr-only">LeetCode</span>
                        </motion.a>

                        <motion.a
                            href="https://www.instagram.com/innocent_aditya91/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative text-muted-foreground hover:text-primary transition-colors p-3 rounded-xl group overflow-hidden border border-transparent hover:border-purple-500/30 backdrop-blur-sm"
                            whileHover={{
                                scale: 1.1,
                                y: -3
                            }}
                            whileTap={{ scale: 0.95 }}
                            animate={{
                                y: [0, -1, 0],
                            }}
                            transition={{
                                y: {
                                    duration: 3.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 1.5
                                }
                            }}
                        >
                            {/* Enhanced purple theme glowing background effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-purple-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/15 to-purple-400/15 opacity-0 group-hover:opacity-70 transition-opacity duration-500 rounded-xl blur-sm"></div>

                            {/* Enhanced shine effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-xl"></div>

                            {/* Breathing background effect */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-purple-400/5 rounded-xl"
                                animate={{
                                    opacity: [0.3, 0.6, 0.3],
                                    scale: [1, 1.05, 1]
                                }}
                                transition={{
                                    duration: 3.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 1.5
                                }}
                            />

                            <Instagram className="w-6 h-6 relative z-10 group-hover:rotate-12 transition-transform duration-300 group-hover:text-purple-300" />
                            <span className="sr-only">Instagram</span>
                        </motion.a>
                    </div>

                    {/* Thank you note */}
                    <motion.div
                        className="text-center mb-3"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <motion.p
                            className="text-sm text-purple-600 dark:text-purple-400 font-medium"
                            animate={{
                                opacity: [0.8, 1, 0.8],
                                scale: [1, 1.02, 1]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            ✨ Thank you for visiting! ✨
                        </motion.p>
                    </motion.div>

                    <motion.p
                        className="text-sm text-muted-foreground"
                        animate={{
                            opacity: [0.7, 1, 0.7],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        © {new Date().getFullYear()} Aditya Tomar. All rights reserved.
                    </motion.p>
                </div>
            </div>
        </footer>
    );
}