import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({
    extension: /\.mdx?$/,
});

const rawBasePath = process.env.BASE_PATH ?? "";
const basePath = rawBasePath === "/" ? "" : rawBasePath.replace(/\/$/, "");

const nextConfig: NextConfig = {
    // Your normal config here
    pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
    experimental: {
        mdxRs: true, // enables Rust-based MDX compiler (faster)
    },
    // custom keys you had
    allowedDevOrigins: ["local-origin.dev", "*.local-origin.dev"],
    output: "export",
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
    basePath,
    assetPrefix: basePath ? `${basePath}/` : undefined,
};

export default withMDX(nextConfig);
