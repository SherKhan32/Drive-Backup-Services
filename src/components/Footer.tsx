import React from "react";
import { Link } from "react-router-dom";
import {
    Shield,
    Lock,
    Database,
    ExternalLink,
    Layers,
    CheckCircle2,
    FileCheck2,
    Cpu,
    HardDrive,
} from "lucide-react";

export const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-emerald-500/5 blur-3xl pointer-events-none rounded-full" />

            {/* Compliance & Security Banner */}
            <div className="border-b border-slate-900/80 bg-slate-900/40 py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                                <Database className="w-5 h-5 text-emerald-400" />
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-slate-200">
                                    100% Offline SQLite
                                </h4>
                                <p className="text-xs text-slate-400">
                                    Zero cloud lock-in. Your data stays locally.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center shrink-0">
                                <Shield className="w-5 h-5 text-teal-400" />
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-slate-200">
                                    Google OAuth Compliant
                                </h4>
                                <p className="text-xs text-slate-400">
                                    Strict drive.file scope. Zero 3rd party access.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                                <Lock className="w-5 h-5 text-emerald-400" />
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-slate-200">
                                    AES-256 Encrypted
                                </h4>
                                <p className="text-xs text-slate-400">
                                    Encrypted before uploading to your Drive.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-slate-800/60 border border-slate-700/50 flex items-center justify-center shrink-0">
                                <HardDrive className="w-5 h-5 text-slate-300" />
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-slate-200">
                                    Cross-Platform Desktop
                                </h4>
                                <p className="text-xs text-slate-400">
                                    Windows, macOS, and Linux native binaries.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
                    {/* Column 1: Brand Info */}
                    <div className="lg:col-span-2 space-y-4">
                        <Link to="/" className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-700 p-0.5 shadow-md">
                                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                                    <Layers className="w-4 h-4 text-emerald-400" />
                                </div>
                            </div>
                            <span className="text-lg font-bold text-white tracking-tight">
                                Installment<span className="text-emerald-400">Manager</span>
                            </span>
                        </Link>

                        <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
                            The premier offline-first desktop management software designed for
                            micro-finance, consumer electronics retail, real-estate installments,
                            and auto financing businesses.
                        </p>

                        <div className="pt-2">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-emerald-400">
                                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                                <span>Google OAuth Verification Ready & Verified</span>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Dedicated Pages */}
                    <div>
                        <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4">
                            Dedicated Pages
                        </h3>
                        <ul className="space-y-2.5 text-sm">
                            <li>
                                <Link to="/" className="hover:text-emerald-400 transition-colors">
                                    Home Overview
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/features"
                                    className="hover:text-emerald-400 transition-colors"
                                >
                                    Core Features
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/cloud-sync"
                                    className="hover:text-emerald-400 transition-colors"
                                >
                                    Google Cloud Sync
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/calculator"
                                    className="hover:text-emerald-400 transition-colors"
                                >
                                    EMI Calculator
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/invoicing"
                                    className="hover:text-emerald-400 transition-colors"
                                >
                                    Thermal & A4 Invoices
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/download"
                                    className="hover:text-emerald-400 transition-colors"
                                >
                                    Download Releases
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Legal & Verification */}
                    <div>
                        <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4">
                            Legal & Privacy
                        </h3>
                        <ul className="space-y-2.5 text-sm">
                            <li>
                                <Link
                                    to="/privacy"
                                    className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                                >
                                    <FileCheck2 className="w-3.5 h-3.5 text-emerald-400" />
                                    <span>Privacy Policy</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/terms"
                                    className="hover:text-emerald-400 transition-colors"
                                >
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="https://developers.google.com/terms/api-services-user-data-policy"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1"
                                >
                                    <span>Google API Disclosure</span>
                                    <ExternalLink className="w-3 h-3" />
                                </a>
                            </li>
                            <li>
                                <Link
                                    to="/privacy"
                                    className="hover:text-emerald-400 transition-colors"
                                >
                                    OAuth Scope Clarification
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Platform & Support */}
                    <div>
                        <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4">
                            Supported Platforms
                        </h3>
                        <div className="space-y-2 text-sm text-slate-400">
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                                <span>Windows 10 / 11 (x64 & ARM)</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                                <span>macOS Ventura & Sonoma</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                                <span>Ubuntu & Debian (.AppImage)</span>
                            </div>
                            <div className="pt-3">
                                <p className="text-xs text-slate-500">
                                    Thermal Drivers: ESC/POS 58mm / 80mm plug-and-play USB &
                                    Bluetooth.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mandatory Google OAuth Limited Use Statement */}
                <div className="mt-12 p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 text-xs text-slate-400 leading-relaxed space-y-2">
                    <div className="flex items-center gap-2 text-slate-300 font-semibold">
                        <Cpu className="w-4 h-4 text-emerald-400" />
                        <span>Google API Services User Data Policy Compliance Statement:</span>
                    </div>
                    <p>
                        Installment Management System's use and transfer to any other app of
                        information received from Google APIs will adhere to the{" "}
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
                        scope solely to create and manage software backup snapshots initiated
                        directly by the authenticated user in their own personal Google Drive
                        folder.
                    </p>
                </div>

                {/* Copyright and Bottom Row */}
                <div className="mt-8 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
                    <p>
                        © {new Date().getFullYear()} Installment Management System. All rights
                        reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <Link to="/privacy" className="hover:text-slate-400 transition-colors">
                            Privacy
                        </Link>
                        <Link to="/terms" className="hover:text-slate-400 transition-colors">
                            Terms
                        </Link>
                        <span className="text-slate-700">|</span>
                        <span className="text-emerald-400/80">Authorised Domain: Verified</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};
