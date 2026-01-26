import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// 1. CHANGEZ CETTE LIGNE (Remplacez BrowserRouter par HashRouter)
import { HashRouter, Routes, Route } from "react-router-dom"; 
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { ChatProvider } from "./contexts/ChatContext";
import CustomCursor from "./components/CustomCursor";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ChatProvider>
      {/* 2. CHANGEZ CETTE BALISE (BrowserRouter -> HashRouter) */}
      <HashRouter> 
          <CustomCursor />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter> 
      </ChatProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;