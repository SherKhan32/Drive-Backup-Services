import React from "react";
import { usePageMeta } from "../lib/usePageMeta";

type PageShellProps = {
    title: string;
    metaTitle: string;
    description: string;
    path: string;
    glow?: "emerald" | "teal" | "cyan";
    children: React.ReactNode;
};

const GLOW: Record<NonNullable<PageShellProps["glow"]>, string> = {
    emerald: "bg-emerald-500/10",
    teal: "bg-teal-500/10",
    cyan: "bg-cyan-500/10",
};

export const PageShell: React.FC<PageShellProps> = ({
    title,
    metaTitle,
    description,
    path,
    glow = "emerald",
    children,
}) => {
    usePageMeta({ title: metaTitle, description, path });

    return (
        <div className="relative min-h-screen pt-24 pb-20 overflow-hidden font-sans">
            <div
                className={`absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 blur-3xl pointer-events-none rounded-full ${GLOW[glow]}`}
            />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <header className="border-b border-slate-800 pb-8 mb-10">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                        {title}
                    </h1>
                    <p className="text-sm sm:text-base text-slate-400 mt-4 max-w-3xl leading-relaxed">
                        {description}
                    </p>
                </header>

                {children}
            </div>
        </div>
    );
};

type SectionHeadingProps = {
    eyebrow?: string;
    title: string;
    subtitle?: string;
    tone?: "emerald" | "teal" | "cyan";
    icon?: React.ReactNode;
};

const TEXT: Record<NonNullable<SectionHeadingProps["tone"]>, string> = {
    emerald: "text-emerald-400",
    teal: "text-teal-400",
    cyan: "text-cyan-400",
};

export const SectionHeading: React.FC<SectionHeadingProps> = ({
    eyebrow,
    title,
    subtitle,
    tone = "emerald",
    icon,
}) => (
    <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
        {eyebrow && (
            <div
                className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 ${TEXT[tone]} text-xs font-semibold`}
            >
                {icon}
                <span>{eyebrow}</span>
            </div>
        )}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {title}
        </h2>
        {subtitle && (
            <p className="text-sm text-slate-400 leading-relaxed">{subtitle}</p>
        )}
    </div>
);
