import React from 'react'
import { Disclosure, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
    { name: 'About', href: '/about' },
    { name: 'Social Media', href: '/socials' }
]

export const Header = () => {
    return (
        <Disclosure as="nav" className="sticky top-0 z-[9999] bg-black">
            {({ open }) => (
                <>
                <div>
                    <div className="h-[8vh] w-full grid grid-cols-2 gap-4 content-start px-8">
                        <div className="absolute inset-y-0 left-10 flex items-center">
                            <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-200 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white bg-opacity-50 hover:opacity-100 transition duration-300 ease-in-out">
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Open main menu</span>
                                {open ? (
                                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                ) : (
                                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                )}
                            </Disclosure.Button>
                        </div>
                    </div>
                </div>
                <Transition
                    show={open}
                    enter="transition duration-1000 ease-out"
                    enterFrom="transform scale-50 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-500 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-50 opacity-0"
                >
                    <Disclosure.Panel>
                        <div className="space-y-4 pb-3 pt-4 absolute w-full">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className="text-gray-700 bg-white hover:bg-gray-200 text-center block rounded-md py-7 sm:py-6 font-medium sm:w-1/2 mx-auto transition duration-300 ease-in-out"
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </Transition>
                </>
            )}
        </Disclosure>
    )
}
