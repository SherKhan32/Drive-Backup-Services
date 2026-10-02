import React, { useState } from "react";
import { Check, Copy, FileKey2, ShieldCheck, FolderLock } from "lucide-react";
import { DRIVE_FILE_SCOPE, BACKUP_FOLDER } from "../lib/site";

type GoogleScopeCardProps = {
    compact?: boolean;
};

export const GoogleScopeCard: React.FC<GoogleScopeCardProps> = ({ compact = false }) => {
    const [copied, setCopied] = useState(false);

    const copyScope = async () => {
        try {
            await navigator.clipboard.writeText(DRIVE_FILE_SCOPE);
            setCopied(true);
            window.setTimeout(() => setCopied(false), 2000);
        } catch {
            setCopied(false);
        }
    };

    return (
        <div className="glass-card rounded-2xl border border-emerald-500/25 overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-3 px-5 sm:px-6 py-4 bg-emerald-500/5 border-b border-emerald-500/15">
                <div className="flex items-center gap-2.5 text-emerald-400">
                    <FileKey2 className="w-5 h-5 shrink-0" />
                    <span className="text-sm font-bold tracking-wide">
                        Google Drive Permission Requested
                    </span>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-[11px] font-bold uppercase tracking-wider">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Least-privilege
                </span>
            </div>

            <div className="px-5 sm:px-6 py-5 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <code className="flex-1 block px-3.5 py-3 bg-slate-950 border border-slate-800 rounded-xl font-mono text-xs sm:text-sm text-emerald-300 break-all">
                        {DRIVE_FILE_SCOPE}
                    </code>
                    <button
                        type="button"
                        onClick={copyScope}
                        className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-white hover:border-emerald-500/40 transition-colors shrink-0"
                        aria-label="Copy Google Drive permission scope"
                    >
                        {copied ? (
                            <Check className="w-4 h-4 text-emerald-400" />
                        ) : (
                            <Copy className="w-4 h-4" />
                        )}
                        <span>{copied ? "Copied" : "Copy"}</span>
                    </button>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                    This is Google's official <b>single-scope permission</b> used for
                    backup tools. It is deliberately the smallest permission set that can
                    still perform a backup: the application can create, write, read and
                    delete <b>only the backup files it created itself</b>, inside its own
                    folder in your Drive.
                </p>

                {!compact && (
                    <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                            <div className="p-3.5 rounded-xl bg-slate-900/70 border border-emerald-500/15 space-y-1.5">
                                <div className="font-bold text-emerald-300 flex items-center gap-1.5">
                                    <FolderLock className="w-4 h-4" />
                                    <span>What it can reach</span>
                                </div>
                                <ul className="list-disc pl-4 space-y-1 text-slate-400">
                                    <li>
                                        Its own backup folder{" "}
                                        <code className="text-emerald-300">{BACKUP_FOLDER}</code>
                                    </li>
                                    <li>Backup snapshots you created</li>
                                    <li>Restoring a snapshot you selected</li>
                                </ul>
                            </div>

                            <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 space-y-1.5">
                                <div className="font-bold text-slate-300">What it cannot reach</div>
                                <ul className="list-disc pl-4 space-y-1 text-slate-400">
                                    <li>Your photos and personal files</li>
                                    <li>Gmail, Contacts or Calendar data</li>
                                    <li>Documents you never backed up</li>
                                </ul>
                            </div>
                        </div>

                        <p className="text-[11px] text-slate-500 leading-relaxed">
                            Permission is granted by you in Google's own consent screen,
                            is stored only in your operating system's credential vault, and
                            can be withdrawn from Google Account settings at any time.
                        </p>
                    </>
                )}
            </div>
        </div>
    );
};
