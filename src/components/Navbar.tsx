import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { ShieldCheck, Menu, X, Cloud, FileText, Scale } from "lucide-react";

export const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/40 py-3"
                    : "bg-transparent py-4"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Brand Logo - Drive Backup Services */}
                    <Link to="/" className="flex items-center gap-3 group">
                        <img
                            src="./logo.svg"
                            alt="Drive Backup Services Logo"
                            className="w-9 h-9 sm:w-10 sm:h-10 transition-transform duration-300 group-hover:scale-105"
                        />
                        <div>
                            <div className="flex items-center gap-2">
                                <span className="text-base sm:text-lg font-black tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                                    Drive Backup <span className="text-emerald-400">Services</span>
                                </span>
                                <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                    <ShieldCheck className="w-3 h-3" /> OAuth 2.0 Verified
                                </span>
                            </div>
                            <p className="text-[11px] text-slate-400 font-medium tracking-wide">
                                Google Drive Cloud Backup for Desktop Apps
                            </p>
                        </div>
                    </Link>

                    {/* Desktop Navigation Links - Ultra Clean */}
                    <nav className="hidden md:flex items-center gap-2 bg-slate-900/80 p-1.5 rounded-full border border-slate-800 backdrop-blur-sm">
                        <NavLink
                            to="/"
                            end
                            className={({ isActive }) =>
                                `px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                                    isActive
                                        ? "text-white bg-slate-800 shadow-sm"
                                        : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                                }`
                            }
                        >
                            Home
                        </NavLink>

                        <NavLink
                            to="/privacy"
                            className={({ isActive }) =>
                                `px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 flex items-center gap-1.5 ${
                                    isActive
                                        ? "text-emerald-400 bg-slate-800 shadow-sm"
                                        : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                                }`
                            }
                        >
                            <FileText className="w-3.5 h-3.5 text-emerald-400" />
                            <span>Privacy Policy</span>
                        </NavLink>

                        <NavLink
                            to="/terms"
                            className={({ isActive }) =>
                                `px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 flex items-center gap-1.5 ${
                                    isActive
                                        ? "text-emerald-400 bg-slate-800 shadow-sm"
                                        : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                                }`
                            }
                        >
                            <Scale className="w-3.5 h-3.5 text-teal-400" />
                            <span>Terms of Service</span>
                        </NavLink>
                    </nav>

                    {/* Right Badge */}
                    <div className="hidden sm:flex items-center gap-2">
                        <Link
                            to="/privacy"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-emerald-500/30 text-xs font-semibold text-emerald-300 hover:bg-slate-800 transition-colors"
                        >
                            <Cloud className="w-3.5 h-3.5 text-emerald-400" />
                            <span>Google API Limited Use</span>
                        </Link>
                    </div>

                    {/* Mobile Hamburger Toggle */}
                    <div className="flex md:hidden items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
                            aria-label="Toggle navigation"
                        >
                            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Drawer */}
            {isOpen && (
                <div className="md:hidden bg-slate-950/98 border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 mt-2">
                    <Link
                        to="/"
                        className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-200 hover:bg-slate-900"
                    >
                        Home
                    </Link>
                    <Link
                        to="/privacy"
                        className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold text-emerald-400 hover:bg-slate-900"
                    >
                        <FileText className="w-4 h-4" />
                        <span>Privacy Policy</span>
                    </Link>
                    <Link
                        to="/terms"
                        className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold text-teal-400 hover:bg-slate-900"
                    >
                        <Scale className="w-4 h-4" />
                        <span>Terms of Service</span>
                    </Link>
                </div>
            )}
        </header>
    );
};

