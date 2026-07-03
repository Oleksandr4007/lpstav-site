import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="bg-black pt-24 py-20">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-yellow-500 font-bold uppercase tracking-[4px]">
            Kvalitní stavební práce
          </p>

          <h1 className="text-5xl lg:text-7xl font-black text-white mt-6 leading-tight">
            S důrazem <br />
            <span className="text-yellow-500">na detail</span>
          </h1>

          <p className="text-gray-300 mt-6 text-lg max-w-xl">
            Fasády, zámkové dlažby, koupelny, terasy a kompletní stavební práce
            v Praze a okolí.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="tel:+420774898947"
              className="bg-yellow-500 text-black px-7 py-4 rounded-xl font-bold"
            >
              Zavolejte nám
            </a>

            <a
              href="#kontakt"
              className="border border-white/40 text-white px-7 py-4 rounded-xl font-bold"
            >
              Nezávazná poptávka
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <Image
            src="/images/logo.png"
            alt="LPSTAV S.R.O."
            width={620}
            height={620}
            priority
            className="w-full max-w-[520px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}