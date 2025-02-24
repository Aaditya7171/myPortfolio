import { motion } from "framer-motion";
import { FileText } from "lucide-react";

const certificates = [
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
        <section id="certificates" className="py-24 bg-gradient-to-b from-gray-900 to-black text-white">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center mb-12">
                    <h2 className="text-4xl font-bold text-purple-500">Certificates</h2>
                    <a
                        href="https://drive.google.com/file/d/1kI0vXaEYfSU2a2sGxcYUek3DkV1R5k21/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition"
                    >
                        Download All
                    </a>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certificates.map((certificate, index) => (
                        <motion.div
                            key={certificate.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <a href={certificate.url} target="_blank" rel="noopener noreferrer">
                                <div className="bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                                    <div className="mb-4">
                                        <div className="flex items-center gap-2 text-xl font-semibold">
                                            <FileText className="w-6 h-6" />
                                            {certificate.name}
                                        </div>
                                    </div>
                                    <div className="relative aspect-video bg-gray-800 rounded-lg overflow-hidden">
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <FileText className="w-16 h-16 text-gray-600" />
                                        </div>
                                        <img
                                            src={certificate.image}
                                            alt={certificate.name}
                                            className="absolute inset-0 w-full h-full object-cover opacity-75 hover:opacity-100 transition-opacity duration-300"
                                        />
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
