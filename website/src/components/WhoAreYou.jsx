import { Section } from '@/animation/Section';
import { Container } from '@/components/Container';


export function WhoAreYou() {

  return (
    <Container className="py-5 relative text-center">
      <Section>
        <h2 className="mx-auto max-w-4xl font-display relative text-2xl tracking-tighter text-slate-900 sm:text-3xl">
          ...more importantly
        </h2>
        <h2 className="mx-auto max-w-4xl font-display relative text-4xl font-medium tracking-tighter text-slate-900 sm:text-5xl">
          Who are you?
        </h2>
      </Section>
    </Container>
  )
}
