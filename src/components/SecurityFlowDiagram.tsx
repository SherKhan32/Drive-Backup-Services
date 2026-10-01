import React from "react";
import { Database, Lock, Cloud, CheckCircle2, KeyRound } from "lucide-react";

export const SecurityFlowDiagram: React.FC = () => {
    const steps = [
        {
            num: "01",
            title: "Local Database Snapshot",
            desc: "The desktop software creates a clean point-in-time snapshot of the local SQLite database without interrupting counter operations.",
            icon: Database,
            badge: "Offline PC",
        },
        {
            num: "02",
            title: "AES-256 Client Encryption",
            desc: "The database snapshot is compressed and encrypted on your local machine using industry-standard AES-256 encryption before any network transmission.",
            icon: Lock,
            badge: "Client-Side",
        },
        {
            num: "03",
            title: "Direct Google OAuth Handshake",
            desc: "The desktop app communicates directly with Google OAuth 2.0 endpoints using the narrow drive.file scope. Zero proxy servers.",
            icon: KeyRound,
            badge: "OAuth 2.0",
        },
        {
            num: "04",
            title: "Safe Storage & Instant Restore",
            desc: "The encrypted backup is saved into your private Google Drive account. You can restore your complete database with 1 click anytime.",
            icon: Cloud,
            badge: "Google Cloud",
        },
    ];

    return (
        <div className="w-full text-left font-sans">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {steps.map((step, idx) => {
                    const IconComponent = step.icon;
                    return (
                        <div
                            key={idx}
                            className="glass-card rounded-2xl p-6 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between space-y-4 relative"
                        >
                            <div className="flex items-center justify-between">
                                <span className="font-mono text-2xl font-black text-slate-700">{step.num}</span>
                                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-800 text-emerald-400 border border-slate-700">
                                    {step.badge}
                                </span>
                            </div>

                            <div className="space-y-2">
                                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400">
                                    <IconComponent className="w-5 h-5" />
                                </div>
                                <h4 className="text-base font-bold text-white">{step.title}</h4>
                                <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
                            </div>

                            <div className="pt-2 border-t border-slate-800/80 flex items-center gap-1.5 text-[11px] text-emerald-400 font-semibold">
                                <CheckCircle2 className="w-3.5 h-3.5" />
                                <span>Verified Secure Protocol</span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
