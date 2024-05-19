'use client'
import Image from 'next/image'
import React from 'react'
import logo from '/public/images/logo-ifiag.png'
import Link from 'next/link'
import { TiThMenu } from "react-icons/ti";

export default function Navigation() {
    return (
        <div className='bg-slate-50/95 backdrop-blur-md w-full sticky start-1 top-0'>
            <nav className=' py-4 px-6 max-w-7xl mx-auto flex gap-2 items-center justify-between ' >
                <div className="logo">
                    <Link href={'/'}>
                        <Image  src={logo} width={120} height={90} alt='logo IFIAG' />
                    </Link>
                </div>
                <div className="lg:flex hidden items-center gap-6 text-slate-900 uppercase">
                    <Link href={'/'}>IFIAG</Link>
                    <Link href={'/'}>Nos formation</Link>
                    <Link href={'/'}>Admission</Link>
                    <Link href={'/'}>IFIAG Life</Link>
                    <Link href={'/'}>Espace Entreprise</Link>
                    <Link href={'/'}>Contact</Link>
                </div>
                <div className="lg:hidden block text-[#F17E3A]  text-2xl">
                <TiThMenu />
                </div>
            </nav>
        </div>
    )
}
