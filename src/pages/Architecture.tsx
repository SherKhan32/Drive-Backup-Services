import React from "react";
import { Link } from "react-router-dom";
import {
    Network,
    Laptop,
    ShieldCheck,
    Cloud,
    CheckCircle2,
    X,
    ArrowRight,
    Layers,
} from "lucide-react";
import { PageShell, SectionHeading } from "../components/PageShell";
import { CloudEcosystemGraphic } from "../components/CloudEcosystemGraphic";
import { BackupFlowStrip } from "../components/BackupFlowStrip";
import { ROUTES, BACKUP_FOLDER, DRIVE_FILE_SCOPE } from "../lib/site";
import { pageTitle } from "../lib/usePageMeta";

const LAYERS = [
    {
        icon: Laptop,
        tone: "emerald",
        label: "Layer 01",
        title: "Desktop Application Layer",
        subtitle: "Runs entirely on your computer",
        points: [
            "Business data lives in a local offline database on your own machine",
            "Works with no internet connection for day-to-day use",
            "Produces a clean, point-in-time snapshot when a backup is due",
            "Nothing about your records is published anywhere by itself",
        ],
    },
    {
        icon: ShieldCheck,
        tone: "teal",
        label: "Layer 02",
        title: "Drive Backup Services Engine",
        subtitle: "The backup layer inside the desktop app",
        points: [
            "Creates the local backup copy of your database",
            "Encrypts that copy with AES-256 before any network activity",
            "Keeps the Google permission token in your operating system's credential vault",
            "Uploads automatically on the schedule you configure",
        ],
    },
    {
        icon: Cloud,
        tone: "cyan",
        label: "Layer 03",
        title: "Your Google Drive Layer",
        subtitle: "Storage you already own and control",
        points: [
            `Encrypted snapshots are stored in your private folder ${BACKUP_FOLDER}`,
            "Stored inside your own Google account, not an account of ours",
            "Accessible, downloadable, and deletable by you at any time",
            "Restoring a backup is a normal file read from your own Drive",
        ],
    },
] as const;

const TONES: Record<string, { box: string; text: string }> = {
    emerald: { box: "bg-emerald-500/10 border-emerald-500/25", text: "text-emerald-400" },
    teal: { box: "bg-teal-500/10 border-teal-500/25", text: "text-teal-400" },
    cyan: { box: "bg-cyan-500/10 border-cyan-500/25", text: "text-cyan-400" },
};

const BOUNDARIES = [
    { party: "Your desktop application", sees: "Your full local database", notSees: "Anything on the internet" },
    { party: "Drive Backup Services", sees: "Nothing — it is code, not a service", notSees: "Your data, your files, your account" },
    { party: "Google Drive", sees: "Only the encrypted backup files you created", notSees: "Your local computer, your other Drive files" },
    { party: "Any third party", sees: "Nothing at all", notSees: "Everything — there is no third-party hop" },
];

export const Architecture: React.FC = () => {
    return (
        <PageShell
            title="System Architecture & Integration Diagram"
            metaTitle={pageTitle("System Architecture & Integration Diagram")}
            description="How Drive Backup Services connects desktop software to Google Drive — the three layers, the data path between them, and exactly who is able to see what at every stage."
            path={ROUTES.architecture}
        >
            <div className="space-y-16">
                <div>
                    <CloudEcosystemGraphic />
                </div>

                <section>
                    <SectionHeading
                        eyebrow="Layer by layer"
                        title="Three Layers, One Straight Path"
                        subtitle="Nothing is duplicated into an extra system. Each layer does exactly one job and hands the result to the next."
                        tone="emerald"
                        icon={<Layers className="w-3.5 h-3.5" />}
                    />

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {LAYERS.map((layer) => {
                            const tone = TONES[layer.tone];
                            return (
                                <div
                                    key={layer.label}
                                    className="glass-card rounded-2xl border border-slate-800 p-6 flex flex-col gap-4"
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                                            {layer.label}
                                        </span>
                                        <div
                                            className={`w-10 h-10 rounded-xl border flex items-center justify-center ${tone.box}`}
                                        >
                                            <layer.icon className={`w-5 h-5 ${tone.text}`} />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-base font-bold text-white">
                                            {layer.title}
                                        </h3>
                                        <p className="text-xs text-slate-400 mt-1">
                                            {layer.subtitle}
                                        </p>
                                    </div>
                                    <ul className="space-y-2 text-xs text-slate-400">
                                        {layer.points.map((point) => (
                                            <li key={point} className="flex items-start gap-2">
                                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                                                <span className="leading-relaxed">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </section>

                <section>
                    <SectionHeading
                        eyebrow="Data path"
                        title="From Local Database to Your Google Drive"
                        subtitle="The complete journey of one backup file, start to finish."
                        tone="teal"
                        icon={<Network className="w-3.5 h-3.5" />}
                    />

                    <BackupFlowStrip />
                </section>

                <section>
                    <SectionHeading
                        eyebrow="Trust boundaries"
                        title="Who Can See What"
                        subtitle="A plain-language map of every party involved and the data each one can ever touch."
                        tone="cyan"
                        icon={<ShieldCheck className="w-3.5 h-3.5" />}
                    />

                    <div className="glass-card rounded-2xl border border-slate-800 overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-xs min-w-[640px]">
                                <thead className="bg-slate-900/80 text-slate-300">
                                    <tr>
                                        <th className="px-5 py-3.5 font-semibold">Party</th>
                                        <th className="px-5 py-3.5 font-semibold">Can see</th>
                                        <th className="px-5 py-3.5 font-semibold">Can never see</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-800/80">
                                    {BOUNDARIES.map((row) => (
                                        <tr key={row.party} className="align-top">
                                            <td className="px-5 py-4 font-semibold text-white">
                                                {row.party}
                                            </td>
                                            <td className="px-5 py-4 text-slate-300">
                                                {row.sees}
                                            </td>
                                            <td className="px-5 py-4 text-slate-400 flex items-start gap-2">
                                                <X className="w-3.5 h-3.5 text-slate-600 shrink-0 mt-0.5" />
                                                <span>{row.notSees}</span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="glass-card rounded-2xl border border-slate-800 p-6 space-y-3">
                        <h3 className="text-base font-bold text-white">
                            Connection used between Layer 02 and Layer 03
                        </h3>
                        <code className="block px-3.5 py-3 bg-slate-950 border border-slate-800 rounded-xl font-mono text-xs text-emerald-300 break-all">
                            {DRIVE_FILE_SCOPE}
                        </code>
                        <p className="text-xs text-slate-400 leading-relaxed">
                            This single Google permission is what allows the upload and
                            restore steps. It is limited to the backup files the application
                            itself creates.{" "}
                            <Link
                                to={ROUTES.googleDriveAccess}
                                className="text-emerald-400 hover:underline font-semibold"
                            >
                                See the plain-language version
                            </Link>
                            .
                        </p>
                    </div>

                    <div className="glass-card rounded-2xl border border-slate-800 p-6 space-y-3">
                        <h3 className="text-base font-bold text-white">
                            Operating requirements
                        </h3>
                        <ul className="space-y-2 text-xs text-slate-400">
                            {[
                                "Runs on Windows, macOS and Linux desktops",
                                "An internet connection is needed only when a backup uploads or restores",
                                "No separate server, subscription, or account with us",
                                "Your Google Drive storage quota is the only storage involved",
                            ].map((item) => (
                                <li key={item} className="flex items-start gap-2">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                                    <span className="leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <Link
                            to={ROUTES.howItWorks}
                            className="inline-flex items-center gap-2 pt-1 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors group"
                        >
                            <span>Next: how a backup actually runs</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </section>
            </div>
        </PageShell>
    );
};
