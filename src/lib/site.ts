export const SITE_ORIGIN = "https://sherkhan32.github.io";
export const SITE_BASE = "/Drive-Backup-Services/";
export const SITE_URL = `${SITE_ORIGIN}${SITE_BASE}`;

export const BRAND = "Drive Backup Services";
export const CONTACT_LABEL = "Contact with Administrator";

export const DRIVE_FILE_SCOPE = "https://www.googleapis.com/auth/drive.file";
export const USER_DATA_POLICY_URL =
    "https://developers.google.com/terms/api-services-user-data-policy";
export const BACKUP_FOLDER = "/DriveBackupServices/";
export const PERMISSIONS_URL = "https://myaccount.google.com/permissions";

export const ROUTES = {
    home: "/",
    architecture: "/architecture/",
    howItWorks: "/how-it-works/",
    security: "/security/",
    googleDriveAccess: "/google-drive-access/",
    privacy: "/privacy-policy/",
    terms: "/terms-of-service/",
    contact: "/contact/",
} as const;

export const absoluteUrl = (path: string): string =>
    `${SITE_ORIGIN}${SITE_BASE.replace(/\/$/, "")}${path}`;
