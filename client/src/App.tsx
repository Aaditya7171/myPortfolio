import { Switch, Route, Router } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Photography from "@/components/photography";

// Import hash location hook
import { useHashLocation } from "wouter/use-hash-location";

function RouterContent() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background flex flex-col">
        <Nav />
        <main className="flex-1">
          {/* Use hash-based routing */}
          <Router hook={useHashLocation}>
            <RouterContent />
          </Router>
        </main>
        <Footer />
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}

export default App;
