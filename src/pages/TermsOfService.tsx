import React from "react";
import { Link } from "react-router-dom";
import { FileCheck2, ShieldAlert, Database, UserRound, Users } from "lucide-react";
import { PageShell } from "../components/PageShell";
import {
    ROUTES,
    CONTACT_LABEL,
    USER_DATA_POLICY_URL,
} from "../lib/site";
import { pageTitle } from "../lib/usePageMeta";

const RESTRICTIONS = [
    "You may not decompile, reverse-engineer, or disassemble the binary distributions.",
    "You may not resell or repackage the software under another brand without express authorization.",
    "You may not bypass cryptographic protection or token validation controls.",
];

export const TermsOfService: React.FC = () => {
    return (
        <PageShell
            title="Terms of Service"
            metaTitle={pageTitle("Terms of Service")}
            description="The terms governing use of Drive Backup Services, including permitted use of the desktop software, data ownership, and the Google Drive backup integration."
            path={ROUTES.terms}
            glow="teal"
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
                    <h2 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                        <FileCheck2 className="w-5 h-5 text-teal-400" />
                        <span>1. Agreement to Terms</span>
                    </h2>
                    <p className="text-slate-300 leading-relaxed">
                        By downloading, installing, accessing, or using{" "}
                        <b>Drive Backup Services</b> ("Software", "Application", or
                        "Service"), you agree to be bound by these Terms of Service. If you
                        do not agree to these terms, do not install or use the software.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-xl font-bold text-white flex items-center gap-2">
                        <span className="w-7 h-7 rounded-lg bg-slate-800 flex items-center justify-center text-xs text-teal-400 font-mono">
                            2
                        </span>
                        <span>Permitted Use &amp; Ownership</span>
                    </h2>
                    <p>
                        You may install and run Drive Backup Services on your own desktop
                        workstations for commercial or personal business management
                        purposes, including offline database backup and disaster recovery
                        for desktop applications. You retain full ownership of all data
                        entered into the software.
                    </p>
                    <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs space-y-2">
                        <div className="font-semibold text-white">Usage restrictions:</div>
                        <ul className="list-disc pl-5 space-y-1 text-slate-400">
                            {RESTRICTIONS.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-xl font-bold text-white flex items-center gap-2">
                        <span className="w-7 h-7 rounded-lg bg-slate-800 flex items-center justify-center text-xs text-teal-400 font-mono">
                            3
                        </span>
                        <span>Local Data Ownership &amp; Backup Responsibility</span>
                    </h2>
                    <p>
                        Because Drive Backup Services operates with an{" "}
                        <b>offline-first desktop architecture</b>:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
                            <div className="font-bold text-white flex items-center gap-1.5">
                                <Database className="w-4 h-4 text-emerald-400" />
                                <span>Complete Data Ownership</span>
                            </div>
                            <p className="text-slate-400">
                                You retain exclusive ownership of all customer files,
                                transaction logs, inventory records, and databases managed
                                by your desktop applications.
                            </p>
                        </div>

                        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
                            <div className="font-bold text-white flex items-center gap-1.5">
                                <ShieldAlert className="w-4 h-4 text-amber-400" />
                                <span>Backup Responsibility</span>
                            </div>
                            <p className="text-slate-400">
                                You are responsible for regularly initiating automated or
                                manual backups to protect your local data against physical
                                hardware failure.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-xl font-bold text-white flex items-center gap-2">
                        <span className="w-7 h-7 rounded-lg bg-slate-800 flex items-center justify-center text-xs text-teal-400 font-mono">
                            4
                        </span>
                        <span>Google Cloud Integration &amp; Third-Party Terms</span>
                    </h2>
                    <p>
                        The software integrates with Google Drive for encrypted cloud
                        backup storage. Your use of Google Drive is subject to Google's
                        applicable Terms of Service and Privacy Policy. Drive Backup
                        Services maintains strict compliance with the Google API Services
                        User Data Policy using the restricted{" "}
                        <code className="text-emerald-400">drive.file</code> permission. We
                        are not liable for storage quotas, outages, or network connectivity
                        failures on Google's cloud infrastructure. The full policy is
                        published on our{" "}
                        <a
                            href={USER_DATA_POLICY_URL}
                            target="_blank"
                            rel="noreferrer"
                            className="text-emerald-400 hover:underline"
                        >
                            Google API Services User Data Policy
                        </a>{" "}
                        page.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-xl font-bold text-white flex items-center gap-2">
                        <span className="w-7 h-7 rounded-lg bg-slate-800 flex items-center justify-center text-xs text-teal-400 font-mono">
                            5
                        </span>
                        <span>Disclaimer of Warranties &amp; Limitation of Liability</span>
                    </h2>
                    <p className="text-xs text-slate-400 leading-relaxed">
                        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
                        EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
                        MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
                        NON-INFRINGEMENT. IN NO EVENT SHALL DRIVE BACKUP SERVICES OR ITS
                        DEVELOPERS BE LIABLE FOR ANY CLAIM, DAMAGES, LOSS OF BUSINESS DATA,
                        OR OTHER LIABILITY ARISING FROM COMPUTER HARDWARE FAILURES OR
                        IMPROPER OPERATOR USAGE.
                    </p>
                </section>

                <section className="glass-card rounded-2xl p-6 border border-slate-800 space-y-3">
                    <h2 className="text-lg font-bold text-white flex items-center gap-2">
                        <UserRound className="w-5 h-5 text-teal-400" />
                        <span>Inquiries &amp; Legal Questions</span>
                    </h2>
                    <p className="text-xs text-slate-300">
                        For support, custom printer support, or legal clarifications:
                    </p>
                    <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs">
                        <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-teal-500/10 border border-teal-500/25 text-teal-300 font-semibold">
                            <UserRound className="w-3.5 h-3.5" />
                            <span>{CONTACT_LABEL}</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-3 pt-1">
                        <Users className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                        <p className="text-[11px] text-slate-500 leading-relaxed">
                            See also our{" "}
                            <Link
                                to={ROUTES.privacy}
                                className="text-emerald-400 hover:underline"
                            >
                                Privacy Policy
                            </Link>{" "}
                            for how your data and Google Drive permission are handled.
                        </p>
                    </div>
                </section>
            </div>
        </PageShell>
    );
};
