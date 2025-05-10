import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Card,
  CardContent
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Camera, Image as ImageIcon, Sunset } from "lucide-react";

// Define photo categories
const categories = {
  all: "All Photos",
  nature: "Nature",
  evening: "Evening"
};

// Photo data with categories
const photos = [
  {
    src: "/attached_assets/adobe_lightroom/Nature 1.jpg",
    alt: "Nature 1",
    category: "nature",
    description: "Beautiful landscape showcasing nature's splendor"
  },
  {
    src: "/attached_assets/adobe_lightroom/Nature 2.jpg",
    alt: "Nature 2",
    category: "nature",
    description: "Serene natural environment captured in perfect light"
  },
  {
    src: "/attached_assets/adobe_lightroom/Nature 3.jpg",
    alt: "Nature 3",
    category: "nature",
    description: "Breathtaking view of natural landscape"
  },
  {
    src: "/attached_assets/adobe_lightroom/Nature 4.jpg",
    alt: "Nature 4",
    category: "nature",
    description: "Stunning natural scenery with vibrant colors"
  },
  {
    src: "/attached_assets/adobe_lightroom/Nature 5.jpg",
    alt: "Nature 5",
    category: "nature",
    description: "Majestic landscape showing nature's beauty"
  },
  {
    src: "/attached_assets/adobe_lightroom/Nature 6.jpg",
    alt: "Nature 6",
    category: "nature",
    description: "Peaceful natural setting with amazing details"
  },
  {
    src: "/attached_assets/adobe_lightroom/Nature 7.jpg",
    alt: "Nature 7",
    category: "nature",
    description: "Captivating natural scene with perfect composition"
  },
  {
    src: "/attached_assets/adobe_lightroom/Nature 8.jpg",
    alt: "Nature 8",
    category: "nature",
    description: "Impressive landscape showcasing natural wonders"
  },
  {
    src: "/attached_assets/adobe_lightroom/Nature 9.jpg",
    alt: "Nature 9",
    category: "nature",
    description: "Remarkable natural vista with stunning details"
  },
  {
    src: "/attached_assets/adobe_lightroom/Evening1.jpg",
    alt: "Evening 1",
    category: "evening",
    description: "Beautiful sunset with warm golden hues"
  },
  {
    src: "/attached_assets/adobe_lightroom/Evening2.jpg",
    alt: "Evening 2",
    category: "evening",
    description: "Magical evening sky with vibrant colors"
  },
  {
    src: "/attached_assets/adobe_lightroom/Evening3.jpg",
    alt: "Evening 3",
    category: "evening",
    description: "Enchanting evening atmosphere with perfect lighting"
  }
];

export default function PhotographyPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [selectedPhotoDetails, setSelectedPhotoDetails] = useState<any>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Filter photos based on selected category
  const filteredPhotos = selectedCategory === "all"
    ? photos
    : photos.filter(photo => photo.category === selectedCategory);

  // Handle image load
  const handleImageLoad = () => {
    setImagesLoaded(prev => prev + 1);
    if (imagesLoaded >= photos.length - 1) {
      setIsLoading(false);
    }
  };

  // Open dialog with selected photo
  const openPhotoDialog = (photo: any) => {
    setSelectedPhoto(photo.src);
    setSelectedPhotoDetails(photo);
    setIsDialogOpen(true);
  };

  // Loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-background to-background/80 relative z-0">
      {/* Ensure any background elements don't capture clicks */}
      <div className="absolute inset-0 pointer-events-none"></div>
      {/* Hero section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 mb-12 text-center"
      >
        <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 text-transparent bg-clip-text mb-4">
          Photography Gallery
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Explore a collection of captivating moments frozen in time, showcasing the beauty of nature and evening landscapes.
        </p>
      </motion.div>

      {/* Category tabs */}
      <div className="container mx-auto px-4 mb-8 relative z-0">
        <Tabs defaultValue="all" onValueChange={setSelectedCategory}>
          <TabsList className="mx-auto flex justify-center">
            <TabsTrigger value="all" className="flex items-center gap-2">
              <ImageIcon className="w-4 h-4" />
              <span>All Photos</span>
            </TabsTrigger>
            <TabsTrigger value="nature" className="flex items-center gap-2">
              <Camera className="w-4 h-4" />
              <span>Nature</span>
            </TabsTrigger>
            <TabsTrigger value="evening" className="flex items-center gap-2">
              <Sunset className="w-4 h-4" />
              <span>Evening</span>
            </TabsTrigger>
          </TabsList>

          {/* Photo grid */}
          <TabsContent value={selectedCategory} className="mt-8">
            {isLoading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <AnimatePresence>
                  {filteredPhotos.map((photo, index) => (
                    <motion.div
                      key={photo.src}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 100
                      }}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                      }}
                      className="cursor-pointer"
                      onClick={() => openPhotoDialog(photo)}
                    >
                      <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300">
                        <CardContent className="p-2">
                          <div className="aspect-square overflow-hidden rounded-md relative">
                            <img
                              src={photo.src}
                              alt={photo.alt}
                              className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
                              onLoad={handleImageLoad}
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                              <p className="text-white text-sm font-medium">{photo.alt}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>

      {/* Photo dialog - with fixed z-index to not interfere with navbar */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl z-40">
          <DialogTitle className="text-xl font-bold text-primary">
            {selectedPhotoDetails?.alt}
          </DialogTitle>
          <DialogDescription>
            {selectedPhotoDetails?.description}
          </DialogDescription>
          <div className="mt-4 overflow-hidden rounded-lg">
            {selectedPhoto && (
              <img
                src={selectedPhoto}
                alt={selectedPhotoDetails?.alt || "Selected photo"}
                className="w-full h-auto"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
