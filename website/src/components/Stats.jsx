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
            <div className="relative py-10">

                <div className="px-4 lg:max-w-7xl lg:px-10  mx-auto">
                    <div className="mx-auto grid grid-cols-1 md:grid-cols-2 mx-5 md:mx-0 gap-y-10 gap-x-24">
                        {sections.map(({ header, icon, text }) =>


                            <div key={header} className="relative">
                                <Section>
                                    <div className="inline-flex gap-y-3 flex-col items-start">
                                        <Image className='h-10 md:h-12 md:w-12 mx-2 grayscale' src={icon} alt={"Icon"} unoptimized />
                                        <h3 className="w-full text-xl text-left md:text-xl font-display font-medium tracking-tight">
                                            {header}
                                        </h3>
                                        <Section>
                                            <p className="text-lg md:text-lg font-display tracking-tighter text-slate-900">
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


        </>
    )
}
