/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const people = [
    {
        name: 'Alistair Hey',
        role: 'Co-Founder',
        imageUrl:
            'https://media-exp1.licdn.com/dms/image/C4E03AQHNlR25wxGVkQ/profile-displayphoto-shrink_800_800/0/1651934981132?e=1668643200&v=beta&t=tMAEYU1wvCv1llYZOqPcpTLQzU6QFgl0w6JWCJHrtgk',
        bio: '',
    },
    {
        name: 'Andy Macdonald',
        role: 'Co-Founder',
        imageUrl:
            'https://media-exp1.licdn.com/dms/image/C5603AQFNqy8ePdcVsg/profile-displayphoto-shrink_800_800/0/1573405670049?e=1668643200&v=beta&t=hv0-WtRz3x3iVxCIj3pQAkXvQiwONxE4QFjG3MEUkPY',
        bio: '',
    },

]

export default function MeetUs() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
                <div className="space-y-12">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-3xl">Who Are We?</h2>

                    <ul
                        role="list"
                        className="space-y-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0"
                    >
                        {people.map((person) => (
                            <li key={person.name}>
                                <div className="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8">
                                    <div className="aspect-w-3 aspect-h-2 h-0 sm:aspect-w-3 sm:aspect-h-4">
                                        <img className="transition-all rounded-lg hover:scale-90 object-cover shadow-lg" src={person.imageUrl} alt="" />
                                    </div>
                                    <div className="sm:col-span-2 ml-4">
                                        <div className="space-y-4">
                                            <div className="space-y-1 font-medium leading-6">
                                                <h2 className="font-bold text-xl tracking-tight">{person.name}</h2>
                                                <p className="text-indigo-600">{person.role}</p>
                                            </div>
                                            <div className="text-lg">
                                                <p className="text-gray-500">{person.bio}</p>
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
