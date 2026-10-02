import React from "react";
import { Link } from "react-router-dom";
import { Compass, Home as HomeIcon, Network, LifeBuoy } from "lucide-react";
import { ROUTES } from "../lib/site";
import { pageTitle, usePageMeta } from "../lib/usePageMeta";

const DESTINATIONS = [
    { to: ROUTES.home, label: "Home", icon: HomeIcon },
    { to: ROUTES.architecture, label: "System Architecture", icon: Network },
    { to: ROUTES.howItWorks, label: "How Backup Works", icon: Compass },
    { to: ROUTES.contact, label: "Contact & Support", icon: LifeBuoy },
];

export const NotFound: React.FC = () => {
    usePageMeta({
        title: pageTitle("Page Not Found"),
        description:
            "The page you requested does not exist. Return to the Drive Backup Services home page or browse the architecture, backup, and security documentation.",
        path: "/404/",
    });

    return (
        <div className="relative min-h-screen pt-32 pb-24 overflow-hidden font-sans">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-80 bg-emerald-500/10 blur-3xl pointer-events-none rounded-full" />

            <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 text-center space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                    <Compass className="w-3.5 h-3.5" />
                    <span>Error 404</span>
                </div>

                <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                    This page does not exist
                </h1>

                <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                    The address you followed is not part of this site. Every page here has
                    its own address, so try one of the destinations below.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {DESTINATIONS.map((item) => (
                        <Link
                            key={item.to}
                            to={item.to}
                            className="flex items-center gap-2.5 px-5 py-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-sm font-semibold text-slate-200 hover:border-emerald-500/40 hover:text-white transition-colors"
                        >
                            <item.icon className="w-4 h-4 text-emerald-400" />
                            <span>{item.label}</span>
                        </Link>
                    ))}
                </div>

                <Link
                    to={ROUTES.home}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold text-sm shadow-xl shadow-emerald-950/60 hover:from-emerald-400 hover:to-teal-500 transition-all"
                >
                    <HomeIcon className="w-4 h-4" />
                    <span>Back to home page</span>
                </Link>
            </div>
        </div>
    );
};
