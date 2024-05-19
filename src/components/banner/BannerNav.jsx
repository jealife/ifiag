import React from 'react'
import { FiFacebook, FiMail, FiMapPin, FiPhone } from "react-icons/fi";

export default function BannerNav() {
    return (
        <div className='w-full px-3 py-2  bg-[#F17E3A] flex justify-between'>
            <div className="gap-2 hidden lg:flex text-xs ">
                <span className='flex gap-1 items-center '><FiPhone /><a href="'tel:+212 522-31649">(+212) 522-31649</a></span>
                <span class="inline-block h-full min-h-full w-px self-stretch bg-white "></span>
                <span className='flex gap-1 items-center '><FiMapPin /> Tour des Habous, 50 Avenue des FAR – 1er étage Face a l’hôtel Sheraton, Casablanca</span>
                <span class="inline-block h-full min-h-full w-px self-stretch bg-white "></span>
                <span className='flex gap-1 items-center pe-2'> <FiMail /><a href='mailto:digital@ifiag.com'>digital@ifiag.com</a></span>
            </div>
            <span className="flex items-center gap-1 justify-center">
                Follow Us: <FiFacebook />
            </span>
        </div>
    )
}
