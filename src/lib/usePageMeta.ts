import { useEffect } from "react";
import { BRAND, absoluteUrl } from "./site";

type PageMeta = {
    title: string;
    description: string;
    path: string;
};

const upsertMeta = (selector: string, attribute: string, key: string, content: string) => {
    let tag = document.head.querySelector<HTMLMetaElement>(selector);
    if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attribute, key);
        document.head.appendChild(tag);
    }
    tag.setAttribute("content", content);
};

const upsertCanonical = (href: string) => {
    let tag = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!tag) {
        tag = document.createElement("link");
        tag.setAttribute("rel", "canonical");
        document.head.appendChild(tag);
    }
    tag.setAttribute("href", href);
};

export const usePageMeta = ({ title, description, path }: PageMeta): void => {
    useEffect(() => {
        const url = absoluteUrl(path);

        document.title = title;
        upsertMeta('meta[name="description"]', "name", "description", description);
        upsertCanonical(url);

        upsertMeta('meta[property="og:title"]', "property", "og:title", title);
        upsertMeta(
            'meta[property="og:description"]',
            "property",
            "og:description",
            description,
        );
        upsertMeta('meta[property="og:url"]', "property", "og:url", url);
        upsertMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
        upsertMeta(
            'meta[name="twitter:description"]',
            "name",
            "twitter:description",
            description,
        );
    }, [title, description, path]);
};

export const pageTitle = (page: string): string => `${page} | ${BRAND}`;
