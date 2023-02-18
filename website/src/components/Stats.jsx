import { Section } from "../animation/Section"
import bolt from '@/images/icons/bolt.svg'
import robot from '@/images/icons/robot.svg'
import push from '@/images/icons/push.svg'
import magic from '@/images/icons/magic.svg'
import Image from 'next/image'

const sections = [
    {
        header: "There for you when lightning strikes.",
        icon: bolt,
        text: "Let us deliver an MVP to help validate your concept and take the world by storm."
    },

    {
        header: "Automation. Automation. Automation",
        icon: robot,
        text: "Life is short, let us help automate the boring stuff so you can focus on what makes your business special."
    },
    {
        header: "Skilled technologists who get behind you and push you forward.",
        icon: push,
        text: "15 years+ of software project experience and access to networks of the best software and platform engineers in the UK."
    },
    {
        header: "Let us work our magic on your next project.",
        icon: magic,
        text: "Whatever you're trying to achieve, we'd love to chat and hear all about it."
    },

]

export default function Stats() {
    return (
        <>
            <div  id="what" className="py-24 relative bg-teal-100 font-display">
           
                <div className="px-4 lg:max-w-7xl lg:px-8  mx-auto">
                    <h2 className="text-center md:text-left text-3xl font-bold tracking-tight sm:text-3xl font-title">What Can We Do?</h2>
                    <div className="mx-auto py-10 grid grid-cols-1 md:grid-cols-2 mx-5 md:mx-0 gap-x-24">
                        {sections.map(({ header, icon, text }) =>


                            <div key={header} className="relative mt-10">
                                <Section>
                                    <div className="inline-flex flex-col items-center">
                                        <Image className='h-10 md:h-12 md:w-12 mx-2 grayscale' src={icon} alt={"Icon"} unoptimized />
                                        <h3 className="mt-3 text-xl md:text-2xl font-title text-teal-600 tracking-tight">
                                            {header}
                                        </h3>
                                        <Section>
                                            <p className="mt-5 text-lg md:text-lg tracking-tight text-slate-900">
                                                {text}
                                            </p>
                                        </Section>
                                    </div>

                                </Section>
                            </div>
                        )}
                    </div>

                </div>

            </div>
            <div className="w-full h-48 hidden md:block" alt="" style={{
                background: "url(/images/vector2.svg) center bottom",
                position: "absolute",
                zIndex: 9999999,
                border: 0,
                width: "100%",
                backgroundSize: "150%"
            }}></div>

        </>
    )
}
