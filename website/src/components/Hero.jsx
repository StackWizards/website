import { Section } from '@/animation/Section';
import { Container } from '@/components/Container';


export function Hero() {

  return (
    <Container className="py-16 pb-5 xl:pb-16 transition-all relative text-center">
      <Section>
        <h1 className="mx-12 lg:mx-24 lg:mx-auto transition-all mt-24 sm:mt-32 lg:mt-48 xl:mt-0 max-w-4xl font-display relative text-4xl font-medium tracking-tighter text-slate-900 sm:text-5xl">
          <i className='not-italic font-light'>Hi, we are</i> the StackWizards 👋,
        </h1>

        <p className="mx-16 lg:mx-auto my-2 font-display max-w-2xl text-lg tracking-tight text-slate-700">
          We help companies large and small succeed with technology.
        </p>
      </Section>
    </Container>
  )
}
