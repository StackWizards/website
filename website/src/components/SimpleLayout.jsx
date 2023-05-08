import { Container } from '@/components/Container'

export function SimpleLayout({ title, intro, children }) {
    return (
        <Container>
            <header className="max-w-2xl">
                <h1 className="text-4xl font-bold tracking-tight text-black sm:text-5xl">
                    {title}
                </h1>
                <p className="mt-6 text-base text-black">
                    {intro}
                </p>
            </header>
            <div className="mt-16 sm:mt-20 text-black">{children}</div>
        </Container>
    )
}