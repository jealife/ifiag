'use client'
// import { Link } from "react-router-dom";
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
    Bars3CenterLeftIcon,
    ChartPieIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
    AcademicCapIcon,
    CogIcon,
    StarIcon
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import logo from '/public/images/logo-ifiag.png'
import Link from "next/link";
import Image from 'next/image'
// import { Link } from "react-scroll";

const ifiag= [
    { name: 'Technicien Spécialisé', description: 'Get a better understanding of your traffic', href: '#', icon: CogIcon },
    { name: 'Licences Pros', description: 'Speak directly to your customers', href: '#', icon: AcademicCapIcon },
    { name: 'Certifications', description: 'Connect with third-party tools', href: '#', icon: StarIcon },
]
const callsToAction = [
    { name: 'Témoignages', href: '#', icon: PlayCircleIcon },
    { name: 'Prendre Rendez-vous', href: '#', icon: PhoneIcon },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    // const "active" = "text-blue-700  text-sm font-semibold leading-6";
    // const "active" = "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 bg-gray-50";

    return (
        <div className="bg-slate-50/95 backdrop-blur-md w-full sticky start-1 top-0 shadow-sm">
            
            <nav className="mx-auto  sticky top-0 flex max-w-7xl items-center justify-between p-6 lg:px-8 " aria-label="Global">

                {/* Logo nav */}
                <div className="flex lg:flex-1">
                    <Link href="/" spy={true} smooth={true} offset={-85} duration={500} className="-m-1.5 p-1.5">
                        <span className="sr-only">TOTAC Academy</span>
                        <Image  src={logo} width={120} height={90} alt='logo IFIAG' />
                    </Link>

                </div>

                {/* menu mobile */}
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        {mobileMenuOpen===true ? <XMarkIcon className="h-6 w-6" aria-hidden="true" /> : <Bars3CenterLeftIcon className="h-6 w-6" aria-hidden="true" />}
                        
                        
                    </button>
                </div>

                <Popover.Group className="hidden lg:flex lg:gap-x-12">

                    <Popover className="relative">
                        <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                            IFIAG
                            <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                        </Popover.Button>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterhref="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leavehref="opacity-0 translate-y-1"
                        >

                            {/* Dropdown Formation */}

                            <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                                <div className="p-4">
                                    {ifiag.map((item) => (
                                        <div
                                            key={item.name}
                                            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-[#c5d0ffc5]"
                                        >
                                            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                <item.icon className="h-6 w-6 text-gray-600 group-hover:text-[#ff7607]" aria-hidden="true" />
                                            </div>
                                            <div className="flex-auto">
                                                <Link href={item.href} className="block font-semibold text-gray-900">
                                                    {item.name}
                                                    <span className="absolute inset-0" />
                                                </Link>
                                                {/* <p className="mt-1 text-gray-600">{item.description}</p> */}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                {/* <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                                    {callsToAction.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                                        >
                                            <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                                            {item.name}
                                        </Link>
                                    ))}
                                </div> */}
                            </Popover.Panel>

                            {/* Dropdown Formation End */}
                        </Transition>
                    </Popover>

                    <Link href={'#'}
                        className={({ isActive }) => (isActive ? "active" : "text-sm font-semibold leading-6 text-gray-900")}
                    >
                        NOS FORMATIONS
                    </Link>
                    <Link href={'#'}
                        className={({ isActive }) => (isActive ? "active" : "text-sm font-semibold leading-6 text-gray-900")}
                    >
                        ADMISIONS
                    </Link>

                    <Link href={'#'}
                        className={({ isActive }) => (isActive ? "active" : "text-sm font-semibold leading-6 text-gray-900")}
                    >
                        IFIAG LIFE
                    </Link>
                    <Link href={'#'}
                        className={({ isActive }) => (isActive ? "active" : "text-sm font-semibold leading-6 text-gray-900")}
                    >
                        Espace Entreprise
                    </Link>

                    <Link href={'/contact'}
                        className={({ isActive }) => (isActive ? "active" : "text-sm font-semibold leading-6 text-gray-900")}
                    >
                        Contact
                    </Link>

                </Popover.Group>


                {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Link href="#" className="text-sm font-semibold leading-6 text-gray-900">
                        Log in <span aria-hidden="true">&rarr;</span>
                    </Link>
                </div> */}
            </nav>
            <Dialog as="div" className="right-full" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="inset-0 z-10 " />
                <Dialog.Panel className="absolute lg:-right-full top-0 inset-y-0 right-0 z-10 w-full overflow-y-auto backdrop-blur-xl bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">IFIAG</span>
                            <img
                                className="h-8 w-auto"
                                src={logo}
                                alt=""
                            />
                        </Link>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6 flex flex-col ">
                                <Disclosure as="div" className="-mx-3 pt-3">
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 mt-5 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                                IFIAG
                                                <ChevronDownIcon
                                                    className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                                    aria-hidden="true"
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="mt-2 space-y-2">
                                                {[...ifiag].map((item) => (
                                                    <Disclosure.Button
                                                        key={item.name}
                                                        as="a"
                                                        href={item.href}
                                                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                    >
                                                        {item.name}
                                                    </Disclosure.Button>
                                                ))}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                                <Link
                                    href={'#'}
                                    className={({ isActive }) => (isActive ? "active" : "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50")}
                                >
                                    NOS FOMATIONS
                                </Link>
                                <Link
                                    href={'/'}
                                    className={({ isActive }) => (isActive ? "active" : "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50")}
                                >
                                    IFIAG LIFE
                                </Link>
                                <Link
                                    href={'/contact'}
                                    className={({ isActive }) => (isActive ? "active" : "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50")}
                                >
                                    CONTACT
                                </Link>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </div>
    )
}

