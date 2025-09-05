import { boomerang } from "@/common/constants";
import Button from "@/components/button";
import Container from "@/components/container";
import Heading from "@/components/heading";
import Section from "@/components/section";
import Text from "@/components/text";

const Home = () => {
    return (
        <Section className="p-lg">
            <Container>
                <Heading className={`${boomerang.className}`} tag="h1" fontClass="display1">
                    Fossy Reviews
                </Heading>
                <Section className="p-md">
                    <Text tag="p">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras laoreet sapien mollis, convallis
                        lectus ut, porta ipsum. Sed in turpis at eros cursus commodo. Ut suscipit odio quis sagittis
                        pellentesque. Quisque non ipsum ac nibh aliquam euismod. Morbi tristique odio est, id sodales
                        velit pulvinar vel. Sed malesuada vehicula massa et posuere. Donec vitae mauris mi. Fusce tortor
                        mauris, tristique eget tempus sed, sodales eu tellus. Donec molestie lorem lorem, sed ultricies
                        augue commodo ut. Praesent non fringilla nunc. In hac habitasse platea dictumst. Donec pulvinar
                        tincidunt arcu at scelerisque. Quisque at sem eleifend, bibendum tellus a, convallis ex. Sed et
                        scelerisque justo. Aenean a luctus arcu. Maecenas sit amet nisi ut augue vulputate mattis sit
                        amet sit amet enim. Ut accumsan odio quis massa bibendum faucibus. Vestibulum varius odio
                        ultrices, aliquet lacus ut, tincidunt justo. Etiam vel porttitor ante. Cras rutrum erat id
                        commodo varius. Sed non orci tincidunt, sodales magna a, laoreet felis. Fusce non tempus enim.
                        Donec pulvinar turpis felis, sit amet gravida tortor dictum in.
                    </Text>
                </Section>
                <Container style={{ display: "flex", gap: "10px" }}>
                    <Button label="Primary" color="primary" />
                    <Button label="Secondary" color="secondary" />
                    <Button label="Tertiary" color="tertiary" />
                    <Button label="Success" color="success" />
                    <Button label="Warning" color="warning" />
                    <Button label="Error" color="error" />
                    <Button label="Info" color="info" />
                </Container>
            </Container>
        </Section>
    );
};

export default Home;
