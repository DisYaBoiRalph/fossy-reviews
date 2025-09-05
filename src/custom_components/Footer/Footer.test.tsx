import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";

// Mock LiftKit components
jest.mock("@/components/section", () => ({
    __esModule: true,
    default: ({ children, className, padding, style, ...props }: any) => (
        <section data-testid="section" className={className} data-padding={padding} style={style} {...props}>
            {children}
        </section>
    ),
}));

jest.mock("@/components/text", () => ({
    __esModule: true,
    default: ({ children, ...props }: any) => (
        <p data-testid="text" {...props}>
            {children}
        </p>
    ),
}));

describe("Footer Component", () => {
    it("renders the footer text", () => {
        render(<Footer />);

        expect(screen.getByText("Footer Test Copyright lol")).toBeInTheDocument();
    });

    it("renders with correct structure", () => {
        render(<Footer />);

        const section = screen.getByTestId("section");
        const text = screen.getByTestId("text");

        expect(section).toBeInTheDocument();
        expect(text).toBeInTheDocument();
    });

    it("applies correct CSS classes", () => {
        render(<Footer />);

        const section = screen.getByTestId("section");
        expect(section).toHaveClass("border-t");
    });

    it("applies correct padding", () => {
        render(<Footer />);

        const section = screen.getByTestId("section");
        expect(section).toHaveAttribute("data-padding", "sm");
    });

    it("applies correct inline styles", () => {
        render(<Footer />);

        const section = screen.getByTestId("section");
        expect(section).toHaveStyle({
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        });
    });

    it("renders text element with correct content", () => {
        render(<Footer />);

        const text = screen.getByTestId("text");
        expect(text).toHaveTextContent("Footer Test Copyright lol");
    });
});
