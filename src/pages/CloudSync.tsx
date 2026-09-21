import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Cloud, ShieldCheck, ExternalLink, ArrowRight, FolderLock } from "lucide-react";
import { SyncDiagram } from "../components/SyncDiagram";

export const CloudSync: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="relative min-h-screen pt-24 pb-20 overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-96 bg-teal-500/10 blur-3xl pointer-events-none rounded-full" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Page Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                        <Cloud className="w-3.5 h-3.5" />
                        <span>Zero 3rd-Party Middleman Architecture</span>
                    </div>
                    <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                        1-Click{" "}
                        <span className="text-gradient-emerald">Google Drive Cloud Sync</span>
                    </h1>
                    <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                        Protect your entire business database against fire, computer theft, or
                        hardware failure. Automated WhatsApp-style encrypted backups saved directly
                        to your personal Google Drive account.
                    </p>
                </div>

                {/* Sync Diagram Interactive Showcase */}
                <div className="mb-14">
                    <SyncDiagram />
                </div>

                {/* High Resolution Architecture Mockup */}
                <div className="glass-card rounded-3xl p-6 sm:p-10 border border-slate-800 mb-14 shadow-2xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-5 space-y-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-semibold">
                                <FolderLock className="w-3.5 h-3.5" />
                                <span>Security Protocol</span>
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                                Direct Client-to-Cloud Integration
                            </h2>
                            <p className="text-slate-300 text-sm leading-relaxed">
                                When you click "Sync Now" or schedule automated daily midnight
                                backups, Installment Management System creates an isolated SQLite
                                database snapshot, encrypts it locally with your AES-256 password,
                                and pushes it directly into your own Google Drive.
                            </p>

                            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-2 text-xs">
                                <div className="font-semibold text-white flex items-center gap-2">
                                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                                    <span>Google Verification Highlights:</span>
                                </div>
                                <ul className="space-y-1.5 text-slate-400">
                                    <li>
                                        • Only accesses files it created itself (
                                        <code className="text-emerald-400">drive.file</code> scope).
                                    </li>
                                    <li>
                                        • Never transmits OAuth tokens or keys to external servers.
                                    </li>
                                    <li>
                                        • Compliant with Google API Services Limited Use
                                        requirements.
                                    </li>
                                </ul>
                            </div>

                            <div className="pt-2">
                                <Link
                                    to="/privacy"
                                    className="text-xs text-emerald-400 hover:text-emerald-300 font-semibold inline-flex items-center gap-1"
                                >
                                    <span>Read full Google OAuth Privacy Policy</span>
                                    <ExternalLink className="w-3.5 h-3.5" />
                                </Link>
                            </div>
                        </div>

                        <div className="lg:col-span-7">
                            <div className="rounded-2xl border border-slate-800 shadow-2xl overflow-hidden group">
                                <img
                                    src="./images/gdrive-sync.jpg"
                                    alt="Google Drive Cloud Sync Architecture & UI"
                                    className="w-full h-auto object-cover transform transition duration-500 group-hover:scale-[1.01]"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3 Step Setup Walkthrough */}
                <div className="max-w-4xl mx-auto mb-16">
                    <h2 className="text-2xl font-bold text-white text-center mb-8">
                        How Simple Is It to Connect?
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="glass-card rounded-2xl p-5 border border-slate-800 text-center space-y-2">
                            <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 font-bold font-mono mx-auto flex items-center justify-center">
                                1
                            </div>
                            <h3 className="font-bold text-white text-sm">
                                Click "Sign In With Google"
                            </h3>
                            <p className="text-xs text-slate-400">
                                The app opens your default web browser with Google's official OAuth
                                consent screen.
                            </p>
                        </div>

                        <div className="glass-card rounded-2xl p-5 border border-slate-800 text-center space-y-2">
                            <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 font-bold font-mono mx-auto flex items-center justify-center">
                                2
                            </div>
                            <h3 className="font-bold text-white text-sm">
                                Grant Backup Permission
                            </h3>
                            <p className="text-xs text-slate-400">
                                Authorize Installment Manager to store backup archives in your
                                designated Drive folder.
                            </p>
                        </div>

                        <div className="glass-card rounded-2xl p-5 border border-slate-800 text-center space-y-2">
                            <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 font-bold font-mono mx-auto flex items-center justify-center">
                                3
                            </div>
                            <h3 className="font-bold text-white text-sm">
                                Automatic Background Sync
                            </h3>
                            <p className="text-xs text-slate-400">
                                Every evening after business closes, your database snapshot is
                                quietly backed up.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA Bar */}
                <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                        <h3 className="text-lg font-bold text-white">
                            Ready to test the Desktop Application?
                        </h3>
                        <p className="text-xs text-slate-400">
                            Download the latest signed release for Windows, macOS, or Linux.
                        </p>
                    </div>
                    <Link
                        to="/download"
                        className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold text-xs flex items-center gap-2 shadow-md hover:from-emerald-400 hover:to-teal-500 transition-all"
                    >
                        <span>Download Desktop Installer</span>
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </div>
    );
};
