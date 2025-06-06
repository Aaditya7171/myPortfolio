import { motion } from "framer-motion";
import { FileText } from "lucide-react";

const certificates = [
    {
        name: "Software Engineer Intern",
        url: "https://drive.google.com/file/d/1kl-F2QfEez-bh8KUOD1MAvAeoMO39j5l/view?usp=sharing",
        image: "/certificates/Software-Engineer-Intern.png"
    },
    {
        name: "CSS Basic",
        url: "https://drive.google.com/file/d/1nwjtuf4W3ulpF3qSofnwoYdOIT9DV_Hq/view?usp=sharing",
        image: "/certificates/CSS-Basic.png"
    },
    {
        name: "Javascript Intermediate",
        url: "https://drive.google.com/file/d/1SEGCULpNg4iDBTWlIf4pcTfcU1AtTR2L/view?usp=sharing",
        image: "/certificates/Javascript-Intermediate.png"
    },
    {
        name: "Flipkart Grid 6.0",
        url: "https://drive.google.com/file/d/1OiBHCDWw1zKXzFEmXAKYZZAGl3exN7xb/view?usp=sharing",
        image: "/certificates/Grid6.0.png"
    },
    {
        name: "Full Stack Web Development",
        url: "https://drive.google.com/file/d/19Yj0aGdunDNpr01I8ihUztL6UxiTgC-S/view?usp=sharing",
        image: "/certificates/WebDev.png"
    },
    {
        name: "Tata Crucible Campus Quiz 2024",
        url: "https://drive.google.com/file/d/1qzrxQV8BkS9pdaXkRplbCsopkLKblxIu/view?usp=sharing",
        image: "/certificates/Tata.png"
    }
];

export default function Certificates() {
    return (
        <section id="certificates" className="py-24 relative">
            {/* Background gradient effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-cyan-900/5 dark:from-purple-900/20 dark:to-cyan-900/10 pointer-events-none"></div>

            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-40 -left-20 w-64 h-64 bg-gradient-to-br from-purple-600/5 to-cyan-400/5 dark:from-purple-600/10 dark:to-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 -right-32 w-96 h-96 bg-gradient-to-tr from-purple-600/5 to-cyan-400/5 dark:from-purple-600/10 dark:to-cyan-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
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
                        Certificates & Achievements
                    </motion.h2>
                    <motion.p
                        className="text-muted-foreground max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Recognition of my skills and accomplishments
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certificates.map((certificate, index) => (
                        <motion.div
                            key={certificate.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <a href={certificate.url} target="_blank" rel="noopener noreferrer" className="block h-full">
                                <div className="h-full border border-purple-500/10 dark:border-purple-500/20 hover:border-purple-500/30 dark:hover:border-purple-500/50 bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
                                    <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-900/20 to-cyan-900/20 dark:from-purple-900/40 dark:to-cyan-900/40">
                                            <FileText className="w-16 h-16 text-white/30 dark:text-white/20" />
                                        </div>
                                        <div className="absolute inset-0 flex items-center justify-center p-2">
                                            <img
                                                src={certificate.image}
                                                alt={certificate.name}
                                                className="max-w-full max-h-full object-contain opacity-90 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                                            />
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                            <span className="inline-flex items-center rounded-full bg-purple-600/80 px-3 py-1 text-xs font-medium text-white">
                                                View Certificate
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-medium text-lg group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300 flex items-center gap-2">
                                            <FileText className="w-5 h-5" />
                                            {certificate.name}
                                        </h3>
                                    </div>
                                </div>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
