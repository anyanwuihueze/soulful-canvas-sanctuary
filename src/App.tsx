import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Index from "./pages/Index";
import BlogPage from "./pages/Blog";
import NotFound from "./pages/NotFound";
import Gallery from "./pages/Gallery";

// Remove IntroAnimation for now
// import IntroAnimation from "./components/IntroAnimation";

const queryClient = new QueryClient();

const App = () => {
  // Skip intro
  const [showIntro, setShowIntro] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        {/* Remove this for now */}
        {/* {showIntro && <IntroAnimation onComplete={() => setShowIntro(false)} />} */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;