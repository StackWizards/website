import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { MeetUs } from '@/components/MeetUs'
import Stats from '@/components/Stats'

export default function Home() {
  return (
    <>
      <Head>
        <title>StackWizards - Your good ideas in safe hands</title>
        <meta
          name="description"
          content="Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited."
        />
      </Head>
      <Header />
      <main className='bg-teal-100'>
        <Hero />
        
        <MeetUs />
        <Stats />

      </main>
      <Footer />
    </>
  )
}
