import { Popover } from '@headlessui/react'
import {
    Bars3Icon
} from '@heroicons/react/24/outline'
import React from 'react'


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
        <Popover className="w-full bg-white">
            <div id='home' className="mx-auto max-w-7xl px-4 sm:px-6">
                <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <a href="#home">
                            <span className="sr-only">StackWizards</span>
                            <img
                                className="h-8 w-auto sm:h-10"
                                src="/images/logo_with_text.png"
                                alt=""
                            />
                        </a>
                    </div>
                    <div className="-my-2 -mr-2 md:hidden">
                        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Open menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>

                    <div style={{ zIndex: 99999 }} className={`md:hidden transition-all ${isMobileMenuOpen ? "" : "-translate-y-96 opacity-0"} flex w-full flex-col items-center py-12 border-b-4 text-center absolute top-20 bg-white left-0`}>
                        {
                            navigation.map(nav => (<a href={nav.link} className="text-3xl font-medium text-gray-500 my-2 hover:text-gray-900">
                                {nav.name}
                            </a>))
                        }
                    </div>

                    <>
                        {
                            navigation.map(nav => (<a href={nav.link} className="text-lg hidden md:block font-medium text-gray-500 hover:text-gray-900">
                                {nav.name}
                            </a>))
                        }
                    </>
                    <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
                        <a
                            href="#contact"
                            className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        >
                            Get in Touch
                        </a>
                    </div>
                </div>
            </div>

        </Popover>
    )
}
