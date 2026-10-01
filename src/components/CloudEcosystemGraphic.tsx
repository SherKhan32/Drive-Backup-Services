import React from "react";
import { Database, Lock, Cloud, ShieldCheck, Laptop, Key, RefreshCw, CheckCircle2 } from "lucide-react";

export const CloudEcosystemGraphic: React.FC = () => {
    return (
        <div className="w-full rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden text-left font-sans">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-80 bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-blue-500/10 blur-3xl pointer-events-none rounded-full" />

            <div className="relative z-10">
                {/* Header Tagline */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800/80 mb-8">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-2">
                            <ShieldCheck className="w-3.5 h-3.5" />
                            <span>System Architecture & Integration Diagram</span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                            How Drive Backup Services Connects Desktop Software to Google Drive
                        </h3>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Direct Client-to-Cloud</span>
                    </div>
                </div>

                {/* 3-Column Architecture Graphic */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                    {/* Left Column: Desktop Applications Ecosystem */}
                    <div className="lg:col-span-4 space-y-4">
                        <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/90 space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Layer 01</span>
                                <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400">100% Offline</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-200">
                                    <Laptop className="w-5 h-5 text-emerald-400" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-white">Client Desktop Software</h4>
                                    <p className="text-[11px] text-slate-400">Installed on User's Workstation</p>
                                </div>
                            </div>

                            <div className="space-y-2 pt-2 text-xs">
                                <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                                    <span className="text-slate-300 font-medium">Retail & POS Desktop App</span>
                                    <span className="font-mono text-emerald-400 text-[10px]">.sqlite</span>
                                </div>
                                <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                                    <span className="text-slate-300 font-medium">Station & Fleet Management</span>
                                    <span className="font-mono text-emerald-400 text-[10px]">.sqlite</span>
                                </div>
                                <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                                    <span className="text-slate-300 font-medium">Inventory & Accounting App</span>
                                    <span className="font-mono text-emerald-400 text-[10px]">.sqlite</span>
                                </div>
                            </div>
                            <p className="text-[11px] text-slate-500 italic">
                                * Databases stay solely on physical hard drives. Zero web tracking.
                            </p>
                        </div>
                    </div>

                    {/* Middle Column: Drive Backup Services Engine */}
                    <div className="lg:col-span-4 space-y-4">
                        <div className="p-5 rounded-2xl bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-2 border-emerald-500/40 shadow-xl relative space-y-4">
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-emerald-500 text-slate-950 text-[10px] font-black uppercase tracking-wider">
                                Core Utility
                            </div>

                            <div className="text-center pt-2">
                                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto mb-2">
                                    <RefreshCw className="w-6 h-6 animate-spin-slow" />
                                </div>
                                <h4 className="text-base font-bold text-white">Drive Backup Services</h4>
                                <p className="text-xs text-emerald-400 font-medium mt-0.5">Automated Cloud Engine</p>
                            </div>

                            <div className="space-y-2 text-xs">
                                <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2.5">
                                    <Lock className="w-4 h-4 text-emerald-400 shrink-0" />
                                    <div>
                                        <div className="font-semibold text-white">AES-256 Client Encryption</div>
                                        <div className="text-[10px] text-slate-400">Encrypted locally before network upload</div>
                                    </div>
                                </div>
                                <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2.5">
                                    <Key className="w-4 h-4 text-cyan-400 shrink-0" />
                                    <div>
                                        <div className="font-semibold text-white">OAuth 2.0 Local Token Vault</div>
                                        <div className="text-[10px] text-slate-400">Stored in OS Credential Manager</div>
                                    </div>
                                </div>
                                <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2.5">
                                    <Database className="w-4 h-4 text-teal-400 shrink-0" />
                                    <div>
                                        <div className="font-semibold text-white">1-Click / Scheduled Snapshots</div>
                                        <div className="text-[10px] text-slate-400">Daily midnight automatic backup</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: User's Private Google Drive */}
                    <div className="lg:col-span-4 space-y-4">
                        <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/90 space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Destination</span>
                                <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-blue-500/10 text-blue-400">Google Cloud</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-blue-400">
                                    <Cloud className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-white">User's Google Drive</h4>
                                    <p className="text-[11px] text-slate-400">Authenticated Google Account</p>
                                </div>
                            </div>

                            <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2 text-xs">
                                <div className="font-semibold text-emerald-400 flex items-center gap-1.5">
                                    <CheckCircle2 className="w-3.5 h-3.5" />
                                    <span>Scope: drive.file</span>
                                </div>
                                <p className="text-[11px] text-slate-300 leading-relaxed">
                                    Restricted permission. The app can <b>only</b> access its own backup folder (<code className="text-emerald-300 bg-slate-950 px-1 py-0.5 rounded">/DriveBackupServices/</code>).
                                </p>
                                <div className="text-[11px] text-slate-400 pt-1 border-t border-slate-800">
                                    Zero access to your private photos, personal emails, or Google Docs.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Trust Guarantee Strip */}
                <div className="mt-8 pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span><b>Zero Middleman:</b> Direct connection from desktop to Google.</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span><b>User Data Policy:</b> Full Limited Use compliance.</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span><b>Revocation:</b> Disconnect anytime in desktop settings.</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
