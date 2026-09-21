import React from "react";
import { Link } from "react-router-dom";
import {
    Download,
    Cloud,
    Database,
    Printer,
    Layers,
    ArrowRight,
    CheckCircle2,
    Sparkles,
    Calculator,
    HelpCircle,
} from "lucide-react";

export const Home: React.FC = () => {
    return (
        <div className="relative min-h-screen pt-20 overflow-hidden">
            {/* Hero Glow Background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-emerald-500/15 via-teal-500/5 to-transparent blur-3xl pointer-events-none" />

            {/* Hero Section */}
            <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 lg:pt-20 lg:pb-24">
                <div className="text-center max-w-4xl mx-auto space-y-6">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-emerald-400 text-xs font-semibold shadow-inner shadow-emerald-950/50 animate-pulse-slow">
                        <span className="flex h-2 w-2 rounded-full bg-emerald-400"></span>
                        <span>Installment Management System 2026 Edition</span>
                        <span className="text-slate-500">•</span>
                        <span className="text-slate-300">Google OAuth Verified</span>
                    </div>

                    {/* Main Headline */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
                        Enterprise Installment & <br className="hidden sm:inline" />
                        <span className="text-gradient-emerald">Financing Management</span>
                    </h1>

                    {/* Sub-headline */}
                    <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
                        Blazing-fast offline-first desktop solution for retail installments, leasing
                        companies, and micro-financiers. Featuring automated SQLite ledgers, 1-click
                        Google Drive cloud backups, and thermal ESC/POS receipt printing.
                    </p>

                    {/* CTA Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <Link
                            to="/download"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold text-base shadow-xl shadow-emerald-950/60 hover:from-emerald-400 hover:to-teal-500 hover:shadow-emerald-500/25 transition-all duration-300 active:scale-95 group"
                        >
                            <Download className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
                            <span>Download Desktop App</span>
                        </Link>

                        <Link
                            to="/features"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-slate-900/90 border border-slate-700/80 text-slate-200 font-semibold text-base hover:bg-slate-800 hover:text-white transition-all shadow-md group"
                        >
                            <span>Explore All Features</span>
                            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5" />
                        </Link>
                    </div>

                    {/* Trust Highlights */}
                    <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
                        <div className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                            <span>100% Offline SQLite Architecture</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                            <span>Official Google Drive OAuth 2.0</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                            <span>58mm / 80mm ESC/POS Ready</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                            <span>Zero Monthly Subscriptions</span>
                        </div>
                    </div>
                </div>

                {/* Hero Desktop Mockup UI Display */}
                <div className="mt-14 relative max-w-5xl mx-auto">
                    <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/30 to-teal-500/30 rounded-3xl blur-2xl opacity-60 pointer-events-none" />

                    <div className="relative rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden">
                        <div className="h-10 bg-slate-950/90 border-b border-slate-800 px-4 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                                <span className="text-[11px] font-mono text-slate-400 ml-3">
                                    Installment Manager Desktop v2.4.0 — Enterprise Edition
                                </span>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-emerald-400">
                                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                <span>SQLite Connected</span>
                            </div>
                        </div>

                        <div className="relative group">
                            <img
                                src="./images/hero-dashboard.jpg"
                                alt="Installment Management System Desktop Dashboard"
                                className="w-full h-auto object-cover transform transition duration-500 group-hover:scale-[1.005]"
                                loading="eager"
                            />
                            <div className="absolute bottom-4 left-4 hidden sm:flex items-center gap-3 bg-slate-950/85 backdrop-blur-md border border-slate-800 px-4 py-2 rounded-xl text-xs text-slate-300 shadow-lg">
                                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                                <span>
                                    Live Collection Stream: <b>$112,500</b> collected this cycle
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Dedicated Modules Grid Section */}
            <section className="relative py-20 bg-slate-950/60 border-t border-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                            <Layers className="w-3.5 h-3.5" />
                            <span>Explore The System Modules</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                            Modular Power Built for High Velocity Retail
                        </h2>
                        <p className="text-slate-400 text-sm sm:text-base">
                            Each module has its own dedicated page with live interactive
                            demonstrations and architectural blueprints.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Card 1: Features & Ledger */}
                        <Link
                            to="/features"
                            className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-800/80 flex flex-col justify-between group"
                        >
                            <div className="space-y-3">
                                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                                    <Database className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                                    Offline SQLite & Ledgers
                                </h3>
                                <p className="text-xs text-slate-400 leading-relaxed">
                                    Fast customer profiles, CNIC identity verification, guarantor
                                    tracking, and automated running balance ledger.
                                </p>
                            </div>
                            <div className="mt-6 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-emerald-400 font-semibold">
                                <span>View Features Page</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>

                        {/* Card 2: Cloud Sync */}
                        <Link
                            to="/cloud-sync"
                            className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-800/80 flex flex-col justify-between group"
                        >
                            <div className="space-y-3">
                                <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 group-hover:scale-110 transition-transform">
                                    <Cloud className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-white group-hover:text-teal-300 transition-colors">
                                    Google Drive Cloud Sync
                                </h3>
                                <p className="text-xs text-slate-400 leading-relaxed">
                                    Interactive architecture diagram, AES-256 local encryption, and
                                    Google Cloud OAuth verification disclosures.
                                </p>
                            </div>
                            <div className="mt-6 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-teal-400 font-semibold">
                                <span>View Cloud Sync Page</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>

                        {/* Card 3: Calculator */}
                        <Link
                            to="/calculator"
                            className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-800/80 flex flex-col justify-between group"
                        >
                            <div className="space-y-3">
                                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                                    <Calculator className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                                    Installment Calculator
                                </h3>
                                <p className="text-xs text-slate-400 leading-relaxed">
                                    Test loan amounts, down payment percentages, markup rates, and
                                    inspect monthly repayment amortizations.
                                </p>
                            </div>
                            <div className="mt-6 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-emerald-400 font-semibold">
                                <span>View Calculator Page</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>

                        {/* Card 4: Invoicing */}
                        <Link
                            to="/invoicing"
                            className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-800/80 flex flex-col justify-between group"
                        >
                            <div className="space-y-3">
                                <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 group-hover:scale-110 transition-transform">
                                    <Printer className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-white group-hover:text-teal-300 transition-colors">
                                    Thermal POS & A4 Invoices
                                </h3>
                                <p className="text-xs text-slate-400 leading-relaxed">
                                    Interactive 58mm/80mm receipt generator with dynamic barcodes,
                                    QR codes, and laser A4 contract statements.
                                </p>
                            </div>
                            <div className="mt-6 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-teal-400 font-semibold">
                                <span>View Invoicing Page</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Visual Feature Previews Carousel / Section */}
            <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="glass-card rounded-3xl p-6 sm:p-10 border border-slate-800">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-6 space-y-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                                <Sparkles className="w-3.5 h-3.5" />
                                <span>Zero Latency Local Speed</span>
                            </div>
                            <h2 className="text-3xl font-extrabold text-white tracking-tight">
                                Designed to Run on Any Computer Without Internet
                            </h2>
                            <p className="text-slate-300 text-sm leading-relaxed">
                                Whether you run an electronics shop in a busy bazaar, a motorcycle
                                leasing showroom, or a micro-finance cooperative, Installment
                                Manager guarantees that your staff can issue receipts, record down
                                payments, and track installments even during power or internet cuts.
                            </p>
                            <div className="pt-2 flex gap-4">
                                <Link
                                    to="/download"
                                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold text-xs flex items-center gap-2 shadow-md hover:from-emerald-400 hover:to-teal-500 transition-all"
                                >
                                    <Download className="w-4 h-4" />
                                    <span>Download Desktop Edition</span>
                                </Link>
                                <Link
                                    to="/features"
                                    className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-semibold border border-slate-800 transition-colors"
                                >
                                    Read Specifications
                                </Link>
                            </div>
                        </div>

                        <div className="lg:col-span-6">
                            <div className="rounded-2xl border border-slate-800 shadow-2xl overflow-hidden">
                                <img
                                    src="./images/customer-ledger.jpg"
                                    alt="Customer Ledger UI"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Frequently Asked Questions */}
            <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-900">
                <div className="text-center mb-12 space-y-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                        <HelpCircle className="w-3.5 h-3.5" />
                        <span>Got Questions?</span>
                    </div>
                    <h2 className="text-3xl font-extrabold text-white tracking-tight">
                        Frequently Asked Questions
                    </h2>
                </div>

                <div className="space-y-4">
                    <div className="glass-card rounded-2xl p-5 border border-slate-800">
                        <h3 className="text-base font-bold text-white mb-2">
                            Why does the app ask for Google Drive permission?
                        </h3>
                        <p className="text-xs text-slate-400 leading-relaxed">
                            The Google Drive permission is used <b>strictly and solely</b> for
                            saving automated, encrypted backup archives of your installment ledger
                            database into your own Google Drive account. We use the restricted{" "}
                            <code className="text-emerald-300 font-mono">
                                https://www.googleapis.com/auth/drive.file
                            </code>{" "}
                            scope which restricts the app to only files it creates itself.{" "}
                            <Link to="/cloud-sync" className="text-emerald-400 underline">
                                Learn more on our Cloud Sync page
                            </Link>
                            .
                        </p>
                    </div>

                    <div className="glass-card rounded-2xl p-5 border border-slate-800">
                        <h3 className="text-base font-bold text-white mb-2">
                            Can the developers or any third party see my customer financial records?
                        </h3>
                        <p className="text-xs text-slate-400 leading-relaxed">
                            <b>Absolutely not.</b> The Installment Management System is an
                            offline-first architecture. All database transactions are stored locally
                            on your machine in a secure SQLite database file. Read our full{" "}
                            <Link to="/privacy" className="text-emerald-400 underline">
                                Privacy Policy
                            </Link>
                            .
                        </p>
                    </div>

                    <div className="glass-card rounded-2xl p-5 border border-slate-800">
                        <h3 className="text-base font-bold text-white mb-2">
                            Which thermal printers are compatible with the software?
                        </h3>
                        <p className="text-xs text-slate-400 leading-relaxed">
                            Any standard ESC/POS compatible thermal receipt printer (58mm and 80mm
                            roll widths) connected via USB, Ethernet, or Bluetooth.{" "}
                            <Link to="/invoicing" className="text-emerald-400 underline">
                                See the hardware compatibility guide
                            </Link>
                            .
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};
