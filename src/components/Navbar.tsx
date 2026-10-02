import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { ShieldCheck, Menu, X, Cloud, FileText, Scale } from "lucide-react";
import { ROUTES } from "../lib/site";

const NAV_ITEMS = [
    { to: ROUTES.home, label: "Home", end: true, icon: null },
    { to: ROUTES.architecture, label: "Architecture", end: false, icon: null },
    { to: ROUTES.howItWorks, label: "How It Works", end: false, icon: null },
    { to: ROUTES.security, label: "Security", end: false, icon: null },
    { to: ROUTES.googleDriveAccess, label: "Google Drive Access", end: false, icon: null },
    { to: ROUTES.privacy, label: "Privacy Policy", end: true, icon: FileText },
    { to: ROUTES.terms, label: "Terms of Service", end: true, icon: Scale },
] as const;

const linkClasses = (isActive: boolean) =>
    `px-3 py-1.5 text-[11px] font-semibold whitespace-nowrap rounded-full transition-all duration-200 flex items-center gap-1.5 ${
        isActive
            ? "text-emerald-400 bg-slate-800 shadow-sm"
            : "text-slate-300 hover:text-white hover:bg-slate-800/50"
    }`;

export const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/40 py-3"
                    : "bg-transparent py-4"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between gap-4">
                    <Link to={ROUTES.home} className="flex items-center gap-3 group shrink-0">
                        <img
                            src="/Drive-Backup-Services/logo.svg"
                            alt="Drive Backup Services Logo"
                            className="w-9 h-9 sm:w-10 sm:h-10 transition-transform duration-300 group-hover:scale-105"
                        />
                        <div>
                            <div className="flex items-center gap-2">
                                <span className="text-base sm:text-lg font-black tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                                    Drive Backup <span className="text-emerald-400">Services</span>
                                </span>
                                <span className="hidden lg:inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                    <ShieldCheck className="w-3 h-3" /> Google Drive Connected
                                </span>
                            </div>
                            <p className="hidden sm:block text-[11px] text-slate-400 font-medium tracking-wide">
                                Direct Google Drive Backup for Desktop Apps
                            </p>
                        </div>
                    </Link>

                    <nav className="hidden lg:flex items-center gap-1 bg-slate-900/80 p-1.5 rounded-full border border-slate-800 backdrop-blur-sm">
                        {NAV_ITEMS.map((item) => (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                end={item.end}
                                className={({ isActive }) => linkClasses(isActive)}
                            >
                                {item.icon && <item.icon className="w-3.5 h-3.5" />}
                                <span>{item.label}</span>
                            </NavLink>
                        ))}
                    </nav>

                    <div className="hidden 2xl:flex items-center gap-2 shrink-0">
                        <Link
                            to={ROUTES.contact}
                            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-xs font-bold whitespace-nowrap shadow-lg shadow-emerald-950/50 hover:from-emerald-400 hover:to-teal-500 transition-all"
                        >
                            <Cloud className="w-3.5 h-3.5" />
                            <span>Get the Desktop App</span>
                        </Link>
                    </div>

                    <div className="flex lg:hidden items-center shrink-0">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
                            aria-label="Toggle navigation"
                            aria-expanded={isOpen}
                            aria-controls="mobile-nav-drawer"
                        >
                            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div
                    id="mobile-nav-drawer"
                    className="lg:hidden bg-slate-950/98 border-b border-slate-800 px-4 pt-3 pb-6 space-y-1.5 mt-2 max-h-[70vh] overflow-y-auto"
                >
                    {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.to}
                            to={item.to}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-200 hover:bg-slate-900"
                        >
                            {item.icon && <item.icon className="w-4 h-4 text-emerald-400" />}
                            <span>{item.label}</span>
                        </Link>
                    ))}
                </div>
            )}
        </header>
    );
};
