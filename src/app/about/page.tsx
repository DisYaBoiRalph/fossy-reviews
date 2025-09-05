import { boomerang } from "@/common/constants";
import Container from "@/components/container";
import Heading from "@/components/heading";
import Section from "@/components/section";
import Text from "@/components/text";

export const metadata = {
    title: "About",
};

const About = () => {
    return (
        <Section padding="sm">
            <Container>
                <Heading className={`${boomerang.className}`} tag="h1" fontClass="display1">
                    About
                </Heading>
                <Section padding="sm">
                    <Text>This is an about page.</Text>
                </Section>
            </Container>
        </Section>
    );
};

export default About;
