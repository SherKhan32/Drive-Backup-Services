import React, { useEffect } from "react";
import { FileCheck2, ShieldAlert, Database, Scale, Mail } from "lucide-react";

export const TermsOfService: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="relative min-h-screen pt-24 pb-20 overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-teal-500/10 blur-3xl pointer-events-none rounded-full" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="border-b border-slate-800 pb-8 mb-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-semibold mb-4">
                        <Scale className="w-3.5 h-3.5" />
                        <span>End-User Software License & Usage Terms</span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                        Terms of Service
                    </h1>
                    <p className="text-sm text-slate-400 mt-2 flex items-center gap-4">
                        <span>
                            <b>Application:</b> Installment Management System Desktop
                        </span>
                        <span>•</span>
                        <span>
                            <b>Effective Date:</b> September 22, 2026
                        </span>
                    </p>
                </div>

                {/* Terms Content */}
                <div className="space-y-10 text-slate-300 text-sm leading-relaxed">
                    <section className="glass-card rounded-2xl p-6 border border-slate-800">
                        <h2 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                            <FileCheck2 className="w-5 h-5 text-teal-400" />
                            <span>1. Agreement to Terms</span>
                        </h2>
                        <p className="text-slate-300 leading-relaxed">
                            By downloading, installing, accessing, or using{" "}
                            <b>Installment Management System</b> ("Software", "Application"), you
                            agree to be bound by these Terms of Service. If you do not agree to
                            these terms, do not install or use the application.
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
                            Installment Management System grants you a non-exclusive, revocable,
                            non-transferable license to install and use the software on compatible
                            desktop workstations (Windows, macOS, Linux) for your internal
                            commercial business management purposes (such as micro-finance, consumer
                            lending, electronics installment sales, and customer ledger accounting).
                        </p>
                        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs space-y-2">
                            <div className="font-semibold text-white">License Restrictions:</div>
                            <ul className="list-disc pl-5 space-y-1 text-slate-400">
                                <li>
                                    You may not decompile, reverse-engineer, or disassemble the
                                    binary distribution.
                                </li>
                                <li>
                                    You may not repackage or resell the software under another brand
                                    without express commercial licensing.
                                </li>
                                <li>
                                    You may not bypass cryptographic validation mechanisms or
                                    licensing controls.
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
                            Because Installment Management System is an{" "}
                            <b>offline-first desktop software</b>:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
                                <div className="font-bold text-white flex items-center gap-1.5">
                                    <Database className="w-4 h-4 text-emerald-400" />
                                    <span>100% Data Ownership</span>
                                </div>
                                <p className="text-slate-400">
                                    You retain exclusive, absolute ownership of all customer files,
                                    loan data, repayment records, and SQLite database entries
                                    generated using the software.
                                </p>
                            </div>

                            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
                                <div className="font-bold text-white flex items-center gap-1.5">
                                    <ShieldAlert className="w-4 h-4 text-amber-400" />
                                    <span>Your Backup Responsibility</span>
                                </div>
                                <p className="text-slate-400">
                                    You are responsible for regularly triggering automated or manual
                                    backups (via our 1-Click Google Drive integration or external
                                    drive copies) to prevent hardware-loss scenarios.
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
                            The application provides integration with Google Drive for secure backup
                            storage. Your use of Google Drive is governed by Google’s applicable
                            Terms of Service and Privacy Policy. We maintain strict compliance with
                            the Google API Services User Data Policy. We are not responsible for
                            service interruptions, quotas, or outages on Google’s infrastructure.
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
                            THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
                            OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
                            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                            IN NO EVENT SHALL THE DEVELOPERS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
                            CLAIM, DAMAGES, LOSS OF FINANCIAL DATA, COMPUTER HARDWARE FAILURE, OR
                            OTHER LIABILITY ARISING FROM OR IN CONNECTION WITH THE SOFTWARE.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-white flex items-center gap-2">
                            <span className="w-7 h-7 rounded-lg bg-slate-800 flex items-center justify-center text-xs text-teal-400 font-mono">
                                6
                            </span>
                            <span>Support & Software Updates</span>
                        </h2>
                        <p>
                            We provide periodic software maintenance updates, bug fixes, thermal
                            printer driver compatibility patches, and documentation. Major feature
                            releases are provided according to your license tier.
                        </p>
                    </section>

                    <section className="glass-card rounded-2xl p-6 border border-slate-800 space-y-3">
                        <h2 className="text-lg font-bold text-white flex items-center gap-2">
                            <Mail className="w-5 h-5 text-teal-400" />
                            <span>Inquiries & Legal Questions</span>
                        </h2>
                        <p className="text-xs text-slate-300">
                            For commercial licensing inquiries, custom printer support, or legal
                            clarifications:
                        </p>
                        <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono">
                            Email:{" "}
                            <a
                                href="mailto:legal@installmentmanager.app"
                                className="text-teal-400 hover:underline"
                            >
                                legal@installmentmanager.app
                            </a>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};
