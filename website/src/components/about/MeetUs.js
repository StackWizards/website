
import { SocialIcon } from 'react-social-icons';
const people = [
    {
        name: 'Alistair Hey',
        role: 'Co-Founder',
        favouriteMovie: "Arctic Monkeys, Rolling Stones & AC/DC",
        favouriteQuote: "You do not rise to the level of your goals, you fall to the level of your systems.",
        twitter: "https://twitter.com/alistair_hey",
        linkedIn: "https://www.linkedin.com/in/alistair-hey/",
        imageUrl:
            '/images/alistair.png',
    },
    {
        name: 'Andy Macdonald',
        role: 'Co-Founder',
        favouriteMovie: "Back to the Future",
        favouriteQuote: "It is better to fail in originality than to succeed in imitation.",
        twitter: "https://twitter.com/AndyMacDroo",
        linkedIn: "https://www.linkedin.com/in/andy-j-macdonald/",
        imageUrl:
            '/images/andy.jpeg',
    },

]

export default function MeetUs() {
    return (
        <div className="bg-white sm:pt-32">

            <div id="whoarewe" className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
                <div className="space-y-12">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-3xl font-title">Who Are We?</h2>
                    <div className="text-lg">
                        <p className="text-gray-700 tracking-tight">A team of <b className="font-semibold">expert software engineers 🔧</b> who are obsessed with:
                            <li className="mt-5 md:mt-2">delivering high-quality software with speed 🏎️</li>
                            <li>building amazing things with technology 💥</li></p>
                    </div>
                    <ul
                        className="space-y-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0"
                    >
                        {people.map((person) => (
                            <li key={person.name}>
                                <div className="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8 ">
                                    <div className="aspect-w-3 aspect-h-2 h-0 sm:aspect-w-3 sm:aspect-h-4">
                                        <img className="transition-all rounded-lg hover:scale-90 object-cover shadow-lg grayscale" src={person.imageUrl} alt="" />
                                    </div>
                                    <div className="sm:col-span-2 ml-4">
                                        <div className="space-y-4">
                                            <div className="space-y-1 font-medium leading-6">
                                                <h2 className="font-bold text-xl tracking-tight font-title">{person.name}</h2>
                                                <p className="text-gray-600 tracking-tighter">{person.role}</p>
                                            </div>
                                            <div className="flex">
                                                <SocialIcon className='mr-2' style={{ width: 40, height: 40 }} url={person.twitter} />
                                                <SocialIcon style={{ width: 40, height: 40 }} url={person.linkedIn} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>

                </div>
            </div>
        </div>
    )
}
