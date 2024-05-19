import Image from 'next/image'
import React from 'react'
import logo from '/public/images/logo-ifiag.png'
import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const technicien = [

]

export default function Footer() {
  return (
    <div className='bg-footer-bg lg:p-10 p-4 bg-center bg-fixed text-slate-50 bg-no-repeat bg-cover  bg-slate-900 flex flex-col '>
      <div className="flex flex-col items-center justify-center lg:p-14 p-10 rounded-xl bg-slate-300/10   mx-auto w-full">
        <div className="flex flex-col w-full max-w-5xl">

          <div className='grid lg:grid-cols-3 sm:grid-cols-1 lg:gap-10  gap-14 w-full '>
            <div className='flex flex-col gap-6'>
              <div className='flex flex-col gap-4'>
                <Link href={'/'}>
                  <Image src={logo} width={180} height={90} alt='logo IFIAG' />
                </Link>
                <p className='text-slate-400 text-sm text-balance'>IFIAG est l’école privée leader de la formation professionnelle supérieure au Maroc depuis 1986.</p>
              </div>
              <div className="flex flex-col gap-4">
                <h3>Folow Us :</h3>
                <div className="flex gap-2">
                  <span className='p-3 bg-slate-700/50 rounded-full'> 
                    <Link className='text-xl h-6 w-6 ' href={''} ><FaFacebookF /> </Link>
                  </span>
                  <span  className='p-3 bg-slate-700/50 rounded-full'>
                    <Link className='text-xl h-6 w-6 ' href={''} ><FaInstagram /></Link>
                  </span>
                  <span  className='p-3 bg-slate-700/50 rounded-full'>
                    <Link className='text-xl h-6 w-6 ' href={''} ><FaLinkedinIn /></Link>
                  </span>
                  <span  className='p-3 bg-slate-700/50 rounded-full'>
                    <Link className='text-xl h-6 w-6 ' href={''} ><FaYoutube /></Link>
                  </span>
                </div>
              </div>
            </div>

            <div className=' flex flex-col gap-6 '>

              <div className="title">
                <h3 className='text-2xl text-balance'>Diplôme Technicien Spécialisé</h3>
                <span class="inline-block h-1  w-24 self-stretch bg-[#F17E3A] "></span>
              </div>

              <ul className='flex flex-col gap-6' >
                <li className='list-disc text-slate-400 text-sm'>
                  <Link href={''}>Développement Informatique</Link>
                </li>
                <li className='list-disc text-slate-400 text-sm'>
                  <Link href={''}>Marketing, Communication & Digital</Link>
                </li>
                <li className='list-disc text-slate-400 text-sm'>
                  <Link href={''}>Gestion des Entreprises</Link>
                </li>
                <li className='list-disc text-slate-400 text-sm'>
                  <Link href={''}>Finance et Comptabilité</Link>
                </li>
                <li className='list-disc text-slate-400 text-sm'>
                  <Link href={''}>Commerce International et Logistique</Link></li>
                <li className='list-disc text-slate-400 text-sm'>
                  <Link href={''}>Réseaux, Systèmes & Sécurité</Link>
                </li>
              </ul>
            </div>

            <div className=' flex flex-col gap-6 '>
              <div className="title ">
                <h3 className='text-2xl text-balance'>Licences <br /> Professionnelles</h3>
                <span class="inline-block h-1  w-24 self-stretch bg-[#F17E3A] "></span>
              </div>
              <ul className='flex flex-col gap-6' >
                <li className='list-disc text-slate-400 text-sm'>
                  <Link href={''}>Développement Web Mobile & Digital</Link>
                </li>
                <li className='list-disc text-slate-400 text-sm'>
                  <Link href={''}>Management et Entrepreneuriat</Link>
                </li>
                <li className='list-disc text-slate-400 text-sm'>
                  <Link href={''}>Finance , Audit & Contrôle de Gestion</Link>
                </li>
                <li className='list-disc text-slate-400 text-sm'>
                  <Link href={''}>Logistique & Transport International</Link>
                </li>
              </ul>
            </div>

          </div>
          <hr
            class="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
          <div className="flex items-center justify-between gap-2 lg:flex-row flex-col-reverse text-sm  text-center text-slate-400">
            <div className=" text-xs">
              Copyright &copy; 2024 <Link className='text-[#F17E3A]' href={'/'}>IFIAG</Link> All Rights Reserved.
            </div>
            <div className="flex gap-3 text-sm">
              <Link href={'/'}>Privacy Policy</Link>
              <Link href={'/'}>Terms & Condition</Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
