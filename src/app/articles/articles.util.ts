import fs from "fs";
import path from "path";

export interface ArticleSummary {
    slug: string;
    title: string;
    publishedAt: string;
}

const ARTICLES_DIR = path.join(process.cwd(), "src/app/articles");

function slugToTitle(slug: string): string {
    return slug
        .split("-")
        .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
        .join(" ");
}

function parseTitle(content: string, slug: string): string {
    const metadataTitleMatch = content.match(/title:\s*["'`]([^"'`]+)["'`]/);
    if (metadataTitleMatch?.[1]) {
        return metadataTitleMatch[1];
    }

    const headingTitleMatch = content.match(/^#\s+(.+)$/m);
    if (headingTitleMatch?.[1]) {
        return headingTitleMatch[1].trim();
    }

    return slugToTitle(slug);
}

function parsePublishedAt(content: string): string {
    const publishedMatch = content.match(/Published:\s*(\d{4}-\d{2}-\d{2})/);
    return publishedMatch?.[1] ?? "";
}

export function getArticleSummaries(): ArticleSummary[] {
    if (!fs.existsSync(ARTICLES_DIR)) {
        return [];
    }

    const entries = fs.readdirSync(ARTICLES_DIR, { withFileTypes: true });

    const summaries = entries
        .filter((entry) => entry.isDirectory())
        .map((entry) => {
            const slug = entry.name;
            const mdxPath = path.join(ARTICLES_DIR, slug, "page.mdx");

            if (!fs.existsSync(mdxPath)) {
                return null;
            }

            const content = fs.readFileSync(mdxPath, "utf8");

            return {
                slug,
                title: parseTitle(content, slug),
                publishedAt: parsePublishedAt(content),
            };
        })
        .filter((article): article is ArticleSummary => Boolean(article));

    return summaries.sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}