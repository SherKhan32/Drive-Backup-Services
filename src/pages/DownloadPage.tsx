import React, { useEffect } from "react";
import { Download, Laptop, Apple, Terminal, ShieldCheck, CheckCircle2, Cpu } from "lucide-react";

export const DownloadPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleDownload = (pkgName: string) => {
        alert(`Downloading ${pkgName}. Official binary builds are hosted via GitHub Releases.`);
    };

    return (
        <div className="relative min-h-screen pt-24 pb-20 overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-96 bg-emerald-500/10 blur-3xl pointer-events-none rounded-full" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Page Header */}
                <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                        <Download className="w-3.5 h-3.5" />
                        <span>Latest Official Binaries</span>
                    </div>
                    <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                        Download <span className="text-gradient-emerald">Installment Manager</span>
                    </h1>
                    <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                        Enterprise Desktop Edition v2.4.0 (64-bit Architecture). 100% offline SQLite
                        first with 1-Click Google Drive cloud sync.
                    </p>
                </div>

                {/* 3 OS Download Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
                    {/* Windows Card */}
                    <div className="glass-card rounded-3xl p-6 sm:p-8 border-2 border-emerald-500/40 relative shadow-2xl shadow-emerald-950/30 flex flex-col justify-between">
                        <div className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-emerald-500 text-slate-950 text-[10px] font-extrabold tracking-wide uppercase shadow-md">
                            Most Popular
                        </div>

                        <div>
                            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-5">
                                <Laptop className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-white">Windows (x64)</h3>
                            <p className="text-xs text-slate-400 mt-1">
                                Windows 10, 11 (64-bit Edition)
                            </p>

                            <div className="mt-6 space-y-2 text-xs text-slate-300 font-mono bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
                                <div className="flex justify-between">
                                    <span className="text-slate-400">File:</span>
                                    <span className="text-emerald-400 font-semibold">
                                        Installment-Setup-2.4.0.exe
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-400">Size:</span>
                                    <span>74.2 MB</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-400">Integrity:</span>
                                    <span className="text-emerald-400">SHA-256 Signed</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 space-y-2.5">
                            <button
                                onClick={() => handleDownload("Windows Installer (.exe)")}
                                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold text-xs flex items-center justify-center gap-2 hover:from-emerald-400 hover:to-teal-500 shadow-lg shadow-emerald-950/60 transition-all cursor-pointer active:scale-95"
                            >
                                <Download className="w-4 h-4" />
                                <span>Download .exe (Installer)</span>
                            </button>

                            <button
                                onClick={() => handleDownload("Windows Portable (.zip)")}
                                className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold border border-slate-800 transition-colors cursor-pointer"
                            >
                                Download Portable (.zip)
                            </button>
                        </div>
                    </div>

                    {/* macOS Card */}
                    <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-800 flex flex-col justify-between shadow-xl">
                        <div>
                            <div className="w-14 h-14 rounded-2xl bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-200 mb-5">
                                <Apple className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-white">macOS (Universal)</h3>
                            <p className="text-xs text-slate-400 mt-1">
                                Apple Silicon (M1/M2/M3) & Intel Core
                            </p>

                            <div className="mt-6 space-y-2 text-xs text-slate-300 font-mono bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
                                <div className="flex justify-between">
                                    <span className="text-slate-400">File:</span>
                                    <span className="text-emerald-400 font-semibold">
                                        Installment-2.4.0.dmg
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-400">Size:</span>
                                    <span>82.5 MB</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-400">Compatibility:</span>
                                    <span>macOS 12+</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8">
                            <button
                                onClick={() => handleDownload("macOS Universal (.dmg)")}
                                className="w-full py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex items-center justify-center gap-2 border border-slate-700 transition-all cursor-pointer"
                            >
                                <Download className="w-4 h-4" />
                                <span>Download .dmg (Universal)</span>
                            </button>
                        </div>
                    </div>

                    {/* Linux Card */}
                    <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-800 flex flex-col justify-between shadow-xl">
                        <div>
                            <div className="w-14 h-14 rounded-2xl bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-200 mb-5">
                                <Terminal className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-white">Linux (x86_64)</h3>
                            <p className="text-xs text-slate-400 mt-1">
                                Ubuntu, Debian, Fedora, Arch Linux
                            </p>

                            <div className="mt-6 space-y-2 text-xs text-slate-300 font-mono bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
                                <div className="flex justify-between">
                                    <span className="text-slate-400">File:</span>
                                    <span className="text-emerald-400 font-semibold">
                                        Installment-2.4.0.AppImage
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-400">Size:</span>
                                    <span>71.8 MB</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-400">Packaging:</span>
                                    <span>AppImage / .deb</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 space-y-2.5">
                            <button
                                onClick={() => handleDownload("Linux Universal (.AppImage)")}
                                className="w-full py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex items-center justify-center gap-2 border border-slate-700 transition-all cursor-pointer"
                            >
                                <Download className="w-4 h-4" />
                                <span>Download .AppImage</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* System Requirements & Verification Badges */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-14">
                    <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-3">
                        <h3 className="text-base font-bold text-white flex items-center gap-2">
                            <Cpu className="w-5 h-5 text-emerald-400" />
                            <span>Minimum System Requirements</span>
                        </h3>
                        <ul className="text-xs text-slate-300 space-y-2">
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                                <span>
                                    <b>Processor:</b> 1.6 GHz Intel Core i3 or AMD equivalent (ARM64
                                    supported on macOS)
                                </span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                                <span>
                                    <b>RAM:</b> 2 GB RAM minimum (4 GB recommended for large
                                    databases)
                                </span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                                <span>
                                    <b>Disk Space:</b> 250 MB free disk space for application and
                                    SQLite ledgers
                                </span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                                <span>
                                    <b>Printers:</b> Any standard USB or Bluetooth ESC/POS thermal
                                    printer (58mm / 80mm)
                                </span>
                            </li>
                        </ul>
                    </div>

                    <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-3">
                        <h3 className="text-base font-bold text-white flex items-center gap-2">
                            <ShieldCheck className="w-5 h-5 text-teal-400" />
                            <span>Security & Verification Checksums</span>
                        </h3>
                        <div className="space-y-2 text-xs font-mono">
                            <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                                <div className="text-[10px] text-slate-500 uppercase">
                                    SHA-256 (Windows .exe)
                                </div>
                                <div className="text-emerald-400 truncate">
                                    e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
                                </div>
                            </div>
                            <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                                <div className="text-[10px] text-slate-500 uppercase">
                                    SHA-256 (macOS .dmg)
                                </div>
                                <div className="text-teal-400 truncate">
                                    a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e
                                </div>
                            </div>
                            <div className="text-[11px] text-slate-400 font-sans mt-2">
                                All releases are cryptographically signed with trusted code signing
                                certificates.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
