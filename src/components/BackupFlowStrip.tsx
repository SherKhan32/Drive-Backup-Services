import React from "react";
import {
    Database,
    Lock,
    ArrowRight,
    CloudUpload,
    Cloud,
    CircleDot,
    RotateCcw,
} from "lucide-react";
import { BACKUP_FOLDER } from "../lib/site";

const NODES = [
    {
        icon: Database,
        tone: "emerald",
        step: "01",
        title: "Your desktop app data",
        text: "The business database your desktop software writes on your own computer.",
    },
    {
        icon: Lock,
        tone: "cyan",
        step: "02",
        title: "Local backup copy",
        text: "A point-in-time copy is created and encrypted with AES-256 on your machine.",
    },
    {
        icon: CloudUpload,
        tone: "teal",
        step: "03",
        title: "Automatic upload",
        text: "The encrypted file is sent straight from your computer to Google Drive.",
    },
    {
        icon: Cloud,
        tone: "blue",
        step: "04",
        title: "Your Google Drive",
        text: `Stored in your private folder ${BACKUP_FOLDER} — inside your own account.`,
    },
] as const;

const TONES: Record<string, { box: string; icon: string; step: string; arrow: string }> = {
    emerald: {
        box: "bg-emerald-500/10 border-emerald-500/25",
        icon: "text-emerald-400",
        step: "text-emerald-400",
        arrow: "bg-emerald-500/40",
    },
    cyan: {
        box: "bg-cyan-500/10 border-cyan-500/25",
        icon: "text-cyan-400",
        step: "text-cyan-400",
        arrow: "bg-cyan-500/40",
    },
    teal: {
        box: "bg-teal-500/10 border-teal-500/25",
        icon: "text-teal-400",
        step: "text-teal-400",
        arrow: "bg-teal-500/40",
    },
    blue: {
        box: "bg-blue-500/10 border-blue-500/25",
        icon: "text-blue-400",
        step: "text-blue-400",
        arrow: "bg-blue-500/40",
    },
};

export const BackupFlowStrip: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {NODES.map((node, index) => {
                const tone = TONES[node.tone];
                const isLast = index === NODES.length - 1;

                return (
                    <div key={node.step} className="relative">
                        <div className="glass-card rounded-2xl border border-slate-800 p-5 h-full flex flex-col gap-3">
                            <div className="flex items-center justify-between">
                                <div
                                    className={`w-10 h-10 rounded-xl border flex items-center justify-center ${tone.box}`}
                                >
                                    <node.icon className={`w-5 h-5 ${tone.icon}`} />
                                </div>
                                <span
                                    className={`font-mono text-2xl font-black opacity-60 ${tone.step}`}
                                >
                                    {node.step}
                                </span>
                            </div>
                            <h4 className="text-sm font-bold text-white">{node.title}</h4>
                            <p className="text-xs text-slate-400 leading-relaxed">
                                {node.text}
                            </p>
                        </div>

                        {!isLast && (
                            <ArrowRight className="hidden md:flex absolute -right-[18px] top-1/2 -translate-y-1/2 w-4 h-4 text-slate-700 z-10" />
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export const RestoreRow: React.FC = () => (
    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
        <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-900/70 border border-slate-800">
            <CircleDot className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <p className="text-slate-400">
                Backups run on a schedule you choose, or manually with one click from the
                app's backup screen.
            </p>
        </div>
        <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-900/70 border border-slate-800">
            <RotateCcw className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
            <p className="text-slate-400">
                Restoring is equally simple: pick a snapshot from your Drive and the
                desktop app rebuilds your database from it.
            </p>
        </div>
    </div>
);
