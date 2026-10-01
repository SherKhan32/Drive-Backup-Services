import React from "react";
import { Link } from "react-router-dom";
import { Lock, Database, ExternalLink, CheckCircle2, FileCheck2, Cpu, Cloud, Mail } from "lucide-react";

export const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 relative overflow-hidden font-sans">
            {/* Ambient Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-emerald-500/5 blur-3xl pointer-events-none rounded-full" />

            {/* Security Protocol Highlights */}
            <div className="border-b border-slate-900/80 bg-slate-900/40 py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                                <Database className="w-5 h-5 text-emerald-400" />
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-slate-200">100% Offline SQLite</h4>
                                <p className="text-xs text-slate-400">Databases stay on physical client drives.</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center shrink-0">
                                <Cloud className="w-5 h-5 text-teal-400" />
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-slate-200">Google OAuth 2.0</h4>
                                <p className="text-xs text-slate-400">Strict drive.file scope permissions.</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                                <Lock className="w-5 h-5 text-emerald-400" />
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-slate-200">AES-256 Encryption</h4>
                                <p className="text-xs text-slate-400">Encrypted locally before cloud transmission.</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-slate-800/60 border border-slate-700/50 flex items-center justify-center shrink-0">
                                <CheckCircle2 className="w-5 h-5 text-slate-300" />
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-slate-200">Zero Middleman</h4>
                                <p className="text-xs text-slate-400">Direct client-to-Google communication.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer Links */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand Info */}
                    <div className="space-y-4">
                        <Link to="/" className="flex items-center gap-3">
                            <img src="./logo.svg" alt="Drive Backup Services" className="w-8 h-8" />
                            <span className="text-lg font-black text-white tracking-tight">
                                Drive Backup <span className="text-emerald-400">Services</span>
                            </span>
                        </Link>
                        <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
                            Drive Backup Services provides a secure, client-side Google Drive cloud backup and recovery utility embedded in offline desktop management applications.
                        </p>
                        <div className="text-xs text-slate-400 flex items-center gap-2">
                            <Mail className="w-3.5 h-3.5 text-emerald-400" />
                            <a href="mailto:support@drivebackupservices.com" className="hover:text-emerald-300">
                                support@drivebackupservices.com
                            </a>
                        </div>
                    </div>

                    {/* Essential Navigation */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3">
                            Essential Links
                        </h4>
                        <ul className="space-y-2 text-xs">
                            <li>
                                <Link to="/" className="hover:text-emerald-400 transition-colors">
                                    Application Home Page
                                </Link>
                            </li>
                            <li>
                                <Link to="/privacy" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 text-emerald-400 font-semibold">
                                    <FileCheck2 className="w-3.5 h-3.5" />
                                    <span>Application Privacy Policy</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/terms" className="hover:text-emerald-400 transition-colors">
                                    Application Terms of Service
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="https://developers.google.com/terms/api-services-user-data-policy"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1"
                                >
                                    <span>Google API Services User Data Policy</span>
                                    <ExternalLink className="w-3 h-3" />
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Developer Support & Verification */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3">
                            Google Cloud Verification
                        </h4>
                        <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-2 text-xs">
                            <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                                <CheckCircle2 className="w-3.5 h-3.5" />
                                <span>Verified Client ID Scope</span>
                            </div>
                            <code className="block p-1.5 bg-slate-950 text-emerald-300 rounded font-mono text-[11px] break-all">
                                https://www.googleapis.com/auth/drive.file
                            </code>
                            <p className="text-[11px] text-slate-400">
                                Grants access solely to backup snapshots initiated by the user. Zero access to unrelated user files.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Mandatory Google OAuth Limited Use Statement */}
                <div className="mt-10 p-5 rounded-2xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 leading-relaxed space-y-2">
                    <div className="flex items-center gap-2 text-slate-300 font-semibold">
                        <Cpu className="w-4 h-4 text-emerald-400" />
                        <span>Google API Services User Data Policy Compliance Statement:</span>
                    </div>
                    <p>
                        Drive Backup Services' use and transfer to any other app of information received from Google APIs will adhere to the{" "}
                        <a
                            href="https://developers.google.com/terms/api-services-user-data-policy"
                            target="_blank"
                            rel="noreferrer"
                            className="text-emerald-400 hover:underline inline-flex items-center gap-0.5"
                        >
                            Google API Services User Data Policy
                        </a>
                        , including the Limited Use requirements. We request only the restricted{" "}
                        <code className="px-1.5 py-0.5 bg-slate-800 text-emerald-300 rounded font-mono">
                            https://www.googleapis.com/auth/drive.file
                        </code>{" "}
                        scope solely to create, backup, and restore application database archives directly initiated by the authenticated user in their own personal Google Drive account.
                    </p>
                </div>

                {/* Copyright */}
                <div className="mt-8 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
                    <p>© {new Date().getFullYear()} Drive Backup Services. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <Link to="/privacy" className="hover:text-slate-400 transition-colors">
                            Privacy Policy
                        </Link>
                        <Link to="/terms" className="hover:text-slate-400 transition-colors">
                            Terms of Service
                        </Link>
                        <span className="text-slate-700">|</span>
                        <span className="text-emerald-400">Authorised Domain: Verified</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

