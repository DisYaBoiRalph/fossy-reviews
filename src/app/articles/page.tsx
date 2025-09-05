import { boomerang } from "@/common/constants";
import Container from "@/components/container";
import Heading from "@/components/heading";
import Section from "@/components/section";
import Text from "@/components/text";

export const metadata = {
    title: "Articles",
};

const Articles = () => {
    return (
        <Section padding="sm">
            <Container>
                <Heading className={`${boomerang.className}`} tag="h1" fontClass="display1">
                    Articles
                </Heading>
                <Section padding="sm">
                    <Text>This is an about page.</Text>
                </Section>
            </Container>
        </Section>
    );
};

export default Articles;
