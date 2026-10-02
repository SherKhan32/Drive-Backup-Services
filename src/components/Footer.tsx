import React from "react";
import { Link } from "react-router-dom";
import { Lock, Database, ExternalLink, CheckCircle2, Cpu, Cloud, UserRound } from "lucide-react";
import {
    ROUTES,
    CONTACT_LABEL,
    DRIVE_FILE_SCOPE,
    USER_DATA_POLICY_URL,
} from "../lib/site";

const HIGHLIGHTS = [
    {
        icon: Database,
        tone: "emerald",
        title: "Local-First Storage",
        text: "Records live on your own computer, not on our servers.",
    },
    {
        icon: Cloud,
        tone: "teal",
        title: "Direct Google Drive",
        text: "Backups travel straight from your PC to your Google Drive.",
    },
    {
        icon: Lock,
        tone: "emerald",
        title: "AES-256 Encryption",
        text: "Archives are encrypted locally before any upload begins.",
    },
    {
        icon: CheckCircle2,
        tone: "slate",
        title: "No Middle Server",
        text: "No third party ever receives or relays your data.",
    },
] as const;

const TONES: Record<string, string> = {
    emerald: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
    teal: "bg-teal-500/10 border-teal-500/20 text-teal-400",
    slate: "bg-slate-800/60 border-slate-700/50 text-slate-300",
};

export const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 relative overflow-hidden font-sans">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-emerald-500/5 blur-3xl pointer-events-none rounded-full" />

            <div className="border-b border-slate-900/80 bg-slate-900/40 py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {HIGHLIGHTS.map((item) => (
                            <div key={item.title} className="flex items-center gap-3">
                                <div
                                    className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${TONES[item.tone]}`}
                                >
                                    <item.icon className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-slate-200">
                                        {item.title}
                                    </h4>
                                    <p className="text-xs text-slate-400">{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="space-y-4">
                        <Link to={ROUTES.home} className="flex items-center gap-3">
                            <img
                                src="/Drive-Backup-Services/logo.svg"
                                alt="Drive Backup Services"
                                className="w-8 h-8"
                            />
                            <span className="text-lg font-black text-white tracking-tight">
                                Drive Backup <span className="text-emerald-400">Services</span>
                            </span>
                        </Link>
                        <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
                            Drive Backup Services backs up your desktop application data
                            automatically to your own Google Drive. Your computer writes the
                            backup, and your Google Drive stores it. Nothing passes through
                            anyone else.
                        </p>
                        <div className="text-xs text-slate-400 flex items-center gap-2">
                            <UserRound className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-slate-300">{CONTACT_LABEL}</span>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3">
                            Product Pages
                        </h4>
                        <ul className="space-y-2 text-xs">
                            {[
                                { to: ROUTES.architecture, label: "System Architecture" },
                                { to: ROUTES.howItWorks, label: "How Backup Works" },
                                { to: ROUTES.security, label: "Encryption & Security" },
                                { to: ROUTES.googleDriveAccess, label: "Google Drive Access" },
                                { to: ROUTES.contact, label: "Contact & Support" },
                            ].map((item) => (
                                <li key={item.to}>
                                    <Link
                                        to={item.to}
                                        className="hover:text-emerald-400 transition-colors"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3">
                            Legal &amp; Verification
                        </h4>
                        <ul className="space-y-2 text-xs">
                            <li>
                                <Link
                                    to={ROUTES.privacy}
                                    className="hover:text-emerald-400 transition-colors text-emerald-400 font-semibold"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={ROUTES.terms}
                                    className="hover:text-emerald-400 transition-colors"
                                >
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <a
                                    href={USER_DATA_POLICY_URL}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1"
                                >
                                    <span>Google API Services User Data Policy</span>
                                    <ExternalLink className="w-3 h-3" />
                                </a>
                            </li>
                        </ul>

                        <div className="mt-4 p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-2 text-xs">
                            <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                                <CheckCircle2 className="w-3.5 h-3.5" />
                                <span>Single Permission Requested</span>
                            </div>
                            <code className="block p-1.5 bg-slate-950 text-emerald-300 rounded font-mono text-[11px] break-all">
                                {DRIVE_FILE_SCOPE}
                            </code>
                            <p className="text-[11px] text-slate-400">
                                Reaches only the backup snapshots the user creates. Nothing
                                else in Google Drive is visible to the app.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-10 p-5 rounded-2xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 leading-relaxed space-y-2">
                    <div className="flex items-center gap-2 text-slate-300 font-semibold">
                        <Cpu className="w-4 h-4 text-emerald-400" />
                        <span>Google API Services User Data Policy Compliance Statement:</span>
                    </div>
                    <p>
                        Drive Backup Services' use and transfer to any other app of
                        information received from Google APIs will adhere to the{" "}
                        <a
                            href={USER_DATA_POLICY_URL}
                            target="_blank"
                            rel="noreferrer"
                            className="text-emerald-400 hover:underline"
                        >
                            Google API Services User Data Policy
                        </a>
                        , including the Limited Use requirements. We request only the
                        restricted{" "}
                        <code className="px-1.5 py-0.5 bg-slate-800 text-emerald-300 rounded font-mono break-all">
                            {DRIVE_FILE_SCOPE}
                        </code>{" "}
                        permission, used solely to create, upload, and restore database
                        backup archives that the user initiates inside their own personal
                        Google Drive account.
                    </p>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
                    <p>
                        © {new Date().getFullYear()} Drive Backup Services. All rights
                        reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <Link to={ROUTES.privacy} className="hover:text-slate-400 transition-colors">
                            Privacy Policy
                        </Link>
                        <Link to={ROUTES.terms} className="hover:text-slate-400 transition-colors">
                            Terms of Service
                        </Link>
                        <span className="text-slate-700">|</span>
                        <span className="text-emerald-400">
                            Direct Google Drive Connection
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};
