import { motion } from "framer-motion";
import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogDescription,
    DialogTrigger,
} from "@/components/ui/dialog";

const photos = [
    "./attached_assets/adobe_lightroom/Nature1.jpg",
    "./attached_assets/adobe_lightroom/Nature2.jpg",
    "./attached_assets/adobe_lightroom/Nature3.jpg",
    "./attached_assets/adobe_lightroom/Nature4.jpg",
    "./attached_assets/adobe_lightroom/Nature5.jpg",
    "./attached_assets/adobe_lightroom/Nature6.jpg",
    "./attached_assets/adobe_lightroom/Nature7.jpg",
    "./attached_assets/adobe_lightroom/Nature8.jpg",
    "./attached_assets/adobe_lightroom/Nature9.jpg",
    "./attached_assets/adobe_lightroom/Evening1.jpg",
    "./attached_assets/adobe_lightroom/Evening2.jpg",
    "./attached_assets/adobe_lightroom/Evening3.jpg"
];

export default function Photography() {
    const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
    const [imagesLoaded, setImagesLoaded] = useState(0);

    const handleImageLoad = () => {
        setImagesLoaded(prev => prev + 1);
    };

    return (
        <section id="photography" className="py-24">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-4xl font-bold text-purple-500 mb-8">Photography</h2>
                    <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                        {photos.map((photo, index) => (
                            <Dialog key={photo}>
                                <DialogTrigger asChild>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="aspect-square overflow-hidden rounded-lg cursor-pointer relative max-w-[200px] mx-auto w-full"
                                        onClick={() => setSelectedPhoto(photo)}
                                    >
                                        <img
                                            src={photo}
                                            alt={`Photography ${index + 1}`}
                                            loading="lazy"
                                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                            onLoad={handleImageLoad}
                                            style={{
                                                filter: imagesLoaded < photos.length ? 'blur(10px)' : 'none',
                                                transition: 'filter 0.3s ease-out'
                                            }}
                                        />
                                    </motion.div>
                                </DialogTrigger>
                                <DialogContent className="max-w-3xl">
                                    <DialogTitle className="sr-only">
                                        Photography Image {index + 1}
                                    </DialogTitle>
                                    <DialogDescription className="sr-only">
                                        Full view of photography image {index + 1}
                                    </DialogDescription>
                                    {selectedPhoto && (
                                        <img
                                            src={selectedPhoto}
                                            alt="Selected photography"
                                            className="w-full h-auto"
                                            loading="lazy"
                                        />
                                    )}
                                </DialogContent>
                            </Dialog>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
} 