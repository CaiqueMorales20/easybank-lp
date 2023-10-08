import Image from 'next/image'

// Functional Component
export default function Hero() {
  // Rendering
  return (
    <section className="h-screen bg-r bg-neutral-600 relative">
      <div className="container flex h-full gap-40 items-center bg-red">
        {/* Text */}
        <div className="flex flex-col gap-7 ">
          <h1 className="text-6xl leading-[1.2] text-primary">
            Next generation digital banking
          </h1>
          <p className="text-neutral-700 max-w-[30rem] text-xl">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <a href="#" className="button">
            Request invite
          </a>
        </div>
        {/* Image */}
        <div className="w-full h-full relative">
          <Image
            src="/img/hero/hero-img.png"
            className="w-full h-auto absolute top-10 r-[10vw]"
            width={767}
            height={939}
            alt="Celulares"
          />
        </div>
      </div>
    </section>
  )
}
