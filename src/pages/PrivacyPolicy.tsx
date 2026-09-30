import React, { useEffect } from "react";
import { ShieldCheck, Cloud, CheckCircle2, ExternalLink, Mail } from "lucide-react";

export const PrivacyPolicy: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="relative min-h-screen pt-24 pb-20 overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-emerald-500/10 blur-3xl pointer-events-none rounded-full" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="border-b border-slate-800 pb-8 mb-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-4">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>Google Cloud OAuth 2.0 Compliance Document</span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                        Privacy Policy
                    </h1>
                    <p className="text-sm text-slate-400 mt-2 flex flex-wrap items-center gap-x-4 gap-y-1">
                        <span>
                            <b>Application:</b> Drive Backup Service (by Drive Backup Services —
                            includes Installment Management System desktop app)
                        </span>
                        <span>•</span>
                        <span>
                            <b>Last Updated:</b> September 22, 2026
                        </span>
                    </p>
                </div>

                {/* Content Body */}
                <div className="space-y-10 text-slate-300 text-sm leading-relaxed">
                    {/* Executive Summary */}
                    <section className="glass-card rounded-2xl p-6 border border-slate-800">
                        <h2 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                            <span>Core Privacy Commitment</span>
                        </h2>
                        <p className="text-slate-300 leading-relaxed">
                            <b>Drive Backup Service</b> by <b>Drive Backup Services</b>{" "}
                            (including the Installment Management System desktop app) is
                            designed with an <b>offline-first architecture</b>. We believe your business and
                            financial records belong solely to you. All loan accounts, customer
                            data, and transaction ledgers are stored locally on your device in an
                            encrypted SQLite database.
                            <br />
                            <br />
                            <b className="text-white">
                                We do not operate backend servers that collect, store, sell, or
                                analyze your commercial data or Google account information.
                            </b>
                        </p>
                    </section>

                    {/* Mandatory Google API Limited Use Disclosure Section */}
                    <section
                        id="oauth-disclosure"
                        className="p-6 rounded-2xl bg-emerald-950/20 border-2 border-emerald-500/30 space-y-4"
                    >
                        <div className="flex items-center gap-2.5 text-emerald-400 font-bold text-base">
                            <Cloud className="w-5 h-5 shrink-0" />
                            <span>
                                Google API Services User Data Policy Compliance & Limited Use
                                Disclosure
                            </span>
                        </div>

                        <p className="text-slate-200">
                            Drive Backup Service's use and transfer to any other app of
                            information received from Google APIs will adhere to the{" "}
                            <a
                                href="https://developers.google.com/terms/api-services-user-data-policy"
                                target="_blank"
                                rel="noreferrer"
                                className="text-emerald-400 underline hover:text-emerald-300 inline-flex items-center gap-1 font-medium"
                            >
                                Google API Services User Data Policy
                                <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                            , including the <b>Limited Use</b> requirements.
                        </p>

                        <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2 text-xs">
                            <div className="font-semibold text-white">
                                Specific Google OAuth 2.0 Scope Requested:
                            </div>
                            <code className="block p-2 bg-slate-950 text-emerald-400 rounded font-mono break-all">
                                https://www.googleapis.com/auth/drive.file
                            </code>
                            <p className="text-slate-400">
                                This is a restricted scope that grants access{" "}
                                <b>
                                    only to files and folders opened or created by Installment
                                    Management System
                                </b>
                                .
                            </p>
                        </div>
                    </section>

                    {/* Section 1: Detailed Google Drive Scope Usage */}
                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-white flex items-center gap-2">
                            <span className="w-7 h-7 rounded-lg bg-slate-800 flex items-center justify-center text-xs text-emerald-400 font-mono">
                                1
                            </span>
                            <span>How We Access, Use, and Store Google User Data</span>
                        </h2>

                        <div className="space-y-3 text-slate-300">
                            <p>
                                When you choose to enable the optional{" "}
                                <b>"1-Click Google Drive Cloud Sync"</b> feature inside the desktop
                                application:
                            </p>

                            <ul className="list-disc pl-5 space-y-2 text-slate-300">
                                <li>
                                    <b className="text-white">
                                        Direct Client-to-Google Communication:
                                    </b>{" "}
                                    The application performs standard OAuth 2.0 authorization
                                    through your default web browser directly with Google's
                                    authorization endpoints. No intermediary or proxy server is ever
                                    used.
                                </li>
                                <li>
                                    <b className="text-white">Zero Access to Other Files:</b>{" "}
                                    Because we utilize the narrow{" "}
                                    <code className="text-emerald-400">drive.file</code> scope, our
                                    application <b>cannot view, edit, read, or delete</b> your
                                    personal photos, emails, Google Docs, or any files other than
                                    the specific encrypted backup archives created by Installment
                                    Management System.
                                </li>
                                <li>
                                    <b className="text-white">Local Token Storage:</b> OAuth access
                                    and refresh tokens are stored securely in your local operating
                                    system's credential vault (Windows Credential Manager, macOS
                                    Keychain, or Linux Secret Service). Tokens are never transmitted
                                    to us or any third party.
                                </li>
                                <li>
                                    <b className="text-white">Local Encryption Before Upload:</b>{" "}
                                    Backup archives are encrypted with AES-256-GCM before
                                    transmission to Google Drive, ensuring that even in the cloud,
                                    only you hold the decryption key.
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 2: Data Sharing, Transfer, and Disclosure */}
                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-white flex items-center gap-2">
                            <span className="w-7 h-7 rounded-lg bg-slate-800 flex items-center justify-center text-xs text-emerald-400 font-mono">
                                2
                            </span>
                            <span>Zero Data Selling & Third-Party Sharing</span>
                        </h2>

                        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                            <p className="font-semibold text-white">We unequivocally state that:</p>
                            <ul className="space-y-1.5 text-xs text-slate-300">
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                    <span>
                                        We do <b>NOT</b> sell Google user data or financial ledger
                                        data to third parties.
                                    </span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                    <span>
                                        We do <b>NOT</b> use Google user data or financial records
                                        for advertising, retargeting, or credit profiling.
                                    </span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                    <span>
                                        We do <b>NOT</b> use Google user data to train generalized
                                        artificial intelligence (AI) or machine learning (ML)
                                        models.
                                    </span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                    <span>
                                        No humans at our organization have access to your database
                                        records or Google Drive files.
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 3: Data Retention & Deletion */}
                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-white flex items-center gap-2">
                            <span className="w-7 h-7 rounded-lg bg-slate-800 flex items-center justify-center text-xs text-emerald-400 font-mono">
                                3
                            </span>
                            <span>User Control, Data Retention, and Deletion</span>
                        </h2>

                        <p>
                            Because your data is stored solely on your local device and in your
                            private Google Drive:
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
                                <div className="font-bold text-white">Revoking Google Access</div>
                                <p className="text-slate-400">
                                    You may disconnect the app at any time within the Desktop App
                                    Settings, or revoke permissions instantly at{" "}
                                    <a
                                        href="https://myaccount.google.com/permissions"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-emerald-400 underline"
                                    >
                                        Google Account Security Permissions
                                    </a>
                                    .
                                </p>
                            </div>

                            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
                                <div className="font-bold text-white">Deleting Backup Files</div>
                                <p className="text-slate-400">
                                    You have full ownership of your backup files in Google Drive.
                                    You can open your Google Drive and delete the{" "}
                                    <code className="text-emerald-400">/InstallmentBackups/</code>{" "}
                                    folder anytime.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 4: Local Application Data */}
                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-white flex items-center gap-2">
                            <span className="w-7 h-7 rounded-lg bg-slate-800 flex items-center justify-center text-xs text-emerald-400 font-mono">
                                4
                            </span>
                            <span>Information Processed Locally by the Software</span>
                        </h2>

                        <p>
                            The desktop software processes the information you enter locally to
                            perform its core functions:
                        </p>

                        <ul className="list-disc pl-5 space-y-1 text-xs text-slate-300">
                            <li>
                                Customer Information (Name, CNIC/ID, phone number, residential
                                address, guarantor details).
                            </li>
                            <li>
                                Installment Contracts (Principal loan amounts, markup rates, payment
                                frequencies, down payments).
                            </li>
                            <li>
                                Transaction Ledgers (Receipt numbers, cash collections, timestamps,
                                overdue penalties).
                            </li>
                            <li>
                                Receipt Printing Layouts (Store name, logo, footer terms, thermal
                                printer ESC/POS commands).
                            </li>
                        </ul>

                        <p className="text-xs text-slate-400">
                            All of the above remain on your physical workstation inside your SQLite
                            file (<code className="text-slate-300">installment_manager.db</code>).
                        </p>
                    </section>

                    {/* Section 5: Contact & Privacy Officer */}
                    <section className="glass-card rounded-2xl p-6 border border-slate-800 space-y-3">
                        <h2 className="text-lg font-bold text-white flex items-center gap-2">
                            <Mail className="w-5 h-5 text-emerald-400" />
                            <span>Contact Us & Privacy Inquiries</span>
                        </h2>
                        <p className="text-xs text-slate-300 leading-relaxed">
                            If you have any questions regarding this Privacy Policy, our Google
                            Cloud OAuth compliance, or how your data is handled, please contact our
                            team:
                        </p>
                        <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono space-y-1">
                            <div>
                                Email:{" "}
                                <a
                                    href="mailto:privacy@installmentmanager.app"
                                    className="text-emerald-400 hover:underline"
                                >
                                    privacy@installmentmanager.app
                                </a>
                            </div>
                            <div>
                                Support:{" "}
                                <a
                                    href="mailto:support@installmentmanager.app"
                                    className="text-emerald-400 hover:underline"
                                >
                                    support@installmentmanager.app
                                </a>
                            </div>
                            <div>
                                Website:{" "}
                                <a
                                    href="https://installmentmanager.app"
                                    className="text-emerald-400 hover:underline"
                                >
                                    https://installmentmanager.app
                                </a>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};
