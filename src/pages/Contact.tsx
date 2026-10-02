import React from "react";
import { Link } from "react-router-dom";
import { UserRound, LifeBuoy, MessagesSquare, Building2, ArrowRight, Clock } from "lucide-react";
import { PageShell, SectionHeading } from "../components/PageShell";
import { ROUTES, CONTACT_LABEL } from "../lib/site";
import { pageTitle } from "../lib/usePageMeta";

const CHANNELS = [
    {
        icon: LifeBuoy,
        title: "Product support",
        text: "Installation, backup scheduling, restore steps, Google connection issues, and printer or hardware questions.",
    },
    {
        icon: Building2,
        title: "Business enquiries",
        text: "Multiple workstations, custom desktop software requirements, deployment, and volume inquiries.",
    },
    {
        icon: MessagesSquare,
        title: "Engineering & verification",
        text: "Technical reviews, Google API policy verification, security documentation, and developer questions.",
    },
] as const;

const FAQS = [
    {
        q: "Do I need an account with Drive Backup Services?",
        a: "No. The software runs on your computer and backs up to your own Google Drive. There is nothing to register for.",
    },
    {
        q: "Does the software work without internet?",
        a: "Yes. Your desktop application keeps working fully offline. The backup is created locally, and only the upload needs a connection.",
    },
    {
        q: "Can you see my data?",
        a: "No. Your computer creates the backup and uploads it straight to your Google Drive. We operate no server that receives it.",
    },
    {
        q: "How do I stop backups or disconnect Google Drive?",
        a: "Disconnect from the app's backup settings, or revoke the permission from your Google Account permissions page. Both take effect immediately.",
    },
];

export const Contact: React.FC = () => {
    return (
        <PageShell
            title="Contact & Support"
            metaTitle={pageTitle("Contact & Support")}
            description="How to reach the Drive Backup Services administrator for product support, business enquiries, or Google API verification and engineering questions."
            path={ROUTES.contact}
            glow="teal"
        >
            <div className="space-y-16">
                <section>
                    <SectionHeading
                        eyebrow="Get in touch"
                        title="Speak to the People Who Built It"
                        subtitle="All enquiries are handled by the Drive Backup Services administrator. Choose the topic that matches your question."
                        tone="teal"
                        icon={<UserRound className="w-3.5 h-3.5" />}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {CHANNELS.map((channel) => (
                            <div
                                key={channel.title}
                                className="glass-card rounded-2xl border border-slate-800 p-6 flex flex-col gap-3"
                            >
                                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-teal-400">
                                    <channel.icon className="w-5 h-5" />
                                </div>
                                <h3 className="text-sm font-bold text-white">{channel.title}</h3>
                                <p className="text-xs text-slate-400 leading-relaxed flex-grow">
                                    {channel.text}
                                </p>
                                <div className="inline-flex items-center gap-2 self-start px-3 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs font-semibold">
                                    <UserRound className="w-3.5 h-3.5" />
                                    <span>{CONTACT_LABEL}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="glass-card rounded-2xl border border-slate-800 p-6 space-y-4">
                        <div className="flex items-center gap-2.5 text-emerald-400">
                            <Clock className="w-5 h-5" />
                            <h3 className="text-base font-bold text-white">
                                Before you write
                            </h3>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed">
                            These pages answer most questions in detail, and they are the
                            fastest route to an answer:
                        </p>
                        <ul className="space-y-2 text-xs">
                            {[
                                { to: ROUTES.architecture, label: "System Architecture & Integration Diagram" },
                                { to: ROUTES.howItWorks, label: "How Backup and Restore Work" },
                                { to: ROUTES.security, label: "Encryption & Data Protection" },
                                { to: ROUTES.googleDriveAccess, label: "Google Drive Access & Permissions" },
                            ].map((link) => (
                                <li key={link.to}>
                                    <Link
                                        to={link.to}
                                        className="inline-flex items-center gap-1.5 text-slate-300 hover:text-emerald-400 transition-colors"
                                    >
                                        <ArrowRight className="w-3.5 h-3.5 text-slate-600" />
                                        <span>{link.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="glass-card rounded-2xl border border-slate-800 p-6 space-y-4">
                        <h3 className="text-base font-bold text-white">
                            Common questions
                        </h3>
                        <div className="space-y-3">
                            {FAQS.map((faq) => (
                                <div
                                    key={faq.q}
                                    className="pb-3 border-b border-slate-800/80 last:border-0 last:pb-0"
                                >
                                    <p className="text-xs font-bold text-white">{faq.q}</p>
                                    <p className="text-xs text-slate-400 leading-relaxed mt-1">
                                        {faq.a}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="glass-card rounded-3xl border border-emerald-500/25 p-8 text-center space-y-3">
                    <h3 className="text-lg font-bold text-white">
                        Verification requests
                    </h3>
                    <p className="text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        If you are reviewing our Google API compliance, the complete
                        documentation set is published openly on this site: our privacy
                        practice, usage terms, the exact Drive permission requested, and
                        the security design behind it. Further questions can be directed
                        to the administrator.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                        <Link
                            to={ROUTES.privacy}
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 text-xs font-bold border border-emerald-500/40 transition-colors"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            to={ROUTES.terms}
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                        >
                            Terms of Service
                        </Link>
                    </div>
                </section>
            </div>
        </PageShell>
    );
};
