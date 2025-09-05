"use client";

import Button from "@/components/button";
import Container from "@/components/container";
import NavBar from "@/components/navbar";
import Section from "@/components/section";
import { NavBarButton } from "../buttons/NavBarButton";
import { useRouter } from "next/navigation";
import IconButton from "@/components/icon-button";

export const Header = () => {
    const router = useRouter();
    return (
        <Container className="border-b shadow-sm">
            <Section>
                <NavBar
                    navButtons={[
                        <NavBarButton key="1" label="Reviews" />,
                        <NavBarButton
                            key="2"
                            label="Graph Tool"
                            onClick={() => window.open("https://disyaboiralph.github.io/graph", "_blank")}
                        />,
                        <NavBarButton key="3" label="About" onClick={() => router.push("/about")} />,
                    ]}
                    iconButtons={[<IconButton key="search" icon="search" variant="text" />]}
                    ctaButtons={[
                        <Button
                            key="end-1"
                            startIcon="youtube"
                            variant="text"
                            label="YouTube"
                            size="lg"
                            color="error"
                            onClick={() => window.open("https://www.youtube.com/@DisYaBoiRalph", "_blank")}
                        />,
                    ]}
                />
            </Section>
        </Container>
    );
};
