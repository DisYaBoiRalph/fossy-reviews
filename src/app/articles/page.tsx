import { boomerang } from "@/common/constants";
import Card from "@/components/card";
import Container from "@/components/container";
import Grid from "@/components/grid";
import Heading from "@/components/heading";
import Section from "@/components/section";
import Text from "@/components/text";
import Link from "next/link";
import { getArticleSummaries } from "./articles.util";

export const metadata = {
    title: "Articles",
};

const Articles = () => {
    const articleSummaries = getArticleSummaries();

    return (
        <Section>
            <Container>
                <Heading className={`${boomerang.className}`} tag="h1" fontClass="display1">
                    Articles
                </Heading>
                <Section padding="sm">
                    {articleSummaries.length === 0 ? (
                        <Text tag="p">No articles published yet.</Text>
                    ) : (
                        <Grid columns={2} autoResponsive gap="md">
                            {articleSummaries.map((article) => (
                                <Link
                                    key={article.slug}
                                    href={`/articles/${article.slug}`}
                                    aria-label={article.title}
                                    className="block"
                                >
                                    <Card isClickable className="p-md">
                                        <Text tag="p" fontClass="heading-bold">
                                            {article.title}
                                        </Text>
                                        <Text tag="p" fontClass="body" className="mt-2xs">
                                            Published: {article.publishedAt}
                                        </Text>
                                    </Card>
                                </Link>
                            ))}
                        </Grid>
                    )}
                </Section>
            </Container>
        </Section>
    );
};

export default Articles;
