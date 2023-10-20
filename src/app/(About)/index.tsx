import Image from 'next/image'

// Functional Component
export default function About() {
  // Rendering
  return (
    <section className="bg-neutral-600 py-[64px] md:py-[96px]">
      <div className="container flex flex-col gap-20">
        <div className="flex flex-col gap-[14px] md:gap-[16px]">
          <h1 className="text-center md:text-left mx-auto md:ml-0 max-w-xs md:max-w-full text-[32px] md:text-[40px] leading-normal md:leading-[64px] text-primary">
            Why choose Easybank?
          </h1>
          <p className="text-[15px] md:text-[18px] text-center md:text-left ">
            We leverage Open Banking to turn your bank account into financial
            hub.
            <br /> Control your finances like never before
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-10">
          {/* Item */}
          <div className="flex items-center md:items-start text-center md:text-left flex-col gap-8">
            <Image src="/icon/online.svg" alt="Online" width={72} height={72} />
            <h3 className="text-[20px] md:text-[24px] font-[300] text-[#2D314D]">
              Online Banking
            </h3>
            <p className="text-neutral-700">
              Our modern web and mobile applications allow you to keep track of
              your finnaces wherever you are in the world.
            </p>
          </div>
          {/* Item */}
          <div className="flex items-center md:items-start text-center md:text-left flex-col gap-8">
            <Image src="/icon/online.svg" alt="Online" width={72} height={72} />
            <h3 className="text-[20px] md:text-[24px] font-[300] text-[#2D314D]">
              Online Banking
            </h3>
            <p className="text-neutral-700">
              Our modern web and mobile applications allow you to keep track of
              your finnaces wherever you are in the world.
            </p>
          </div>
          {/* Item */}
          <div className="flex items-center md:items-start text-center md:text-left flex-col gap-8">
            <Image src="/icon/online.svg" alt="Online" width={72} height={72} />
            <h3 className="text-[20px] md:text-[24px] font-[300] text-[#2D314D]">
              Online Banking
            </h3>
            <p className="text-neutral-700">
              Our modern web and mobile applications allow you to keep track of
              your finnaces wherever you are in the world.
            </p>
          </div>
          {/* Item */}
          <div className="flex items-center md:items-start text-center md:text-left flex-col gap-8">
            <Image src="/icon/online.svg" alt="Online" width={72} height={72} />
            <h3 className="text-[20px] md:text-[24px] font-[300] text-[#2D314D]">
              Online Banking
            </h3>
            <p className="text-neutral-700">
              Our modern web and mobile applications allow you to keep track of
              your finnaces wherever you are in the world.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
