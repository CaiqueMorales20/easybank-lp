import Image from 'next/image'

// Functional Component
export default function Articles() {
  // Rendering
  return (
    <section className="container py-[88px] md:py-[80px] flex flex-col gap-[31px] md:gap-[40px]">
      <h1 className="text-[32px] md:text-[40px] md:leading-[64px] text-center md:text-left text-primary">
        Latest Articles
      </h1>
      <div className="grid md:grid-cols-4 gap-[24px] md:gap-[30px]">
        {/* Item */}
        <div>
          <Image
            src="/img/articles/article_1.png"
            width={600}
            height={600}
            className="w-full h-auto max-h-[200px]"
            alt="Artigo 3"
          />
          <div className="flex flex-col gap-2 p-[31px] md:p-[24px] shadow-md">
            <h4 className="text-[10px] leading-[18px] text-[#9597A5]">
              By Claire Robinsan
            </h4>
            <h3 className="text-[16px] leading-[20px]">
              Receive money in any currency with no fees
            </h3>
            <p className="text-[13px] leading-[18px] text-neutral-[#9597A5]">
              The world is getting smaller and were becoming more mobile. So why
              should you be forced to only receive money in a single...
            </p>
          </div>
        </div>
        {/* Item */}
        <div>
          <Image
            src="/img/articles/article_2.png"
            width={600}
            height={600}
            className="aspect-square h-[200px]"
            alt="Artigo 3"
          />
          <div className="flex flex-col gap-2 p-[31px] md:p-[24px] shadow-md">
            <h4 className="text-[10px] leading-[18px] text-[#9597A5]">
              By Wilson Hutton
            </h4>
            <h3 className="text-[16px] leading-[20px]">
              Treat yourself without worrying about money
            </h3>
            <p className="text-[13px] leading-[18px] text-neutral-[#9597A5]">
              Our simple budgeting feature allows you to separate out your
              spending and set realistic limits each month. That means you …
            </p>
          </div>
        </div>
        {/* Item */}
        <div>
          <Image
            src="/img/articles/article_3.png"
            width={600}
            height={600}
            className="aspect-square h-[200px]"
            alt="Artigo 3"
          />
          <div className="flex flex-col gap-2 p-[31px] md:p-[24px] shadow-md">
            <h4 className="text-[10px] leading-[18px] text-[#9597A5]">
              By Wilson Hutton
            </h4>
            <h3 className="text-[16px] leading-[20px]">
              Take your Easybank card wherever you go
            </h3>
            <p className="text-[13px] leading-[18px] text-neutral-[#9597A5]">
              We want you to enjoy your travels. This is why we don’t charge any
              fees on purchases while you’re abroad. We’ll even show you …
            </p>
          </div>
        </div>
        {/* Item */}
        <div>
          <Image
            src="/img/articles/article_4.png"
            width={600}
            height={600}
            className="aspect-square h-[200px]"
            alt="Artigo 3"
          />
          <div className="flex flex-col gap-2 p-[31px] md:p-[24px] shadow-md">
            <h4 className="text-[10px] leading-[18px] text-[#9597A5]">
              By Claire Robinsan
            </h4>
            <h3 className="text-[16px] leading-[20px]">
              Our invite-only Beta accounts are now live!
            </h3>
            <p className="text-[13px] leading-[18px] text-neutral-[#9597A5]">
              After a lot of hard work by the whole team, were excited to launch
              our closed beta. Its easy to request an invite through the site
              ...
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
