import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Features } from "./pages/Features";
import { CloudSync } from "./pages/CloudSync";
import { CalculatorPage } from "./pages/CalculatorPage";
import { InvoicingPage } from "./pages/InvoicingPage";
import { DownloadPage } from "./pages/DownloadPage";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { TermsOfService } from "./pages/TermsOfService";

export const App: React.FC = () => {
    return (
        <HashRouter>
            <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500 selection:text-white">
                <Navbar />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/features" element={<Features />} />
                        <Route path="/cloud-sync" element={<CloudSync />} />
                        <Route path="/calculator" element={<CalculatorPage />} />
                        <Route path="/invoicing" element={<InvoicingPage />} />
                        <Route path="/download" element={<DownloadPage />} />
                        <Route path="/privacy" element={<PrivacyPolicy />} />
                        <Route path="/terms" element={<TermsOfService />} />
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </HashRouter>
    );
};

export default App;
