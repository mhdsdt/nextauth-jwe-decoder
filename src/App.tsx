import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { JWTDecoderApp } from "@/pages/Index";
import NotFound from "@/pages/NotFound";
import { ThemeProvider } from "@/lib/theme-provider.tsx";
import { injectSpeedInsights } from '@vercel/speed-insights';
import { inject } from '@vercel/analytics';

injectSpeedInsights();
inject();

const App = () => (
    <TooltipProvider>
      <Sonner richColors closeButton />
      <ThemeProvider defaultTheme="system">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<JWTDecoderApp />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </TooltipProvider>
);

export default App;
