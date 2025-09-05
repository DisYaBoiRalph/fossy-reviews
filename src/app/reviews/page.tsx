import { boomerang } from "@/common/constants";
import Container from "@/components/container";
import Heading from "@/components/heading";
import Section from "@/components/section";
import Text from "@/components/text";

const Review = () => {
    return (
        <Section className="p-lg">
            <Container>
                <Heading className={`${boomerang.className}`} tag="h1" fontClass="display1">
                    Fossy Reviews
                </Heading>
                <Section className="p-md">
                    <Text tag="p">Review Page</Text>
                </Section>
            </Container>
        </Section>
    );
};

export default Review;
