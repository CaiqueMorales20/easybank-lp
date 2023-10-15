import Image from 'next/image'

// Functional Component
export default function Articles() {
  // Rendering
  return (
    <section className="container py-32 flex flex-col gap-20">
      <h1 className="text-4xl text-primary">Latest Articles</h1>
      <div className="grid md:grid-cols-4 gap-10">
        {/* Item */}
        <div>
          <Image
            src="/img/articles/article_3.png"
            width={600}
            height={600}
            alt="Artigo 3"
          />
          <div className="flex flex-col gap-2 p-10 shadow-md">
            <h4 className="text-xs">By Claire Robinsan</h4>
            <h3 className="text-base">
              Receive money in any currency with no fees
            </h3>
            <p className="text-sm text-neutral-700 font-medium">
              The world is getting smaller and we're becoming more mobile. So
              why should you be forced to only receive money in a single...
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
          <div className="flex flex-col gap-2 p-10 shadow-md">
            <h4 className="text-xs">By Claire Robinsan</h4>
            <h3 className="text-base">
              Receive money in any currency with no fees
            </h3>
            <p className="text-sm text-neutral-700 font-medium">
              The world is getting smaller and we're becoming more mobile. So
              why should you be forced to only receive money in a single...
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
          <div className="flex flex-col gap-2 p-10 shadow-md">
            <h4 className="text-xs">By Claire Robinsan</h4>
            <h3 className="text-base">
              Receive money in any currency with no fees
            </h3>
            <p className="text-sm text-neutral-700 font-medium">
              The world is getting smaller and we're becoming more mobile. So
              why should you be forced to only receive money in a single...
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
          <div className="flex flex-col gap-2 p-10 shadow-md">
            <h4 className="text-xs">By Claire Robinsan</h4>
            <h3 className="text-base">
              Receive money in any currency with no fees
            </h3>
            <p className="text-sm text-neutral-700 font-medium">
              The world is getting smaller and we're becoming more mobile. So
              why should you be forced to only receive money in a single...
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
