import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
    Database,
    Layers,
    Users,
    CheckCircle2,
    ArrowRight,
    Sliders,
    Smartphone,
} from "lucide-react";

export const Features: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="relative min-h-screen pt-24 pb-20 overflow-hidden">
            {/* Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-96 bg-emerald-500/10 blur-3xl pointer-events-none rounded-full" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Page Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                        <Layers className="w-3.5 h-3.5" />
                        <span>Comprehensive Business Toolkit</span>
                    </div>
                    <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                        Features Built for{" "}
                        <span className="text-gradient-emerald">Installment & Credit Retail</span>
                    </h1>
                    <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                        From customer KYC registration to automated late penalty calculations and
                        instant local database queries, discover everything Installment Manager does
                        right out of the box.
                    </p>
                </div>

                {/* Feature 1: Customer KYC & Ledger Showcase */}
                <div className="glass-card rounded-3xl p-6 sm:p-10 border border-slate-800 mb-12 shadow-2xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-5 space-y-5">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                                <Users className="w-3.5 h-3.5" />
                                <span>Customer Ledger Engine</span>
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                                Complete Borrower Profiles & Guarantor Verification
                            </h2>
                            <p className="text-slate-300 text-sm leading-relaxed">
                                Keep every customer's full financing story organized in one place.
                                Store national ID numbers (CNIC/SSN), home address, direct contact
                                phone numbers, and second-party guarantor documentation with
                                absolute clarity.
                            </p>

                            <div className="space-y-3 pt-2">
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="text-sm font-semibold text-white">
                                            Dynamic Payment Status Badges
                                        </h4>
                                        <p className="text-xs text-slate-400">
                                            Instantly view green (Paid), yellow (Upcoming/Pending),
                                            and red (Overdue) installment rows.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="text-sm font-semibold text-white">
                                            Guarantor & Reference Tracking
                                        </h4>
                                        <p className="text-xs text-slate-400">
                                            Record secondary contacts and relationship details for
                                            risk mitigation.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="text-sm font-semibold text-white">
                                            Automated Running Balance
                                        </h4>
                                        <p className="text-xs text-slate-400">
                                            Always know total financed amount, total received to
                                            date, and pending balance remaining.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-7">
                            <div className="rounded-2xl border border-slate-800 shadow-2xl overflow-hidden group">
                                <img
                                    src="./images/customer-ledger.jpg"
                                    alt="Customer Ledger Management Screen"
                                    className="w-full h-auto object-cover transform transition duration-500 group-hover:scale-[1.01]"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Feature Grid: Technical Capabilities */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    <div className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-800 flex flex-col justify-between">
                        <div className="space-y-3">
                            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                                <Database className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold text-white">Offline SQLite Engine</h3>
                            <p className="text-xs text-slate-400 leading-relaxed">
                                Zero internet connection required for day-to-day point of sale
                                operations. Blazing fast sub-millisecond query execution stored
                                safely on your machine.
                            </p>
                        </div>
                        <div className="mt-6 pt-3 border-t border-slate-800 text-xs text-emerald-400 font-medium flex items-center gap-1">
                            <span>ACID Compliant Local Storage</span>
                        </div>
                    </div>

                    <div className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-800 flex flex-col justify-between">
                        <div className="space-y-3">
                            <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
                                <Sliders className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold text-white">
                                Flexible Penalty & Markup Logic
                            </h3>
                            <p className="text-xs text-slate-400 leading-relaxed">
                                Configure customizable interest rates, flat markups, or 0% interest
                                promo schemes. Define grace periods before late fees automatically
                                apply.
                            </p>
                        </div>
                        <div className="mt-6 pt-3 border-t border-slate-800 text-xs text-teal-400 font-medium flex items-center gap-1">
                            <span>Automated Grace Period Calculator</span>
                        </div>
                    </div>

                    <div className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-800 flex flex-col justify-between">
                        <div className="space-y-3">
                            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                                <Smartphone className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold text-white">WhatsApp & SMS Notices</h3>
                            <p className="text-xs text-slate-400 leading-relaxed">
                                Generate 1-click WhatsApp payment reminders and receipt summaries
                                with pre-filled customer details and outstanding balance notice.
                            </p>
                        </div>
                        <div className="mt-6 pt-3 border-t border-slate-800 text-xs text-emerald-400 font-medium flex items-center gap-1">
                            <span>Zero-Cost Messaging Links</span>
                        </div>
                    </div>
                </div>

                {/* Next Step Callout */}
                <div className="p-8 rounded-3xl bg-gradient-to-r from-slate-900 to-slate-900/90 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="space-y-1 text-center md:text-left">
                        <h3 className="text-xl font-bold text-white">
                            Want to see the Google Cloud Sync Architecture?
                        </h3>
                        <p className="text-xs text-slate-400">
                            Learn how your data is encrypted and backed up directly to your personal
                            Google Drive.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <Link
                            to="/cloud-sync"
                            className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-2 transition-all shadow-md"
                        >
                            <span>Explore Cloud Sync</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link
                            to="/calculator"
                            className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs transition-all border border-slate-700"
                        >
                            <span>Try Loan Calculator</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
