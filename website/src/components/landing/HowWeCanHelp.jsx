import Image from 'next/image';

export default function HowWeCanHelp ({howWeCanHelp}) {
    return (
        <div className="bg-white py-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">How can we help?</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Unlock Your Company&#39;s Potential: Our Strategic Solutions for Streamlining Processes and Accelerating Growth
                    </p>
                </div>
                <div
                    className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {howWeCanHelp.map((item) => (
                        <article
                            key={item.title}
                            className="relative isolate flex flex-col justify-between overflow-hidden bg-gray-900 px-8 pb-8 lg:h-96 h-64"
                        >
                            <Image
                                src={item.image || "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80"}
                                alt=""
                                className="absolute inset-0 -z-10 h-full w-full object-cover"
                                fill={true}
                            />

                            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-800 via-gray-800/20"/>
                            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-800 via-gray-800/20"/>
                            <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                                <p>
                                    <span className="absolute inset-0"/>
                                    {item.title}
                                </p>
                            </h3>
                            <h3 className="mt-3 text-sm leading-6 text-white">
                                <p>
                                    <span className="absolute inset-0"/>
                                    {item.description}
                                </p>
                            </h3>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}
