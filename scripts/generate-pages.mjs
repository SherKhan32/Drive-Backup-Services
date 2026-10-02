import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const DIST = join(ROOT, "dist");

const ORIGIN = "https://sherkhan32.github.io";
const BASE = "/Drive-Backup-Services/";
const CONTACT_LABEL = "Contact with Administrator";
const SCOPE = "https://www.googleapis.com/auth/drive.file";
const POLICY = "https://developers.google.com/terms/api-services-user-data-policy";
const BACKUP_FOLDER = "/DriveBackupServices/";
const IMAGE = `${ORIGIN}${BASE}images/hero-dashboard.jpg`;

const url = (path) => `${ORIGIN}${BASE.slice(0, -1)}${path}`;
const esc = (value) =>
    value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");

const NAV = [
    ["Home", "/"],
    ["System Architecture", "/architecture/"],
    ["How Backup Works", "/how-it-works/"],
    ["Encryption & Security", "/security/"],
    ["Google Drive Access", "/google-drive-access/"],
    ["Privacy Policy", "/privacy-policy/"],
    ["Terms of Service", "/terms-of-service/"],
    ["Contact & Support", "/contact/"],
];

const navLinks = (separator) =>
    NAV.map(([label, path]) => `<a href="${url(path)}">${label}</a>`).join(separator);

const NAV_HTML = `<nav>${navLinks(" &nbsp;|&nbsp; ")}</nav>`;

const LIMITED_USE = `<p><strong>Drive Backup Services'</strong> use and transfer to any other app of information received from Google APIs will adhere to the <a href="${POLICY}" target="_blank" rel="noreferrer">Google API Services User Data Policy</a>, including the <strong>Limited Use</strong> requirements. The only permission requested is <code>${SCOPE}</code>, which grants access solely to backup files the application created inside the user's own Google Drive account.</p>`;

const FALLBACK_STYLE = `
#static-fallback { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; line-height: 1.65; color: #cbd5e1; background: #020617; border: 1px solid #1e293b; border-radius: 16px; padding: 28px; max-width: 900px; margin: 0 auto; }
#static-fallback h1 { font-size: 1.85rem; color: #ffffff; margin: 0 0 16px; line-height: 1.25; }
#static-fallback h2 { font-size: 1.15rem; color: #34d399; margin: 30px 0 10px; }
#static-fallback h3 { font-size: 1rem; color: #ffffff; margin: 22px 0 8px; }
#static-fallback p, #static-fallback li { font-size: 0.95rem; margin: 8px 0; }
#static-fallback ul, #static-fallback ol { padding-left: 22px; margin: 8px 0; }
#static-fallback code { background: #020617; padding: 2px 7px; border-radius: 5px; font-family: ui-monospace, Menlo, Consolas, monospace; font-size: 0.85em; color: #34d399; overflow-wrap: anywhere; }
#static-fallback a { color: #34d399; text-decoration: none; font-weight: 500; }
#static-fallback nav { margin-bottom: 26px; font-size: 0.8rem; line-height: 2; }
#static-fallback .note { background: #022c22; border: 1px solid #065f46; border-radius: 12px; padding: 14px 18px; }
#static-fallback hr { border: 0; border-top: 1px solid #1e293b; margin: 28px 0; }
`;

const shell = (body) => `<div id="static-fallback">
                ${NAV_HTML}
                ${body}
                <hr />
                <p style="font-size:0.8rem;">Drive Backup Services &mdash; automatic encrypted Google Drive backup for desktop applications. Enquiries: <b>${CONTACT_LABEL}</b></p>
            </div>`;

const PAGES = [
    {
        dir: "",
        path: "/",
        title: "Drive Backup Services | Automatic Google Drive Backup for Desktop Apps",
        description:
            "Drive Backup Services keeps a local backup of your desktop application data and uploads it automatically to your own Google Drive. AES-256 encrypted, sent directly from your computer, with no third-party server in between.",
        ogType: "website",
        body: shell(`
                <h1>Drive Backup Services</h1>
                <p><strong>Automatic Google Drive backup for your desktop software.</strong></p>
                <p>Your desktop app keeps a local backup of its data on your own computer. From there it is uploaded automatically to your personal Google Drive &mdash; encrypted first, sent directly by your computer, and stored only in your own account. No middleman, no third party.</p>
                <div class="note"><p><strong>Where your data goes:</strong> desktop application database &rarr; local backup copy on your PC &rarr; AES-256 encryption &rarr; automatic upload &rarr; your private Google Drive folder <code>${BACKUP_FOLDER}</code>. Your computer talks to Google directly.</p></div>
                <h2>What you get</h2>
                <ul>
                    <li>Local backups created on your own machine, so a copy always exists locally.</li>
                    <li>Automatic upload to your own Google Drive on a schedule you choose, or one click manually.</li>
                    <li>AES-256 encryption applied before the file leaves your computer.</li>
                    <li>One-click restore from a snapshot in your Drive.</li>
                    <li>No third-party servers, no relay service, no data collection.</li>
                </ul>
                <h2>Google Drive permission requested</h2>
                <p>Only one, and it is the narrowest one a backup tool can use:</p>
                <p><code>${SCOPE}</code></p>
                <p>This grants access <strong>only</strong> to the backup files the application itself created. It cannot read your photos, emails, contacts, or any unrelated document in your Drive.</p>
                ${LIMITED_USE}`),
    },
    {
        dir: "architecture",
        path: "/architecture/",
        title: "System Architecture & Integration Diagram | Drive Backup Services",
        description:
            "How Drive Backup Services connects desktop software to Google Drive: the three layers, the data path between them, and exactly who can see what at every stage.",
        ogType: "article",
        body: shell(`
                <h1>System Architecture &amp; Integration Diagram</h1>
                <p>How Drive Backup Services connects desktop software to Google Drive.</p>
                <h2>Three layers, one straight path</h2>
                <h3>Layer 01 &mdash; Desktop application layer</h3>
                <p>Runs entirely on your computer. Business data lives in a local offline database on your own machine. It works with no internet connection for day-to-day use and produces a clean, point-in-time snapshot when a backup is due.</p>
                <h3>Layer 02 &mdash; Drive Backup Services engine</h3>
                <p>The backup layer inside the desktop app. It creates the local backup copy, encrypts it with AES-256 before any network activity, keeps the Google permission token in your operating system's credential vault, and uploads on the schedule you configure.</p>
                <h3>Layer 03 &mdash; Your Google Drive layer</h3>
                <p>Storage you already own and control. Encrypted snapshots are stored in your private folder <code>${BACKUP_FOLDER}</code> inside your own Google account, and can be downloaded, shared, or deleted by you at any time.</p>
                <h2>Data path</h2>
                <ol>
                    <li>Your desktop application writes business data to a local database.</li>
                    <li>A point-in-time backup copy is created on your computer.</li>
                    <li>The copy is encrypted with AES-256 on your machine.</li>
                    <li>The encrypted file is uploaded directly from your computer to Google Drive.</li>
                    <li>The snapshot is stored in <code>${BACKUP_FOLDER}</code> in your account.</li>
                </ol>
                <h2>Who can see what</h2>
                <ul>
                    <li><strong>Your desktop application:</strong> your full local database.</li>
                    <li><strong>Drive Backup Services:</strong> nothing. It is code, not a service. There is no server that receives your data.</li>
                    <li><strong>Google Drive:</strong> only the encrypted backup files you created.</li>
                    <li><strong>Any third party:</strong> nothing at all. There is no third-party hop in the path.</li>
                </ul>
                <h2>Connection used</h2>
                <p><code>${SCOPE}</code></p>
                <p>Works on Windows, macOS and Linux desktops. An internet connection is needed only when a backup uploads or restores.</p>`),
    },
    {
        dir: "how-it-works",
        path: "/how-it-works/",
        title: "How Backup and Restore Work | Drive Backup Services",
        description:
            "Drive Backup Services keeps a local backup of your desktop app data, uploads it automatically to your own Google Drive, and restores it in one click when you need it.",
        ogType: "article",
        body: shell(`
                <h1>How Backup and Restore Work</h1>
                <p>A local backup is created on your computer, uploaded automatically to your own Google Drive, and restored in one click when needed.</p>
                <h2>Four stages of one backup</h2>
                <ol>
                    <li><strong>Local backup snapshot.</strong> The desktop software creates a clean point-in-time copy of the local database without interrupting operations.</li>
                    <li><strong>AES-256 client encryption.</strong> The copy is compressed and encrypted on your local machine before any network transmission.</li>
                    <li><strong>Direct Google handshake.</strong> Your computer talks straight to Google using the narrow <code>drive.file</code> permission. No relay server.</li>
                    <li><strong>Safe storage.</strong> The encrypted backup is saved in your private Google Drive folder, ready to restore with one click.</li>
                </ol>
                <h2>Backup modes</h2>
                <ul>
                    <li><strong>Scheduled automatic backups:</strong> choose a daily or weekly time and the app creates and uploads a backup on its own.</li>
                    <li><strong>One-click manual backup:</strong> useful before installing updates, changing hardware, or a busy trading day.</li>
                    <li><strong>Version history:</strong> each run adds a new dated snapshot, so an earlier good state stays available.</li>
                    <li><strong>Restore in one step:</strong> choose a snapshot from your Drive and the app rebuilds your database from it.</li>
                </ul>
                <h2>Everyday conditions</h2>
                <ul>
                    <li><strong>No internet:</strong> the local backup is still created; the encrypted upload waits and continues when the connection returns.</li>
                    <li><strong>Offline operation:</strong> your desktop application keeps working exactly as before.</li>
                    <li><strong>Your control:</strong> pause the schedule, disconnect Google Drive, or delete old snapshots directly from your own Drive at any time.</li>
                </ul>
                <h2>Where the backups live</h2>
                <p>Your backups are stored in <code>My Drive${BACKUP_FOLDER}</code> &mdash; your storage, your account, your Google settings.</p>`),
    },
    {
        dir: "security",
        path: "/security/",
        title: "Encryption & Data Protection | Drive Backup Services",
        description:
            "How Drive Backup Services protects your data: AES-256 encryption on your own machine, keys that never leave it, minimal Google Drive permission, and controls that stay in your hands.",
        ogType: "article",
        body: shell(`
                <h1>Encryption &amp; Data Protection</h1>
                <p>Security here is mostly about asking for less, and about encrypting before anything moves.</p>
                <h2>Four layers of protection</h2>
                <ul>
                    <li><strong>Encrypted before it moves.</strong> Your database copy is compressed and encrypted with AES-256 on your own computer, so no unencrypted copy ever travels across the internet.</li>
                    <li><strong>The key stays with you.</strong> The encryption key is derived from a password only you set. It is held by the desktop app on your machine and is never transmitted or recoverable by us.</li>
                    <li><strong>Permission kept in your OS vault.</strong> The Google authorization token is stored in your operating system's protected credential store, such as Windows Credential Manager or the macOS Keychain.</li>
                    <li><strong>Nobody else can read it.</strong> Because the snapshot is encrypted before upload, the copy resting in your Drive is unreadable without your key.</li>
                </ul>
                <h2>What Drive Backup Services never does</h2>
                <ul>
                    <li>We do not host, mirror, or store a copy of your database on any server of ours.</li>
                    <li>We do not operate an upload relay, proxy, or forwarding service for your backups.</li>
                    <li>We do not read, open, index, or analyse the contents of your backup files.</li>
                    <li>We do not collect telemetry, usage analytics, or advertising identifiers.</li>
                    <li>We do not use your Drive data for advertising, profiling, or AI model training.</li>
                    <li>We do not sell, rent, or share any part of your data with anyone.</li>
                </ul>
                <h2>Controls that stay with you</h2>
                <ul>
                    <li>Disconnect Google Drive from the desktop app at any time.</li>
                    <li>Revoke the permission from Google Account security settings.</li>
                    <li>Delete any snapshot or the whole backup folder in your own Drive.</li>
                    <li>Rotate the encryption password whenever you choose.</li>
                </ul>
                <h2>Keep your encryption password safe</h2>
                <p>Because the key never leaves your device, nobody &mdash; including us &mdash; can recover a backup if that password is lost. Store it in a password manager or a safe place offline.</p>`),
    },
    {
        dir: "google-drive-access",
        path: "/google-drive-access/",
        title: "Google Drive Access & Permissions | Drive Backup Services",
        description:
            "The exact Google Drive permission Drive Backup Services uses, what it allows, what it cannot reach, and how to switch it off whenever you want.",
        ogType: "article",
        body: shell(`
                <h1>Google Drive Access &amp; Permissions</h1>
                <p>A Google permission is simply a list of doors an app may open. When an app requests Drive access, Google requires it to name the exact permission it needs, and you see that name on Google's consent screen before approving anything.</p>
                <h2>The permission requested</h2>
                <p><code>${SCOPE}</code></p>
                <p>Drive Backup Services needs to do exactly three things: put an encrypted backup in your Drive, list the backups it created, and take one back out when you restore. This single permission covers those three actions and nothing else. A larger full-Drive permission would also work, but it would hand the software the ability to read every document you own. A backup tool has no reason to ask for that, so it does not.</p>
                <h2>What it allows</h2>
                <ul>
                    <li>Create a new backup folder in your Drive.</li>
                    <li>Upload a new encrypted backup snapshot into that folder.</li>
                    <li>List previously created snapshots so you can choose one.</li>
                    <li>Download a snapshot you selected, in order to restore it.</li>
                    <li>Replace or delete a snapshot that the application created.</li>
                </ul>
                <h2>What it cannot do</h2>
                <ul>
                    <li>Read, edit, or delete any file you did not back up.</li>
                    <li>Access your photos, videos, or personal documents.</li>
                    <li>Reach Gmail, Google Contacts, Calendar, or Chrome data.</li>
                    <li>See files shared with you by other people.</li>
                    <li>List the contents of your Drive outside the backup folder <code>${BACKUP_FOLDER}</code>.</li>
                </ul>
                <h2>How the permission is granted</h2>
                <ol>
                    <li>You press Connect inside the desktop app. Nothing happens until you do.</li>
                    <li>Google shows its own consent screen, served by Google, stating exactly what is being requested. Your password is typed into Google's page, never into our software.</li>
                    <li>On approval, the authorization token is kept in your operating system's credential vault on your computer.</li>
                </ol>
                <h2>Turning it off</h2>
                <ul>
                    <li><strong>From inside the desktop app:</strong> open backup settings and choose Disconnect. Scheduled uploads stop, the stored token is cleared, and existing snapshots stay in your Drive.</li>
                    <li><strong>From your Google Account:</strong> remove Drive Backup Services from your third-party access list at <a href="https://myaccount.google.com/permissions" target="_blank" rel="noreferrer">Google Account permissions</a>. Google revokes the permission on its side.</li>
                </ul>
                ${LIMITED_USE}`),
    },
    {
        dir: "privacy-policy",
        path: "/privacy-policy/",
        title: "Privacy Policy | Drive Backup Services",
        description:
            "Privacy Policy and Google API Services User Data Policy compliance for Drive Backup Services: offline-first local storage, a single restricted Google Drive permission, and no third-party sharing.",
        ogType: "article",
        body: shell(`
                <h1>Privacy Policy</h1>
                <p><strong>Application:</strong> Drive Backup Services &nbsp;&bull;&nbsp; <strong>Developer:</strong> Drive Backup Services Engineering Team &nbsp;&bull;&nbsp; <strong>Effective Date:</strong> October 1, 2026</p>
                <div class="note">${LIMITED_USE}</div>
                <h2>1. Core privacy commitment</h2>
                <p>Drive Backup Services is a backup engine integrated into offline desktop applications such as retail POS, installment financing, billing, and inventory software. It is designed with a strict offline-first architecture. Your commercial, financial, and operational records belong solely to you and are stored locally on your desktop workstation.</p>
                <p><strong>We do not operate external intermediate servers that collect, store, sell, or analyse your transactions or Google account data.</strong> Your computer creates the backup and uploads it directly to your own Google Drive.</p>
                <h2>2. How we access, use, and store Google user data</h2>
                <ul>
                    <li><strong>Direct client-to-Google communication:</strong> the desktop app performs standard OAuth 2.0 authorization through your default web browser directly with Google's secure authorization endpoints. No proxy or relay server is ever used.</li>
                    <li><strong>Zero access to other files:</strong> because we utilise the narrow <code>drive.file</code> permission, our application cannot view, edit, read, or delete your personal photos, emails, Google Docs, or any files other than the encrypted backup archives it created.</li>
                    <li><strong>Local token storage:</strong> authorization access and refresh tokens are stored in your operating system's local credential vault, such as Windows Credential Manager, the macOS Keychain, or the Linux Secret Service. Tokens are never sent to external servers.</li>
                    <li><strong>Local encryption before upload:</strong> backup archives are encrypted with AES-256 before transmission, ensuring that only you hold the decryption key.</li>
                    <li><strong>Storage location:</strong> archives are stored in a dedicated folder <code>${BACKUP_FOLDER}</code> inside your own Google Drive account.</li>
                </ul>
                <h2>3. Zero data selling and third-party sharing</h2>
                <ul>
                    <li>We do not sell Google user data or business records to third parties.</li>
                    <li>We do not use Google user data or financial records for advertising, retargeting, or credit profiling.</li>
                    <li>We do not use Google user data to train artificial intelligence or machine learning models.</li>
                    <li>No person at our organisation has access to your database records or Google Drive files.</li>
                    <li>We do not operate any server that stores or relays your backup data.</li>
                </ul>
                <h2>4. Local storage, retention, and deletion</h2>
                <p>Because your data is stored solely on your local device and in your private Google Drive, retention is under your control. We hold no copy, so there is nothing for us to retain or delete on your behalf. You may delete any snapshot or the whole backup folder <code>${BACKUP_FOLDER}</code> from your own Drive at any time.</p>
                <h2>5. User control and revocation</h2>
                <p>You can disconnect your Google account directly within the desktop application settings, or revoke access remotely through <a href="https://myaccount.google.com/permissions" target="_blank" rel="noreferrer">Google Account permissions</a>. Revocation takes effect immediately.</p>
                <h2>6. Contact</h2>
                <p>Enquiries: <b>${CONTACT_LABEL}</b></p>`),
    },
    {
        dir: "terms-of-service",
        path: "/terms-of-service/",
        title: "Terms of Service | Drive Backup Services",
        description:
            "Terms governing use of Drive Backup Services, including permitted use of the desktop software, data ownership, backup responsibility, and the Google Drive backup integration.",
        ogType: "article",
        body: shell(`
                <h1>Terms of Service</h1>
                <p><strong>Application:</strong> Drive Backup Services &nbsp;&bull;&nbsp; <strong>Developer:</strong> Drive Backup Services Engineering Team &nbsp;&bull;&nbsp; <strong>Effective Date:</strong> October 1, 2026</p>
                <h2>1. Agreement to terms</h2>
                <p>By downloading, installing, accessing, or using Drive Backup Services ("Software", "Application", or "Service"), you agree to be bound by these Terms of Service. If you do not agree to these terms, do not install or use the software.</p>
                <h2>2. Permitted use and ownership</h2>
                <p>You may install and run Drive Backup Services on your own desktop workstations for commercial or personal business management purposes, including offline database backup and disaster recovery for desktop applications. You retain full ownership of all data entered into the software.</p>
                <p>Usage restrictions:</p>
                <ul>
                    <li>You may not decompile, reverse-engineer, or disassemble the binary distributions.</li>
                    <li>You may not resell or repackage the software under another brand without express authorization.</li>
                    <li>You may not bypass cryptographic protection or token validation controls.</li>
                </ul>
                <h2>3. Local data ownership and backup responsibility</h2>
                <p>Because Drive Backup Services operates with an offline-first desktop architecture, you retain exclusive ownership of all customer files, transaction logs, inventory records, and databases managed by your desktop applications. You are responsible for regularly initiating automated or manual backups to protect your local data against physical hardware failure.</p>
                <h2>4. Google Cloud integration and third-party terms</h2>
                <p>The software integrates with Google Drive for encrypted cloud backup storage. Your use of Google Drive is subject to Google's applicable Terms of Service and Privacy Policy. Drive Backup Services maintains strict compliance with the Google API Services User Data Policy using the restricted <code>drive.file</code> permission. We are not liable for storage quotas, outages, or network connectivity failures on Google's cloud infrastructure.</p>
                <h2>5. Disclaimer of warranties and limitation of liability</h2>
                <p>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. IN NO EVENT SHALL DRIVE BACKUP SERVICES OR ITS DEVELOPERS BE LIABLE FOR ANY CLAIM, DAMAGES, LOSS OF BUSINESS DATA, OR OTHER LIABILITY ARISING FROM COMPUTER HARDWARE FAILURES OR IMPROPER OPERATOR USAGE.</p>
                <h2>6. Contact information</h2>
                <p>Enquiries: <b>${CONTACT_LABEL}</b></p>`),
    },
    {
        dir: "contact",
        path: "/contact/",
        title: "Contact & Support | Drive Backup Services",
        description:
            "Reach the Drive Backup Services team for product support, business enquiries, or Google API verification and engineering questions.",
        ogType: "article",
        body: shell(`
                <h1>Contact &amp; Support</h1>
                <p>All enquiries are handled by the Drive Backup Services administrator.</p>
                <h2>Product support</h2>
                <p>Installation, backup scheduling, restore steps, Google connection issues, and printer or hardware questions. &rarr; <b>${CONTACT_LABEL}</b></p>
                <h2>Business enquiries</h2>
                <p>Multiple workstations, custom desktop software requirements, deployment, and volume inquiries. &rarr; <b>${CONTACT_LABEL}</b></p>
                <h2>Engineering and verification</h2>
                <p>Technical reviews, Google API policy verification, security documentation, and developer questions. &rarr; <b>${CONTACT_LABEL}</b></p>
                <h2>Common questions</h2>
                <ul>
                    <li><strong>Do I need an account with Drive Backup Services?</strong> No. The software runs on your computer and backs up to your own Google Drive.</li>
                    <li><strong>Does the software work without internet?</strong> Yes. The backup is created locally; only the upload needs a connection.</li>
                    <li><strong>Can you see my data?</strong> No. Your computer creates the backup and uploads it straight to your Google Drive. We operate no server that receives it.</li>
                    <li><strong>How do I stop backups?</strong> Disconnect from the app's backup settings, or revoke the permission from your Google Account permissions page. Both take effect immediately.</li>
                </ul>
                <h2>Verification requests</h2>
                <p>Our documentation set is published openly on this site: ${navLinks(", ").replace(/<a /g, "<a ").replace(/<\/a>/g, "</a>")}.</p>`),
    },
];

const NOT_FOUND = {
    dir: "404",
    path: "/404/",
    title: "Page Not Found | Drive Backup Services",
    description:
        "The page you requested does not exist. Return to the Drive Backup Services home page or browse the architecture, backup, and security documentation.",
    ogType: "website",
    body: shell(`
                <h1>This page does not exist</h1>
                <p>The address you followed is not part of this site. Every page here has its own address, so try one of the destinations below.</p>
                <p>${navLinks(" &nbsp;|&nbsp; ")}</p>
                <p><a href="${url("/")}"><strong>Back to home page</strong></a></p>`),
};

const buildHead = ({ title, description, path, ogType }) => {
    const canonical = url(path);

    return [
        `<meta name="description" content="${esc(description)}" />`,
        `<link rel="canonical" href="${canonical}" />`,
        `<meta property="og:type" content="${ogType}" />`,
        `<meta property="og:url" content="${canonical}" />`,
        `<meta property="og:title" content="${esc(title)}" />`,
        `<meta property="og:description" content="${esc(description)}" />`,
        `<meta property="og:image" content="${IMAGE}" />`,
        `<meta property="og:image:alt" content="${esc(title)}" />`,
        `<meta name="twitter:url" content="${canonical}" />`,
        `<meta name="twitter:title" content="${esc(title)}" />`,
        `<meta name="twitter:description" content="${esc(description)}" />`,
        `<meta name="twitter:image" content="${IMAGE}" />`,
    ].join("\n        ");
};

const template = readFileSync(join(DIST, "index.html"), "utf8");

const TITLE_RE = /<title[^>]*>[\s\S]*?<\/title>/;
const META_RE = /<meta[^>]*name="route-meta"[^>]*>/;
const NOSCRIPT_RE = /<div[^>]*id="route-noscript"[^>]*><\/div>/;

for (const [label, re] of [
    ["title", TITLE_RE],
    ["route-meta", META_RE],
    ["route-noscript", NOSCRIPT_RE],
]) {
    if (!re.test(template)) {
        throw new Error(`Missing "${label}" marker in dist/index.html`);
    }
}

const ROUTE_META_KEYS = new Set([
    "description",
    "og:title",
    "og:description",
    "og:url",
    "og:type",
    "og:image",
    "og:image:alt",
    "twitter:url",
    "twitter:title",
    "twitter:description",
    "twitter:image",
    "twitter:image:alt",
]);

const CANONICAL_RE = /[ \t]*<link[^>]*rel="canonical"[^>]*>\r?\n?/g;
const META_TAG_RE = /[ \t]*<meta\s[^>]*>\r?\n?/g;

const isRouteMeta = (tag) => {
    const name = tag.match(/name="([^"]+)"/)?.[1];
    const property = tag.match(/property="([^"]+)"/)?.[1];
    return ROUTE_META_KEYS.has(name ?? "") || ROUTE_META_KEYS.has(property ?? "");
};

const stripRouteMeta = (html) =>
    html
        .replace(CANONICAL_RE, "")
        .replace(META_TAG_RE, (tag) => (isRouteMeta(tag) ? "" : tag));

const render = (meta) =>
    stripRouteMeta(template)
        .replace(TITLE_RE, `<title id="route-title">${esc(meta.title)}</title>`)
        .replace(META_RE, buildHead(meta))
        .replace(
            NOSCRIPT_RE,
            `<style>${FALLBACK_STYLE}</style>\n            ${meta.body}`,
        );

for (const meta of [...PAGES, NOT_FOUND]) {
    const target = meta.dir
        ? join(DIST, meta.dir, "index.html")
        : join(DIST, "index.html");

    mkdirSync(dirname(target), { recursive: true });
    writeFileSync(target, render(meta), "utf8");
    console.log(`generated  ${meta.path}`);
}

writeFileSync(join(DIST, "404.html"), render(NOT_FOUND), "utf8");
console.log("generated  404.html");
