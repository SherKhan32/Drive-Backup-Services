import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Printer, CheckCircle, Download, Sparkles } from "lucide-react";

type InvoiceType = "thermal-58" | "thermal-80" | "a4";

export const InvoicePreviewModal: React.FC = () => {
    const [activeType, setActiveType] = useState<InvoiceType>("thermal-80");

    return (
        <div className="glass-card rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-800 shadow-2xl relative overflow-hidden">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-2">
                        <Printer className="w-3.5 h-3.5" />
                        <span>Dual Invoicing Technology</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                        Thermal POS & Executive A4 Invoice Engine
                    </h3>
                    <p className="text-slate-400 text-sm">
                        Plug-and-play support for ESC/POS 58mm & 80mm thermal roll printers
                        alongside laser A4 contract statements.
                    </p>
                </div>

                {/* Format Selector Pills */}
                <div className="flex items-center bg-slate-900/90 p-1.5 rounded-2xl border border-slate-800 self-start md:self-auto">
                    <button
                        onClick={() => setActiveType("thermal-58")}
                        className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all ${
                            activeType === "thermal-58"
                                ? "bg-emerald-500 text-white shadow-md shadow-emerald-950"
                                : "text-slate-400 hover:text-white"
                        }`}
                    >
                        58mm Thermal Roll
                    </button>
                    <button
                        onClick={() => setActiveType("thermal-80")}
                        className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all ${
                            activeType === "thermal-80"
                                ? "bg-emerald-500 text-white shadow-md shadow-emerald-950"
                                : "text-slate-400 hover:text-white"
                        }`}
                    >
                        80mm Standard POS
                    </button>
                    <button
                        onClick={() => setActiveType("a4")}
                        className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all ${
                            activeType === "a4"
                                ? "bg-emerald-500 text-white shadow-md shadow-emerald-950"
                                : "text-slate-400 hover:text-white"
                        }`}
                    >
                        A4 Executive Invoice
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left: Features & Details */}
                <div className="lg:col-span-5 space-y-5">
                    <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
                        <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-emerald-400" />
                            <span>Zero-Driver Silent Printing</span>
                        </h4>
                        <p className="text-xs text-slate-400 leading-relaxed">
                            Direct raw ESC/POS command stream triggers cash drawer opening, instant
                            paper cut, and barcode generation in milliseconds.
                        </p>
                    </div>

                    <div className="space-y-2.5">
                        <div className="flex items-center gap-2.5 text-xs text-slate-300">
                            <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                            <span>Automatic QR Code for WhatsApp digital copy delivery</span>
                        </div>
                        <div className="flex items-center gap-2.5 text-xs text-slate-300">
                            <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                            <span>Customer Ledger Summary with Remaining Balance footer</span>
                        </div>
                        <div className="flex items-center gap-2.5 text-xs text-slate-300">
                            <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                            <span>Guarantor & CNIC details printed on legal A4 agreements</span>
                        </div>
                        <div className="flex items-center gap-2.5 text-xs text-slate-300">
                            <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                            <span>Support for Urdu / English bilingual receipt formats</span>
                        </div>
                    </div>

                    <div className="pt-2">
                        <Link
                            to="/download"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 hover:border-emerald-500/50 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                        >
                            <Download className="w-3.5 h-3.5" />
                            <span>Test Drivers in Desktop App</span>
                        </Link>
                    </div>
                </div>

                {/* Right: Realistic Simulated Invoice Canvas */}
                <div className="lg:col-span-7 flex justify-center items-center py-4">
                    {/* Thermal 58mm / 80mm Preview */}
                    {(activeType === "thermal-58" || activeType === "thermal-80") && (
                        <div
                            className={`bg-white text-black font-mono shadow-2xl rounded-sm p-4 border border-zinc-300 transition-all duration-300 relative ${
                                activeType === "thermal-58"
                                    ? "w-[260px] text-[10px]"
                                    : "w-[320px] text-[11px]"
                            }`}
                        >
                            {/* Receipt Jagged Edge Top */}
                            <div className="text-center pb-3 border-b border-dashed border-zinc-400">
                                <div className="font-extrabold text-sm tracking-wider uppercase">
                                    AL-MADINA ELECTRONICS
                                </div>
                                <div className="text-[10px] text-zinc-600">
                                    Main Commercial Market, Suite 104
                                </div>
                                <div className="text-[10px] text-zinc-600">
                                    Tel: +92 300 1234567
                                </div>
                                <div className="font-bold text-[11px] mt-1 bg-zinc-100 py-0.5 border border-zinc-300 rounded">
                                    INSTALLMENT RECEIPT
                                </div>
                            </div>

                            {/* Meta */}
                            <div className="py-2.5 border-b border-dashed border-zinc-400 space-y-1">
                                <div className="flex justify-between">
                                    <span>
                                        Rec #: <b>INV-2024-889</b>
                                    </span>
                                    <span>
                                        Date: <b>22/09/2026</b>
                                    </span>
                                </div>
                                <div>
                                    Customer: <b>Muhammad Bilal</b>
                                </div>
                                <div>
                                    Phone: <b>0321-9876543</b>
                                </div>
                                <div>
                                    Plan: <b>Samsung S24 Ultra (12 Mos)</b>
                                </div>
                            </div>

                            {/* Items Table */}
                            <div className="py-2.5 border-b border-dashed border-zinc-400">
                                <div className="flex justify-between font-bold pb-1 mb-1 border-b border-zinc-300">
                                    <span>Description</span>
                                    <span>Amount</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Installment #04/12</span>
                                    <span>$150.00</span>
                                </div>
                                <div className="flex justify-between text-zinc-600">
                                    <span>Late Fee (Overdue 3d)</span>
                                    <span>$5.00</span>
                                </div>
                                <div className="flex justify-between font-bold pt-1.5 mt-1 border-t border-zinc-200">
                                    <span>PAID CASH:</span>
                                    <span>$155.00</span>
                                </div>
                            </div>

                            {/* Account Balance Summary */}
                            <div className="py-2.5 border-b border-dashed border-zinc-400 space-y-1 bg-zinc-50 px-1.5 rounded">
                                <div className="flex justify-between">
                                    <span>Total Financed:</span>
                                    <span>$1,800.00</span>
                                </div>
                                <div className="flex justify-between text-emerald-700 font-bold">
                                    <span>Total Paid to Date:</span>
                                    <span>$600.00</span>
                                </div>
                                <div className="flex justify-between text-red-600 font-extrabold">
                                    <span>REMAINING BALANCE:</span>
                                    <span>$1,200.00</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Next Due Date:</span>
                                    <span>22/10/2026</span>
                                </div>
                            </div>

                            {/* Barcode & QR code */}
                            <div className="pt-3 text-center space-y-2">
                                {/* SVG Barcode */}
                                <div className="flex justify-center">
                                    <svg className="w-40 h-8" viewBox="0 0 160 32">
                                        <rect x="0" y="0" width="3" height="32" fill="#000" />
                                        <rect x="5" y="0" width="1" height="32" fill="#000" />
                                        <rect x="8" y="0" width="4" height="32" fill="#000" />
                                        <rect x="15" y="0" width="2" height="32" fill="#000" />
                                        <rect x="20" y="0" width="5" height="32" fill="#000" />
                                        <rect x="28" y="0" width="2" height="32" fill="#000" />
                                        <rect x="33" y="0" width="4" height="32" fill="#000" />
                                        <rect x="40" y="0" width="1" height="32" fill="#000" />
                                        <rect x="44" y="0" width="3" height="32" fill="#000" />
                                        <rect x="50" y="0" width="5" height="32" fill="#000" />
                                        <rect x="58" y="0" width="2" height="32" fill="#000" />
                                        <rect x="63" y="0" width="4" height="32" fill="#000" />
                                        <rect x="70" y="0" width="2" height="32" fill="#000" />
                                        <rect x="75" y="0" width="4" height="32" fill="#000" />
                                        <rect x="82" y="0" width="2" height="32" fill="#000" />
                                        <rect x="87" y="0" width="5" height="32" fill="#000" />
                                        <rect x="95" y="0" width="2" height="32" fill="#000" />
                                        <rect x="100" y="0" width="4" height="32" fill="#000" />
                                        <rect x="107" y="0" width="2" height="32" fill="#000" />
                                        <rect x="112" y="0" width="5" height="32" fill="#000" />
                                        <rect x="120" y="0" width="2" height="32" fill="#000" />
                                        <rect x="125" y="0" width="4" height="32" fill="#000" />
                                        <rect x="132" y="0" width="2" height="32" fill="#000" />
                                        <rect x="137" y="0" width="5" height="32" fill="#000" />
                                        <rect x="145" y="0" width="2" height="32" fill="#000" />
                                        <rect x="150" y="0" width="4" height="32" fill="#000" />
                                    </svg>
                                </div>
                                <div className="text-[9px] text-zinc-500 font-mono tracking-widest">
                                    *INV-2024-889*
                                </div>
                                <div className="text-[9px] text-zinc-500">
                                    Thank you for your timely payment!
                                </div>
                            </div>
                        </div>
                    )}

                    {/* A4 Executive Invoice Preview */}
                    {activeType === "a4" && (
                        <div className="w-full max-w-md bg-white text-slate-800 rounded-lg p-6 shadow-2xl border border-slate-200 text-xs font-sans">
                            <div className="flex justify-between items-start pb-4 border-b border-slate-200">
                                <div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-7 h-7 bg-emerald-600 rounded flex items-center justify-center text-white font-bold text-sm">
                                            IM
                                        </div>
                                        <span className="font-extrabold text-slate-900 text-base">
                                            AL-MADINA FINANCE CORP
                                        </span>
                                    </div>
                                    <p className="text-[10px] text-slate-500 mt-1">
                                        Reg # F-491028 | Commercial Installment Services
                                    </p>
                                </div>
                                <div className="text-right">
                                    <span className="px-2 py-1 bg-emerald-100 text-emerald-800 font-bold rounded text-[10px] uppercase">
                                        Official Tax Invoice
                                    </span>
                                    <div className="font-mono text-slate-600 mt-1 font-semibold">
                                        INV-2026-1049
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 my-4 py-3 bg-slate-50 rounded-lg p-3">
                                <div>
                                    <div className="text-[10px] uppercase text-slate-400 font-bold">
                                        Borrower Details
                                    </div>
                                    <div className="font-bold text-slate-900">
                                        Muhammad Bilal Khan
                                    </div>
                                    <div className="text-slate-600">CNIC: 37405-1234567-1</div>
                                    <div className="text-slate-600">+92 300 9876543</div>
                                </div>
                                <div>
                                    <div className="text-[10px] uppercase text-slate-400 font-bold">
                                        Guarantor / Reference
                                    </div>
                                    <div className="font-bold text-slate-900">Tariq Mehmood</div>
                                    <div className="text-slate-600">CNIC: 37405-9988776-5</div>
                                    <div className="text-slate-600">+92 333 4445556</div>
                                </div>
                            </div>

                            {/* Table */}
                            <table className="w-full text-left text-[11px] mb-4">
                                <thead className="bg-slate-100 text-slate-600 border-y border-slate-200">
                                    <tr>
                                        <th className="py-1.5 px-2">Item Financed</th>
                                        <th className="py-1.5 px-2">Duration</th>
                                        <th className="py-1.5 px-2 text-right">
                                            Installment Amount
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    <tr>
                                        <td className="py-2 px-2 font-medium">
                                            Samsung S24 Ultra Titanium Grey (256GB)
                                        </td>
                                        <td className="py-2 px-2">Month 04 of 12</td>
                                        <td className="py-2 px-2 text-right font-bold text-slate-900">
                                            $150.00
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <div className="flex justify-between items-end pt-3 border-t border-slate-200">
                                <div className="text-[10px] text-slate-500 space-y-1">
                                    <div>Payment Mode: Cashier Deposit</div>
                                    <div>Processed by: Terminal #02 (Admin)</div>
                                </div>
                                <div className="text-right">
                                    <div className="text-[10px] text-slate-500">
                                        Total Paid Amount
                                    </div>
                                    <div className="text-lg font-extrabold text-emerald-600 font-mono">
                                        $150.00
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
