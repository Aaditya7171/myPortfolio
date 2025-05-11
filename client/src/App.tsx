import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import PhotographyPage from "@/pages/photography";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import LoadingScreen from "@/components/loading-screen";
import { useState, useEffect } from "react";

// Import profile image
import profileImage from "/attached_assets/dp.jpg";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/photography" component={PhotographyPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [location] = useLocation();
  const isPhotographyPage = location === "/photography";

  // Simulate loading time or use for actual loading tasks
  useEffect(() => {
    // You can add actual loading logic here if needed
    const handleLoad = () => {
      // If the page was already loaded (e.g., on refresh), still show loading animation
      if (document.readyState === 'complete') {
        // Force loading screen to show for at least 2.5 seconds for better UX
        setTimeout(() => {
          setIsLoading(false);
        }, 2500);
      }
    };

    window.addEventListener('load', handleLoad);

    // If the page is already loaded, still show loading animation
    if (document.readyState === 'complete') {
      setTimeout(() => {
        setIsLoading(false);
      }, 2500);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <LoadingScreen
        onLoadingComplete={() => setIsLoading(false)}
        profileImage={profileImage}
      />

      <div className={`min-h-screen bg-background flex flex-col transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        {/* Only show Nav on non-photography pages */}
        {!isPhotographyPage && <Nav />}
        <main className="flex-1">
          <Router />
        </main>
        {!isPhotographyPage && <Footer />}
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}

export default App;
