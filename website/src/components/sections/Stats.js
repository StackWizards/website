import { Section } from "../animation/Section"

const sections = [
    {
        header: "There for you when lightning strikes.",
        icon: "/images/bolt.svg",
        text: "Let us deliver an MVP to help validate your concept and take the world by storm."
    },

    {
        header: "Automation. Automation. Automation",
        icon: "/images/robot.svg",
        text: "Life is short, let us help automate the boring stuff so you can focus on what makes your business special."
    },
    {
        header: "Skilled technologists who get behind you and push you forward.",
        icon: "/images/push.svg",
        text: "15 years+ of software project experience and a network of the best software and platform engineers in the UK."
    },
    {
        header: "Let us work our magic on your next project.",
        icon: "/images/magic.svg",
        text: "Whatever you're trying to achieve, we'd love to chat and hear all about it."
    },

]

export default function Stats() {
    return (
        <>
            <div className="relative bg-gray-900">

                <div id="services" className="mx-auto pt-2 sm:pt-48 pb-12 px-4 lg:max-w-7xl lg:px-8 grid grid-cols-1 md:grid-cols-2">
                    {sections.map(({ header, icon, text }) =>


                        <div key={header} className="relative mt-10">
                            <Section>
                                <div className="inline-flex items-center">
                                    <img
                                        className="h-10 md:h-12 md:w-12 mx-2"
                                        src={icon}
                                        alt=""
                                    />
                                    <h3 className="mt-3 ml-5 text-lg md:text-2xl font-title text-white tracking-tight ">
                                        {header}
                                    </h3>
                                </div>
                                <Section>
                                    <p className="ml-12 mt-5 md:text-lg tracking-tight text-gray-300">
                                        {text}
                                    </p>
                                </Section>
                            </Section>
                        </div>
                    )}

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
