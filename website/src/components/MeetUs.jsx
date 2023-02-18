
import { SocialIcon } from 'react-social-icons';
import { Section } from '../animation/Section';
import alistair from '@/images/avatars/alistair.png'
import andy from '@/images/avatars/andy.jpeg'

import Image from 'next/image'
const people = [
    {
        name: 'Alistair Hey',
        role: 'Co-Founder',
        email: "alistair.hey@stackwizards.com",
        twitter: "https://twitter.com/alistair_hey",
        linkedIn: "https://www.linkedin.com/in/alistair-hey/",
        github: "https://github.com/Waterdrips",
        blog: "https://blog.heyal.co.uk/",
        imageUrl:
            alistair,
    },
    {
        name: 'Andy Macdonald',
        role: 'Co-Founder',
        email: "andy.macdonald@stackwizards.com",
        twitter: "https://twitter.com/AndyMacDroo",
        linkedIn: "https://www.linkedin.com/in/andy-j-macdonald/",
        github: "https://github.com/AndyMacDroo",
        medium: "https://medium.com/@AndyMacDroo",
        imageUrl:
            andy,
    },

]

export function MeetUs() {
    return (
        <div id="who" className="bg-teal-100 font-display">
            <Section>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:py-24">
                    <div className="space-y-12 mx-5">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-3xl font-title">Who Are We?</h2>
                        <div className="text-lg">

                            <p className="tracking-tight">A team of <b className="font-medium text-teal-600">expert software engineers 🔧</b> who are obsessed with:
                                <li className="mt-5 md:mt-2">delivering high-quality software with speed</li>
                                <li>building amazing things with technology</li></p>

                        </div>
                        <div
                            className="flex w-full flex-col md:flex-row justify-center gap-y-10 gap-x-48 items-center"
                        >
                            {people.map((person) => (
                                <div className='flex items-center justify-center' key={person.name}>
                                    <div className="space-y-4 flex flex-col items-center justify-center">
                                        <Section>
                                            <div className='h-48 w-48 my-5'>
                                                <Image className='transition-all rounded-full border-4 border-slate-900 grayscale' src={person.imageUrl} alt={"Avatar"} unoptimized />
                                            </div>
                                        </Section>
                                        <div className="sm:col-span-2">
                                            <div className="space-y-4">
                                                <div className="space-y-1 font-medium leading-6">
                                                    <h2 className="font-medium text-xl tracking-tight font-title">{person.name}</h2>
                                                    <p className="text-teal-600 tracking-tighter">{person.role}</p>
                                                    <a href={`mailto:${person.email}`}><p className="text-primaryBg tracking-tighter mt-2 mr-10">{person.email}</p></a>
                                                </div>
                                                <div className="flex">
                                                    <SocialIcon bgColor='black' className='transition-all mr-2 hover:scale-90' style={{ width: 30, height: 30 }} url={person.twitter} />
                                                    <SocialIcon bgColor='black' className='transition-all mr-2 hover:scale-90' style={{ width: 30, height: 30 }} url={person.linkedIn} />
                                                    <SocialIcon bgColor='black' className='transition-all mr-2 hover:scale-90' style={{ width: 30, height: 30 }} url={person.github} />
                                                   {person.medium ? <SocialIcon bgColor='black' className='transition-all mr-2 hover:scale-90' style={{ width: 30, height: 30 }} url={person.medium} /> : null }
                                                   {person.blog ? <SocialIcon bgColor='black' className='transition-all mr-2 hover:scale-90' style={{ width: 30, height: 30 }} url={person.blog} /> : null }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </Section>
        </div>
    )
}
