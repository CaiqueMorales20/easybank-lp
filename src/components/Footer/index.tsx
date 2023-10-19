import Image from 'next/image'

// Functional Component
export default function Footer() {
  // Rendering
  return (
    <footer className="bg-primary py-[48px]">
      <div className="container flex gap-[131px]">
        {/* Logo */}
        <div className="flex flex-col justify-between">
          <Image
            src="/icon/logo-footer.svg"
            alt="Logo do footer"
            width={139}
            height={20}
          />
          <div className="flex gap-[13.33px]">
            <Image
              src="/icon/facebook.svg"
              alt="Open in facebook"
              width={20}
              height={20}
            />
            <Image
              src="/icon/youtube.svg"
              alt="Open in Youtube"
              width={20}
              height={20}
            />
            <Image
              src="/icon/twitter.svg"
              alt="Open in Twitter"
              width={16.26}
              height={20}
            />
            <Image
              src="/icon/pinterest.svg"
              alt="Open in Pinterest"
              width={20}
              height={20}
            />
            <Image
              src="/icon/instagram.svg"
              alt="Open in Instagram"
              width={20}
              height={20}
            />
          </div>
        </div>
        {/* Links */}
        <div className="grid grid-cols-2 gap-[30px]">
          <ul className="flex flex-col gap-2">
            <li className="text-[15px] leading-[26px] md:w-[160px] text-white">
              About Us
            </li>
            <li className="text-[15px] leading-[26px] md:w-[160px] text-white">
              Blog
            </li>
            <li className="text-[15px] leading-[26px] md:w-[160px] text-white">
              Contact
            </li>
          </ul>
          <ul className="flex flex-col gap-2">
            <li className="text-[15px] leading-[26px] md:w-[160px] text-white">
              Careers
            </li>
            <li className="text-[15px] leading-[26px] md:w-[160px] text-white">
              Support
            </li>
            <li className="text-[15px] leading-[26px] md:w-[160px] text-white">
              Privacy Policy
            </li>
          </ul>
        </div>
        {/* Button */}
        <div className="ml-auto flex flex-col gap-[24px] items-end">
          <a href="" className="button">
            Request invite
          </a>
          <p className="text-white text-[15px] leading-[26px] opacity-50">
            © Easybank. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
