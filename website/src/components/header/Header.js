
import { Popover } from '@headlessui/react'


export default function Header() {
    return (
        <Popover className="w-full bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <a href="#">
                            <span className="sr-only">StackWizards</span>
                            <img
                                className="h-8 w-auto sm:h-10"
                                src="/images/logo_with_text.png"
                                alt=""
                            />
                        </a>
                    </div>

                    <a href="#services" className="text-lg font-medium text-gray-500 hover:text-gray-900">
                        Services
                    </a>

                    <a href="#whoarewe" className="text-lg font-medium text-gray-500 hover:text-gray-900">
                        Who Are We
                    </a>
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
