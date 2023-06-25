import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { MeetUs } from '@/components/MeetUs'
import Stats from '@/components/Stats'
import { AbstractWavyBackground } from '@/components/Svg/WavyBackground'
import { WhoAreYou } from '@/components/WhoAreYou'
import { WhoChoice } from '@/components/WhoChoice'
import { Services } from '@/components/Services'
import { WhatDoWeDo } from '@/components/WhatDoWeDo'

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
      <main className='transition-all'>
        <Hero />

        <div className='transition-all h-0 lg:h-32' id="you" />
        <WhoAreYou />
        <div className='h-2'   />
        <WhoChoice />
        <div className='h-12' id="what" />
        <WhatDoWeDo />
        <Services />
        <Stats />
        <div  id="who"  />
        <MeetUs />
        <div className='relative'>
          <AbstractWavyBackground upsideDown className='bottom-12' />
        </div>
      </main>

      <div className='relative'>
        <AbstractWavyBackground upsideDown className='bottom-72' tailwindColour='bg-slate-50 h-64' colour='#f8fafc' />
        <Footer />
      </div>
    </>
  )
}
