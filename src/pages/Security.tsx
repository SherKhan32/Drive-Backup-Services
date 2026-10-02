import React from "react";
import { Link } from "react-router-dom";
import {
    Lock,
    KeyRound,
    ShieldCheck,
    EyeOff,
    UserCheck,
    Ban,
    CheckCircle2,
    ArrowRight,
} from "lucide-react";
import { PageShell, SectionHeading } from "../components/PageShell";
import { GoogleScopeCard } from "../components/GoogleScopeCard";
import { ROUTES } from "../lib/site";
import { pageTitle } from "../lib/usePageMeta";

const PROTECTION_LAYERS = [
    {
        icon: Lock,
        tone: "emerald",
        title: "Encrypted before it moves",
        text: "Your database copy is compressed and encrypted with AES-256 on your own computer. The encrypted file is what gets uploaded, so there is never an unencrypted copy travelling across the internet.",
    },
    {
        icon: KeyRound,
        tone: "cyan",
        title: "The key stays with you",
        text: "The encryption key is derived from a password only you set. It is held by the desktop app on your machine and is never transmitted, stored on our side, or recoverable by us.",
    },
    {
        icon: UserCheck,
        tone: "teal",
        title: "Permission kept in your OS vault",
        text: "The Google authorization token is stored in your operating system's protected credential store, such as Windows Credential Manager or the macOS Keychain, instead of in a plain settings file.",
    },
    {
        icon: EyeOff,
        tone: "emerald",
        title: "Nobody else can read it",
        text: "Because the snapshot is already encrypted before upload, the copy resting in your Google Drive is unreadable without your key — including to us.",
    },
] as const;

const NEVER = [
    "We do not host, mirror, or store a copy of your database on any server of ours.",
    "We do not operate an upload relay, proxy, or forwarding service for your backups.",
    "We do not read, open, index, or analyse the contents of your backup files.",
    "We do not collect telemetry, usage analytics, or advertising identifiers.",
    "We do not use your Drive data for advertising, profiling, or AI model training.",
    "We do not sell, rent, or share any part of your data with anyone.",
];

const CONTROLS = [
    "Disconnect Google Drive from the desktop app at any time",
    "Revoke the permission from Google Account security settings",
    "Delete any snapshot or the whole backup folder in your own Drive",
    "Rotate the encryption password whenever you choose",
];

const TONES: Record<string, { box: string; text: string }> = {
    emerald: { box: "bg-emerald-500/10 border-emerald-500/25", text: "text-emerald-400" },
    cyan: { box: "bg-cyan-500/10 border-cyan-500/25", text: "text-cyan-400" },
    teal: { box: "bg-teal-500/10 border-teal-500/25", text: "text-teal-400" },
};

export const Security: React.FC = () => {
    return (
        <PageShell
            title="Encryption & Data Protection"
            metaTitle={pageTitle("Encryption & Data Protection")}
            description="How Drive Backup Services protects your data: AES-256 encryption on your own machine, keys that never leave it, minimal Google permission, and controls that stay in your hands."
            path={ROUTES.security}
        >
            <div className="space-y-16">
                <section>
                    <SectionHeading
                        eyebrow="Protection design"
                        title="Four Layers of Protection"
                        subtitle="Each layer is designed so that a weakness in another layer still does not expose your records."
                        tone="emerald"
                        icon={<ShieldCheck className="w-3.5 h-3.5" />}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {PROTECTION_LAYERS.map((layer) => {
                            const tone = TONES[layer.tone];
                            return (
                                <div
                                    key={layer.title}
                                    className="glass-card rounded-2xl border border-slate-800 p-6 flex gap-4"
                                >
                                    <div
                                        className={`w-11 h-11 rounded-xl border flex items-center justify-center shrink-0 ${tone.box}`}
                                    >
                                        <layer.icon className={`w-5 h-5 ${tone.text}`} />
                                    </div>
                                    <div className="space-y-1.5">
                                        <h3 className="text-sm font-bold text-white">
                                            {layer.title}
                                        </h3>
                                        <p className="text-xs text-slate-400 leading-relaxed">
                                            {layer.text}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                <section>
                    <SectionHeading
                        eyebrow="Minimal access"
                        title="One Permission, Granted by You"
                        subtitle="Security here is mostly about asking for less. The application requests a single Google permission and nothing beyond it."
                        tone="teal"
                    />
                    <GoogleScopeCard />
                </section>

                <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="glass-card rounded-2xl border border-slate-800 p-6 space-y-4">
                        <div className="flex items-center gap-2.5 text-emerald-400">
                            <Ban className="w-5 h-5" />
                            <h3 className="text-base font-bold text-white">
                                What Drive Backup Services never does
                            </h3>
                        </div>
                        <ul className="space-y-2.5 text-xs text-slate-400">
                            {NEVER.map((item) => (
                                <li key={item} className="flex items-start gap-2.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-1.5" />
                                    <span className="leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="glass-card rounded-2xl border border-slate-800 p-6 space-y-4">
                        <div className="flex items-center gap-2.5 text-teal-400">
                            <UserCheck className="w-5 h-5" />
                            <h3 className="text-base font-bold text-white">
                                Controls that stay with you
                            </h3>
                        </div>
                        <ul className="space-y-2.5 text-xs text-slate-400">
                            {CONTROLS.map((item) => (
                                <li key={item} className="flex items-start gap-2.5">
                                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                                    <span className="leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-[11px] text-slate-500 leading-relaxed pt-1 border-t border-slate-800">
                            If you ever want to confirm how your data is handled, the{" "}
                            <Link
                                to={ROUTES.privacy}
                                className="text-emerald-400 hover:underline"
                            >
                                Privacy Policy
                            </Link>{" "}
                            sets out the same commitments in full detail.
                        </p>
                    </div>
                </section>

                <section className="glass-card rounded-3xl border border-emerald-500/25 p-8 flex flex-col sm:flex-row items-start sm:items-center gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 shrink-0">
                        <KeyRound className="w-6 h-6" />
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-lg font-bold text-white">
                            Keep your encryption password safe
                        </h3>
                        <p className="text-sm text-slate-400 leading-relaxed max-w-3xl">
                            Because the key never leaves your device, nobody — including us
                            — can recover a backup if that password is lost. Store it in a
                            password manager or a safe place offline. Everything else about
                            your backup is self-service inside your own Google Drive.
                        </p>
                    </div>
                    <Link
                        to={ROUTES.googleDriveAccess}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors group shrink-0"
                    >
                        <span>Google Drive access explained</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </section>
            </div>
        </PageShell>
    );
};
