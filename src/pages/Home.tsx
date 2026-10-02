import React from "react";
import { Link } from "react-router-dom";
import {
    ShieldCheck,
    CheckCircle2,
    FileText,
    Scale,
    ArrowRight,
    Network,
    Lock,
    Cloud,
    Workflow,
    UserRound,
    Zap,
} from "lucide-react";
import { CloudEcosystemGraphic } from "../components/CloudEcosystemGraphic";
import { SecurityFlowDiagram } from "../components/SecurityFlowDiagram";
import { GoogleScopeCard } from "../components/GoogleScopeCard";
import { BackupFlowStrip, RestoreRow } from "../components/BackupFlowStrip";
import { ROUTES, CONTACT_LABEL } from "../lib/site";
import { usePageMeta, pageTitle } from "../lib/usePageMeta";

const TRUST_POINTS = [
    "Data stays on your own computer",
    "Backups go straight to your Google Drive",
    "AES-256 encryption before upload",
    "No third-party servers involved",
];

export const Home: React.FC = () => {
    usePageMeta({
        title: pageTitle("Automatic Google Drive Backup for Desktop Apps"),
        description:
            "Drive Backup Services automatically backs up your desktop application data to your own Google Drive. Local first, AES-256 encrypted, and sent directly from your computer with no third-party server in between.",
        path: ROUTES.home,
    });

    return (
        <div className="relative min-h-screen pt-20 overflow-hidden font-sans">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-emerald-500/15 via-teal-500/5 to-transparent blur-3xl pointer-events-none" />

            <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 lg:pt-20 lg:pb-24">
                <div className="text-center max-w-5xl mx-auto space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-emerald-400 text-xs font-semibold shadow-inner shadow-emerald-950/50">
                        <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Drive Backup Services</span>
                        <span className="text-slate-500">•</span>
                        <span className="text-slate-300">Desktop app → Google Drive</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-white tracking-tight leading-[1.12] max-w-5xl mx-auto">
                        Automatic Google Drive Backup
                        <br className="hidden sm:block" />{" "}
                        <span className="text-gradient-emerald">
                            For Your Desktop Software
                        </span>
                    </h1>

                    <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
                        Your desktop app keeps a <b>local backup</b> of its data on your own
                        computer. From there it is <b>uploaded automatically to your personal
                        Google Drive</b> — encrypted first, sent directly by your computer,
                        and stored only in your account. No middleman, no third party, no
                        waiting.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <Link
                            to={ROUTES.architecture}
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold text-base shadow-xl shadow-emerald-950/60 hover:from-emerald-400 hover:to-teal-500 transition-all active:scale-95 group"
                        >
                            <Network className="w-5 h-5" />
                            <span>See the Architecture</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <Link
                            to={ROUTES.howItWorks}
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-slate-900/90 border border-slate-700/80 text-slate-200 font-semibold text-base hover:bg-slate-800 hover:text-white transition-all shadow-md group"
                        >
                            <Workflow className="w-5 h-5 text-slate-400" />
                            <span>How Backup Works</span>
                        </Link>
                    </div>

                    <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
                        {TRUST_POINTS.map((point) => (
                            <div key={point} className="flex items-center gap-1.5">
                                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                                <span>{point}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-14 max-w-5xl mx-auto">
                    <CloudEcosystemGraphic />
                </div>
            </section>

            <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-900">
                <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                        <Zap className="w-3.5 h-3.5" />
                        <span>Local Backup, Then Automatic Upload</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                        Where Your Data Actually Goes
                    </h2>
                    <p className="text-sm text-slate-400 leading-relaxed">
                        One short path: your computer creates the backup, your computer
                        uploads it, Google Drive keeps it. There is no step in between where
                        someone else could see it.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto">
                    <BackupFlowStrip />
                    <RestoreRow />

                    <div className="mt-6 p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/25 flex flex-col sm:flex-row items-start sm:items-center gap-3 text-sm">
                        <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0" />
                        <p className="text-slate-300 leading-relaxed">
                            <b className="text-white">
                                No third party is involved at any point.
                            </b>{" "}
                            We do not host your database, we do not receive your backup
                            file, and we do not relay it. Your desktop app talks to Google
                            directly, using your own Google account.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-900">
                <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                        Encryption &amp; Protection
                    </h2>
                    <p className="text-sm text-slate-400 leading-relaxed">
                        Your backup is encrypted on your own machine before it travels, so
                        the file sitting in your Drive is already protected.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto">
                    <SecurityFlowDiagram />
                </div>

                <div className="mt-8 max-w-5xl mx-auto">
                    <Link
                        to={ROUTES.security}
                        className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-sm font-semibold text-slate-200 hover:border-emerald-500/40 hover:text-white transition-colors group"
                    >
                        <Lock className="w-4 h-4 text-emerald-400" />
                        <span>Read the full security design</span>
                        <ArrowRight className="w-4 h-4 text-slate-500 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </section>

            <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-900">
                <div className="max-w-3xl mx-auto mb-10 space-y-3 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-emerald-400 text-xs font-semibold">
                        <Cloud className="w-3.5 h-3.5" />
                        <span>One Permission, Nothing More</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                        The Exact Google Drive Permission We Use
                    </h2>
                    <p className="text-sm text-slate-400 leading-relaxed">
                        Google grants backup tools a single, narrowly-scoped permission.
                        Here it is in full, along with exactly what it does and does not
                        allow.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <GoogleScopeCard />
                    <div className="mt-6 text-center">
                        <Link
                            to={ROUTES.googleDriveAccess}
                            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors group"
                        >
                            <span>Understand this permission in plain language</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-900">
                <div className="glass-card rounded-3xl p-8 sm:p-10 border-2 border-emerald-500/30 max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-8 space-y-4 text-left">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                                <ShieldCheck className="w-3.5 h-3.5" />
                                <span>Google Limited Use Disclosure</span>
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                                Built to Google's API User Data Policy
                            </h3>
                            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                                Drive Backup Services' use and transfer to any other app of
                                information received from Google APIs will adhere to the{" "}
                                <a
                                    href="https://developers.google.com/terms/api-services-user-data-policy"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-emerald-400 underline hover:text-emerald-300 font-semibold"
                                >
                                    Google API Services User Data Policy
                                </a>
                                , including the Limited Use requirements.
                            </p>
                            <p className="text-slate-400 text-xs leading-relaxed">
                                We request one restricted permission, we do not sell or
                                monetize anything, and no data from your Drive is ever used
                                for advertising or AI training.
                            </p>
                        </div>

                        <div className="lg:col-span-4 bg-slate-950/90 p-5 rounded-2xl border border-slate-800 space-y-3 text-center">
                            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mx-auto">
                                <FileText className="w-6 h-6" />
                            </div>
                            <h4 className="text-sm font-bold text-white">Legal Documents</h4>
                            <p className="text-xs text-slate-400">
                                Our privacy practice and usage terms, kept public.
                            </p>
                            <div className="space-y-2 pt-1">
                                <Link
                                    to={ROUTES.privacy}
                                    className="w-full block py-2.5 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 text-xs font-bold border border-emerald-500/40 transition-colors"
                                >
                                    Privacy Policy
                                </Link>
                                <Link
                                    to={ROUTES.terms}
                                    className="w-full block py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-semibold border border-slate-800 transition-colors"
                                >
                                    Terms of Service
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-900">
                <div className="max-w-3xl mx-auto text-center space-y-4">
                    <h3 className="text-xl font-bold text-white">Support &amp; Contact</h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                        Need the desktop app, a backup question, or a verification
                        enquiry? Get in touch with the administrator.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                        <div className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-slate-900/90 border border-slate-800 text-xs font-semibold text-emerald-400">
                            <UserRound className="w-4 h-4" />
                            <span>{CONTACT_LABEL}</span>
                        </div>
                        <Link
                            to={ROUTES.contact}
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-slate-900/90 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                        >
                            <Scale className="w-4 h-4 text-slate-400" />
                            <span>Contact &amp; support page</span>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};
