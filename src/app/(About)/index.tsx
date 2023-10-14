import Image from 'next/image'

// Functional Component
export default function About() {
  // Rendering
  return (
    <section className="bg-neutral-600 pt-32 pb-14">
      <div className="container flex flex-col gap-20">
        <div className="flex flex-col gap-10">
          <h1 className="text-4xl">Why choose Easybank?</h1>
          <p className="text-base">
            We leverage Open Banking to turn your bank account into financial
            hub.
            <br /> Control your finances like never before
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-10">
          {/* Item */}
          <div className="flex flex-col gap-8">
            <Image src="/icon/online.svg" alt="Online" width={72} height={72} />
            <h3 className="text-2xl font-medium">Online Banking</h3>
            <p className="text-neutral-700">
              Our modern web and mobile applications allow you to keep track of
              your finnaces wherever you are in the world.
            </p>
          </div>
          {/* Item */}
          <div className="flex flex-col gap-8">
            <Image src="/icon/online.svg" alt="Online" width={72} height={72} />
            <h3 className="text-2xl font-medium">Online Banking</h3>
            <p className="text-neutral-700">
              Our modern web and mobile applications allow you to keep track of
              your finnaces wherever you are in the world.
            </p>
          </div>
          {/* Item */}
          <div className="flex flex-col gap-8">
            <Image src="/icon/online.svg" alt="Online" width={72} height={72} />
            <h3 className="text-2xl font-medium">Online Banking</h3>
            <p className="text-neutral-700">
              Our modern web and mobile applications allow you to keep track of
              your finnaces wherever you are in the world.
            </p>
          </div>
          {/* Item */}
          <div className="flex flex-col gap-8">
            <Image src="/icon/online.svg" alt="Online" width={72} height={72} />
            <h3 className="text-2xl font-medium">Online Banking</h3>
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
