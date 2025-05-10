import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Resume() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    console.log('Download started');
    setIsDownloading(true);

    // Add a small delay to ensure the loading state is visible
    await new Promise(resolve => setTimeout(resolve, 1000));

    try {
      console.log('Fetching PDF');
      const response = await fetch('/attached_assets/Resume-91.pdf');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Resume-Aditya.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      console.log('Download completed');
    } catch (error) {
      console.error('Error downloading resume:', error);
    } finally {
      setIsDownloading(false);
      console.log('Download state reset');
    }
  };

  console.log('Current download state:', isDownloading);

  return (
    <section id="resume" className="py-24 relative">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/5 to-cyan-900/5 dark:from-purple-900/10 dark:to-cyan-900/10 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <motion.h2
            className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-cyan-400 bg-clip-text text-transparent mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Resume
          </motion.h2>

          <motion.div
            className="w-full max-w-md p-6 rounded-lg border border-purple-500/20 dark:border-purple-500/30 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm shadow-lg"
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-cyan-400 flex items-center justify-center">
                <FileText className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-semibold">My Resume</h3>

              <p className="text-center text-muted-foreground mb-4">
                Download my resume to learn more about my skills, experience, and qualifications.
              </p>

              <motion.div
                className="w-full"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  onClick={handleDownload}
                  disabled={isDownloading}
                  className={`w-full relative overflow-hidden group bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white transition-all duration-300 ${isDownloading ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                >
                  {/* Animated background effect */}
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600/0 via-white/30 to-purple-600/0 -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-out"></span>

                  {isDownloading ? (
                    <div className="flex items-center justify-center gap-2 relative z-10">
                      <span className="animate-spin">⏳</span>
                      <span>Downloading...</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 relative z-10">
                      <FileText className="w-4 h-4" />
                      <span>Download Resume</span>
                    </div>
                  )}
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
