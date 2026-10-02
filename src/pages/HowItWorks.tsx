import React from "react";
import { Link } from "react-router-dom";
import {
    RefreshCw,
    Timer,
    MousePointerClick,
    RotateCcw,
    WifiOff,
    History,
    ShieldCheck,
    ArrowRight,
} from "lucide-react";
import { PageShell, SectionHeading } from "../components/PageShell";
import { SecurityFlowDiagram } from "../components/SecurityFlowDiagram";
import { ROUTES, BACKUP_FOLDER } from "../lib/site";
import { pageTitle } from "../lib/usePageMeta";

const MODES = [
    {
        icon: Timer,
        title: "Scheduled automatic backups",
        text: "Choose a daily or weekly time and the app creates and uploads a backup on its own. Once set, you do not have to think about it.",
    },
    {
        icon: MousePointerClick,
        title: "One-click manual backup",
        text: "Open the backup screen and press backup. Useful before installing updates, changing hardware, or a busy trading day.",
    },
    {
        icon: History,
        title: "Version history you keep",
        text: "Each run adds a new dated snapshot, so an earlier good state stays available even after later changes.",
    },
    {
        icon: RotateCcw,
        title: "Restore in one step",
        text: "Choose a snapshot from your Drive and the app rebuilds your database from it, then reopens your software as normal.",
    },
] as const;

const SITUATIONS = [
    {
        icon: WifiOff,
        title: "No internet at the moment",
        text: "The local backup is still created on your computer. The encrypted upload simply waits and continues when the connection returns.",
    },
    {
        icon: ShieldCheck,
        title: "Nobody can read the stored file",
        text: "The snapshot is encrypted before it leaves your machine, so the file stored in your Drive is unreadable without your key.",
    },
    {
        icon: RefreshCw,
        title: "You are always in control",
        text: "Pause the schedule, disconnect Google Drive, or delete old snapshots directly from your own Drive at any time.",
    },
] as const;

export const HowItWorks: React.FC = () => {
    return (
        <PageShell
            title="How Backup and Restore Work"
            metaTitle={pageTitle("How Backup and Restore Work")}
            description="Drive Backup Services keeps a local backup of your desktop app data, uploads it automatically to your own Google Drive, and restores it in one click when you need it."
            path={ROUTES.howItWorks}
            glow="teal"
        >
            <div className="space-y-16">
                <section>
                    <SectionHeading
                        eyebrow="Four stages"
                        title="One Backup, Start to Finish"
                        subtitle="The same four stages run for a scheduled backup and for a manual one-click backup."
                        tone="emerald"
                        icon={<RefreshCw className="w-3.5 h-3.5" />}
                    />
                    <SecurityFlowDiagram />
                </section>

                <section>
                    <SectionHeading
                        eyebrow="Backup modes"
                        title="Automatic or Manual — Both One Click"
                        subtitle="The same encrypted snapshot is produced either way. Only the trigger changes."
                        tone="teal"
                        icon={<Timer className="w-3.5 h-3.5" />}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {MODES.map((mode) => (
                            <div
                                key={mode.title}
                                className="glass-card rounded-2xl border border-slate-800 p-6 flex gap-4"
                            >
                                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-teal-400 shrink-0">
                                    <mode.icon className="w-5 h-5" />
                                </div>
                                <div className="space-y-1.5">
                                    <h3 className="text-sm font-bold text-white">{mode.title}</h3>
                                    <p className="text-xs text-slate-400 leading-relaxed">
                                        {mode.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section>
                    <SectionHeading
                        eyebrow="Everyday situations"
                        title="What Happens in Real Conditions"
                        subtitle="The behaviour you can expect when things are not perfect."
                        tone="cyan"
                        icon={<WifiOff className="w-3.5 h-3.5" />}
                    />

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {SITUATIONS.map((item) => (
                            <div
                                key={item.title}
                                className="glass-card rounded-2xl border border-slate-800 p-6 space-y-3"
                            >
                                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400">
                                    <item.icon className="w-5 h-5" />
                                </div>
                                <h3 className="text-sm font-bold text-white">{item.title}</h3>
                                <p className="text-xs text-slate-400 leading-relaxed">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="glass-card rounded-3xl border border-slate-800 p-8 text-center space-y-4">
                    <h3 className="text-xl font-bold text-white">
                        Your backups live in your own Drive folder
                    </h3>
                    <code className="inline-block px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl font-mono text-sm text-emerald-300">
                        My Drive {BACKUP_FOLDER}
                    </code>
                    <p className="text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        You can open this folder in the Google Drive app, download any
                        snapshot, share it with someone, or delete it. It is your storage,
                        under your account, governed by your Google settings.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                        <Link
                            to={ROUTES.security}
                            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-sm font-bold hover:from-emerald-400 hover:to-teal-500 transition-all"
                        >
                            <ShieldCheck className="w-4 h-4" />
                            <span>How the encryption works</span>
                        </Link>
                        <Link
                            to={ROUTES.googleDriveAccess}
                            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-sm font-semibold text-slate-200 hover:bg-slate-800 hover:text-white transition-colors group"
                        >
                            <span>Which Google permission is used</span>
                            <ArrowRight className="w-4 h-4 text-slate-500 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </section>
            </div>
        </PageShell>
    );
};
