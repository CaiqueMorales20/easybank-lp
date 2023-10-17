import Image from 'next/image'

// Functional Component
export default function Footer() {
  // Rendering
  return (
    <footer className="bg-primary py-[48px]">
      <div className="container">
        <Image
          src="/icon/logo-footer.svg"
          alt="Logo do footer"
          width={139}
          height={20}
        />
      </div>
    </footer>
  )
}
