import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllArticles } from '@/lib/getAllArticles'
import { formatDate } from '@/lib/formatDate'
import {Header} from "@/components/Header";

function Article({ article }) {
    return (
        <article className="md:grid md:grid-cols-4 md:items-baseline">
            <Card className="md:col-span-3">
                <Card.Title href={`/blog/${article.slug}`}>
                    {article.title}
                </Card.Title>
                <Card.Eyebrow
                    as="time"
                    dateTime={article.date}
                    className="md:hidden"
                    decorate
                >
                    {formatDate(article.date)}
                </Card.Eyebrow>
                <Card.Description>{article.description}</Card.Description>
                <Card.Cta>Read article</Card.Cta>
            </Card>
            <Card.Eyebrow
                as="time"
                dateTime={article.date}
                className="mt-1 hidden md:block"
            >
                {formatDate(article.date)}
            </Card.Eyebrow>
        </article>
    )
}

export default function ArticlesIndex({ articles }) {
    return (
        <>
            <Head>
                <title>Blog - StackWizards</title>
                <meta
                    name="description"
                    content="News, updates and thoughts from StackWizards."
                />
            </Head>
            <Header />
            <main>
            <SimpleLayout
                title="Latest news, updates, thoughts and more"
            >
                <div className="md:border-l md:border-black md:pl-6">
                    <div className="flex max-w-3xl flex-col space-y-16">
                        {articles.map((article) => (
                            <Article key={article.slug} article={article} />
                        ))}
                    </div>
                </div>
            </SimpleLayout>
            </main>
        </>
    )
}

export async function getStaticProps() {
    return {
        props: {
            articles: (await getAllArticles()).map(({ component, ...meta }) => meta),
        },
    }
}