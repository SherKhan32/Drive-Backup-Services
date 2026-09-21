import React, { useState } from "react";
import {
    Database,
    Lock,
    Cloud,
    CheckCircle2,
    ShieldCheck,
    KeyRound,
    RefreshCw,
} from "lucide-react";

export const SyncDiagram: React.FC = () => {
    const [syncStep, setSyncStep] = useState<number>(3);
    const [isSimulating, setIsSimulating] = useState<boolean>(false);

    const triggerSimulation = () => {
        setIsSimulating(true);
        setSyncStep(1);
        setTimeout(() => setSyncStep(2), 900);
        setTimeout(() => setSyncStep(3), 1800);
        setTimeout(() => setIsSimulating(false), 2400);
    };

    return (
        <div className="glass-card rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-800 shadow-2xl relative overflow-hidden">
            {/* Background glow elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 blur-3xl pointer-events-none rounded-full" />

            {/* Header */}
            <div className="max-w-3xl mb-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-3">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Strict OAuth 2.0 Security Architecture</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    How Google Drive 1-Click Cloud Sync Works
                </h3>
                <p className="text-slate-400 text-sm sm:text-base mt-2 leading-relaxed">
                    Unlike ordinary cloud SaaS that store your commercial customer records on their
                    servers, Installment Manager connects <b className="text-slate-200">directly</b>{" "}
                    from your PC to your private Google Drive account.
                </p>
            </div>

            {/* Interactive Visual Flow */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative mb-8">
                {/* Step 1: Local SQLite */}
                <div
                    className={`p-6 rounded-2xl border transition-all duration-300 relative ${
                        syncStep >= 1
                            ? "bg-slate-900/90 border-emerald-500/40 shadow-lg shadow-emerald-950/30"
                            : "bg-slate-900/40 border-slate-800 opacity-60"
                    }`}
                >
                    <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-emerald-400">
                            <Database className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                            Node 01
                        </span>
                    </div>
                    <h4 className="text-base font-bold text-white mb-1">Local SQLite Engine</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                        All customer loans, transactions, and ledgers are written directly to your
                        local SSD. Works 100% without internet.
                    </p>
                    <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center gap-2 text-[11px] text-emerald-400">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Zero Remote Storage</span>
                    </div>
                </div>

                {/* Step 2: AES-256 Encryption */}
                <div
                    className={`p-6 rounded-2xl border transition-all duration-300 relative ${
                        syncStep >= 2
                            ? "bg-slate-900/90 border-emerald-500/40 shadow-lg shadow-emerald-950/30"
                            : "bg-slate-900/40 border-slate-800 opacity-60"
                    }`}
                >
                    <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-emerald-400">
                            <Lock className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                            Node 02
                        </span>
                    </div>
                    <h4 className="text-base font-bold text-white mb-1">AES-256-GCM Encryption</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                        Before uploading, the backup snapshot is sealed using your private
                        encryption key. No one can read it except you.
                    </p>
                    <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center gap-2 text-[11px] text-emerald-400">
                        <KeyRound className="w-3.5 h-3.5" />
                        <span>End-to-End Cryptography</span>
                    </div>
                </div>

                {/* Step 3: Google Drive User Cloud */}
                <div
                    className={`p-6 rounded-2xl border transition-all duration-300 relative ${
                        syncStep >= 3
                            ? "bg-slate-900/90 border-emerald-500/40 shadow-lg shadow-emerald-950/30"
                            : "bg-slate-900/40 border-slate-800 opacity-60"
                    }`}
                >
                    <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-emerald-400">
                            <Cloud className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                            Node 03
                        </span>
                    </div>
                    <h4 className="text-base font-bold text-white mb-1">
                        Your Personal Google Drive
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                        Uploaded directly to your private Google Drive account using Google's
                        official <code className="text-emerald-400">drive.file</code> OAuth API.
                    </p>
                    <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center gap-2 text-[11px] text-emerald-400">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Solely Inside Your Account</span>
                    </div>
                </div>
            </div>

            {/* Interactive Simulation Bar */}
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <div
                        className={`w-3 h-3 rounded-full ${isSimulating ? "bg-emerald-400 animate-ping" : "bg-emerald-400"}`}
                    />
                    <span className="text-xs text-slate-300 font-medium">
                        {isSimulating
                            ? "Encrypting database & connecting to Google Drive API..."
                            : "Backup Pipeline Status: Ready & Verified"}
                    </span>
                </div>

                <button
                    onClick={triggerSimulation}
                    disabled={isSimulating}
                    className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-emerald-300 border border-slate-700 flex items-center gap-2 transition-all cursor-pointer disabled:opacity-50"
                >
                    <RefreshCw className={`w-3.5 h-3.5 ${isSimulating ? "animate-spin" : ""}`} />
                    <span>Simulate Background Backup</span>
                </button>
            </div>

            {/* Google OAuth Scope Explanation Box */}
            <div className="mt-6 p-5 rounded-2xl bg-slate-950/80 border border-emerald-500/20 text-xs text-slate-400 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-bold">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Why is Google Cloud OAuth Consent Screen Required?</span>
                </div>
                <p className="leading-relaxed">
                    Google requires desktop applications accessing Google Drive storage to present a
                    verified OAuth Consent Screen. Installment Management System requests only:
                </p>
                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 font-mono text-emerald-300 text-[11px] break-all">
                    https://www.googleapis.com/auth/drive.file
                </div>
                <p className="leading-relaxed text-slate-400">
                    This restricted scope allows our desktop application to{" "}
                    <b>only access the files it created itself</b> in your Google Drive (in your{" "}
                    <code className="text-slate-300 font-mono">/InstallmentBackups/</code> folder).
                    The software has <b>zero access</b> to your photos, personal documents, Gmail,
                    or any other existing files on your Google account.
                </p>
            </div>
        </div>
    );
};
