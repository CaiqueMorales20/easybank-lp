// Imported Components
import Image from 'next/image'

// Functional Component
export default function Header() {
  // Rendering
  return (
    <header className="shadow-sm absolute z-40 w-full bg-white">
      <nav className="w-[90vw] max-w-[1880px] bg-white z-20 mx-auto flex justify-between  md:grid md:grid-cols-3 h-24 items-center ">
        {/* Logo */}
        <Image
          src="/icon/logo.svg"
          alt="Easybank Logo"
          width={139}
          height={20}
        />
        {/* Menu */}
        <ul className="hidden md:flex items-center h-full justify-self-center gap-10">
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
          className="md:hidden"
          src="/icon/hamburger.svg"
          alt="Abrir menu"
          width={24}
          height={11}
        />
      </nav>
    </header>
  )
}
