import { Popover } from '@headlessui/react'
import {
    Bars3Icon
} from '@heroicons/react/24/outline'
import React from 'react'
import { Section } from '../animation/Section'


const navigation = [
    {
        name: "Services",
        link: "#services"
    },
    {
        name: "Who Are We",
        link: "#whoarewe"
    }
]

export default function Header() {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

    return (
        <Popover className="w-full">
            <div id='home' className="mx-auto max-w-7xl px-4 sm:px-6">
                <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <a className='flex flex-row items-center' href="#home">

                            <img
                                className="h-8 w-auto sm:h-10"
                                src="/images/logo_small.png"
                                alt=""
                            />
                            <div className='flex flex-col justify-evenly'>
                                <span className='ml-2 font-semibold tracking-tight text-white text-lg'>StackWizards</span>
                                <span className='ml-2 -mt-2 tracking-tight text-lg lowercase font-title text-primaryText'>Technology Ltd</span>

                            </div>
                        </a>
                    </div>
                    <div className="-my-2 -mr-2 md:hidden">
                        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Open menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>

                    <div style={{ zIndex: 99999 }} className={`md:hidden transition-all ${isMobileMenuOpen ? "" : "-translate-y-96 opacity-0"} flex w-full flex-col items-center py-12 border-b-4 text-center absolute top-20 bg-primaryBg left-0`}>
                        {
                            navigation.map(nav => (<a href={nav.link} key={nav.name} className="text-2xl font-medium text-white my-2 uppercase font-title hover:text-gray-200">
                                {nav.name}
                            </a>))
                        }
                    </div>

                    <>
                        {
                            navigation.map(nav => (<a href={nav.link}  key={nav.name} className="text-md font-title hidden md:block uppercase text-white hover:text-gray-200">
                                {nav.name}
                            </a>))
                        }
                    </>
                    <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
                        <Section>
                            <a
                                href="#contact"
                                className="ml-8 inline-flex items-center justify-center whitespace-nowrap font-bold rounded-md border border-transparent bg-primaryText px-4 py-2 text-base font-bold text-white shadow-sm hover:bg-indigo-400 font-title tracking-tight uppercase"
                            >
                                Get in Touch
                            </a>
                        </Section>
                    </div>
                </div>
            </div>

        </Popover>
    )
}
