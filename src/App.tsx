import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Index from "./pages/Index";
import BlogPage from "./pages/Blog";
import NotFound from "./pages/NotFound";
import Gallery from "./pages/Gallery"; // Import the Gallery component
import IntroAnimation from "./components/IntroAnimation";

const queryClient = new QueryClient();

const App = () => {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {showIntro && <IntroAnimation onComplete={() => setShowIntro(false)} />}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/gallery" element={<Gallery />} /> {/* Add the route for the gallery page */}
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
