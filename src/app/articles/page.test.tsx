import { LkCardProps } from "@/components/card";
import { LkContainerProps } from "@/components/container";
import { LkHeadingProps } from "@/components/heading";
import { LkSectionProps } from "@/components/section";
import { LkTextProps } from "@/components/text";
import { render, screen } from "@testing-library/react";
import Articles from "./page";

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
    it("renders the main heading", () => {
        render(<Articles />);

        expect(screen.getByText("Articles")).toBeInTheDocument();
    });

    it("renders article cards for all seeded entries", () => {
        render(<Articles />);

        expect(screen.getAllByTestId("card")).toHaveLength(4);
    });

    it("shows a seeded article title", () => {
        render(<Articles />);

        expect(screen.getByText("The Hidden Cost of Open Source Maintenance")).toBeInTheDocument();
    });

    it("shows a seeded publish date", () => {
        render(<Articles />);

        expect(screen.getByText("Published: 2026-04-01")).toBeInTheDocument();
    });

    it("links an article card to its route", () => {
        render(<Articles />);

        expect(screen.getByRole("link", { name: /the hidden cost of open source maintenance/i })).toHaveAttribute(
            "href",
            "/articles/open-source-maintenance-costs",
        );
    });
});
