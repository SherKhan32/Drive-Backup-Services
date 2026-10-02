import React from "react";
import { Link } from "react-router-dom";
import {
    ShieldCheck,
    Cloud,
    CheckCircle2,
    ExternalLink,
    UserRound,
    Database,
    Trash2,
    Users,
} from "lucide-react";
import { PageShell } from "../components/PageShell";
import {
    ROUTES,
    CONTACT_LABEL,
    SITE_URL,
    DRIVE_FILE_SCOPE,
    USER_DATA_POLICY_URL,
    PERMISSIONS_URL,
    BACKUP_FOLDER,
} from "../lib/site";
import { pageTitle } from "../lib/usePageMeta";

const NEVER_USE = [
    "We do not sell Google user data or business records to third parties.",
    "We do not use Google user data or financial records for advertising, retargeting, or credit profiling.",
    "We do not use Google user data to train artificial intelligence or machine learning models.",
    "No person at our organisation has access to your database records or Google Drive files.",
    "We do not operate any server that stores or relays your backup data.",
];

export const PrivacyPolicy: React.FC = () => {
    return (
        <PageShell
            title="Privacy Policy"
            metaTitle={pageTitle("Privacy Policy")}
            description="How Drive Backup Services handles data: offline-first local storage, a single restricted Google Drive permission, and a complete absence of third-party sharing."
            path={ROUTES.privacy}
        >
            <div className="space-y-10 text-slate-300 text-sm leading-relaxed">
                <div className="text-xs text-slate-400 flex flex-wrap items-center gap-x-4 gap-y-1">
                    <span>
                        <b className="text-slate-300">Application:</b> Drive Backup Services
                    </span>
                    <span>•</span>
                    <span>
                        <b className="text-slate-300">Developer:</b> Drive Backup Services
                        Engineering Team
                    </span>
                    <span>•</span>
                    <span>
                        <b className="text-slate-300">Effective Date:</b> October 1, 2026
                    </span>
                </div>

                <section className="glass-card rounded-2xl p-6 border border-slate-800">
                    <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                        <span>Core Privacy Commitment</span>
                    </h2>
                    <p className="leading-relaxed">
                        <b>Drive Backup Services</b> is a backup engine integrated into
                        offline desktop applications such as retail POS, installment
                        financing, billing, and inventory software. It is designed with a
                        strict <b>offline-first architecture</b>. Your commercial, financial,
                        and operational records belong solely to you, and they are stored
                        locally on your desktop workstation.
                    </p>
                    <p className="leading-relaxed mt-3">
                        <b className="text-white">
                            We do not operate external intermediate servers that collect,
                            store, sell, or analyse your transactions or Google account
                            data. Your computer creates the backup and uploads it directly
                            to your own Google Drive.
                        </b>
                    </p>
                </section>

                <section className="p-6 rounded-2xl bg-emerald-950/20 border-2 border-emerald-500/30 space-y-4">
                    <div className="flex items-center gap-2.5 text-emerald-400 font-bold text-base">
                        <Cloud className="w-5 h-5 shrink-0" />
                        <span>
                            Google API Services User Data Policy Compliance &amp; Limited
                            Use Disclosure
                        </span>
                    </div>

                    <p className="text-slate-200">
                        Drive Backup Services' use and transfer to any other app of
                        information received from Google APIs will adhere to the{" "}
                        <a
                            href={USER_DATA_POLICY_URL}
                            target="_blank"
                            rel="noreferrer"
                            className="text-emerald-400 underline hover:text-emerald-300 font-medium"
                        >
                            Google API Services User Data Policy
                        </a>
                        , including the <b>Limited Use</b> requirements.
                    </p>

                    <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2 text-xs">
                        <div className="font-semibold text-white">
                            Specific Google Drive permission requested:
                        </div>
                        <code className="block p-2.5 bg-slate-950 text-emerald-400 rounded font-mono break-all">
                            {DRIVE_FILE_SCOPE}
                        </code>
                        <p className="text-slate-400">
                            This restricted permission grants access{" "}
                            <b>only to files and folders created or opened by Drive Backup
                            Services</b>. It does not grant access to your personal photos,
                            emails, contacts, or unrelated documents in Google Drive.
                        </p>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-xl font-bold text-white flex items-center gap-2">
                        <span className="w-7 h-7 rounded-lg bg-slate-800 flex items-center justify-center text-xs text-emerald-400 font-mono">
                            1
                        </span>
                        <span>How We Access, Use, and Store Google User Data</span>
                    </h2>

                    <div className="space-y-3">
                        <p>
                            When you enable the optional{" "}
                            <b>"Google Drive Cloud Backup"</b> feature inside any of our
                            desktop applications:
                        </p>

                        <ul className="list-disc pl-5 space-y-2 text-xs">
                            <li>
                                <b className="text-white">Direct client-to-Google
                                communication:</b>{" "}
                                The desktop app performs standard OAuth 2.0 authorization
                                through your default web browser directly with Google's
                                secure authorization endpoints. No proxy or relay server is
                                ever used.
                            </li>
                            <li>
                                <b className="text-white">Zero access to other files:</b>{" "}
                                Because we utilise the narrow{" "}
                                <code className="text-emerald-400">drive.file</code>{" "}
                                permission, our application <b>cannot view, edit, read, or
                                delete</b> your personal photos, emails, Google Docs, or any
                                files other than the encrypted backup archives it created.
                            </li>
                            <li>
                                <b className="text-white">Local token storage:</b>{" "}
                                Authorization access and refresh tokens are stored in your
                                operating system's local credential vault, such as Windows
                                Credential Manager, the macOS Keychain, or the Linux Secret
                                Service. Tokens are never sent to external servers.
                            </li>
                            <li>
                                <b className="text-white">Local encryption before
                                upload:</b>{" "}
                                Backup archives are encrypted with AES-256 before
                                transmission to Google Drive, ensuring that only you hold
                                the decryption key.
                            </li>
                            <li>
                                <b className="text-white">Storage location:</b>{" "}
                                Archives are stored in a dedicated folder{" "}
                                <code className="text-emerald-400">{BACKUP_FOLDER}</code>{" "}
                                inside your own Google Drive account.
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-xl font-bold text-white flex items-center gap-2">
                        <span className="w-7 h-7 rounded-lg bg-slate-800 flex items-center justify-center text-xs text-emerald-400 font-mono">
                            2
                        </span>
                        <span>Zero Data Selling &amp; Third-Party Sharing</span>
                    </h2>

                    <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                        <p className="font-semibold text-white">
                            We unequivocally state that:
                        </p>
                        <ul className="space-y-1.5 text-xs text-slate-300">
                            {NEVER_USE.map((item) => (
                                <li key={item} className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-1.5" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-xl font-bold text-white flex items-center gap-2">
                        <span className="w-7 h-7 rounded-lg bg-slate-800 flex items-center justify-center text-xs text-emerald-400 font-mono">
                            3
                        </span>
                        <span>Local Storage, Retention, and Deletion</span>
                    </h2>

                    <p>
                        Because your data is stored solely on your local device and in your
                        private Google Drive, retention is under your control. We hold no
                        copy, so there is nothing for us to retain or delete on your behalf.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
                            <div className="font-bold text-white flex items-center gap-1.5">
                                <Database className="w-4 h-4 text-emerald-400" />
                                <span>Local records</span>
                            </div>
                            <p className="text-slate-400">
                                Business records remain in the offline database on your
                                workstation and are removed only by you.
                            </p>
                        </div>

                        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
                            <div className="font-bold text-white flex items-center gap-1.5">
                                <Trash2 className="w-4 h-4 text-teal-400" />
                                <span>Deleting archives</span>
                            </div>
                            <p className="text-slate-400">
                                Open your Google Drive and delete the backup folder{" "}
                                <code className="text-emerald-400">{BACKUP_FOLDER}</code>{" "}
                                or any individual snapshot at any time.
                            </p>
                        </div>

                        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
                            <div className="font-bold text-white flex items-center gap-1.5">
                                <Users className="w-4 h-4 text-cyan-400" />
                                <span>Revoking access</span>
                            </div>
                            <p className="text-slate-400">
                                Disconnect Google Drive in the desktop app, or revoke it
                                from{" "}
                                <a
                                    href={PERMISSIONS_URL}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-emerald-400 underline"
                                >
                                    Google Account permissions
                                </a>
                                .
                            </p>
                        </div>
                    </div>
                </section>

                <section className="glass-card rounded-2xl p-6 border border-slate-800 space-y-3">
                    <h2 className="text-lg font-bold text-white flex items-center gap-2">
                        <UserRound className="w-5 h-5 text-emerald-400" />
                        <span>Contact Us &amp; Privacy Audits</span>
                    </h2>
                    <p className="text-xs text-slate-300 leading-relaxed">
                        If you have questions regarding this Privacy Policy or our Google
                        API compliance, please get in touch.
                    </p>
                    <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs space-y-2">
                        <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 font-semibold">
                            <UserRound className="w-3.5 h-3.5" />
                            <span>{CONTACT_LABEL}</span>
                        </div>
                        <div className="font-mono break-all">
                            Published at:{" "}
                            <a
                                href={SITE_URL}
                                className="text-emerald-400 hover:underline break-all"
                            >
                                {SITE_URL}
                            </a>
                        </div>
                        <div className="pt-1">
                            <a
                                href={USER_DATA_POLICY_URL}
                                target="_blank"
                                rel="noreferrer"
                                className="text-slate-400 hover:underline inline-flex items-center gap-1"
                            >
                                Google API Services User Data Policy
                                <ExternalLink className="w-3 h-3" />
                            </a>
                        </div>
                    </div>
                </section>

                <section className="flex items-start gap-3 p-5 rounded-2xl bg-slate-900/50 border border-slate-800 text-xs text-slate-400">
                    <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <p className="leading-relaxed">
                        To see how this permission is used in practice, read the{" "}
                        <Link
                            to={ROUTES.googleDriveAccess}
                            className="text-emerald-400 hover:underline font-semibold"
                        >
                            Google Drive Access &amp; Permissions
                        </Link>{" "}
                        page.
                    </p>
                </section>
            </div>
        </PageShell>
    );
};
