import { LkButtonProps } from "@/components/button";
import { LkContainerProps } from "@/components/container";
import { LkIconButtonProps } from "@/components/icon-button";
import { LkNavBarProps } from "@/components/navbar";
import { LkSectionProps } from "@/components/section";
import { fireEvent, render, screen } from "@testing-library/react";
import { INavBarButtonProps } from "../buttons";
import { Header } from "./Header";

// Mock Next.js router
const mockPush = jest.fn();
const mockOpen = jest.fn();

jest.mock("next/navigation", () => ({
    useRouter: () => ({
        push: mockPush,
    }),
}));

// Mock window.open
Object.defineProperty(window, "open", {
    value: mockOpen,
    writable: true,
});

// Mock LiftKit components
jest.mock("@/components/button", () => ({
    __esModule: true,
    default: ({ label, startIcon, variant, size, color, onClick, ...props }: LkButtonProps) => (
        <button
            data-testid="button"
            data-label={label}
            data-start-icon={startIcon}
            data-variant={variant}
            data-size={size}
            data-color={color}
            onClick={onClick}
            {...props}
        >
            {label}
        </button>
    ),
}));

jest.mock("@/components/container", () => ({
    __esModule: true,
    default: ({ children, className, ...props }: LkContainerProps) => (
        <div data-testid="container" className={className} {...props}>
            {children}
        </div>
    ),
}));

jest.mock("@/components/navbar", () => ({
    __esModule: true,
    default: ({ navButtons, iconButtons, ctaButtons, ...props }: LkNavBarProps) => (
        <nav data-testid="navbar" {...props}>
            <div data-testid="nav-buttons">{navButtons}</div>
            <div data-testid="icon-buttons">{iconButtons}</div>
            <div data-testid="cta-buttons">{ctaButtons}</div>
        </nav>
    ),
}));

jest.mock("@/components/section", () => ({
    __esModule: true,
    default: ({ children, ...props }: LkSectionProps) => (
        <section data-testid="section" {...props}>
            {children}
        </section>
    ),
}));

jest.mock("@/components/icon-button", () => ({
    __esModule: true,
    default: ({ icon, variant, ...props }: LkIconButtonProps) => (
        <button data-testid="icon-button" data-icon={icon} data-variant={variant} {...props}>
            {icon}
        </button>
    ),
}));

// Mock NavBarButton
jest.mock("../buttons/NavBarButton", () => ({
    NavBarButton: ({ label, onClick, ...props }: INavBarButtonProps) => (
        <button data-testid="nav-bar-button" data-label={label} onClick={onClick} {...props}>
            {label}
        </button>
    ),
}));

describe("Header Component", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("renders the navbar", () => {
        render(<Header />);

        expect(screen.getByTestId("navbar")).toBeInTheDocument();
    });

    it("renders all navigation buttons", () => {
        render(<Header />);

        const navButtons = screen.getAllByTestId("nav-bar-button");
        expect(navButtons).toHaveLength(3);

        expect(screen.getByText("Reviews")).toBeInTheDocument();
        expect(screen.getByText("Graph Tool")).toBeInTheDocument();
        expect(screen.getByText("About")).toBeInTheDocument();
    });

    it("renders icon buttons", () => {
        render(<Header />);

        const iconButton = screen.getByTestId("icon-button");
        expect(iconButton).toBeInTheDocument();
        expect(iconButton).toHaveAttribute("data-icon", "search");
        expect(iconButton).toHaveAttribute("data-variant", "text");
    });

    it("renders CTA buttons", () => {
        render(<Header />);

        const ctaButton = screen.getByTestId("button");
        expect(ctaButton).toBeInTheDocument();
        expect(ctaButton).toHaveAttribute("data-label", "YouTube");
        expect(ctaButton).toHaveAttribute("data-start-icon", "youtube");
        expect(ctaButton).toHaveAttribute("data-variant", "text");
        expect(ctaButton).toHaveAttribute("data-size", "lg");
        expect(ctaButton).toHaveAttribute("data-color", "error");
    });

    it("handles About button click navigation", () => {
        render(<Header />);

        const aboutButton = screen.getByText("About");
        fireEvent.click(aboutButton);

        expect(mockPush).toHaveBeenCalledWith("/about");
    });

    it("handles Graph Tool button click to open external link", () => {
        render(<Header />);

        const graphToolButton = screen.getByText("Graph Tool");
        fireEvent.click(graphToolButton);

        expect(mockOpen).toHaveBeenCalledWith("https://disyaboiralph.github.io/graph", "_blank");
    });

    it("handles YouTube button click to open external link", () => {
        render(<Header />);

        const youtubeButton = screen.getByText("YouTube");
        fireEvent.click(youtubeButton);

        expect(mockOpen).toHaveBeenCalledWith("https://www.youtube.com/@DisYaBoiRalph", "_blank");
    });

    it("applies correct CSS classes to container", () => {
        render(<Header />);

        const container = screen.getByTestId("container");
        expect(container).toHaveClass("border-b", "shadow-sm");
    });

    it("has correct structure with container and section", () => {
        render(<Header />);

        const container = screen.getByTestId("container");
        const section = screen.getByTestId("section");
        const navbar = screen.getByTestId("navbar");

        expect(container).toBeInTheDocument();
        expect(section).toBeInTheDocument();
        expect(navbar).toBeInTheDocument();
    });
});
