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
            <Image
              src="/icon/budgeting.svg"
              alt="Online"
              width={72}
              height={72}
            />
            <h3 className="text-[20px] md:text-[24px] font-[300] text-[#2D314D]">
              Simple Budgeting
            </h3>
            <p className="text-neutral-700">
              See exactly where your money goes each month. Receive
              notifications when youre close to hitting your limits.
            </p>
          </div>
          {/* Item */}
          <div className="flex items-center md:items-start text-center md:text-left flex-col gap-8">
            <Image
              src="/icon/onboarding.svg"
              alt="Online"
              width={72}
              height={72}
            />
            <h3 className="text-[20px] md:text-[24px] font-[300] text-[#2D314D]">
              Fast Onboarding
            </h3>
            <p className="text-neutral-700">
              We don’t do branches. Open your account in minutes online and
              start taking control of your finances right away.
            </p>
          </div>
          {/* Item */}
          <div className="flex items-center md:items-start text-center md:text-left flex-col gap-8">
            <Image src="/icon/api.svg" alt="Online" width={72} height={72} />
            <h3 className="text-[20px] md:text-[24px] font-[300] text-[#2D314D]">
              Open API
            </h3>
            <p className="text-neutral-700">
              Manage your savings, investments, pension, and much more from one
              account. Tracking your money has never been easier.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
