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
            src="/img/articles/article_3.png"
            width={600}
            height={600}
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
            src="/img/articles/article_3.png"
            width={600}
            height={600}
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
            src="/img/articles/article_3.png"
            width={600}
            height={600}
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
            src="/img/articles/article_3.png"
            width={600}
            height={600}
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
      </div>
    </section>
  )
}
