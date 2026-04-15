import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AppLayout } from "@/components/AppLayout";
import Index from "./pages/Index.tsx";
import Clients from "./pages/Clients.tsx";
import Orders from "./pages/Orders.tsx";
import Products from "./pages/Products.tsx";
import Payments from "./pages/Payments.tsx";
import Billing from "./pages/Billing.tsx";
import Workers from "./pages/Workers.tsx";
import Machinery from "./pages/Machinery.tsx";
import Campaigns from "./pages/Campaigns.tsx";
import Automation from "./pages/Automation.tsx";
import Analytics from "./pages/Analytics.tsx";
import Company from "./pages/Company.tsx";
import Settings from "./pages/Settings.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppLayout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/products" element={<Products />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/workers" element={<Workers />} />
            <Route path="/machinery" element={<Machinery />} />
            <Route path="/campaigns" element={<Campaigns />} />
            <Route path="/automation" element={<Automation />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/company" element={<Company />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AppLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
