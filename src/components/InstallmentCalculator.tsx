import React, { useState, useMemo } from "react";
import { Calculator, DollarSign, Percent, Calendar, CheckCircle2 } from "lucide-react";

export const InstallmentCalculator: React.FC = () => {
    const [productPrice, setProductPrice] = useState<number>(1200);
    const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20);
    const [tenureMonths, setTenureMonths] = useState<number>(12);
    const [markupRate, setMarkupRate] = useState<number>(12); // flat 12% per year

    // Calculations
    const { downPaymentAmount, financedAmount, totalMarkup, monthlyInstallment, schedule } =
        useMemo(() => {
            const downPayment = (productPrice * downPaymentPercent) / 100;
            const financed = Math.max(0, productPrice - downPayment);
            const markup = financed * (markupRate / 100) * (tenureMonths / 12);
            const total = financed + markup;
            const monthly = tenureMonths > 0 ? total / tenureMonths : 0;

            // Generate schedule breakdown
            const scheduleItems = [];
            let currentBalance = total;
            for (let i = 1; i <= Math.min(tenureMonths, 6); i++) {
                currentBalance -= monthly;
                scheduleItems.push({
                    month: i,
                    installment: monthly,
                    principalPortion: financed / tenureMonths,
                    markupPortion: markup / tenureMonths,
                    balance: Math.max(0, currentBalance),
                });
            }

            return {
                downPaymentAmount: downPayment,
                financedAmount: financed,
                totalMarkup: markup,
                totalPayable: total,
                monthlyInstallment: monthly,
                schedule: scheduleItems,
            };
        }, [productPrice, downPaymentPercent, tenureMonths, markupRate]);

    return (
        <div className="glass-card rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-800 shadow-2xl relative overflow-hidden">
            {/* Background ambient light */}
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-emerald-500/10 blur-3xl pointer-events-none rounded-full" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-teal-500/10 blur-3xl pointer-events-none rounded-full" />

            <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-2">
                            <Calculator className="w-3.5 h-3.5" />
                            <span>Interactive Engine</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white tracking-tight">
                            Real-Time Installment & EMI Simulator
                        </h3>
                        <p className="text-slate-400 text-sm">
                            Adjust principal, down payment, and markup to simulate real customer
                            payment schedules instantly.
                        </p>
                    </div>

                    <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 text-right">
                        <div className="text-xs text-slate-400 uppercase tracking-wider font-medium">
                            Estimated Monthly Due
                        </div>
                        <div className="text-3xl font-extrabold text-emerald-400 mt-1">
                            $
                            {monthlyInstallment.toLocaleString("en-US", {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                            })}
                            <span className="text-xs text-slate-400 font-normal ml-1">/ month</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Controls Column */}
                    <div className="lg:col-span-6 space-y-6">
                        {/* Product / Asset Price */}
                        <div>
                            <div className="flex justify-between items-center text-sm font-medium mb-2">
                                <label className="text-slate-300 flex items-center gap-1.5">
                                    <DollarSign className="w-4 h-4 text-emerald-400" />
                                    <span>Item / Total Loan Value</span>
                                </label>
                                <span className="text-emerald-400 font-semibold font-mono text-base">
                                    ${productPrice.toLocaleString()}
                                </span>
                            </div>
                            <input
                                type="range"
                                min="100"
                                max="10000"
                                step="50"
                                value={productPrice}
                                onChange={(e) => setProductPrice(Number(e.target.value))}
                                aria-label="Item / Total Loan Value Slider"
                                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                            />
                            <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                                <span>$100 (Phones/Gadgets)</span>
                                <span>$10,000 (Vehicles/Solar)</span>
                            </div>
                        </div>

                        {/* Down Payment % */}
                        <div>
                            <div className="flex justify-between items-center text-sm font-medium mb-2">
                                <label className="text-slate-300 flex items-center gap-1.5">
                                    <Percent className="w-4 h-4 text-emerald-400" />
                                    <span>Upfront Down Payment</span>
                                </label>
                                <span className="text-emerald-400 font-semibold font-mono text-base">
                                    {downPaymentPercent}% (${downPaymentAmount.toFixed(0)})
                                </span>
                            </div>
                            <div className="grid grid-cols-5 gap-2">
                                {[10, 20, 25, 30, 40].map((pct) => (
                                    <button
                                        key={pct}
                                        onClick={() => setDownPaymentPercent(pct)}
                                        className={`py-2 text-xs font-semibold rounded-xl border transition-all ${
                                            downPaymentPercent === pct
                                                ? "bg-emerald-500/20 border-emerald-500 text-emerald-300 shadow-sm"
                                                : "bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800"
                                        }`}
                                    >
                                        {pct}%
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Tenure in Months */}
                        <div>
                            <div className="flex justify-between items-center text-sm font-medium mb-2">
                                <label className="text-slate-300 flex items-center gap-1.5">
                                    <Calendar className="w-4 h-4 text-emerald-400" />
                                    <span>Financing Duration (Tenure)</span>
                                </label>
                                <span className="text-emerald-400 font-semibold font-mono text-base">
                                    {tenureMonths} Months
                                </span>
                            </div>
                            <div className="grid grid-cols-5 gap-2">
                                {[3, 6, 12, 18, 24].map((m) => (
                                    <button
                                        key={m}
                                        onClick={() => setTenureMonths(m)}
                                        className={`py-2 text-xs font-semibold rounded-xl border transition-all ${
                                            tenureMonths === m
                                                ? "bg-emerald-500/20 border-emerald-500 text-emerald-300 shadow-sm"
                                                : "bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800"
                                        }`}
                                    >
                                        {m} Mos
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Markup / Profit Rate */}
                        <div>
                            <div className="flex justify-between items-center text-sm font-medium mb-2">
                                <label className="text-slate-300 flex items-center gap-1.5">
                                    <Percent className="w-4 h-4 text-emerald-400" />
                                    <span>Annual Profit / Markup Rate</span>
                                </label>
                                <span className="text-emerald-400 font-semibold font-mono text-base">
                                    {markupRate}% p.a.
                                </span>
                            </div>
                            <input
                                type="range"
                                min="0"
                                max="30"
                                step="1"
                                value={markupRate}
                                onChange={(e) => setMarkupRate(Number(e.target.value))}
                                aria-label="Annual Profit / Markup Rate Slider"
                                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                            />
                            <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                                <span>0% (0% Interest Deal)</span>
                                <span>30% (High Risk)</span>
                            </div>
                        </div>
                    </div>

                    {/* Results Summary Column */}
                    <div className="lg:col-span-6 bg-slate-900/90 rounded-2xl p-5 border border-slate-800 flex flex-col justify-between">
                        <div>
                            <div className="text-sm font-bold text-slate-200 mb-4 pb-2 border-b border-slate-800 flex items-center justify-between">
                                <span>Contract Financial Breakdown</span>
                                <span className="text-[11px] px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                                    Automated SQLite Logic
                                </span>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-5">
                                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                                    <div className="text-xs text-slate-400">Financed Principal</div>
                                    <div className="text-lg font-bold text-white mt-0.5 font-mono">
                                        $
                                        {financedAmount.toLocaleString("en-US", {
                                            minimumFractionDigits: 2,
                                        })}
                                    </div>
                                </div>

                                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                                    <div className="text-xs text-slate-400">
                                        Total Markup / Profit
                                    </div>
                                    <div className="text-lg font-bold text-emerald-400 mt-0.5 font-mono">
                                        +$
                                        {totalMarkup.toLocaleString("en-US", {
                                            minimumFractionDigits: 2,
                                        })}
                                    </div>
                                </div>

                                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                                    <div className="text-xs text-slate-400">Down Payment Paid</div>
                                    <div className="text-lg font-bold text-teal-400 mt-0.5 font-mono">
                                        $
                                        {downPaymentAmount.toLocaleString("en-US", {
                                            minimumFractionDigits: 2,
                                        })}
                                    </div>
                                </div>

                                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                                    <div className="text-xs text-slate-400">
                                        Gross Contract Value
                                    </div>
                                    <div className="text-lg font-bold text-slate-200 mt-0.5 font-mono">
                                        $
                                        {(productPrice + totalMarkup).toLocaleString("en-US", {
                                            minimumFractionDigits: 2,
                                        })}
                                    </div>
                                </div>
                            </div>

                            {/* Mini Amortization Table */}
                            <div className="space-y-2">
                                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                                    Upcoming Installment Schedule Preview
                                </div>
                                <div className="overflow-x-auto rounded-xl border border-slate-800">
                                    <table className="w-full text-left text-xs">
                                        <thead className="bg-slate-950 text-slate-400 border-b border-slate-800">
                                            <tr>
                                                <th className="p-2 font-medium">Installment #</th>
                                                <th className="p-2 font-medium">Due Date</th>
                                                <th className="p-2 font-medium">Monthly Amount</th>
                                                <th className="p-2 font-medium text-right">
                                                    Balance Rem.
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-800/60 font-mono text-slate-300">
                                            {schedule.map((item) => {
                                                const dueDate = new Date();
                                                dueDate.setMonth(dueDate.getMonth() + item.month);
                                                return (
                                                    <tr
                                                        key={item.month}
                                                        className="hover:bg-slate-800/40 transition-colors"
                                                    >
                                                        <td className="p-2 text-slate-400">
                                                            Month {item.month}
                                                        </td>
                                                        <td className="p-2 text-slate-400">
                                                            {dueDate.toLocaleDateString("en-US", {
                                                                month: "short",
                                                                day: "numeric",
                                                                year: "numeric",
                                                            })}
                                                        </td>
                                                        <td className="p-2 font-bold text-emerald-400">
                                                            ${item.installment.toFixed(2)}
                                                        </td>
                                                        <td className="p-2 text-right text-slate-400">
                                                            ${item.balance.toFixed(2)}
                                                        </td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                                {tenureMonths > 6 && (
                                    <p className="text-[11px] text-slate-400 italic text-right">
                                        Showing first 6 of {tenureMonths} installments. Desktop app
                                        prints complete schedule.
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                            <span className="flex items-center gap-1.5 text-emerald-400">
                                <CheckCircle2 className="w-3.5 h-3.5" />
                                Automatic Late Penalty Logic Included
                            </span>
                            <span className="font-mono text-slate-400">ISO-8601 Schedules</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
