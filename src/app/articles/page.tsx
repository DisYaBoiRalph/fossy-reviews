import { boomerang } from "@/common/constants";
import Card from "@/components/card";
import Container from "@/components/container";
import Grid from "@/components/grid";
import Heading from "@/components/heading";
import Section from "@/components/section";
import Text from "@/components/text";
import Link from "next/link";
import { articleSummaries } from "./articles.data";

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
                    <Grid columns={2} autoResponsive gap="md">
                        {articleSummaries.map((article) => (
                            <Link
                                key={article.slug}
                                href={`/articles/${article.slug}`}
                                aria-label={article.title}
                                className="block"
                            >
                                <Card isClickable className="p-md">
                                    <Text tag="p" fontClass="headline3-bold">
                                        {article.title}
                                    </Text>
                                    <Text tag="p" fontClass="body" className="mt-2xs">
                                        Published: {article.publishedAt}
                                    </Text>
                                </Card>
                            </Link>
                        ))}
                    </Grid>
                </Section>
            </Container>
        </Section>
    );
};

export default Articles;
