import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import {
    ShieldCheck,
    Download,
    Menu,
    X,
    Layers,
    Cloud,
    Calculator,
    Printer,
    FileText,
    FileCheck2,
} from "lucide-react";

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

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/40 py-3"
                    : "bg-transparent py-5"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Brand Logo */}
                    <Link to="/" className="flex items-center gap-3 group">
                        <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-700 p-0.5 shadow-md shadow-emerald-900/30 group-hover:shadow-emerald-500/30 transition-all duration-300">
                            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                                <Layers className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <span className="text-lg font-extrabold tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                                    Drive Backup<span className="text-emerald-400"> Services</span>
                                </span>
                                <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                    <ShieldCheck className="w-3 h-3" /> v2.4 Pro
                                </span>
                            </div>
                            <p className="text-[11px] text-slate-400 font-medium tracking-wide">
                                Drive Backup Service • Installment Manager • Offline & Cloud Sync
                            </p>
                        </div>
                    </Link>

                    {/* Desktop Nav Links */}
                    <nav className="hidden xl:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-sm">
                        <NavLink
                            to="/"
                            end
                            className={({ isActive }) =>
                                `px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                                    isActive
                                        ? "text-white bg-slate-800/90 shadow-sm"
                                        : "text-slate-300 hover:text-white hover:bg-slate-800/40"
                                }`
                            }
                        >
                            Home
                        </NavLink>

                        <NavLink
                            to="/features"
                            className={({ isActive }) =>
                                `px-3.5 py-1.5 text-xs font-semibold rounded-full transition-colors flex items-center gap-1.5 ${
                                    isActive
                                        ? "text-white bg-slate-800/90 shadow-sm"
                                        : "text-slate-300 hover:text-white hover:bg-slate-800/40"
                                }`
                            }
                        >
                            <Layers className="w-3.5 h-3.5 text-emerald-400" />
                            Features
                        </NavLink>

                        <NavLink
                            to="/cloud-sync"
                            className={({ isActive }) =>
                                `px-3.5 py-1.5 text-xs font-semibold rounded-full transition-colors flex items-center gap-1.5 ${
                                    isActive
                                        ? "text-white bg-slate-800/90 shadow-sm"
                                        : "text-slate-300 hover:text-white hover:bg-slate-800/40"
                                }`
                            }
                        >
                            <Cloud className="w-3.5 h-3.5 text-emerald-400" />
                            Google Sync
                        </NavLink>

                        <NavLink
                            to="/calculator"
                            className={({ isActive }) =>
                                `px-3.5 py-1.5 text-xs font-semibold rounded-full transition-colors flex items-center gap-1.5 ${
                                    isActive
                                        ? "text-white bg-slate-800/90 shadow-sm"
                                        : "text-slate-300 hover:text-white hover:bg-slate-800/40"
                                }`
                            }
                        >
                            <Calculator className="w-3.5 h-3.5 text-emerald-400" />
                            Calculator
                        </NavLink>

                        <NavLink
                            to="/invoicing"
                            className={({ isActive }) =>
                                `px-3.5 py-1.5 text-xs font-semibold rounded-full transition-colors flex items-center gap-1.5 ${
                                    isActive
                                        ? "text-white bg-slate-800/90 shadow-sm"
                                        : "text-slate-300 hover:text-white hover:bg-slate-800/40"
                                }`
                            }
                        >
                            <Printer className="w-3.5 h-3.5 text-emerald-400" />
                            Invoicing
                        </NavLink>

                        <NavLink
                            to="/privacy"
                            className={({ isActive }) =>
                                `px-3.5 py-1.5 text-xs font-semibold rounded-full transition-colors ${
                                    isActive
                                        ? "text-white bg-slate-800/90 shadow-sm"
                                        : "text-slate-300 hover:text-white hover:bg-slate-800/40"
                                }`
                            }
                        >
                            Privacy Policy
                        </NavLink>

                        <NavLink
                            to="/terms"
                            className={({ isActive }) =>
                                `px-3.5 py-1.5 text-xs font-semibold rounded-full transition-colors ${
                                    isActive
                                        ? "text-white bg-slate-800/90 shadow-sm"
                                        : "text-slate-300 hover:text-white hover:bg-slate-800/40"
                                }`
                            }
                        >
                            Terms
                        </NavLink>
                    </nav>

                    {/* Desktop Right Action */}
                    <div className="hidden sm:flex items-center gap-3">
                        <Link
                            to="/download"
                            className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold text-xs shadow-md shadow-emerald-950/50 hover:from-emerald-400 hover:to-teal-500 hover:shadow-emerald-500/25 transition-all duration-300 active:scale-95 group"
                        >
                            <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                            <span>Download Desktop App</span>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex xl:hidden items-center gap-2">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none cursor-pointer"
                            aria-label="Toggle Navigation"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Drawer */}
                {isOpen && (
                    <div className="xl:hidden mt-3 p-4 rounded-2xl bg-slate-900/95 border border-slate-800 shadow-2xl backdrop-blur-xl">
                        <div className="flex flex-col gap-1.5">
                            <NavLink
                                to="/"
                                end
                                className={({ isActive }) =>
                                    `px-4 py-2.5 rounded-xl font-medium text-xs transition-colors ${
                                        isActive
                                            ? "bg-slate-800 text-emerald-400"
                                            : "text-slate-200 hover:bg-slate-800"
                                    }`
                                }
                            >
                                Home Overview
                            </NavLink>

                            <NavLink
                                to="/features"
                                className={({ isActive }) =>
                                    `px-4 py-2.5 rounded-xl font-medium text-xs transition-colors flex items-center justify-between ${
                                        isActive
                                            ? "bg-slate-800 text-emerald-400"
                                            : "text-slate-200 hover:bg-slate-800"
                                    }`
                                }
                            >
                                <span>Core Features</span>
                                <Layers className="w-4 h-4 text-emerald-400" />
                            </NavLink>

                            <NavLink
                                to="/cloud-sync"
                                className={({ isActive }) =>
                                    `px-4 py-2.5 rounded-xl font-medium text-xs transition-colors flex items-center justify-between ${
                                        isActive
                                            ? "bg-slate-800 text-emerald-400"
                                            : "text-slate-200 hover:bg-slate-800"
                                    }`
                                }
                            >
                                <span>Google Cloud Sync Architecture</span>
                                <Cloud className="w-4 h-4 text-emerald-400" />
                            </NavLink>

                            <NavLink
                                to="/calculator"
                                className={({ isActive }) =>
                                    `px-4 py-2.5 rounded-xl font-medium text-xs transition-colors flex items-center justify-between ${
                                        isActive
                                            ? "bg-slate-800 text-emerald-400"
                                            : "text-slate-200 hover:bg-slate-800"
                                    }`
                                }
                            >
                                <span>Installment & EMI Calculator</span>
                                <Calculator className="w-4 h-4 text-emerald-400" />
                            </NavLink>

                            <NavLink
                                to="/invoicing"
                                className={({ isActive }) =>
                                    `px-4 py-2.5 rounded-xl font-medium text-xs transition-colors flex items-center justify-between ${
                                        isActive
                                            ? "bg-slate-800 text-emerald-400"
                                            : "text-slate-200 hover:bg-slate-800"
                                    }`
                                }
                            >
                                <span>Thermal & A4 Invoicing</span>
                                <FileText className="w-4 h-4 text-emerald-400" />
                            </NavLink>

                            <div className="h-px bg-slate-800 my-1"></div>

                            <NavLink
                                to="/privacy"
                                className={({ isActive }) =>
                                    `px-4 py-2.5 rounded-xl font-medium text-xs transition-colors flex items-center justify-between ${
                                        isActive
                                            ? "bg-slate-800 text-emerald-400"
                                            : "text-slate-300 hover:bg-slate-800"
                                    }`
                                }
                            >
                                <span>Privacy Policy (Google OAuth)</span>
                                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                            </NavLink>

                            <NavLink
                                to="/terms"
                                className={({ isActive }) =>
                                    `px-4 py-2.5 rounded-xl font-medium text-xs transition-colors flex items-center justify-between ${
                                        isActive
                                            ? "bg-slate-800 text-emerald-400"
                                            : "text-slate-300 hover:bg-slate-800"
                                    }`
                                }
                            >
                                <span>Terms of Service</span>
                                <FileCheck2 className="w-4 h-4 text-slate-400" />
                            </NavLink>

                            <Link
                                to="/download"
                                className="mt-2 w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold text-xs shadow-md"
                            >
                                <Download className="w-4 h-4" />
                                <span>Download Desktop Installer</span>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};
