"use client";

import Button from "@/components/button";
import Container from "@/components/container";
import NavBar from "@/components/navbar";
import Section from "@/components/section";
import { NavBarButton } from "./buttons/NavBarButton";

export const Header = () => {
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
                    ]}
                    iconButtons={[
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
