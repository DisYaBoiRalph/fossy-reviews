import { LkContainerProps } from "@/components/container";
import { LkHeadingProps } from "@/components/heading";
import { LkSectionProps } from "@/components/section";
import { LkTextProps } from "@/components/text";
import { render, screen } from "@testing-library/react";
import Articles from "./page";

// Mock LiftKit components
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

// Mock constants
jest.mock("@/common/constants", () => ({
    boomerang: {
        className: "boomerang-font",
    },
}));

describe("Articles Page", () => {
    it("renders the main heading", () => {
        render(<Articles />);

        expect(screen.getByText("Articles")).toBeInTheDocument();
        expect(screen.getByTestId("heading")).toHaveClass("boomerang-font");
    });

    it("renders the articles text", () => {
        render(<Articles />);

        expect(screen.getByText("This is an about page.")).toBeInTheDocument();
    });

    it("has correct structure with sections and containers", () => {
        render(<Articles />);

        const sections = screen.getAllByTestId("section");
        const containers = screen.getAllByTestId("container");

        expect(sections.length).toBeGreaterThan(0);
        expect(containers.length).toBeGreaterThan(0);
    });

    it("applies correct padding to sections", () => {
        render(<Articles />);

        const sections = screen.getAllByTestId("section");
        const mainSection = sections[0];
        const textSection = sections[1];

        expect(mainSection).toHaveAttribute("data-padding", "sm");
        expect(textSection).toHaveAttribute("data-padding", "sm");
    });

    it("renders heading with correct tag and font class", () => {
        render(<Articles />);

        const heading = screen.getByTestId("heading");
        expect(heading.tagName).toBe("H1");
        expect(heading).toHaveClass("boomerang-font");
    });
});
