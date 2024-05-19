import Link from 'next/link';
import React from 'react'
import { FiFacebook, FiMail, FiMapPin, FiPhone } from "react-icons/fi";

export default function BannerNav() {
    return (
        <div className='w-full px-3 py-2  bg-[#f57e27] flex justify-between text-slate-50'>
            <div className="gap-2 flex text-sm lg:text-xs items-center justify-center ">
                <div className=" ">
                    <Link className='flex gap-1 items-center' href="tel:+212 522-31649"> <FiPhone /> <span className='lg:block hidden'>(+212) 522-31649</span></Link>
                </div>
                <span class="inline-block h-full min-h-full w-px self-stretch bg-white "></span>
                <div className=" ">
                    <Link className='flex gap-1 items-center' href="https://maps.app.goo.gl/kbbNrvyAbY7PTtrc6"> <FiMapPin />  <span className='lg:block hidden'>Tour des Habous, 50 Avenue des FAR – 1er étage Face a l’hôtel Sheraton, Casablanca</span></Link>
                </div>
                <span class="inline-block h-full min-h-full w-px self-stretch bg-white "></span>
                <div className=" ">
                    <Link className='flex gap-1 items-center' href="mailto:digital@ifiag.com"> <FiMail /><span className='lg:block hidden'>digital@ifiag.com</span></Link>
                </div>
            </div>
            <span className="flex items-center gap-1 justify-center">
                Follow Us: <FiFacebook />
            </span>
        </div>
    )
}
