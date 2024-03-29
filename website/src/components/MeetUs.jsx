import alistair from '@/images/avatars/alistair.png';
import andy from '@/images/avatars/andy.jpeg';
import mike from '@/images/avatars/mike.png';
import person from '@/images/avatars/person.png';
import Image from 'next/image';
import { SocialIcon } from 'react-social-icons';
import { Section } from '../animation/Section';
import { Container } from './Container';
import ImageGallery from './ImageGallery';

const people = [
    {
        name: 'Alistair Hey',
        role: 'Co-Founder',
        email: 'alistair.hey@stackwizards.com',
        twitter: 'https://twitter.com/alistair_hey',
        linkedIn: 'https://www.linkedin.com/in/alistair-hey/',
        github: 'https://github.com/Waterdrips',
        blog: 'https://blog.heyal.co.uk/',
        imageUrl: alistair,
    },
    {
        name: 'Andy Macdonald',
        role: 'Co-Founder',
        email: 'andy.macdonald@stackwizards.com',
        twitter: 'https://twitter.com/AndyMacDroo',
        linkedIn: 'https://www.linkedin.com/in/andy-j-macdonald/',
        github: 'https://github.com/AndyMacDroo',
        medium: 'https://medium.com/@AndyMacDroo',
        imageUrl: andy,
    },
    {
        name: 'Mike Rushton',
        role: 'Software Engineer',
        github: 'https://github.com/michaelrushton-dev',
        imageUrl: mike,
    },
    {
        name: 'Luke Robinson',
        role: 'Senior Software Engineer',
        github: 'https://github.com/Datedsandwich',
        imageUrl: person,
    }
];

export function MeetUs() {
    return (
        <Container>
            <div className="font-display my-10 mb-80 lg:mb-0">
                <Section>
                    <div className="mx-4">
                        <div className='space-y-4 tracking-tighter '>
                            <h2 className="text-3xl text-left font-bold tracking-tight sm:text-3xl font-title">
                                Who Are We?
                            </h2>
                            <p className='text-lg'>A team of expert software engineers 🔧 who are obsessed with:</p>
                            <ul className='text-lg' style={{ marginTop: 10 }}>
                                <li>delivering high-quality software with speed</li>
                                <li>building amazing things with technology</li>
                            </ul>
                            <div className='h-2' />
                            <ImageGallery
                                images={[
                                    { src: "/images/gallery/conf.jpeg" },
                                    { src: "/images/gallery/team.jpeg" },
                                    { src: "/images/gallery/spinks.png" },
                                    { src: "/images/gallery/jw.png" },
                                    { src: "/images/gallery/north.png" },
                                    { src: "/images/gallery/open.png" },

                                ]
                                } />
                            <div className='h-2' />
                            <div className="grid grid-cols-1 lg:grid-cols-4 gap-y-10 gap-x-8 md:gap-x-16">
                                {people.map((person) => (
                                    <div key={person.name} className="flex items-center justify-center">
                                        <div className="space-y-4 flex flex-col items-center justify-center">
                                            <div className="transition-all h-80 w-80 lg:h-48 lg:w-48 my-2">
                                                <Image
                                                    className="transition-all h-80 w-80 lg:h-48 lg:w-48 rounded-lg border-2 border-slate-900 grayscale hover:grayscale-0"
                                                    src={person.imageUrl}
                                                    alt="Avatar"
                                                    unoptimized
                                                />
                                            </div>
                                            <div className="lg:w-48 sm:col-span-2">
                                                <div className="space-y-4">
                                                    <div className="space-y-1 text-left font-medium leading-6">
                                                        <h2 className="font-medium text-xl tracking-tight font-title">
                                                            {person.name}
                                                        </h2>
                                                        <p className="text-teal-600 tracking-tighter">{person.role}</p>
                                                        <a href={`mailto:${person.email}`}>
                                                            <p className="text-primaryBg tracking-tighter mt-2 mr-10">
                                                                {person.email}
                                                            </p>
                                                        </a>
                                                    </div>
                                                    <div className="flex">
                                                        {person.twitter && (
                                                        <SocialIcon
                                                            bgColor="black"
                                                            className="transition-all mr-2 hover:scale-90"
                                                            style={{ width: 30, height: 30 }}
                                                            target='_blank'
                                                            url={person.twitter}
                                                        />
                                                        )}
                                                        {person.linkedIn && (
                                                        <SocialIcon
                                                            bgColor="black"
                                                            className="transition-all mr-2 hover:scale-90"
                                                            style={{ width: 30, height: 30 }}
                                                            target='_blank'
                                                            url={person.linkedIn}
                                                        />
                                                            )}
                                                        {person.github && (
                                                        <SocialIcon
                                                            bgColor="black"
                                                            className="transition-all mr-2 hover:scale-90"
                                                            style={{ width: 30, height: 30 }}
                                                            target='_blank'
                                                            url={person.github}
                                                        />
                                                        )}
                                                        {person.medium && (
                                                            <SocialIcon
                                                                bgColor="black"
                                                                className="transition-all mr-2 hover:scale-90"
                                                                style={{ width: 30, height: 30 }}
                                                                target='_blank'
                                                                url={person.medium}
                                                            />
                                                        )}
                                                        {person.blog && (
                                                            <SocialIcon
                                                                bgColor="black"
                                                                className="transition-all mr-2 hover:scale-90"
                                                                style={{ width: 30, height: 30 }}
                                                                target='_blank'
                                                                url={person.blog}
                                                            />
                                                        )}
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
        </Container>
    );
}
