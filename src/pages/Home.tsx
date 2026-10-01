import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
    ShieldCheck,
    CheckCircle2,
    FileText,
    Scale,
    ExternalLink,
    Mail,
    RefreshCw,
} from "lucide-react";
import { CloudEcosystemGraphic } from "../components/CloudEcosystemGraphic";
import { SecurityFlowDiagram } from "../components/SecurityFlowDiagram";

export const Home: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="relative min-h-screen pt-20 overflow-hidden font-sans">
            {/* Ambient Lighting Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-emerald-500/15 via-teal-500/5 to-transparent blur-3xl pointer-events-none" />

            {/* Hero Section */}
            <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 lg:pt-20 lg:pb-24">
                <div className="text-center max-w-4xl mx-auto space-y-6">
                    {/* Compliance Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-emerald-400 text-xs font-semibold shadow-inner shadow-emerald-950/50">
                        <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        <span>Drive Backup Services</span>
                        <span className="text-slate-500">•</span>
                        <span className="text-slate-300">Google OAuth 2.0 Cloud Backup Integration</span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.15]">
                        Secure Google Drive Cloud Backup <br />
                        <span className="text-gradient-emerald">For Offline Desktop Applications</span>
                    </h1>

                    {/* Sub-headline */}
                    <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
                        <b>Drive Backup Services</b> is a lightweight, secure utility engine built to connect offline desktop management applications (such as retail POS, accounts, and inventory software) directly to your personal Google Drive for automated encrypted database backups and 1-click disaster recovery.
                    </p>

                    {/* Action Links */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <Link
                            to="/privacy"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold text-base shadow-xl shadow-emerald-950/60 hover:from-emerald-400 hover:to-teal-500 transition-all active:scale-95 group"
                        >
                            <FileText className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
                            <span>Read Privacy Policy</span>
                        </Link>

                        <Link
                            to="/terms"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-slate-900/90 border border-slate-700/80 text-slate-200 font-semibold text-base hover:bg-slate-800 hover:text-white transition-all shadow-md group"
                        >
                            <Scale className="w-5 h-5 text-slate-400 group-hover:scale-105 transition-transform" />
                            <span>Terms of Service</span>
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
                            <span>Restricted drive.file Scope</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                            <span>Client-Side AES-256 Encryption</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                            <span>Zero Intermediary Servers</span>
                        </div>
                    </div>
                </div>

                {/* Conceptual Architecture Diagram (No Fake Screenshots!) */}
                <div className="mt-14 max-w-5xl mx-auto">
                    <CloudEcosystemGraphic />
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-900">
                <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                        <RefreshCw className="w-3.5 h-3.5" />
                        <span>Seamless Workflow</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                        How Desktop Applications Integrate With Google Drive
                    </h2>
                    <p className="text-sm text-slate-400 leading-relaxed">
                        Designed from the ground up to respect user privacy and adhere to the Google API Services User Data Policy.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-3 text-left">
                        <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 font-bold font-mono">
                            1
                        </div>
                        <h3 className="text-base font-bold text-white">Direct OAuth Authorization</h3>
                        <p className="text-xs text-slate-400 leading-relaxed">
                            Users open their desktop application settings and click "Connect Google Drive". The official Google OAuth consent screen opens directly in the system web browser.
                        </p>
                    </div>

                    <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-3 text-left">
                        <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 font-bold font-mono">
                            2
                        </div>
                        <h3 className="text-base font-bold text-white">Local Encrypted Snapshot</h3>
                        <p className="text-xs text-slate-400 leading-relaxed">
                            Before any upload occurs, the desktop app creates a local SQLite database copy and encrypts it on the user's computer with AES-256. Decryption keys never leave the device.
                        </p>
                    </div>

                    <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-3 text-left">
                        <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-teal-400 font-bold font-mono">
                            3
                        </div>
                        <h3 className="text-base font-bold text-white">Isolated Cloud Storage</h3>
                        <p className="text-xs text-slate-400 leading-relaxed">
                            The encrypted archive is pushed directly to the user's private Google Drive folder (<code className="text-emerald-300">/DriveBackupServices/</code>). Zero third-party servers are involved.
                        </p>
                    </div>
                </div>
            </section>

            {/* 4-Step Technical Security Flow */}
            <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-900">
                <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                        Security & Cryptographic Protocol
                    </h2>
                    <p className="text-sm text-slate-400 leading-relaxed">
                        Industry-grade protection ensuring complete data ownership and zero external exposure.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto">
                    <SecurityFlowDiagram />
                </div>
            </section>

            {/* Google OAuth & Compliance Guarantee Banner */}
            <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-900">
                <div className="glass-card rounded-3xl p-8 sm:p-10 border-2 border-emerald-500/30 max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-8 space-y-4 text-left">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                                <ShieldCheck className="w-3.5 h-3.5" />
                                <span>Google Limited Use Disclosures</span>
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                                Strict Adherence to Google API User Data Policy
                            </h3>
                            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                                Drive Backup Services' use and transfer to any other app of information received from Google APIs will adhere to the{" "}
                                <a
                                    href="https://developers.google.com/terms/api-services-user-data-policy"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-emerald-400 underline hover:text-emerald-300 inline-flex items-center gap-1 font-semibold"
                                >
                                    Google API Services User Data Policy
                                    <ExternalLink className="w-3.5 h-3.5" />
                                </a>
                                , including the Limited Use requirements.
                            </p>
                            <p className="text-slate-400 text-xs leading-relaxed">
                                We request solely the restricted scope <code className="text-emerald-300 bg-slate-950 px-1.5 py-0.5 rounded font-mono">https://www.googleapis.com/auth/drive.file</code>. We do not sell, rent, monetize, or harvest user data, nor do we train AI/ML models on customer files.
                            </p>
                        </div>

                        <div className="lg:col-span-4 bg-slate-950/90 p-5 rounded-2xl border border-slate-800 space-y-3 text-center">
                            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mx-auto">
                                <FileText className="w-6 h-6" />
                            </div>
                            <h4 className="text-sm font-bold text-white">Legal Documents</h4>
                            <p className="text-xs text-slate-400">
                                Detailed terms and privacy practices available for review:
                            </p>
                            <div className="space-y-2 pt-1">
                                <Link
                                    to="/privacy"
                                    className="w-full block py-2.5 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 text-xs font-bold border border-emerald-500/40 transition-colors"
                                >
                                    Privacy Policy →
                                </Link>
                                <Link
                                    to="/terms"
                                    className="w-full block py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-semibold border border-slate-800 transition-colors"
                                >
                                    Terms of Service →
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Developer Support & Inquiries */}
            <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-900">
                <div className="max-w-3xl mx-auto text-center space-y-4">
                    <h3 className="text-xl font-bold text-white">Developer Contact & Support</h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                        Drive Backup Services is developed by our software engineering team to empower desktop applications with resilient cloud backup capabilities. For technical inquiries, verification reviews, or support:
                    </p>
                    <div className="inline-flex items-center gap-3 p-3 px-5 rounded-2xl bg-slate-900/90 border border-slate-800 text-xs font-mono text-emerald-400">
                        <Mail className="w-4 h-4 text-emerald-400" />
                        <a href="mailto:support@drivebackupservices.com" className="hover:underline">
                            support@drivebackupservices.com
                        </a>
                        <span className="text-slate-600">|</span>
                        <a href="mailto:sherkhan.dev@gmail.com" className="hover:underline text-slate-400">
                            sherkhan.dev@gmail.com
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};
