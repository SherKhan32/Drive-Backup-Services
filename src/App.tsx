import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { Home } from "./pages/Home";
import { Architecture } from "./pages/Architecture";
import { HowItWorks } from "./pages/HowItWorks";
import { Security } from "./pages/Security";
import { GoogleDriveAccess } from "./pages/GoogleDriveAccess";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { TermsOfService } from "./pages/TermsOfService";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";
import { SITE_BASE } from "./lib/site";

export const App: React.FC = () => {
    return (
        <BrowserRouter basename={SITE_BASE}>
            <ScrollToTop />
            <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500 selection:text-white">
                <Navbar />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/architecture" element={<Architecture />} />
                        <Route path="/architecture/" element={<Architecture />} />
                        <Route path="/how-it-works" element={<HowItWorks />} />
                        <Route path="/how-it-works/" element={<HowItWorks />} />
                        <Route path="/security" element={<Security />} />
                        <Route path="/security/" element={<Security />} />
                        <Route
                            path="/google-drive-access"
                            element={<GoogleDriveAccess />}
                        />
                        <Route
                            path="/google-drive-access/"
                            element={<GoogleDriveAccess />}
                        />
                        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                        <Route path="/privacy-policy/" element={<PrivacyPolicy />} />
                        <Route path="/terms-of-service" element={<TermsOfService />} />
                        <Route path="/terms-of-service/" element={<TermsOfService />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/contact/" element={<Contact />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    );
};

export default App;
