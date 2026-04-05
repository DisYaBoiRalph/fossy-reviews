import { LkCardProps } from "@/components/card";
import { LkContainerProps } from "@/components/container";
import { LkHeadingProps } from "@/components/heading";
import { LkSectionProps } from "@/components/section";
import { LkTextProps } from "@/components/text";
import { render, screen } from "@testing-library/react";
import { getArticleSummaries } from "./articles.util";
import Articles from "./page";

const mockArticleSummaries = [
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

jest.mock("./articles.util", () => ({
    __esModule: true,
    getArticleSummaries: jest.fn(),
}));

jest.mock("next/link", () => ({
    __esModule: true,
    default: ({ children, href, ...props }: { children: React.ReactNode; href: string }) => (
        <a href={href} {...props}>
            {children}
        </a>
    ),
}));

jest.mock("@/components/container", () => ({
    __esModule: true,
    default: ({ children, ...props }: LkContainerProps) => (
        <div data-testid="container" {...props}>
            {children}
        </div>
    ),
}));

jest.mock("@/components/heading", () => ({
    __esModule: true,
    default: ({ children, tag, ...props }: LkHeadingProps) => {
        const Tag = tag || "h1";
        return (
            <Tag data-testid="heading" {...props}>
                {children}
            </Tag>
        );
    },
}));

jest.mock("@/components/section", () => ({
    __esModule: true,
    default: ({ children, padding, ...props }: LkSectionProps) => (
        <section data-testid="section" data-padding={padding} {...props}>
            {children}
        </section>
    ),
}));

jest.mock("@/components/text", () => ({
    __esModule: true,
    default: ({ children, ...props }: LkTextProps) => (
        <p data-testid="text" {...props}>
            {children}
        </p>
    ),
}));

jest.mock("@/components/grid", () => ({
    __esModule: true,
    default: ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
        <div data-testid="grid" {...props}>
            {children}
        </div>
    ),
}));

jest.mock("@/components/card", () => ({
    __esModule: true,
    default: ({ children, ...props }: LkCardProps) => (
        <article data-testid="card" {...props}>
            {children}
        </article>
    ),
}));

jest.mock("@/common/constants", () => ({
    boomerang: {
        className: "boomerang-font",
    },
}));

describe("Articles Page", () => {
    const firstArticle = mockArticleSummaries[0];
    const getArticleSummariesMock = getArticleSummaries as jest.MockedFunction<typeof getArticleSummaries>;

    beforeEach(() => {
        getArticleSummariesMock.mockReturnValue(mockArticleSummaries);
    });

    it("renders the main heading", () => {
        render(<Articles />);

        expect(screen.getByText("Articles")).toBeInTheDocument();
    });

    it("renders article cards for all seeded entries", () => {
        render(<Articles />);

        expect(screen.getAllByTestId("card")).toHaveLength(mockArticleSummaries.length);
    });

    it("shows a seeded article title", () => {
        render(<Articles />);

        expect(screen.getByText(firstArticle.title)).toBeInTheDocument();
    });

    it("shows a seeded publish date", () => {
        render(<Articles />);

        expect(screen.getByText(`Published: ${firstArticle.publishedAt}`)).toBeInTheDocument();
    });

    it("links an article card to its route", () => {
        render(<Articles />);

        expect(screen.getByRole("link", { name: firstArticle.title })).toHaveAttribute(
            "href",
            `/articles/${firstArticle.slug}`,
        );
    });

    it("shows an empty-state message when no article summaries exist", () => {
        getArticleSummariesMock.mockReturnValue([]);
        render(<Articles />);

        expect(screen.getByText("No articles published yet.")).toBeInTheDocument();
    });

    it("renders no article cards when there are no article summaries", () => {
        getArticleSummariesMock.mockReturnValue([]);
        render(<Articles />);

        expect(screen.queryByTestId("card")).not.toBeInTheDocument();
    });
});
