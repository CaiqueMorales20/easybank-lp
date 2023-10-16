// Client side
'use client'

// Imported Components
import Image from 'next/image'
import { useState } from 'react'

// Functional Component
export default function Header() {
  // Variables
  const [menuOpened, setMenuOpened] = useState(false)

  // Rendering
  return (
    <header className="shadow-sm absolute z-40 w-full bg-white">
      <nav className="w-[90vw] max-w-[1880px] bg-white  z-20 mx-auto flex justify-between  md:grid md:grid-cols-3 h-24 items-center ">
        {/* Logo */}
        <Image
          src="/icon/logo.svg"
          alt="Easybank Logo"
          width={139}
          height={20}
        />
        {/* Menu */}
        <ul
          data-opened={menuOpened}
          className="absolute opacity-0 data-[opened=true]:opacity-100 duration-300 md:opacity-100 data-[opened=true]:flex bg-white z-[9999] w-[90vw] md:w-full shadow-md md:shadow-none gap-6 py-10 md:py-0 md:static flex flex-col top-28 md:flex-row items-center md:h-full justify-self-center md:gap-10"
        >
          <li className="h-full flex items-center hover:border-b-secondary border-b-[4px] border-b-transparent duration-300 group">
            <a
              href="#"
              className="text-neutral-700 font-medium group-hover:text-primary duration-300 h-full flex items-center"
            >
              Home
            </a>
          </li>
          <li className="h-full flex items-center hover:border-b-secondary border-b-[4px] border-b-transparent duration-300 group">
            <a
              href="#"
              className="text-neutral-700 font-medium group-hover:text-primary duration-300 h-full flex items-center"
            >
              About
            </a>
          </li>
          <li className="h-full flex items-center hover:border-b-secondary border-b-[4px] border-b-transparent duration-300 group">
            <a
              href="#"
              className="text-neutral-700 font-medium group-hover:text-primary duration-300 h-full flex items-center"
            >
              Contact
            </a>
          </li>
          <li className="h-full flex items-center hover:border-b-secondary border-b-[4px] border-b-transparent duration-300 group">
            <a
              href="#"
              className="text-neutral-700 font-medium group-hover:text-primary duration-300 h-full flex items-center"
            >
              Blog
            </a>
          </li>
          <li className="h-full flex items-center hover:border-b-secondary border-b-[4px] border-b-transparent duration-300 group">
            <a
              href="#"
              className="text-neutral-700 font-medium group-hover:text-primary duration-300 h-full flex items-center"
            >
              Careers
            </a>
          </li>
        </ul>
        {/* Cta */}
        <a href="#" className="hidden md:flex button justify-self-end">
          Request Invite
        </a>
        {/* Hamburguer Button */}
        <Image
          onClick={() => setMenuOpened(!menuOpened)}
          className="md:hidden"
          src={menuOpened ? '/icon/close.svg' : '/icon/hamburger.svg'}
          alt="Abrir menu"
          width={menuOpened ? 17 : 24}
          height={menuOpened ? 17 : 11}
        />
      </nav>
    </header>
  )
}
