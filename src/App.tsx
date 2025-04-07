
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SoulSeedJourney from "./pages/SoulSeedJourney";
import LifeCredits from "./pages/LifeCredits";
import WisdomStream from "./pages/WisdomStream";
import HoloGarden from "./pages/HoloGarden";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/soulseed" element={<SoulSeedJourney />} />
          <Route path="/lifecredits" element={<LifeCredits />} />
          <Route path="/wisdom" element={<WisdomStream />} />
          <Route path="/hologarden" element={<HoloGarden />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
