import Head from 'next/head'

import heroImg from './hero.png'
import processAutomationImg from './process-automation.png'
import scalingImg from './scaling.png'
import dev from './dev.png'
import {Footer} from "@/components/Footer";
import Hero from "@/components/landing/Hero";
import HowWeCanHelp from "@/components/landing/HowWeCanHelp";
import Testimonial from "@/components/landing/Testimonial";
import Contact from "@/components/Contact";

const howWeCanHelp = [
    {
        title: "Process Automation",
        description: "We can help you automate your processes so you have more time to focus on strategy and growth.",
        image: processAutomationImg,
    },
    {
        title: "Scaling Challenges",
        description: "Running your business off 20+ spreadsheets? Find out how we can help improve your processes and save you time.",
        image: scalingImg,
    },
    {
        title: "Software Development",
        description: "We can help you build software that will delight your customers, empower your team and help you scale.",
        image: dev,
    },
]


export default function Home() {
    return (
        <>
            <Head>
                <title>StackWizards - Your good ideas in safe hands</title>
                <meta
                    name="description"
                    content="Drowning in spreadsheets? Let StackWizard help you with your data, processes and solving your scaling challenges with technology."
                />
            </Head>
            <main className='transition-all'>
                <Hero heroImg={heroImg}/>
                <HowWeCanHelp howWeCanHelp={howWeCanHelp} />
                <Testimonial
                    Testimonial="“Qui dolor enim consectetur do et non ex amet culpa sint in ea non dolore. Enim minim magna anim id minim eu
                        cillum sunt dolore aliquip. Amet elit laborum culpa irure incididunt adipisicing culpa amet officia
                        exercitation. Eu non aute velit id velit Lorem elit anim pariatur.”"
                    Name="John Doe"
                    JobTitle="CEO, Company Name"
                    PersonImage={heroImg}
                />

                <Contact />
            </main>
            <Footer />
        </>
    )
}
