import { LkButtonProps } from "@/components/button";
import { LkContainerProps } from "@/components/container";
import { LkHeadingProps } from "@/components/heading";
import { LkSectionProps } from "@/components/section";
import { LkTextProps } from "@/components/text";
import { render, screen } from "@testing-library/react";
import Home from "./page";

// Mock LiftKit components
jest.mock("@/components/button", () => ({
    __esModule: true,
    default: ({ label, color, ...props }: LkButtonProps) => (
        <button data-testid={`button-${color}`} {...props}>
            {label}
        </button>
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
    default: ({ children, ...props }: LkSectionProps) => (
        <section data-testid="section" {...props}>
            {children}
        </section>
    ),
}));

jest.mock("@/components/text", () => ({
    __esModule: true,
    default: ({ children, ...props }: LkTextProps) => {
        return (
            <p data-testid="text" {...props}>
                {children}
            </p>
        );
    },
}));

// Mock constants
jest.mock("@/common/constants", () => ({
    boomerang: {
        className: "boomerang-font",
    },
}));

describe("Home Page", () => {
    it("renders the main heading", () => {
        render(<Home />);

        expect(screen.getByText("Fossy Reviews")).toBeInTheDocument();
        expect(screen.getByTestId("heading")).toHaveClass("boomerang-font");
    });

    it("renders the lorem ipsum text", () => {
        render(<Home />);

        const textElement = screen.getByTestId("text");
        expect(textElement).toBeInTheDocument();
        expect(textElement.textContent).toContain("Lorem ipsum dolor sit amet");
    });

    it("renders all color variant buttons", () => {
        render(<Home />);

        const expectedColors = ["primary", "secondary", "tertiary", "success", "warning", "error", "info"];

        expectedColors.forEach((color) => {
            expect(screen.getByTestId(`button-${color}`)).toBeInTheDocument();
        });
    });

    it("renders buttons with correct labels", () => {
        render(<Home />);

        const expectedLabels = ["Primary", "Secondary", "Tertiary", "Success", "Warning", "Error", "Info"];

        expectedLabels.forEach((label) => {
            expect(screen.getByText(label)).toBeInTheDocument();
        });
    });

    it("has correct structure with sections and containers", () => {
        render(<Home />);

        const sections = screen.getAllByTestId("section");
        const containers = screen.getAllByTestId("container");

        expect(sections.length).toBeGreaterThan(0);
        expect(containers.length).toBeGreaterThan(0);
    });

    it("applies correct styling to button container", () => {
        render(<Home />);

        const containers = screen.getAllByTestId("container");
        const buttonContainer = containers.find(
            (container) => container.style.display === "flex" && container.style.gap === "10px",
        );
        expect(buttonContainer).toBeInTheDocument();
        expect(buttonContainer).toHaveStyle({
            display: "flex",
            gap: "10px",
        });
    });
});
