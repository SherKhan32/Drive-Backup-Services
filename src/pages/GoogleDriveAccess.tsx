import React from "react";
import { Link } from "react-router-dom";
import {
    FileKey2,
    ShieldCheck,
    CheckCircle2,
    X,
    ExternalLink,
    MousePointerClick,
    KeyRound,
    LogOut,
    ArrowRight,
} from "lucide-react";
import { PageShell, SectionHeading } from "../components/PageShell";
import { GoogleScopeCard } from "../components/GoogleScopeCard";
import {
    ROUTES,
    DRIVE_FILE_SCOPE,
    USER_DATA_POLICY_URL,
    PERMISSIONS_URL,
    BACKUP_FOLDER,
} from "../lib/site";
import { pageTitle } from "../lib/usePageMeta";

const ALLOWED = [
    "Create a new backup folder in your Drive",
    "Upload a new encrypted backup snapshot into that folder",
    "List previously created snapshots so you can choose one",
    "Download a snapshot you selected, in order to restore it",
    "Replace or delete a snapshot that the application created",
];

const DENIED = [
    "Read, edit, or delete any file you did not back up",
    "Access your photos, videos, or personal documents",
    "Reach Gmail, Google Contacts, Calendar, or Chrome data",
    "See files shared with you by other people",
    "List the contents of your Drive outside the backup folder",
];

const CONSENT_STEPS = [
    {
        icon: MousePointerClick,
        title: "You press Connect",
        text: "Inside the desktop app you choose to connect Google Drive. Nothing happens until you do.",
    },
    {
        icon: ShieldCheck,
        title: "Google shows its own consent screen",
        text: "The page opens in your browser, served by Google, stating exactly what is being requested. Your password is typed into Google's page, never into our software.",
    },
    {
        icon: KeyRound,
        title: "The permission is stored locally",
        text: "On approval, the authorization token is kept in your operating system's credential vault on your computer.",
    },
];

export const GoogleDriveAccess: React.FC = () => {
    return (
        <PageShell
            title="Google Drive Access & Permissions"
            metaTitle={pageTitle("Google Drive Access & Permissions")}
            description="The exact Google Drive permission Drive Backup Services uses, what it allows, what it cannot reach, and how to switch it off whenever you want."
            path={ROUTES.googleDriveAccess}
            glow="cyan"
        >
            <div className="space-y-16">
                <section className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
                    <div className="lg:col-span-3 space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-semibold">
                            <FileKey2 className="w-3.5 h-3.5" />
                            <span>In plain language</span>
                        </div>
                        <h2 className="text-2xl font-extrabold text-white tracking-tight">
                            A permission is just a list of doors the app may open
                        </h2>
                        <p className="text-sm text-slate-300 leading-relaxed">
                            Google calls each permission a <b>scope</b>. When an app asks
                            for Google Drive access, it must name the exact scope it needs,
                            and you see that name on Google's consent screen before you
                            approve anything.
                        </p>
                        <p className="text-sm text-slate-300 leading-relaxed">
                            Drive Backup Services needs to do exactly three things: put an
                            encrypted backup in your Drive, list the backups it created,
                            and take one back out when you restore. The single scope below
                            covers those three actions and nothing else.
                        </p>
                        <p className="text-sm text-slate-400 leading-relaxed">
                            A larger scope such as full Drive access would also work, but it
                            would hand the software the ability to read every document you
                            own. A backup tool has no reason to ask for that, so it does
                            not.
                        </p>
                    </div>

                    <div className="lg:col-span-2">
                        <GoogleScopeCard compact />
                    </div>
                </section>

                <section>
                    <SectionHeading
                        eyebrow="Scope capabilities"
                        title="Exactly What This Permission Allows"
                        subtitle="Read the two columns together — the boundary is the whole point of the design."
                        tone="cyan"
                        icon={<FileKey2 className="w-3.5 h-3.5" />}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="glass-card rounded-2xl border border-emerald-500/25 p-6 space-y-3">
                            <div className="flex items-center gap-2 text-emerald-400">
                                <CheckCircle2 className="w-5 h-5" />
                                <h3 className="text-base font-bold text-white">
                                    What it allows
                                </h3>
                            </div>
                            <ul className="space-y-2.5 text-xs text-slate-300">
                                {ALLOWED.map((item) => (
                                    <li key={item} className="flex items-start gap-2.5">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                        <span className="leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="glass-card rounded-2xl border border-slate-800 p-6 space-y-3">
                            <div className="flex items-center gap-2 text-slate-300">
                                <X className="w-5 h-5" />
                                <h3 className="text-base font-bold text-white">
                                    What it cannot do
                                </h3>
                            </div>
                            <ul className="space-y-2.5 text-xs text-slate-400">
                                {DENIED.map((item) => (
                                    <li key={item} className="flex items-start gap-2.5">
                                        <X className="w-4 h-4 text-slate-600 shrink-0 mt-0.5" />
                                        <span className="leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <p className="mt-5 text-xs text-slate-500 leading-relaxed text-center">
                        Everything the application can ever touch lives in one folder in
                        your own Drive:{" "}
                        <code className="text-emerald-300">{BACKUP_FOLDER}</code>
                    </p>
                </section>

                <section>
                    <SectionHeading
                        eyebrow="Consent flow"
                        title="How the Permission Is Granted"
                        subtitle="Consent happens on Google's side, under your control, and can be taken back the same way."
                        tone="emerald"
                        icon={<MousePointerClick className="w-3.5 h-3.5" />}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {CONSENT_STEPS.map((step, index) => (
                            <div
                                key={step.title}
                                className="glass-card rounded-2xl border border-slate-800 p-6 space-y-3 relative"
                            >
                                <span className="absolute top-4 right-5 font-mono text-3xl font-black text-slate-800">
                                    0{index + 1}
                                </span>
                                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400">
                                    <step.icon className="w-5 h-5" />
                                </div>
                                <h3 className="text-sm font-bold text-white">{step.title}</h3>
                                <p className="text-xs text-slate-400 leading-relaxed">{step.text}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section>
                    <SectionHeading
                        eyebrow="Turning it off"
                        title="Disconnect Whenever You Want"
                        subtitle="Two simple routes, and both take effect immediately."
                        tone="teal"
                        icon={<LogOut className="w-3.5 h-3.5" />}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="glass-card rounded-2xl border border-slate-800 p-6 space-y-2">
                            <h3 className="text-sm font-bold text-white">
                                From inside the desktop app
                            </h3>
                            <p className="text-xs text-slate-400 leading-relaxed">
                                Open backup settings and choose Disconnect. Scheduled
                                uploads stop, the stored token is cleared from your
                                computer, and existing snapshots stay in your Drive.
                            </p>
                        </div>

                        <div className="glass-card rounded-2xl border border-slate-800 p-6 space-y-2">
                            <h3 className="text-sm font-bold text-white">
                                From your Google Account
                            </h3>
                            <p className="text-xs text-slate-400 leading-relaxed">
                                Remove Drive Backup Services from your third-party access
                                list. Google revokes the permission on its side and every
                                future request has to be approved again.
                            </p>
                            <a
                                href={PERMISSIONS_URL}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:underline pt-1"
                            >
                                <span>Google Account permissions</span>
                                <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                        </div>
                    </div>
                </section>

                <section className="glass-card rounded-3xl border border-emerald-500/25 p-8 space-y-4">
                    <div className="flex items-center gap-2.5 text-emerald-400">
                        <ShieldCheck className="w-5 h-5" />
                        <h3 className="text-lg font-bold text-white">
                            Google API Services User Data Policy
                        </h3>
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed">
                        Drive Backup Services' use and transfer to any other app of
                        information received from Google APIs will adhere to the{" "}
                        <a
                            href={USER_DATA_POLICY_URL}
                            target="_blank"
                            rel="noreferrer"
                            className="text-emerald-400 underline hover:text-emerald-300 font-semibold"
                        >
                            Google API Services User Data Policy
                        </a>
                        , including the Limited Use requirements.
                    </p>
                    <p className="text-sm text-slate-400 leading-relaxed">
                        We request only{" "}
                        <code className="text-emerald-300 bg-slate-950 px-1.5 py-0.5 rounded font-mono text-xs break-all">
                            {DRIVE_FILE_SCOPE}
                        </code>{" "}
                        and use it solely to create, upload, and restore database backup
                        archives that the user initiates inside their own personal Google
                        Drive account.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 pt-1">
                        <Link
                            to={ROUTES.privacy}
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 text-xs font-bold border border-emerald-500/40 transition-colors"
                        >
                            Read the Privacy Policy
                        </Link>
                        <Link
                            to={ROUTES.contact}
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-white transition-colors group"
                        >
                            <span>Ask a verification question</span>
                            <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </section>
            </div>
        </PageShell>
    );
};
