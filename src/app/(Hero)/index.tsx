import Image from 'next/image'

// Functional Component
export default function Hero() {
  // Rendering
  return (
    <section className="h-screen bg-[url('/img/hero/hero-bg.svg')] bg-no-repeat bg-[70rem_-10rem] bg-[#fafbfb] relative">
      <div className="container flex flex-col-reverse md:flex-row h-full md:gap-40 items-center bg-red">
        {/* Text */}
        <div className="flex items-center text-center md:items-start md:text-left flex-col gap-7">
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
        <div className="w-full h-full">
          <Image
            src="/img/hero/hero-img.png"
            className="md:w-[140%] h-auto md:translate-y-[-1rem] md:translate-x-[20rem]"
            width={767}
            height={939}
            alt="Celulares"
          />
        </div>
      </div>
    </section>
  )
}
