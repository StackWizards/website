
import { Popover, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Fragment } from 'react'


export default function Contact() {
    return (
        <div id="contact" className="bg-white">
            <Popover as="header" className="relative z-10">
                <div className="bg-gray-50">

                </div>

                <Transition
                    as={Fragment}
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top transform p-2 transition lg:hidden">
                        <div className="overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="flex items-center justify-between px-5 pt-4">
                                <div>
                                    <img
                                        className="h-8 w-auto"
                                        src="https://tailwindui.com/img/logos/mark.svg?color=purple&shade=600"
                                        alt=""
                                    />
                                </div>
                                <div className="-mr-2">
                                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-grape-500">
                                        <span className="sr-only">Close menu</span>
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                    </Popover.Button>
                                </div>
                            </div>

                        </div>
                    </Popover.Panel>
                </Transition>
            </Popover>

            <main>


                <div className="relative bg-white">
                    <div className="lg:absolute lg:inset-0">
                        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                            <img
                                className="h-56 grayscale w-full object-cover lg:absolute lg:h-full"
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="relative py-16 px-4 sm:py-24 sm:px-6 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8 lg:py-32">
                        <div className="lg:pr-8">
                            <div className="mx-auto max-w-md sm:max-w-lg lg:mx-0">
                                <h2 className="text-3xl font-bold tracking-tight font-title sm:text-4xl">Let's work together!</h2>
                                <p className="mt-4 text-lg text-gray-500 sm:mt-3">
                                    We’d love to hear from you! <br />Email us at: <a href='mailto:hello@stackwizards.com'><b className='text-xl text-primaryBg font-title'>hello@stackwizards.com ✉️</b></a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </main>

        </div>
    )
}
