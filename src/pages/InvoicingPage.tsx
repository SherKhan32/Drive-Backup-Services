import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
    Printer,
    FileText,
    CheckCircle2,
    ArrowRight,
    Barcode,
    Layers,
    Usb,
    Cpu,
} from "lucide-react";
import { InvoicePreviewModal } from "../components/InvoicePreviewModal";

export const InvoicingPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="relative min-h-screen pt-24 pb-20 overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-96 bg-emerald-500/10 blur-3xl pointer-events-none rounded-full" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Page Header */}
                <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                        <Printer className="w-3.5 h-3.5" />
                        <span>High-Speed Retail Printing</span>
                    </div>
                    <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                        Dual Invoicing:{" "}
                        <span className="text-gradient-emerald">Thermal POS & A4 Contracts</span>
                    </h1>
                    <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                        Generate compact 58mm & 80mm ESC/POS cash receipts for counter transactions,
                        or print comprehensive legal A4 customer financing agreements with guarantor
                        contracts.
                    </p>
                </div>

                {/* Interactive Invoicing Visualizer */}
                <div className="mb-14">
                    <InvoicePreviewModal />
                </div>

                {/* Real Product Photo Display */}
                <div className="glass-card rounded-3xl p-6 sm:p-10 border border-slate-800 mb-14 shadow-2xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-5 space-y-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-semibold">
                                <Barcode className="w-3.5 h-3.5" />
                                <span>Format Flexibility</span>
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                                Designed for Daily Cash Counter Workflows
                            </h2>
                            <p className="text-slate-300 text-sm leading-relaxed">
                                When a customer pays their monthly installment, the desktop app
                                prints an instant thermal receipt with transaction timestamp,
                                current balance remaining, next due date, and dynamic barcode in
                                under 1 second.
                            </p>

                            <div className="space-y-2.5 pt-2 text-xs text-slate-300">
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                                    <span>
                                        Supports Code-128 & EAN-13 barcodes for instant scanner
                                        lookups
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                                    <span>
                                        Integrated QR codes for customer digital verification
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                                    <span>
                                        Automated cash drawer kick command on successful print
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                                    <span>
                                        Custom shop header, logo, and terms of installment
                                        disclaimer
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-7">
                            <div className="rounded-2xl border border-slate-800 shadow-2xl overflow-hidden group">
                                <img
                                    src="./images/dual-invoicing.jpg"
                                    alt="Dual Invoicing Thermal Receipt and A4 Statement"
                                    className="w-full h-auto object-cover transform transition duration-500 group-hover:scale-[1.01]"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Hardware Compatibility Guide */}
                <div className="mb-14">
                    <div className="text-center max-w-2xl mx-auto mb-8">
                        <h2 className="text-2xl font-bold text-white">
                            Universal Printer Hardware Support
                        </h2>
                        <p className="text-xs text-slate-400 mt-1">
                            Plug and play directly without installing proprietary drivers.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                        <div className="glass-card rounded-2xl p-5 border border-slate-800 space-y-2 text-center">
                            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mx-auto">
                                <Usb className="w-5 h-5" />
                            </div>
                            <h3 className="font-bold text-white text-sm">USB Thermal Printers</h3>
                            <p className="text-xs text-slate-400">
                                Direct RAW printing via USB virtual COM / Winspool.
                            </p>
                        </div>

                        <div className="glass-card rounded-2xl p-5 border border-slate-800 space-y-2 text-center">
                            <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 mx-auto">
                                <Cpu className="w-5 h-5" />
                            </div>
                            <h3 className="font-bold text-white text-sm">ESC/POS Protocol</h3>
                            <p className="text-xs text-slate-400">
                                Industry standard protocol supported by 99% of POS hardware.
                            </p>
                        </div>

                        <div className="glass-card rounded-2xl p-5 border border-slate-800 space-y-2 text-center">
                            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mx-auto">
                                <FileText className="w-5 h-5" />
                            </div>
                            <h3 className="font-bold text-white text-sm">58mm & 80mm Rolls</h3>
                            <p className="text-xs text-slate-400">
                                Automatic text wrapping and clean formatting for both widths.
                            </p>
                        </div>

                        <div className="glass-card rounded-2xl p-5 border border-slate-800 space-y-2 text-center">
                            <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 mx-auto">
                                <Layers className="w-5 h-5" />
                            </div>
                            <h3 className="font-bold text-white text-sm">Standard A4 / Letter</h3>
                            <p className="text-xs text-slate-400">
                                Crisp high-resolution laser contract printing with stamps.
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                        <h3 className="text-lg font-bold text-white">
                            Ready to streamline your billing?
                        </h3>
                        <p className="text-xs text-slate-400">
                            Download the installer and test printer compatibility right away.
                        </p>
                    </div>
                    <Link
                        to="/download"
                        className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold text-xs flex items-center gap-2 shadow-md hover:from-emerald-400 hover:to-teal-500 transition-all"
                    >
                        <span>Download Desktop App</span>
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </div>
    );
};
