import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: "url('/images/hero.jpg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/30"></div>

      <div className="relative z-10 container mx-auto px-6 pt-28 pb-16">
        <div className="max-w-4xl text-white" data-aos="fade-up">

          <Image
            src="/images/logo.png"
            alt="LPSTAV S.R.O."
            width={260}
            height={90}
            priority
            className="mb-8 bg-white/90 rounded-xl p-3"
          />

          <p className="text-yellow-400 uppercase tracking-[5px] font-bold mb-4">
            Stavební společnost
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Kompletní stavební práce
            <span className="block text-yellow-400">
              v Praze a okolí
            </span>
          </h1>

          <p className="text-xl text-gray-200 max-w-2xl mb-8">
            Rekonstrukce, fasády, obklady, dlažby, koupelny a zámková dlažba.
            Spolehlivá realizace od prvního návrhu až po dokončení.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 max-w-2xl mb-10 text-lg">
            <p>✔ Rekonstrukce bytů a domů</p>
            <p>✔ Fasády a zateplení</p>
            <p>✔ Obklady a dlažby</p>
            <p>✔ Zámková dlažba</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+420774898947"
              className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold text-center transition"
            >
              📞 Zavolat
            </a>

            <a
              href="#kontakt"
              className="bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-xl font-bold text-center transition"
            >
              Nezávazná poptávka
            </a>
          </div>

        </div>

        <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 text-white">
          {[
            ["250+", "Realizací"],
            ["15+", "Let zkušeností"],
            ["500+", "Klientů"],
            ["100%", "Přístup"],
          ].map(([number, label]) => (
            <div
              key={label}
              data-aos="zoom-in"
              className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20"
            >
              <div className="text-4xl font-extrabold text-yellow-400">
                {number}
              </div>
              <div className="text-gray-200 mt-2">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}