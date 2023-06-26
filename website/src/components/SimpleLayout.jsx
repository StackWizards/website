import { Container } from '@/components/Container'

export function SimpleLayout({ title, children }) {
    return (
        <Container>
            <header>
                <h1 className="font-display px-10 text-center transition-all w-full pt-24 lg:pt-0 text-3xl lg:text-5xl tracking-tight text-black sm:text-5xl">
                    {title}
                </h1>
            </header>
            <div className="mt-16 mx-8 transition-all sm:mt-60 text-black">{children}</div>
        </Container>
    )
}