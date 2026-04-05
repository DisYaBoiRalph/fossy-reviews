export interface ArticleSummary {
    slug: string;
    title: string;
    publishedAt: string;
}

export const articleSummaries: ArticleSummary[] = [
    {
        slug: "open-source-maintenance-costs",
        title: "The Hidden Cost of Open Source Maintenance",
        publishedAt: "2026-04-01",
    },
    {
        slug: "choosing-tools-over-hype",
        title: "Choosing Tools Over Hype Cycles",
        publishedAt: "2026-03-28",
    },
    {
        slug: "what-makes-software-readable",
        title: "What Makes Software Actually Readable",
        publishedAt: "2026-03-24",
    },
    {
        slug: "small-teams-shipping-well",
        title: "How Small Teams Ship Reliable Software",
        publishedAt: "2026-03-20",
    },
];