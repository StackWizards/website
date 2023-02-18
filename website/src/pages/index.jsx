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
          content="StackWizards is a software engineering consultancy with a mission - to help you deliver your great ideas."
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
