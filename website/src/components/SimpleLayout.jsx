import { Container } from '@/components/Container'

export function SimpleLayout({ title, children }) {
    return (
        <Container>
            <header className="max-w-2xl">
                <h1 className="font-display text-4xl font-bold tracking-tight text-black sm:text-5xl">
                    {title}
                </h1>

            </header>
            <div className="mt-16 sm:mt-48 text-black">{children}</div>
        </Container>
    )
}