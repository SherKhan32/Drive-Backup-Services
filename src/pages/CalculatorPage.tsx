import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Calculator, Percent, DollarSign, Calendar, ArrowRight } from "lucide-react";
import { InstallmentCalculator } from "../components/InstallmentCalculator";

export const CalculatorPage: React.FC = () => {
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
                        <Calculator className="w-3.5 h-3.5" />
                        <span>Interactive Financial Engine</span>
                    </div>
                    <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                        Installment &{" "}
                        <span className="text-gradient-emerald">EMI Loan Calculator</span>
                    </h1>
                    <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                        Simulate customer financing contracts in real-time. Calculate down payments,
                        monthly repayments, markup percentages, and instant amortization schedules.
                    </p>
                </div>

                {/* The Calculator */}
                <div className="mb-16">
                    <InstallmentCalculator />
                </div>

                {/* Informative Guide Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-3">
                        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                            <Percent className="w-5 h-5" />
                        </div>
                        <h3 className="text-base font-bold text-white">
                            Flat Markup vs Reducing Rate
                        </h3>
                        <p className="text-xs text-slate-400 leading-relaxed">
                            Installment Manager supports both traditional Islamic Flat Profit
                            (Murabaha) models and standard diminishing balance interest rates with
                            one-click toggles.
                        </p>
                    </div>

                    <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-3">
                        <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
                            <DollarSign className="w-5 h-5" />
                        </div>
                        <h3 className="text-base font-bold text-white">Flexible Down Payments</h3>
                        <p className="text-xs text-slate-400 leading-relaxed">
                            Accept variable upfront payments (from 0% promo campaigns up to 50%+
                            security deposits) with instant deduction from the total financed
                            principal.
                        </p>
                    </div>

                    <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-3">
                        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                            <Calendar className="w-5 h-5" />
                        </div>
                        <h3 className="text-base font-bold text-white">
                            Custom Repayment Frequencies
                        </h3>
                        <p className="text-xs text-slate-400 leading-relaxed">
                            Configure weekly, bi-weekly, monthly, or quarterly payment schedules
                            with automatic due date calculation based on calendar holidays.
                        </p>
                    </div>
                </div>

                {/* Bottom CTA Bar */}
                <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                        <h3 className="text-lg font-bold text-white">
                            Want to print thermal receipts for these installments?
                        </h3>
                        <p className="text-xs text-slate-400">
                            See how invoices and customer receipts look on 58mm & 80mm roll
                            printers.
                        </p>
                    </div>
                    <Link
                        to="/invoicing"
                        className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-emerald-400 font-bold text-xs flex items-center gap-2 border border-slate-700 transition-all"
                    >
                        <span>View Thermal & A4 Invoicing</span>
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </div>
    );
};
