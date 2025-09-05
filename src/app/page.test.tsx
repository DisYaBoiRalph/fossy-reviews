import { render, screen } from "@testing-library/react";
import Home from "./page";

// Mock LiftKit components
jest.mock("@/components/button", () => ({
    __esModule: true,
    default: ({ label, color, ...props }: any) => (
        <button data-testid={`button-${color}`} {...props}>
            {label}
        </button>
    ),
}));

jest.mock("@/components/container", () => ({
    __esModule: true,
    default: ({ children, ...props }: any) => (
        <div data-testid="container" {...props}>
            {children}
        </div>
    ),
}));

jest.mock("@/components/heading", () => ({
    __esModule: true,
    default: ({ children, tag, fontClass, ...props }: any) => {
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
    default: ({ children, ...props }: any) => (
        <section data-testid="section" {...props}>
            {children}
        </section>
    ),
}));

jest.mock("@/components/text", () => ({
    __esModule: true,
    default: ({ children, tag, ...props }: any) => {
        const Tag = tag || "p";
        return (
            <Tag data-testid="text" {...props}>
                {children}
            </Tag>
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
