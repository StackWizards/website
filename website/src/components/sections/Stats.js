const metrics = [
    { id: 1, stat: 'Platform & Infrastructure Engineering', emphasis: 'Scale up', rest: 'and build a robust platform for your technology service or product.' },
    { id: 2, stat: 'Mobile App Development', emphasis: 'From concept to code,', rest: 'turn your idea into a tangible product with us, ready to take to market.' },
    { id: 3, stat: 'DevOps Audit', emphasis: 'Hitting a wall with delivering your roadmap?', rest: "our FREE DevOps audit report will help you rise above your challenges." },
    { id: 4, stat: 'Bespoke Software Development', emphasis: "Don't quite fit the mould?", rest: "tell us more and we'll provide a tailored quote." },
]

export default function Stats() {
    return (
        <div className="relative bg-gray-900">
            <div className="absolute bottom-0 h-80 w-full xl:inset-0 xl:h-full">
                <div className="h-full w-full xl:grid xl:grid-cols-2">
                    <div className="h-full xl:relative xl:col-start-2">
                        <img
                            className="h-full w-full grayscale object-cover opacity-25 xl:absolute xl:inset-0"
                            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                            alt="People working on laptops"
                        />
                        <div
                            aria-hidden="true"
                            className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
                        />
                    </div>
                </div>
            </div>
            <div id="services" className="mx-auto max-w-4xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-flow-col-dense xl:grid-cols-2 xl:gap-x-8">
                <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
                    <h2 className="text-base font-semibold text-indigo-300">Our Services</h2>
                    <p className="mt-3 text-3xl font-bold tracking-tight text-white">
                        A range of software services across multiple platforms - web 🌐, mobile 📱 and cloud ☁️.
                    </p>
                    <p className="mt-5 text-lg text-gray-300">
                        Whether you're a startup just trying to get off the ground, or an established large-scale enterprise trying to go faster - we endeavour to act like an extension of you, a true partner.
                    </p>
                    <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
                        {metrics.map((item) => (
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
    )
}
