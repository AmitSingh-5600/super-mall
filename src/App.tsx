
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ShopsPage from "./pages/ShopsPage";
import FoodCourtPage from "./pages/FoodCourtPage";
import MovieHallPage from "./pages/MovieHallPage";
import ArcadePage from "./pages/ArcadePage";
import KidsZonePage from "./pages/KidsZonePage";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="super-mall">
        <Routes>
          <Route path="/" element={<Layout><Index /></Layout>} />
          <Route path="/shops" element={<Layout><ShopsPage /></Layout>} />
          <Route path="/food-court" element={<Layout><FoodCourtPage /></Layout>} />
          <Route path="/movie-hall" element={<Layout><MovieHallPage /></Layout>} />
          <Route path="/arcade" element={<Layout><ArcadePage /></Layout>} />
          <Route path="/kids-zone" element={<Layout><KidsZonePage /></Layout>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
