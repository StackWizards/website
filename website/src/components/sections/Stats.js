// const metrics = [
//     { id: 1, stat: 'Platform & Infrastructure Engineering', emphasis: 'Scale up', rest: 'and build a robust platform for your technology service or product.' },
//     { id: 2, stat: 'Mobile App Development', emphasis: 'From concept to code,', rest: 'turn your idea into a tangible product with us, ready to take to market.' },
//     { id: 3, stat: 'DevOps Audit', emphasis: 'Hitting a wall with delivering your roadmap?', rest: "our FREE DevOps audit report will help you rise above your challenges." },
//     { id: 4, stat: 'Bespoke Software Development', emphasis: "Don't quite fit the mould?", rest: "tell us more and we'll provide a tailored quote." },
// ]

export default function Stats() {
    return (
        <>
            <div className="relative bg-gray-900">


                <div id="services" className="mx-auto px-4 md:pt-24 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-flow-col-dense xl:grid-cols-2 xl:gap-x-8">
                    <div className="relative mt-20 pt-12  sm:pt-24 xl:col-start-1 ">
                        <div className="inline-flex items-center">
                            <img
                                className="h-10 md:h-16 md:w-16 mx-2"
                                src="/images/push.svg"
                                alt=""
                            />
                            <p className="mt-3 ml-5 text-xl md:text-2xl font-title text-white tracking-tight ">
                                Skilled technologists who get behind you and push you forward.
                            </p>
                        </div>
                        <p className="ml-12 mt-5 md:text-lg text-gray-300">
                            Whether you're a startup just trying to get off the ground, or an established large-scale enterprise trying to go faster - we endeavour to act like an extension of you, a true partner.
                        </p>
                        <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
                            {[].map((item) => (
                                <p key={item.id}>

                                    <span className="block text-2xl font-bold text-white">{item.stat}</span>
                                    <span className="mt-1 block text-base text-gray-300">
                                        <span className="font-medium text-white">{item.emphasis}</span> {item.rest}
                                    </span>
                                </p>
                            ))}
                        </div>
                    </div>
                    <div className="relative xl:col-start-1">
                        <div className="inline-flex items-center">
                            <img
                                className="h-10 md:h-16 md:w-16 mx-2"
                                src="/images/bolt.svg"
                                alt=""
                            />

                            <p className="mt-3 ml-5 text-xl md:text-2xl font-title text-white tracking-tight ">
                                There for you when lightning strikes.
                            </p>
                        </div>
                        <p className="ml-12 mt-2 md:text-lg text-gray-300">
                            We'll deliver an MVP to help validate your concept and take it to market.
                        </p>
                        <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
                            {[].map((item) => (
                                <p key={item.id}>

                                    <span className="block text-2xl font-bold text-white">{item.stat}</span>
                                    <span className="mt-1 block text-base text-gray-300">
                                        <span className="font-medium text-white">{item.emphasis}</span> {item.rest}
                                    </span>
                                </p>
                            ))}
                        </div>
                    </div>

                    <div className="relative xl:col-start-1">
                        <div className="inline-flex items-center">
                            <img
                                className="h-10 md:h-16 md:w-16 mx-2"
                                src="/images/magic.svg"
                                alt=""
                            />
                            <p className="mt-3 ml-5 text-xl md:text-2xl font-title tracking-tight text-white">
                                Let us work our magic on your next project.
                            </p>
                        </div>
                        <p className="mt-2 ml-12 md:text-lg text-gray-300">
                            Whatever you're trying to achieve, we'd love to chat and hear all about it.
                        </p>
                        <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
                            {[].map((item) => (
                                <p key={item.id}>

                                    <span className="block text-2xl font-bold text-white">{item.stat}</span>
                                    <span className="mt-1 block text-base text-gray-300">
                                        <span className="font-medium text-white">{item.emphasis}</span> {item.rest}
                                    </span>
                                </p>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
            <div class="w-full h-48 hidden md:block" alt="" style={{
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
