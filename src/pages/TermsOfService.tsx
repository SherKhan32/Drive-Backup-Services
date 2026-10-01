import React, { useEffect } from "react";
import { FileCheck2, ShieldAlert, Database, Scale, Mail } from "lucide-react";

export const TermsOfService: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="relative min-h-screen pt-24 pb-20 overflow-hidden font-sans">
            {/* Background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-teal-500/10 blur-3xl pointer-events-none rounded-full" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="border-b border-slate-800 pb-8 mb-10 text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-semibold mb-4">
                        <Scale className="w-3.5 h-3.5" />
                        <span>End-User Software License & Usage Terms</span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                        Terms of Service
                    </h1>
                    <div className="text-sm text-slate-400 mt-2 flex flex-wrap items-center gap-x-4 gap-y-1">
                        <span>
                            <b>Application:</b> Drive Backup Services (Drive Backup Service)
                        </span>
                        <span>•</span>
                        <span>
                            <b>Developer:</b> Drive Backup Services Engineering Team
                        </span>
                        <span>•</span>
                        <span>
                            <b>Effective Date:</b> October 1, 2026
                        </span>
                    </div>
                </div>

                {/* Terms Content */}
                <div className="space-y-10 text-slate-300 text-sm leading-relaxed text-left">
                    <section className="glass-card rounded-2xl p-6 border border-slate-800">
                        <h2 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                            <FileCheck2 className="w-5 h-5 text-teal-400" />
                            <span>1. Agreement to Terms</span>
                        </h2>
                        <p className="text-slate-300 leading-relaxed">
                            By downloading, installing, accessing, or using{" "}
                            <b>Drive Backup Services</b> ("Software", "Application", or "Service"), you agree to be bound by these Terms of Service. If you do not agree to these terms, do not install or use the software.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-white flex items-center gap-2">
                            <span className="w-7 h-7 rounded-lg bg-slate-800 flex items-center justify-center text-xs text-teal-400 font-mono">
                                2
                            </span>
                            <span>Software License & Permitted Use</span>
                        </h2>
                        <p>
                            Drive Backup Services grants you a non-exclusive, revocable, non-transferable license to use the software on your desktop workstations for commercial or personal business management purposes (such as offline database backup and disaster recovery for desktop applications).
                        </p>
                        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs space-y-2">
                            <div className="font-semibold text-white">License Restrictions:</div>
                            <ul className="list-disc pl-5 space-y-1 text-slate-400">
                                <li>
                                    You may not decompile, reverse-engineer, or disassemble the binary distributions.
                                </li>
                                <li>
                                    You may not resell or repackage the software under another brand without express authorization.
                                </li>
                                <li>
                                    You may not bypass cryptographic licensing or token validation controls.
                                </li>
                            </ul>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-white flex items-center gap-2">
                            <span className="w-7 h-7 rounded-lg bg-slate-800 flex items-center justify-center text-xs text-teal-400 font-mono">
                                3
                            </span>
                            <span>Local Data Ownership & Backup Responsibility</span>
                        </h2>
                        <p>
                            Because Drive Backup Services operates with an <b>offline-first desktop architecture</b>:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
                                <div className="font-bold text-white flex items-center gap-1.5">
                                    <Database className="w-4 h-4 text-emerald-400" />
                                    <span>100% Data Ownership</span>
                                </div>
                                <p className="text-slate-400">
                                    You retain exclusive ownership of all customer files, transaction logs, inventory records, and SQLite databases managed by your desktop applications.
                                </p>
                            </div>

                            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
                                <div className="font-bold text-white flex items-center gap-1.5">
                                    <ShieldAlert className="w-4 h-4 text-amber-400" />
                                    <span>Backup Responsibility</span>
                                </div>
                                <p className="text-slate-400">
                                    You are responsible for regularly initiating automated or manual backups to protect your local data against physical hardware failure.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-white flex items-center gap-2">
                            <span className="w-7 h-7 rounded-lg bg-slate-800 flex items-center justify-center text-xs text-teal-400 font-mono">
                                4
                            </span>
                            <span>Google Cloud Integration & Third-Party Terms</span>
                        </h2>
                        <p>
                            The software integrates with Google Drive for encrypted cloud backup storage. Your use of Google Drive is subject to Google's applicable Terms of Service and Privacy Policy. Drive Backup Services maintains strict compliance with the Google API Services User Data Policy using the restricted <code className="text-emerald-400">drive.file</code> scope. We are not liable for storage quotas, outages, or network connectivity failures on Google's cloud infrastructure.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-white flex items-center gap-2">
                            <span className="w-7 h-7 rounded-lg bg-slate-800 flex items-center justify-center text-xs text-teal-400 font-mono">
                                5
                            </span>
                            <span>Disclaimer of Warranties & Limitation of Liability</span>
                        </h2>
                        <p className="text-xs text-slate-400 leading-relaxed">
                            THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. IN NO EVENT SHALL DRIVE BACKUP SERVICES OR ITS DEVELOPERS BE LIABLE FOR ANY CLAIM, DAMAGES, LOSS OF BUSINESS DATA, OR OTHER LIABILITY ARISING FROM COMPUTER HARDWARE FAILURES OR IMPROPER OPERATOR USAGE.
                        </p>
                    </section>

                    <section className="glass-card rounded-2xl p-6 border border-slate-800 space-y-3">
                        <h2 className="text-lg font-bold text-white flex items-center gap-2">
                            <Mail className="w-5 h-5 text-teal-400" />
                            <span>Inquiries & Legal Questions</span>
                        </h2>
                        <p className="text-xs text-slate-300">
                            For licensing questions, custom printer support, or legal clarifications:
                        </p>
                        <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono space-y-1">
                            <div>
                                Email:{" "}
                                <a
                                    href="mailto:support@drivebackupservices.com"
                                    className="text-teal-400 hover:underline"
                                >
                                    support@drivebackupservices.com
                                </a>
                            </div>
                            <div>
                                Developer Contact:{" "}
                                <a
                                    href="mailto:sherkhan.dev@gmail.com"
                                    className="text-teal-400 hover:underline"
                                >
                                    sherkhan.dev@gmail.com
                                </a>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};
