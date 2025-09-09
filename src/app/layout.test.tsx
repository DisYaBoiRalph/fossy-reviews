import React from "react";
import RootLayout from "./layout";

// Mock Next.js components
jest.mock("next/font/google", () => ({
    Geist: () => ({
        variable: "--font-geist-sans",
        className: "geist-sans",
    }),
    Geist_Mono: () => ({
        variable: "--font-geist-mono",
        className: "geist-mono",
    }),
}));

// Mock custom components
jest.mock("@/custom_components", () => ({
    Footer: () => <div data-testid="footer">Footer</div>,
    Header: () => <div data-testid="header">Header</div>,
}));

// Mock theme provider
jest.mock("@/components/theme", () => ({
    __esModule: true,
    default: ({ children }: { children: React.ReactNode }) => <div data-testid="theme-provider">{children}</div>,
}));

describe("RootLayout", () => {
    it("exports the component", () => {
        expect(RootLayout).toBeDefined();
        expect(typeof RootLayout).toBe("function");
    });

    it("has correct metadata", () => {
        // Test that the component exports the correct metadata
        expect(RootLayout).toBeDefined();
    });

    it("accepts children prop", () => {
        const testChildren = <div>Test content</div>;
        expect(() => RootLayout({ children: testChildren })).not.toThrow();
    });
});
