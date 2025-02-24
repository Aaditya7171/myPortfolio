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
      const response = await fetch('/attached_assets/Resume-96.pdf');
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
    <section id="resume" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-purple-500 mb-12">Resume</h2>
          <div className="flex justify-center">
            <Button
              onClick={handleDownload}
              disabled={isDownloading}
              className={`w-full max-w-sm bg-purple-600 hover:bg-purple-700 text-white transition-colors ${isDownloading ? 'opacity-70 cursor-not-allowed' : ''
                }`}
            >
              {isDownloading ? (
                <div className="flex items-center justify-center gap-2">
                  <span className="animate-spin">⏳</span>
                  <span>Downloading...</span>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Download Resume
                </div>
              )}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
